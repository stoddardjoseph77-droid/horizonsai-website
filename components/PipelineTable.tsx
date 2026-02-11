const deals = [
  {
    property: "Sunrise Office Park",
    market: "Tampa, FL",
    type: "Office",
    score: 87,
    source: "SEC 10-D",
    status: "Special Servicing",
  },
  {
    property: "Harbor View Retail",
    market: "Miami, FL",
    type: "Retail",
    score: 74,
    source: "County NOD",
    status: "Pre-Foreclosure",
  },
  {
    property: "Lakewood Apartments",
    market: "Atlanta, GA",
    type: "Multifamily",
    score: 91,
    source: "8-K Filing",
    status: "Default Notice",
  },
  {
    property: "Crossroads Plaza",
    market: "Dallas, TX",
    type: "Mixed-Use",
    score: 68,
    source: "CRE News",
    status: "Loan Maturity",
  },
  {
    property: "Pine Ridge Industrial",
    market: "Phoenix, AZ",
    type: "Industrial",
    score: 79,
    source: "mREIT Report",
    status: "Impaired Loan",
  },
];

function getScoreColor(score: number) {
  if (score >= 85) return "bg-red-500/20 text-red-400";
  if (score >= 70) return "bg-orange-500/20 text-orange-400";
  return "bg-yellow-500/20 text-yellow-400";
}

export default function PipelineTable() {
  return (
    <div className="glass-card glow-border rounded-3xl overflow-hidden">
      {/* Table header bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
        <h3 className="font-heading font-semibold text-text-on-dark">
          Deal Pipeline
        </h3>
        <span className="text-white/40 text-sm">5 Active Deals</span>
      </div>

      {/* Scrollable table wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-white/[0.03]">
              <th className="px-4 py-3 text-left text-white/40 text-xs font-semibold uppercase tracking-wider">
                Property
              </th>
              <th className="px-4 py-3 text-left text-white/40 text-xs font-semibold uppercase tracking-wider">
                Market
              </th>
              <th className="px-4 py-3 text-left text-white/40 text-xs font-semibold uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 text-left text-white/40 text-xs font-semibold uppercase tracking-wider">
                Score
              </th>
              <th className="px-4 py-3 text-left text-white/40 text-xs font-semibold uppercase tracking-wider">
                Source
              </th>
              <th className="px-4 py-3 text-left text-white/40 text-xs font-semibold uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal, i) => (
              <tr
                key={deal.property}
                className={`border-b border-white/[0.04] ${
                  i % 2 === 1 ? "bg-white/[0.02]" : ""
                }`}
              >
                <td className="px-4 py-3.5 text-sm text-text-on-dark font-medium">
                  {deal.property}
                </td>
                <td className="px-4 py-3.5 text-sm text-white/60">
                  {deal.market}
                </td>
                <td className="px-4 py-3.5 text-sm text-white/60">
                  {deal.type}
                </td>
                <td className="px-4 py-3.5 text-sm">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${getScoreColor(
                      deal.score
                    )}`}
                  >
                    {deal.score}
                  </span>
                </td>
                <td className="px-4 py-3.5 text-sm text-white/60">
                  {deal.source}
                </td>
                <td className="px-4 py-3.5 text-sm text-white/60">
                  {deal.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
