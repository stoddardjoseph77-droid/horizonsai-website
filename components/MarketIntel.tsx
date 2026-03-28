"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const maturityData = [
  { year: "2024", value: 92 },
  { year: "2025", value: 187 },
  { year: "2026", value: 263 },
  { year: "2027", value: 198 },
  { year: "2028", value: 142 },
  { year: "2029", value: 88 },
];

const severityDist = [
  { label: "Critical", pct: 38, value: 174, color: "#EF4444" },
  { label: "High", pct: 58, value: 271, color: "#F59E0B" },
  { label: "Medium", pct: 72, value: 329, color: "#EAB308" },
  { label: "Low", pct: 42, value: 194, color: "#10B981" },
];

function getBarColor(value: number) {
  if (value >= 250) return "#EF4444";
  if (value >= 180) return "#F59E0B";
  if (value >= 120) return "#EAB308";
  return "#10B981";
}

function CountUpDollar({ target, delay }: { target: number; delay: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => {
      const steps = 25;
      const increment = target / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, 800 / steps);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [inView, target, delay]);

  return <span ref={ref}>${count}B</span>;
}

export default function MarketIntel() {
  const max = Math.max(...maturityData.map((d) => d.value));

  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.07] bg-surface-raised/80 backdrop-blur-xl text-sm shadow-2xl shadow-black/40">
      {/* Nav */}
      <div className="flex items-center gap-6 px-5 py-2.5 border-b border-white/[0.05] text-[10px] uppercase tracking-widest">
        <span className="text-gold font-semibold">Market Intel</span>
        <span className="text-[#E8EAED] font-medium border-b-2 border-gold pb-1.5">Maturity Wall</span>
        <span className="text-muted/40 font-medium">Severity</span>
        <span className="text-muted/40 font-medium">Deal Flow</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_220px]">
        {/* Maturity Wall */}
        <div className="p-5 md:border-r md:border-white/[0.05]">
          <p className="text-[#E8EAED] font-medium text-[13px] mb-0.5">CMBS Maturity Wall</p>
          <p className="text-muted/40 text-[10px] font-mono mb-6">Loan volume maturing by year</p>

          <div className="flex items-end gap-5 h-44 px-2">
            {maturityData.map((d, i) => {
              const pct = Math.max((d.value / max) * 100, 8);
              const color = getBarColor(d.value);
              return (
                <div key={d.year} className="flex-1 flex flex-col items-center h-full justify-end">
                  <motion.span
                    className="text-[10px] font-mono tabular-nums font-semibold mb-2"
                    style={{ color }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <CountUpDollar target={d.value} delay={0.2 + i * 0.08} />
                  </motion.span>
                  <motion.div
                    className="w-full max-w-[32px] mx-auto rounded-t-md"
                    style={{ backgroundColor: color, opacity: 0.85 }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${pct * 1.5}px` }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.15 + i * 0.08 }}
                  />
                  <span className="text-muted/40 text-[10px] font-mono mt-2">{d.year}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Severity */}
        <div className="p-5">
          <p className="text-[#E8EAED] font-medium text-[13px] mb-0.5">Severity</p>
          <p className="text-muted/40 text-[10px] font-mono mb-5">By risk level</p>

          <div className="space-y-4">
            {severityDist.map((s, i) => (
              <div key={s.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-muted text-[11px]">{s.label}</span>
                  <span className="text-[#E8EAED] font-semibold font-mono text-[11px] tabular-nums">
                    <CountUpDollar target={s.value} delay={0.3 + i * 0.1} />
                  </span>
                </div>
                <div className="h-2 rounded-full bg-white/[0.06]">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: s.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 + i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <motion.div
            className="mt-5 pt-3 border-t border-white/[0.05] flex items-center justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-muted/40 text-[9px] uppercase tracking-widest">Total</span>
            <span className="text-gold font-bold font-mono text-sm tabular-nums">
              <CountUpDollar target={968} delay={0.7} />
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
