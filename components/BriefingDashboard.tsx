"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 7, label: "Data Sources" },
  { value: 1341, label: "Opportunities" },
  { value: 798, label: "AI Scored" },
  { value: 1797, label: "Records Scanned" },
];

const watchlist = [
  { name: "Apex Centre Tower", location: "Dallas, TX" },
  { name: "Harborview Commerce Center", location: "Tampa, FL" },
];

const topPicks = [
  { name: "Northgate Crossing", location: "Charlotte, NC", score: 94, balance: "$31.2M" },
  { name: "Harborview Commerce Center", location: "Tampa, FL", score: 92, balance: "$9.4M" },
  { name: "Apex Centre Tower", location: "Dallas, TX", score: 87, balance: "$18.2M" },
];

function LiveDot() {
  return (
    <span className="relative flex items-center gap-1.5">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
      </span>
      <span className="text-accent text-[9px] font-mono uppercase tracking-wider">Live</span>
    </span>
  );
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function CountUp({ target, format }: { target: number; format?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    let start: number | null = null;
    let raf: number;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  const displayValue = format ? count.toLocaleString() : count;
  const maxValue = format ? target.toLocaleString() : target;
  return (
    <span ref={ref} className="inline-block tabular-nums" style={{ minWidth: `${String(maxValue).length * 0.6}em` }}>
      {displayValue}
    </span>
  );
}

function ScoreRing({ score, delay }: { score: number; delay: number }) {
  const c = 2 * Math.PI * 14;
  const offset = c - (score / 100) * c;
  return (
    <motion.div
      className="relative w-9 h-9 shrink-0"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay }}
    >
      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" />
        <motion.circle
          cx="18" cy="18" r="14" fill="none" stroke="#10B981" strokeWidth="2.5"
          strokeDasharray={c} strokeLinecap="round"
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-accent font-semibold text-[10px] font-mono">{score}</span>
    </motion.div>
  );
}

// Simulates a new notification appearing
function NewDealNotification() {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setShow(true), 3500);
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <div ref={ref} style={{ minHeight: 36 }}>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 26 }}
            className="mb-2"
          >
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-accent/[0.08] border border-accent/20">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              <span className="text-accent text-[10px] font-medium">New opportunity scored</span>
              <span className="text-[#E8EAED] text-[10px] font-mono ml-auto">Cordova Square - 68</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Incrementing counter that ticks up after initial count
function TickingCount({ base, format }: { base: number; format?: boolean }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  // Continuous view check for the ticking interval
  const stillInView = useInView(ref, { once: false });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    let start: number | null = null;
    let raf: number;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.round(easeOutCubic(progress) * base));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, base]);

  // After count-up, slowly tick up - only when visible
  useEffect(() => {
    if (!done || !stillInView) return;
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [done, stillInView]);

  // Reserve width for the final formatted value
  const displayValue = format ? count.toLocaleString() : count;
  const maxValue = format ? (base + 10).toLocaleString() : base + 10;
  return (
    <span ref={ref} className="inline-block" style={{ minWidth: `${String(maxValue).length * 0.6}em` }}>
      {displayValue}
    </span>
  );
}

const row = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 18, delay: 0.3 + i * 0.08 },
  }),
};

export default function BriefingDashboard() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.07] bg-surface-raised/80 backdrop-blur-xl text-sm shadow-2xl shadow-black/40">
      {/* Top nav */}
      <div className="flex items-center gap-5 px-5 py-2 border-b border-white/[0.05] text-[10px] uppercase tracking-widest">
        <span className="text-gold font-semibold">HorizonsAI</span>
        <span className="text-[#E8EAED] font-medium border-b-2 border-gold pb-1.5">Briefing</span>
        <span className="text-muted/40 font-medium">Opportunities</span>
        <span className="text-muted/40 font-medium">Market Intel</span>
        <span className="text-muted/40 font-medium">CMBS</span>
        <span className="text-muted/30 ml-auto font-mono normal-case tracking-normal text-[11px] flex items-center gap-3">
          <LiveDot />
          Mar 27, 2026
        </span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 border-b border-white/[0.05]">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className={`px-5 py-4 text-center ${i > 0 ? "border-l border-white/[0.05]" : ""}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: i * 0.08 }}
          >
            <div className="text-gold font-semibold text-[22px] leading-none tracking-tight font-mono tabular-nums">
              {/* Records Scanned ticks up to feel live */}
              {s.label === "Records Scanned" ? (
                <TickingCount base={s.value} format />
              ) : (
                <CountUp target={s.value} format={s.value > 100} />
              )}
            </div>
            <div className="text-muted/50 text-[9px] uppercase tracking-widest mt-1.5">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Greeting */}
      <div className="px-5 pt-5 pb-4">
        <p className="text-[#E8EAED] text-base font-medium tracking-tight">Good Evening</p>
        <p className="text-muted/40 text-[11px] font-mono mt-0.5">Friday, March 27, 2026</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { count: "1,334", label: "Opportunities", dot: "bg-accent" },
            { count: "3", label: "Reviewing", dot: "bg-gold" },
            { count: "1", label: "Price Drops", dot: "bg-severity-critical" },
            { count: "2", label: "Watchlisted", dot: "bg-gold" },
          ].map((p, i) => (
            <motion.div
              key={p.label}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 18, delay: 0.15 + i * 0.06 }}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
              <span className="text-[#E8EAED] font-semibold text-xs font-mono tabular-nums">{p.count}</span>
              <span className="text-muted/40 text-[10px] uppercase tracking-wider">{p.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Watchlist + AI Top Picks */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/[0.05]">
        <div className="px-5 py-4 md:border-r md:border-white/[0.05]">
          <p className="text-muted/40 text-[9px] uppercase tracking-widest mb-3 flex items-center gap-1.5">
            <span className="text-gold text-xs">&#9733;</span> Watchlist
          </p>
          <NewDealNotification />
          <div className="space-y-1.5">
            {watchlist.map((w, i) => (
              <motion.div
                key={w.name}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                variants={row} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              >
                <span className="text-gold text-[10px]">&#9733;</span>
                <div className="min-w-0">
                  <p className="text-[#E8EAED] text-[11px] font-medium truncate">{w.name}</p>
                  <p className="text-muted/40 text-[10px]">{w.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="px-5 py-4">
          <p className="text-muted/40 text-[9px] uppercase tracking-widest mb-3">AI Top Picks</p>
          <div className="space-y-1.5">
            {topPicks.map((p, i) => (
              <motion.div
                key={p.name}
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                variants={row} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              >
                <ScoreRing score={p.score} delay={0.3 + i * 0.1} />
                <div className="flex-1 min-w-0">
                  <p className="text-[#E8EAED] text-[11px] font-medium truncate">{p.name}</p>
                  <p className="text-muted/40 text-[10px]">{p.location}</p>
                </div>
                <span className="text-muted/50 text-[11px] font-mono tabular-nums shrink-0">{p.balance}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
