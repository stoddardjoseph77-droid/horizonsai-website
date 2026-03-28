const deals = [
  { property: "Sunrise Office Park", market: "Tampa, FL", type: "Office", score: 87, source: "SEC 10-D", status: "Special Servicing" },
  { property: "Harbor View Retail", market: "Miami, FL", type: "Retail", score: 74, source: "County NOD", status: "Pre-Foreclosure" },
  { property: "Lakewood Apartments", market: "Atlanta, GA", type: "Multifamily", score: 91, source: "8-K Filing", status: "Default Notice" },
  { property: "Crossroads Plaza", market: "Dallas, TX", type: "Mixed-Use", score: 68, source: "CRE News", status: "Loan Maturity" },
  { property: "Pine Ridge Industrial", market: "Phoenix, AZ", type: "Industrial", score: 79, source: "mREIT Report", status: "Impaired Loan" },
];

function getScoreColor(score: number) {
  if (score >= 85) return "bg-red-500/15 text-red-400";
  if (score >= 70) return "bg-orange-500/15 text-orange-400";
  return "bg-yellow-500/15 text-yellow-400";
}

export default function PipelineTable() {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
        <h3 className="font-semibold text-zinc-100">Deal Pipeline</h3>
        <span className="text-zinc-500 text-sm font-mono">5 Active</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.04]">
              {["Property", "Market", "Type", "Score", "Source", "Status"].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-zinc-600 text-xs font-medium uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {deals.map((deal) => (
              <tr key={deal.property} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                <td className="px-4 py-3 text-sm text-zinc-200 font-medium">{deal.property}</td>
                <td className="px-4 py-3 text-sm text-zinc-500">{deal.market}</td>
                <td className="px-4 py-3 text-sm text-zinc-500">{deal.type}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold font-mono ${getScoreColor(deal.score)}`}>
                    {deal.score}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-zinc-500">{deal.source}</td>
                <td className="px-4 py-3 text-sm text-zinc-500">{deal.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
