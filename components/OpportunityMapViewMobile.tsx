"use client";

import Image from "next/image";

const metrics = [
  { label: "Loan Balance", value: "$18.2M" },
  { label: "Occupancy", value: "58%" },
  { label: "DSCR", value: "0.72x" },
  { label: "LTV", value: "112%" },
];

const analysisText =
  "REO asset, 58% occupied. Largest tenant Regus expiring Dec 2026. Dallas office vacancy at 24.8%. Appraised below loan balance - strong value-add candidate at discount to replacement cost.";

export default function OpportunityMapViewMobile() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.07] bg-surface-raised/80">
      {/* Building image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src="/building-option4.jpg"
          alt="Apex Centre Tower"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/30 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface/90 backdrop-blur-sm border border-white/[0.1]">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-[#E8EAED] text-[11px] font-medium">Apex Centre Tower</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface/90 backdrop-blur-sm border border-white/[0.1]">
            <span className="text-muted/50 text-[10px]">Class A Office</span>
          </div>
        </div>
      </div>

      {/* Score + Summary */}
      <div className="p-4 border-b border-white/[0.05]">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-accent/30 flex items-center justify-center shrink-0">
            <span className="text-accent font-bold text-sm font-mono">87</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-gold bg-gold/10 px-2 py-0.5 rounded font-medium text-[10px]">CMBS</span>
              <span className="bg-accent/15 text-accent text-[9px] px-1.5 py-0.5 rounded font-bold uppercase">High Confidence</span>
            </div>
            <p className="text-muted text-[11px] leading-relaxed">{analysisText}</p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="p-4 border-b border-white/[0.05]">
        <p className="text-muted/40 text-[9px] uppercase tracking-widest mb-3">Key Metrics</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-muted/40 text-[9px] uppercase tracking-wider">{m.label}</div>
              <div className="text-[#E8EAED] font-semibold font-mono text-sm">{m.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts */}
      <div className="p-4 border-b border-white/[0.05]">
        <div className="flex items-center justify-between mb-3">
          <p className="text-muted/40 text-[9px] uppercase tracking-widest">Contacts</p>
          <span className="bg-accent/15 text-accent text-[8px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Skip-Traced</span>
        </div>
        <div className="space-y-2.5">
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
              <span className="text-gold text-[9px] font-semibold font-mono">DH</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[#E8EAED] text-[11px] font-medium">David Hartman <span className="text-muted/40 text-[9px] font-normal">· Borrower</span></div>
              <div className="text-muted/60 text-[10px] font-mono truncate">(214) 555-0182 · d.hartman@apexcre.com</div>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
              <span className="text-gold text-[9px] font-semibold font-mono">SC</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[#E8EAED] text-[11px] font-medium">Sarah Chen <span className="text-muted/40 text-[9px] font-normal">· Special Servicer</span></div>
              <div className="text-muted/60 text-[10px] font-mono truncate">(305) 555-1700 · schen@servicer-example.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Status + Address */}
      <div className="p-4 flex items-center justify-between">
        <span className="text-muted/40 font-mono text-[10px]">4700 Ross Ave, Dallas, TX</span>
        <span className="px-2.5 py-1 rounded-lg text-[10px] font-medium border bg-accent/15 text-accent border-accent/20">Reviewing</span>
      </div>
    </div>
  );
}
