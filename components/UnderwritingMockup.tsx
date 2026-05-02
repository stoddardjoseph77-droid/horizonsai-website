const metrics = [
  { label: "Purchase Price", value: "$8.2M" },
  { label: "Loan Balance", value: "$12.4M" },
  { label: "Current Occupancy", value: "62%" },
  { label: "Market Cap Rate", value: "7.2%" },
  { label: "Stabilized NOI", value: "$890K" },
  { label: "Projected Value", value: "$12.4M" },
] as const;

const riskFactors = [
  "Tenant rollover risk - 3 leases expire in 2026",
  "Deferred maintenance estimated at $400K",
] as const;

export default function UnderwritingMockup() {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="bg-white/[0.03] px-5 py-3 border-b border-white/[0.04] flex items-center justify-between">
        <span className="font-medium text-zinc-200 text-sm">Automated Underwriting</span>
        <span className="text-zinc-600 text-sm">Sunrise Office Park</span>
      </div>

      <div className="flex border-b border-white/[0.04]">
        <span className="bg-white/[0.04] text-zinc-100 px-4 py-2 text-xs font-medium border-b border-accent">Summary</span>
        <span className="text-zinc-600 px-4 py-2 text-xs font-medium">Comps</span>
        <span className="text-zinc-600 px-4 py-2 text-xs font-medium">Risk</span>
      </div>

      <div className="p-5 md:p-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-zinc-600 text-xs uppercase tracking-wider">{m.label}</div>
              <div className="text-zinc-100 font-semibold text-base font-mono">{m.value}</div>
            </div>
          ))}
          <div>
            <div className="text-zinc-600 text-xs uppercase tracking-wider">Discount to Value</div>
            <div className="flex items-center gap-2">
              <span className="text-accent font-semibold text-base font-mono">34%</span>
              <span className="bg-accent/15 text-accent text-xs px-2 py-0.5 rounded-full font-bold">STRONG BUY</span>
            </div>
          </div>
        </div>

        <div className="my-5 border-t border-white/[0.04]" />

        <div className="text-zinc-600 text-xs uppercase tracking-wider mb-3">Risk Factors</div>
        <div className="space-y-2">
          {riskFactors.map((risk, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 shrink-0" />
              <span className="text-zinc-400 text-sm">{risk}</span>
            </div>
          ))}
        </div>

        <div className="my-5 border-t border-white/[0.04]" />

        <div className="flex items-center justify-between">
          <span className="text-zinc-600 text-xs uppercase tracking-wider">AI Verdict</span>
          <div className="flex items-center">
            <span className="font-bold text-lg text-accent font-mono">82/100</span>
            <span className="bg-accent/15 text-accent text-xs px-3 py-1 rounded-full font-bold ml-3">PURSUE</span>
          </div>
        </div>
        <div className="mt-3 h-1.5 rounded-full bg-white/[0.04] w-full">
          <div className="w-[82%] h-full rounded-full bg-gradient-to-r from-accent-dim to-accent" />
        </div>
      </div>
    </div>
  );
}
