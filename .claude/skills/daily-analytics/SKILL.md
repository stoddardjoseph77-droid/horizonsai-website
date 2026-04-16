---
name: daily-analytics
description: Pull yesterday's PostHog analytics, generate the daily report, and append narrative insights comparing it to prior days. Use when the user asks for the analytics digest, daily report, or wants to know how the site performed.
---

# daily-analytics

Run this when the user asks: "pull analytics", "run the daily", "what happened yesterday", "show me trends", or invokes `/daily-analytics` directly.

## Steps

1. **Pull the data.** Run `npm run analytics:pull` from the project root. This queries PostHog via the personal API key in `.env.local` and writes:
   - `analytics/daily/YYYY-MM-DD.md` (yesterday's report)
   - `analytics/trends.csv` (appended/replaced row for yesterday)

   If the user specifies a date ("pull analytics for 2026-04-15"), pass it as an argument: `node scripts/pull-analytics.mjs 2026-04-15`.

2. **Read the report.** Open the newly-written `analytics/daily/YYYY-MM-DD.md` and read the full contents.

3. **Read the trends CSV.** Open `analytics/trends.csv` to get day-over-day comparison context. Compare yesterday to:
   - The day before (DoD change)
   - The same day last week (WoW change, if ≥7 rows exist)
   - The rolling 7-day average (if ≥7 rows exist)

4. **Append insights to the daily MD file.** Under the `## Insights` heading at the bottom of the daily file, append bullets covering:
   - **Traffic trajectory:** is it growing, flat, or dropping? vs yesterday and vs last week
   - **Conversion signal:** did anyone book? if not, where did the funnel die? (e.g. "5 CTA clicks but 0 reached /book-a-call — CTA-to-page dropoff is 100%, investigate broken link or JS error")
   - **Source quality:** which referrers drove users who clicked CTAs vs which drove pure bounces
   - **Mobile vs desktop:** conversion delta between the two
   - **Attention bottleneck:** where scroll depth drops off steeply (e.g. "60% hit 25% depth, only 10% hit 75% — users bail mid-page")
   - **CTA placement learning:** which location (navbar, hero, cta_banner, footer) actually converts
   - **FAQ signal:** which questions get opened most — these are real objections worth addressing in copy/cold-email
   - **Anything anomalous:** a spike, a zero where there shouldn't be one, a new referrer, etc.

5. **Report back to the user in chat.** Give a ≤100-word executive summary:
   - Headline number (usually unique visitors + bookings)
   - Biggest insight of the day
   - One concrete suggested action (e.g. "mobile hero CTA is dead — consider sticky mobile CTA" or "LinkedIn is driving 80% of traffic but 0 bookings — content isn't qualifying them")

## Rules

- **Do NOT invent numbers.** Every number in the insights must come from the report or trends CSV. If a metric is 0 or missing, say so.
- **Do NOT append to a day that already has insights** — check for existing dated bullets under `## Insights`. If the skill is re-run for the same date, update/refine rather than duplicate.
- **Early-days caveat:** if unique visitors < 20 on the day, explicitly note "low volume, trends not yet meaningful" — don't over-interpret noise.
- Ignore events from `$browser = HeadlessChrome` or where `$is_bot = true` — these are from testing.
- If the script fails (bad key, network error), surface the error verbatim — don't fake data.

## Related

- Raw script: `scripts/pull-analytics.mjs`
- Daily reports: `analytics/daily/`
- Trends CSV: `analytics/trends.csv`
- PostHog UI: https://us.posthog.com/project/384624