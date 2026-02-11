const metrics = [
  { label: "Purchase Price", value: "$8.2M" },
  { label: "Loan Balance", value: "$12.4M" },
  { label: "Current Occupancy", value: "62%" },
  { label: "Market Cap Rate", value: "7.2%" },
  { label: "Stabilized NOI", value: "$890K" },
  { label: "Projected Value", value: "$12.4M" },
] as const;

const riskFactors = [
  "Tenant rollover risk — 3 leases expire in 2026",
  "Deferred maintenance estimated at $400K",
] as const;

export default function UnderwritingMockup() {
  return (
    <div className="glass-card glow-border rounded-3xl overflow-hidden">
      {/* Spreadsheet chrome */}
      <div className="bg-white/[0.04] px-5 py-3 border-b border-white/[0.06] flex items-center justify-between">
        <span className="font-heading font-semibold text-text-on-dark text-sm">
          Automated Underwriting
        </span>
        <span className="text-white/40 text-sm">Sunrise Office Park</span>
      </div>

      {/* Tab bar */}
      <div className="flex border-b border-white/[0.06]">
        <span className="bg-white/[0.06] text-text-on-dark px-4 py-2 text-xs font-medium border-b-2 border-brand-primary">
          Summary
        </span>
        <span className="text-white/30 px-4 py-2 text-xs font-medium hover:text-white/50">
          Comps
        </span>
        <span className="text-white/30 px-4 py-2 text-xs font-medium hover:text-white/50">
          Risk Analysis
        </span>
      </div>

      {/* Spreadsheet body */}
      <div className="p-5 md:p-6">
        {/* Key metrics grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          {metrics.map((m, i) => (
            <div key={i}>
              <div className="text-white/40 text-xs uppercase tracking-wider">
                {m.label}
              </div>
              <div className="text-text-on-dark font-heading font-semibold text-base">
                {m.value}
              </div>
            </div>
          ))}

          {/* Discount to Value — special styling */}
          <div>
            <div className="text-white/40 text-xs uppercase tracking-wider">
              Discount to Value
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 font-heading font-semibold text-base">
                34%
              </span>
              <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full font-bold">
                STRONG BUY
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-white/[0.06]" />

        {/* Risk Factors */}
        <div className="text-white/40 text-xs uppercase tracking-wider mb-3">
          Risk Factors
        </div>
        <div className="space-y-2">
          {riskFactors.map((risk, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
              <span className="text-white/60 text-sm">{risk}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-white/[0.06]" />

        {/* AI Verdict */}
        <div className="flex items-center justify-between">
          <span className="text-white/40 text-xs uppercase tracking-wider">
            AI Verdict
          </span>
          <div className="flex items-center">
            <span className="font-heading font-bold text-lg text-green-400">
              82/100
            </span>
            <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full font-bold ml-3">
              PURSUE
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3 h-2.5 rounded-full bg-white/[0.06] w-full">
          <div className="w-[82%] h-full rounded-full bg-gradient-to-r from-brand-primary to-green-400" />
        </div>
      </div>
    </div>
  );
}
