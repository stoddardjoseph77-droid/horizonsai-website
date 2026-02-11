interface TrustBarProps {
  heading?: string;
}

const PARTNERS = [
  "Claude",
  "OpenAI",
  "n8n",
  "Zapier",
  "Google Sheets",
  "Gmail",
  "Excel",
  "HubSpot",
  "Airtable",
  "Follow Up Boss",
];

export default function TrustBar({
  heading = "Trusted by Founders Worldwide",
}: TrustBarProps) {
  return (
    <section className="py-12 bg-light-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <p className="text-center text-text-muted text-sm font-heading font-semibold uppercase tracking-wide mb-8">
            {heading}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {PARTNERS.map((partner) => (
            <span
              key={partner}
              className="text-lg font-heading font-semibold text-text-secondary opacity-50 hover:opacity-100 transition-opacity duration-200 select-none cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
