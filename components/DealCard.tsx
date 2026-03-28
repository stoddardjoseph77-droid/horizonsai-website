export default function DealCard() {
  return (
    <div className="glass rounded-2xl overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-500" />

      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-start gap-x-3 gap-y-1">
          <div>
            <h3 className="font-semibold text-xl tracking-tight text-zinc-100">
              Sunrise Office Park
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-zinc-500 text-sm">Tampa, FL</span>
              <span className="bg-accent/10 text-accent text-xs px-3 py-0.5 rounded-full font-medium">
                SEC 10-D Filing
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: "Asset Class", value: "Office" },
            { label: "Loan Balance", value: "$12.4M" },
            { label: "Occupancy", value: "62%" },
            { label: "Lead Time", value: "~2 months" },
          ].map((m) => (
            <div key={m.label}>
              <p className="text-zinc-600 text-xs uppercase tracking-wider">
                {m.label}
              </p>
              <p className="text-zinc-100 font-semibold text-lg font-mono">
                {m.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex justify-between">
            <span className="text-zinc-500 text-sm">Distress Score</span>
            <span className="font-bold text-red-400 font-mono">87/100</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/[0.06] mt-2">
            <div className="w-[87%] h-full rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500" />
          </div>
        </div>

        <p className="mt-4 text-zinc-500 text-sm">
          Special Servicing — 90+ days delinquent
        </p>

        <div className="mt-4 bg-white/[0.02] rounded-xl border border-white/[0.04] p-4">
          <p className="text-accent text-xs font-medium uppercase tracking-wider mb-2">
            AI Analysis
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Transferred to special servicer 14 days ago. Borrower missed 3
            consecutive payments. Property is 62% occupied. Strong candidate for
            value-add acquisition at discount.
          </p>
        </div>
      </div>
    </div>
  );
}
