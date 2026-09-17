import { SITE, CRE_FAQ } from "@/lib/constants";

const BASE = "https://www.horizonsai.co";

/** Sitewide identity. Emitted once from the root layout. */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE}/#organization`,
        name: "HorizonsAI",
        url: BASE,
        logo: { "@type": "ImageObject", url: `${BASE}/icon.png`, width: 512, height: 512 },
        image: `${BASE}/opengraph-image.png`,
        email: SITE.email,
        telephone: SITE.phone,
        description:
          "HorizonsAI sources off-market commercial real estate opportunities for acquisition teams, scoring every deal against the buyer's own acquisition criteria.",
        areaServed: { "@type": "Country", name: "United States" },
        founder: { "@type": "Person", name: "Joey Stoddard" },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        url: BASE,
        name: "HorizonsAI",
        publisher: { "@id": `${BASE}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Service + FAQ for the commercial page. */
export function CommercialSchema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${BASE}/#service`,
        name: "Off-Market CRE Deal Sourcing",
        serviceType: "Commercial real estate deal origination",
        provider: { "@id": `${BASE}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
        description:
          "Monitoring of public filings, court and county records, loan servicing data and market channels to surface off-market commercial real estate opportunities before they are listed, each scored against the client's acquisition criteria.",
        audience: {
          "@type": "Audience",
          audienceType:
            "Commercial real estate acquisition teams, syndicators, private equity, owner-operators, family offices and REITs",
        },
        url: BASE,
      },
      {
        "@type": "FAQPage",
        "@id": `${BASE}/#faq`,
        mainEntity: CRE_FAQ.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          {
            "@type": "ListItem",
            position: 2,
            name: "Off-Market CRE Sourcing",
            item: BASE,
          },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Article + breadcrumb for the signals page.
 *  It carries the site's only substantial body of explanatory content and
 *  had no structured data at all, which left it the least legible page to
 *  both Google and the AI crawlers already quoting the brand. */
export function SignalsSchema() {
  const url = `${BASE}/how-we-find-deals`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "Where off-market commercial real estate signals come from",
        description:
          "The public records we read before a commercial property is listed: ownership and succession, pressure on title, the debt, and how the asset is running.",
        mainEntityOfPage: url,
        author: { "@id": `${BASE}/#organization` },
        publisher: { "@id": `${BASE}/#organization` },
        about: [
          { "@type": "Thing", name: "Off-market commercial real estate" },
          { "@type": "Thing", name: "Public records research" },
          { "@type": "Thing", name: "Commercial real estate acquisitions" },
        ],
        isPartOf: { "@id": `${BASE}/#website` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "How we find deals", item: url },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
