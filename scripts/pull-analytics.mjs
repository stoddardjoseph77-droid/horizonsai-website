#!/usr/bin/env node
/**
 * Pull yesterday's PostHog analytics → write markdown report + trends CSV row.
 *
 * Usage:
 *   node scripts/pull-analytics.mjs              # yesterday
 *   node scripts/pull-analytics.mjs 2026-04-15   # specific date (UTC)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function loadEnv() {
  const envPath = path.join(ROOT, ".env.local");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}
loadEnv();

const KEY = process.env.POSTHOG_PERSONAL_API_KEY;
const PROJECT_ID = process.env.POSTHOG_PROJECT_ID;
const HOST = process.env.POSTHOG_API_HOST || "https://us.posthog.com";

if (!KEY || !PROJECT_ID) {
  console.error("Missing POSTHOG_PERSONAL_API_KEY or POSTHOG_PROJECT_ID in .env.local");
  process.exit(1);
}

async function hogql(query) {
  const res = await fetch(`${HOST}/api/projects/${PROJECT_ID}/query/`, {
    method: "POST",
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query: { kind: "HogQLQuery", query } }),
  });
  if (!res.ok) throw new Error(`HogQL ${res.status}: ${await res.text()}`);
  const data = await res.json();
  if (data.error) throw new Error(`HogQL: ${data.error}`);
  return { columns: data.columns, rows: data.results };
}

function targetDate() {
  const arg = process.argv[2];
  if (arg && /^\d{4}-\d{2}-\d{2}$/.test(arg)) return arg;
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

function nextDay(iso) {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
}

function fmtRows({ columns, rows }) {
  if (!rows || rows.length === 0) return "_(no data)_\n";
  const header = `| ${columns.join(" | ")} |`;
  const sep = `| ${columns.map(() => "---").join(" | ")} |`;
  const body = rows.map((r) => `| ${r.map((v) => (v === null || v === undefined ? "—" : String(v))).join(" | ")} |`).join("\n");
  return `${header}\n${sep}\n${body}\n`;
}

async function main() {
  const date = targetDate();
  const start = `${date} 00:00:00`;
  const end = `${nextDay(date)} 00:00:00`;
  const baseRange = `timestamp >= toDateTime('${start}') AND timestamp < toDateTime('${end}')`;
  const botMatch = `(
    properties.$browser IN ('HeadlessChrome', 'PhantomJS', 'PhantomJS-prerender')
    OR properties.$lib IN ('posthog-node', 'posthog-python', 'curl')
    OR distinct_id LIKE 'claude-%'
    OR event IN ('claude_e2e_verification', 'e2e_final_verification')
  )`;
  const range = `${baseRange} AND NOT ${botMatch}`;

  const queries = {
    overview: `
      SELECT
        count(DISTINCT $session_id) AS sessions,
        count(DISTINCT distinct_id) AS unique_visitors,
        countIf(event = '$pageview') AS pageviews,
        countIf(event = '$rageclick') AS rageclicks
      FROM events WHERE ${range}
    `,
    bots_excluded: `
      SELECT
        count() AS filtered_events,
        count(DISTINCT distinct_id) AS filtered_visitors
      FROM events
      WHERE ${baseRange} AND ${botMatch}
    `,
    top_pages: `
      SELECT properties.$pathname AS path, count() AS views, count(DISTINCT distinct_id) AS visitors
      FROM events WHERE event = '$pageview' AND ${range}
      GROUP BY path ORDER BY views DESC LIMIT 15
    `,
    referrers: `
      SELECT properties.$referring_domain AS source, count() AS visits, count(DISTINCT distinct_id) AS visitors
      FROM events WHERE event = '$pageview' AND ${range}
      GROUP BY source ORDER BY visits DESC LIMIT 15
    `,
    utm_sources: `
      SELECT properties.utm_source AS utm_source, properties.utm_campaign AS utm_campaign, count(DISTINCT distinct_id) AS visitors
      FROM events WHERE event = '$pageview' AND properties.utm_source IS NOT NULL AND ${range}
      GROUP BY utm_source, utm_campaign ORDER BY visitors DESC LIMIT 15
    `,
    devices: `
      SELECT properties.$device_type AS device, count(DISTINCT distinct_id) AS visitors, countIf(event = '$pageview') AS pageviews
      FROM events WHERE ${range}
      GROUP BY device ORDER BY visitors DESC
    `,
    countries: `
      SELECT properties.$geoip_country_name AS country, count(DISTINCT distinct_id) AS visitors
      FROM events WHERE event = '$pageview' AND ${range}
      GROUP BY country ORDER BY visitors DESC LIMIT 10
    `,
    event_counts: `
      SELECT event, count() AS n, count(DISTINCT distinct_id) AS users
      FROM events WHERE ${range}
      GROUP BY event ORDER BY n DESC LIMIT 25
    `,
    cta_clicks: `
      SELECT properties.location AS location, count() AS clicks, count(DISTINCT distinct_id) AS unique_clickers
      FROM events WHERE event = 'cta_clicked' AND ${range}
      GROUP BY location ORDER BY clicks DESC
    `,
    section_views: `
      SELECT properties.section AS section, count(DISTINCT distinct_id) AS users
      FROM events WHERE event = 'section_viewed' AND ${range}
      GROUP BY section ORDER BY users DESC
    `,
    scroll_depth: `
      SELECT properties.depth AS depth, count(DISTINCT distinct_id) AS users
      FROM events WHERE event = 'scroll_depth_reached' AND ${range}
      GROUP BY depth ORDER BY depth
    `,
    faq_opens: `
      SELECT properties.question AS question, count() AS opens, count(DISTINCT distinct_id) AS askers
      FROM events WHERE event = 'faq_toggled' AND properties.open = true AND ${range}
      GROUP BY question ORDER BY opens DESC
    `,
    platform_tabs: `
      SELECT properties.tab AS tab, count() AS clicks, count(DISTINCT distinct_id) AS unique_users
      FROM events WHERE event = 'platform_tab_clicked' AND ${range}
      GROUP BY tab ORDER BY clicks DESC
    `,
    external_links: `
      SELECT properties.label AS label, properties.location AS location, count() AS clicks
      FROM events WHERE event = 'external_link_clicked' AND ${range}
      GROUP BY label, location ORDER BY clicks DESC
    `,
    conversions: `
      SELECT
        countIf(event = 'calendly_loaded') AS calendly_loaded,
        count(DISTINCT if(event = 'calendly_loaded', distinct_id, NULL)) AS calendly_reached_users,
        countIf(event = 'calendly_booking_completed') AS bookings_completed,
        count(DISTINCT if(event = 'calendly_booking_completed', distinct_id, NULL)) AS unique_bookers
      FROM events WHERE ${range}
    `,
    calendly_funnel: `
      SELECT
        count(DISTINCT if(event = 'calendly_loaded', distinct_id, NULL)) AS loaded,
        count(DISTINCT if(event = 'calendly_link_ready', distinct_id, NULL)) AS link_ready,
        count(DISTINCT if(event = 'calendly_booker_viewed', distinct_id, NULL)) AS booker_viewed,
        count(DISTINCT if(event = 'calendly_event_type_selected', distinct_id, NULL)) AS event_type_selected,
        count(DISTINCT if(event = 'calendly_slot_selected', distinct_id, NULL)) AS slot_selected,
        count(DISTINCT if(event = 'calendly_booking_completed', distinct_id, NULL)) AS booking_completed,
        count(DISTINCT if(event IN ('calendly_booking_failed', 'calendly_link_failed'), distinct_id, NULL)) AS errored
      FROM events WHERE ${range}
    `,
    calendly_events_breakdown: `
      SELECT event, count() AS n, count(DISTINCT distinct_id) AS users
      FROM events WHERE event LIKE 'calendly_%' AND ${range}
      GROUP BY event ORDER BY n DESC
    `,
    funnel_step_users: `
      SELECT
        count(DISTINCT if(event = '$pageview' AND properties.$pathname LIKE '/commercial%', distinct_id, NULL)) AS step1_commercial,
        count(DISTINCT if(event = '$pageview' AND properties.$pathname LIKE '/real-estate%', distinct_id, NULL)) AS step1_real_estate,
        count(DISTINCT if(event = 'cta_clicked', distinct_id, NULL)) AS step2_cta_clicked,
        count(DISTINCT if(event = '$pageview' AND properties.$pathname = '/book-a-call', distinct_id, NULL)) AS step3_book_a_call,
        count(DISTINCT if(event = 'calendly_loaded', distinct_id, NULL)) AS step4_calendly_loaded,
        count(DISTINCT if(event = 'calendly_booking_completed', distinct_id, NULL)) AS step5_booked
      FROM events WHERE ${range}
    `,
  };

  const data = {};
  for (const [name, q] of Object.entries(queries)) {
    try {
      data[name] = await hogql(q.trim());
    } catch (err) {
      data[name] = { error: String(err) };
      console.error(`[${name}]`, err.message);
    }
  }

  // ── Build markdown report
  const ov = data.overview.rows?.[0] || [];
  const cv = data.conversions.rows?.[0] || [];
  const fn = data.funnel_step_users.rows?.[0] || [];
  const bx = data.bots_excluded.rows?.[0] || [];
  const md = `# Analytics — ${date}

_Generated ${new Date().toISOString()} · Source: PostHog project ${PROJECT_ID} · Bots and test traffic excluded._

## Snapshot (real traffic only)

| Metric | Value |
| --- | --- |
| Sessions | ${ov[0] ?? 0} |
| Unique visitors | ${ov[1] ?? 0} |
| Pageviews | ${ov[2] ?? 0} |
| Rageclicks | ${ov[3] ?? 0} |
| Calendly loads | ${cv[0] ?? 0} |
| Unique users reaching Calendly | ${cv[1] ?? 0} |
| **Bookings completed** | **${cv[2] ?? 0}** |
| _(excluded) Bot / test events_ | _${bx[0] ?? 0} events, ${bx[1] ?? 0} visitors_ |

## Conversion funnel (unique users)

| Step | Users | % of prev |
| --- | --- | --- |
| Landed on /commercial | ${fn[0] ?? 0} | — |
| Landed on /real-estate | ${fn[1] ?? 0} | — |
| Clicked a CTA | ${fn[2] ?? 0} | ${pct(fn[2], (fn[0]||0) + (fn[1]||0))} |
| Reached /book-a-call | ${fn[3] ?? 0} | ${pct(fn[3], fn[2])} |
| Calendly loaded | ${fn[4] ?? 0} | ${pct(fn[4], fn[3])} |
| Booking completed | ${fn[5] ?? 0} | ${pct(fn[5], fn[4])} |

## Cal.com sub-funnel (inside the iframe)

${(() => {
  const cf = data.calendly_funnel.rows?.[0] || [];
  return `| Stage | Users | % of prev |
| --- | --- | --- |
| Page + iframe loaded | ${cf[0] ?? 0} | — |
| Cal.com link ready | ${cf[1] ?? 0} | ${pct(cf[1], cf[0])} |
| Saw booker (calendar rendered) | ${cf[2] ?? 0} | ${pct(cf[2], cf[1])} |
| Picked event type | ${cf[3] ?? 0} | ${pct(cf[3], cf[2])} |
| Picked a time slot | ${cf[4] ?? 0} | ${pct(cf[4], cf[3])} |
| **Booking completed** | **${cf[5] ?? 0}** | ${pct(cf[5], cf[4])} |
| (errored: link or booking failure) | ${cf[6] ?? 0} | — |
`;
})()}

## Cal.com events breakdown

${fmtRows(data.calendly_events_breakdown)}

## CTA performance by location

${fmtRows(data.cta_clicks)}

## Top pages

${fmtRows(data.top_pages)}

## Traffic sources (referring domain)

${fmtRows(data.referrers)}

## UTM-tagged campaigns

${fmtRows(data.utm_sources)}

## Device breakdown

${fmtRows(data.devices)}

## Country breakdown

${fmtRows(data.countries)}

## Section engagement (unique users who saw each section)

${fmtRows(data.section_views)}

## Scroll depth (unique users)

${fmtRows(data.scroll_depth)}

## FAQ questions opened

${fmtRows(data.faq_opens)}

## Platform tabs clicked

${fmtRows(data.platform_tabs)}

## External links clicked

${fmtRows(data.external_links)}

## All event counts (real traffic)

${fmtRows(data.event_counts)}

---

## Insights
<!-- Claude: append observations when reviewing. Keep dated bullets. -->

`;

  const outDir = path.join(ROOT, "analytics", "daily");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${date}.md`);
  fs.writeFileSync(outPath, md);

  // ── Append trends CSV row
  const trendsPath = path.join(ROOT, "analytics", "trends.csv");
  const headerCols = [
    "date", "sessions", "unique_visitors", "pageviews",
    "cta_clicks", "calendly_loaded", "bookings",
    "funnel_commercial", "funnel_real_estate", "funnel_cta", "funnel_book_page", "funnel_calendly", "funnel_booked",
  ];
  const totalCtaClicks = (data.cta_clicks.rows || []).reduce((s, r) => s + Number(r[1] || 0), 0);
  const row = [
    date,
    ov[0] ?? 0, ov[1] ?? 0, ov[2] ?? 0,
    totalCtaClicks, cv[0] ?? 0, cv[2] ?? 0,
    fn[0] ?? 0, fn[1] ?? 0, fn[2] ?? 0, fn[3] ?? 0, fn[4] ?? 0, fn[5] ?? 0,
  ];
  if (!fs.existsSync(trendsPath)) fs.writeFileSync(trendsPath, headerCols.join(",") + "\n");
  // Replace existing row for same date, else append
  const existing = fs.readFileSync(trendsPath, "utf8").split("\n").filter(Boolean);
  const filtered = existing.filter((ln) => !ln.startsWith(`${date},`));
  filtered.push(row.join(","));
  fs.writeFileSync(trendsPath, filtered.join("\n") + "\n");

  console.log(`✓ Wrote ${path.relative(ROOT, outPath)}`);
  console.log(`✓ Updated ${path.relative(ROOT, trendsPath)}`);
}

function pct(num, denom) {
  if (!denom || Number(denom) === 0) return "—";
  return `${((Number(num) / Number(denom)) * 100).toFixed(1)}%`;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
