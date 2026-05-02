"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const metrics = [
  { label: "Loan Balance", value: "$18.2M" },
  { label: "Orig. Balance", value: "$22.5M" },
  { label: "Occupancy", value: "58%" },
  { label: "DSCR", value: "0.72x" },
  { label: "Maturity", value: "Aug 2026" },
  { label: "LTV", value: "112%" },
  { label: "NOI (Fiscal)", value: "$1.4M" },
  { label: "Interest Rate", value: "4.85%" },
  { label: "Appraisal", value: "$13.8M" },
  { label: "Paydown", value: "19%" },
];

const propertyDetails = [
  { label: "Property Type", value: "Office" },
  { label: "Size", value: "186,000 SF" },
  { label: "Year Built", value: "1984" },
];

const loanInfo = [
  { label: "Trust / Deal", value: "Morgan Stanley BAoA Merrill Lynch Trust 2016–C28" },
  { label: "Borrower", value: "Apex Centre Holdings LLC" },
  { label: "Remittance ID", value: "18" },
];

const contacts = [
  {
    role: "Borrower Principal",
    name: "David Hartman",
    title: "Manager · Apex Centre Holdings LLC",
    phone: "(214) 555-0182",
    email: "d.hartman@apexcre.com",
  },
  {
    role: "Special Servicer",
    name: "Sarah Chen",
    title: "Asset Manager · CMBS Workout Group",
    phone: "(305) 555-1700",
    email: "schen@servicer-example.com",
  },
];

const distressInfo = [
  { label: "Distress Type", value: "REO" },
  { label: "Months Delinquent", value: "4 Mo" },
  { label: "Resolution Strategy", value: "REO" },
  { label: "Payment Status", value: "—" },
  { label: "REO Date", value: "Jan 6, 2026" },
];

const tenantInfo = [
  { name: "Regus (IWG)", sf: "32,400 SF", pct: "17%", expiry: "Dec 2026", risk: "high" },
  { name: "Keller Williams", sf: "18,600 SF", pct: "10%", expiry: "Mar 2028", risk: "low" },
  { name: "Vacant", sf: "78,120 SF", pct: "42%", expiry: "—", risk: "critical" },
];

const submarketData = [
  { label: "Vacancy", value: "24.8%" },
  { label: "Asking Rent", value: "$31.81/SF" },
  { label: "Net Absorption", value: "−590K SF" },
  { label: "Cap Rate vs Nat'l", value: "−1.6x" },
];

const timeline = [
  { date: "Mar 5, 2025", event: "Delinquent" },
  { date: "May 22, 2025", event: "SS Transfer" },
  { date: "Sep 1, 2025", event: "Pass-Through" },
  { date: "Jan 6, 2026", event: "Foreclosure" },
];

const analysisText =
  "REO asset, 58% occupied. Largest tenant Regus expiring Dec 2026. Dallas office vacancy at 24.8%. Appraised below loan balance — strong value-add candidate at discount to replacement cost.";


function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function AnimatedScore({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 28;
  const offset = circumference - (score / 100) * circumference;
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    let start: number | null = null;
    let raf: number;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.round(easeOutCubic(progress) * score));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, score]);

  return (
    <motion.div
      ref={ref}
      className="relative w-16 h-16 shrink-0"
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.1 }}
    >
      <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
        <motion.circle
          cx="32" cy="32" r="28" fill="none" stroke="#10B981" strokeWidth="3"
          strokeDasharray={circumference} strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-accent font-bold text-lg font-mono leading-none">{count}</span>
        <span className="text-muted/50 text-[7px] uppercase tracking-wider">Score</span>
      </div>
    </motion.div>
  );
}

export default function OpportunityMapView() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.07] bg-surface-raised/80 backdrop-blur-xl shadow-2xl shadow-black/40">
      {/* Top bar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/[0.05] text-xs">
        <span className="text-muted/50">Back</span>
        <span className="text-muted/30 mx-1">/</span>
        <span className="text-gold bg-gold/10 px-2 py-0.5 rounded font-medium text-[10px]">CMBS</span>
        <span className="text-[#E8EAED] font-medium">Apex Centre Tower</span>
        <span className="text-muted/40 font-mono text-[11px] ml-auto">4700 Ross Ave, Dallas, TX 75201</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]" style={{ minHeight: "520px" }}>
        {/* Left panel — deal details */}
        <div className="border-r border-white/[0.05] overflow-y-auto" style={{ maxHeight: "520px" }}>
          {/* AI Intelligence */}
          <div className="p-4 border-b border-white/[0.05]">
            <p className="text-muted/40 text-[9px] uppercase tracking-widest mb-3">AI Intelligence</p>
            <div className="flex items-start gap-3">
              <AnimatedScore score={87} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
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
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.3 + i * 0.04 }}
                >
                  <div className="text-muted/40 text-[9px] uppercase tracking-wider">{m.label}</div>
                  <div className="text-[#E8EAED] font-semibold font-mono text-sm">{m.value}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Property Details */}
          <div className="p-4 border-b border-white/[0.05]">
            <p className="text-muted/40 text-[9px] uppercase tracking-widest mb-3">Property Details</p>
            <div className="space-y-1.5">
              {propertyDetails.map((d) => (
                <div key={d.label} className="flex items-center justify-between">
                  <span className="text-muted/40 text-[10px]">{d.label}</span>
                  <span className="text-[#E8EAED] text-[11px] font-medium">{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Loan Info */}
          <div className="p-4 border-b border-white/[0.05]">
            <p className="text-muted/40 text-[9px] uppercase tracking-widest mb-3">Loan Info</p>
            <div className="space-y-1.5">
              {loanInfo.map((d) => (
                <div key={d.label} className="flex items-start justify-between gap-3">
                  <span className="text-muted/40 text-[10px] shrink-0">{d.label}</span>
                  <span className="text-[#E8EAED] text-[11px] font-medium text-right">{d.value}</span>
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
            <div className="space-y-3">
              {contacts.map((c, i) => (
                <motion.div
                  key={c.name}
                  className="flex items-start gap-2.5"
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.4 + i * 0.05 }}
                >
                  <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <span className="text-gold text-[9px] font-semibold font-mono">
                      {c.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[#E8EAED] text-[11px] font-medium">{c.name}</span>
                      <span className="text-muted/30 text-[9px]">·</span>
                      <span className="text-muted/50 text-[9px] uppercase tracking-wider">{c.role}</span>
                    </div>
                    <div className="text-muted/50 text-[10px] mb-1">{c.title}</div>
                    <div className="flex items-center gap-2 text-[10px] font-mono">
                      <span className="text-muted/60">{c.phone}</span>
                      <span className="text-muted/20">·</span>
                      <span className="text-muted/60 truncate">{c.email}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Distress / Servicer */}
          <div className="p-4 border-b border-white/[0.05]">
            <p className="text-muted/40 text-[9px] uppercase tracking-widest mb-3">Distress / Servicer</p>
            <div className="space-y-1.5">
              {distressInfo.map((d) => (
                <div key={d.label} className="flex items-center justify-between">
                  <span className="text-muted/40 text-[10px]">{d.label}</span>
                  <span className={`text-[11px] font-medium ${d.label === "Distress Type" ? "text-severity-critical" : "text-[#E8EAED]"}`}>{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="p-4 border-b border-white/[0.05]">
            <p className="text-muted/40 text-[9px] uppercase tracking-widest mb-3">Timeline</p>
            <div className="relative ml-1">
              {/* Vertical connector line */}
              <div className="absolute left-[3px] top-1 bottom-1 w-px bg-white/[0.06]" />
              <div className="space-y-3">
                {timeline.map((t, i) => (
                  <motion.div
                    key={t.event}
                    className="flex items-center gap-3 relative"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.5 + i * 0.06 }}
                  >
                    <span className={`w-[7px] h-[7px] rounded-full shrink-0 relative z-10 ${i === timeline.length - 1 ? "bg-severity-critical" : "bg-accent"}`} />
                    <span className="text-[#E8EAED] text-[11px] font-medium flex-1">{t.event}</span>
                    <span className="text-muted/40 text-[10px] font-mono shrink-0">{t.date}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Tenant Summary */}
          <div className="p-4 border-b border-white/[0.05]">
            <p className="text-muted/40 text-[9px] uppercase tracking-widest mb-3">Key Tenants</p>
            <div className="space-y-2">
              {tenantInfo.map((t, i) => (
                <motion.div
                  key={t.name}
                  className="flex items-center gap-2 text-[10px]"
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.4 + i * 0.05 }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${t.risk === "critical" ? "bg-severity-critical" : t.risk === "high" ? "bg-gold" : "bg-accent"}`} />
                  <span className="text-[#E8EAED] font-medium flex-1 truncate">{t.name}</span>
                  <span className="text-muted/40 font-mono">{t.sf}</span>
                  <span className="text-muted/30 font-mono">{t.pct}</span>
                  <span className="text-muted/40 font-mono">{t.expiry}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Submarket Context */}
          <div className="p-4 border-b border-white/[0.05]">
            <p className="text-muted/40 text-[9px] uppercase tracking-widest mb-2">Submarket Context</p>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#E8EAED] text-[12px] font-medium">Dallas, TX</span>
              <span className="text-severity-critical text-[9px] font-medium px-1.5 py-0.5 rounded bg-severity-critical/10 border border-severity-critical/20">Declining</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {submarketData.map((s) => (
                <div key={s.label}>
                  <div className="text-muted/40 text-[9px] uppercase tracking-wider">{s.label}</div>
                  <div className="text-[#E8EAED] font-semibold font-mono text-sm">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="p-4">
            <p className="text-muted/40 text-[9px] uppercase tracking-widest mb-3">Status</p>
            <div className="flex gap-2">
              {["Reviewing", "Pursuing", "Passed"].map((s, i) => (
                <motion.span
                  key={s}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-medium border ${
                    i === 0 ? "bg-accent/15 text-accent border-accent/20" : "bg-white/[0.03] text-muted/50 border-white/[0.05]"
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 150, damping: 18, delay: 0.7 + i * 0.05 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel — property image with drone-style animation */}
        <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: [1, 1.08, 1.04, 1.1, 1],
              x: ["0%", "2%", "-1%", "1%", "0%"],
              y: ["0%", "-2%", "1%", "-1%", "0%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/building-option4.jpg"
              alt="Apex Centre Tower — modern office building"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </motion.div>
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/30 to-transparent" />

          {/* Property marker label */}
          <div className="absolute top-3 left-3 z-10">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface/90 backdrop-blur-sm border border-white/[0.1] shadow-lg">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-[#E8EAED] text-[11px] font-medium">Apex Centre Tower</span>
              <span className="text-muted/40 text-[10px] font-mono ml-1">87</span>
            </div>
          </div>
          {/* Bottom info bar */}
          <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface/90 backdrop-blur-sm border border-white/[0.1] shadow-lg">
              <span className="text-muted/50 text-[10px]">4700 Ross Ave, Dallas, TX 75201</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface/90 backdrop-blur-sm border border-white/[0.1] shadow-lg">
              <span className="text-muted/50 text-[10px]">Class A Office</span>
              <span className="text-muted/30 mx-0.5">·</span>
              <span className="text-muted/50 text-[10px]">186,000 SF</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
