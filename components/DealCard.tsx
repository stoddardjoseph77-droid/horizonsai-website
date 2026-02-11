export default function DealCard() {
  return (
    <div className="glass-card glow-border p-6 md:p-8 rounded-3xl overflow-hidden relative">
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-500 rounded-l-3xl" />

      {/* Header */}
      <div className="flex flex-wrap items-start gap-x-3 gap-y-1">
        <div>
          <h3 className="font-heading font-bold text-xl text-text-on-dark">
            Sunrise Office Park
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-white/50 text-sm">Tampa, FL</span>
            <span className="bg-brand-primary/15 text-brand-primary text-xs px-3 py-1 rounded-full font-medium">
              SEC 10-D Filing
            </span>
          </div>
        </div>
      </div>

      {/* Key metrics grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
        <div>
          <p className="text-white/40 text-xs uppercase tracking-wider">
            Asset Class
          </p>
          <p className="text-text-on-dark font-heading font-semibold text-lg">
            Office
          </p>
        </div>
        <div>
          <p className="text-white/40 text-xs uppercase tracking-wider">
            Loan Balance
          </p>
          <p className="text-text-on-dark font-heading font-semibold text-lg">
            $12.4M
          </p>
        </div>
        <div>
          <p className="text-white/40 text-xs uppercase tracking-wider">
            Occupancy
          </p>
          <p className="text-text-on-dark font-heading font-semibold text-lg">
            62%
          </p>
        </div>
        <div>
          <p className="text-white/40 text-xs uppercase tracking-wider">
            Lead Time
          </p>
          <p className="text-text-on-dark font-heading font-semibold text-lg">
            ~2 months
          </p>
        </div>
      </div>

      {/* Distress Score bar */}
      <div className="mt-6">
        <div className="flex justify-between">
          <span className="text-white/50 text-sm">Distress Score</span>
          <span className="font-heading font-bold text-red-400">87/100</span>
        </div>
        <div className="h-2 rounded-full bg-white/[0.06] mt-2">
          <div className="w-[87%] h-full rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500" />
        </div>
      </div>

      {/* Status line */}
      <p className="mt-4 text-white/60 text-sm">
        Special Servicing — 90+ days delinquent
      </p>

      {/* AI Commentary */}
      <div className="mt-4 bg-white/[0.03] rounded-xl border border-white/[0.06] p-4">
        <p className="text-brand-primary text-xs font-semibold uppercase tracking-wider mb-2">
          AI Analysis
        </p>
        <p className="text-white/60 text-sm leading-relaxed">
          Transferred to special servicer 14 days ago. Borrower missed 3
          consecutive payments. Property is 62% occupied. Strong candidate for
          value-add acquisition at discount.
        </p>
      </div>
    </div>
  );
}
