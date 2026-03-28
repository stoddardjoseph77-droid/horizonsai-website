"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

const metrics = [
  { label: "Loan Balance", value: "$18.2M" },
  { label: "Occupancy", value: "58%" },
  { label: "DSCR", value: "0.72x" },
  { label: "Maturity", value: "Aug 2026" },
  { label: "LTV", value: "112%" },
  { label: "Interest Rate", value: "4.85%" },
] as const;

const analysisText =
  "Apex Centre Tower transferred to special servicing on Feb 12, with a $18.2M loan balance against a $16.3M appraisal. The borrower is 4 months delinquent with occupancy at 58%. Strong candidate for value-add acquisition at a discount to both loan basis and replacement cost.";

function Typewriter({ text, delay, isStatic }: { text: string; delay: number; isStatic?: boolean }) {
  const [displayed, setDisplayed] = useState(isStatic ? text : "");
  const [started, setStarted] = useState(!!isStatic);
  const ref = useRef<HTMLParagraphElement>(null);
  const hasTriggered = useRef(false);
  // Continuous check — not once: true — so we know when it leaves view
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (isStatic || hasTriggered.current || !inView) return;
    hasTriggered.current = true;
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [inView, delay, isStatic]);

  useEffect(() => {
    if (isStatic || !started) return;
    // If scrolled out of view, instantly fill remaining text
    if (!inView && displayed.length < text.length) {
      setDisplayed(text);
      return;
    }
    let i = displayed.length;
    if (i >= text.length) return;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 12);
    return () => clearInterval(interval);
  }, [started, text, isStatic, inView, displayed.length]);

  return (
    <div ref={ref} className="relative text-muted text-xs leading-relaxed">
      {/* Invisible full text to reserve exact height */}
      <p className="invisible" aria-hidden="true">{text}</p>
      {/* Visible typed text overlaid */}
      <p className="absolute inset-0">
        {displayed}
        {!isStatic && started && displayed.length < text.length && (
          <span className="inline-block w-[1px] h-3 bg-accent/70 ml-0.5 animate-pulse" />
        )}
      </p>
    </div>
  );
}

function AnimatedScoreRing({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (score / 100) * circumference;
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const steps = 30;
    const increment = score / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= score) {
        setCount(score);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, score]);

  return (
    <motion.div
      ref={ref}
      className="relative w-20 h-20 shrink-0"
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.1 }}
    >
      <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
        <circle cx="48" cy="48" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
        <motion.circle
          cx="48" cy="48" r="40" fill="none" stroke="#10B981" strokeWidth="4"
          strokeDasharray={circumference} strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-accent font-bold text-xl font-mono leading-none">{count}</span>
        <span className="text-muted/50 text-[8px] uppercase tracking-wider">AI Score</span>
      </div>
    </motion.div>
  );
}

// Ghost cursor that clicks "Reviewing" then moves to "Pursuing"
function GhostCursor() {
  const [phase, setPhase] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timers = [
      setTimeout(() => setPhase(1), 4000), // cursor appears
      setTimeout(() => setPhase(2), 4800), // click pursuing
      setTimeout(() => setPhase(3), 5400), // cursor fades
    ];
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <div ref={ref} className="flex gap-2 pt-4 border-t border-white/[0.05] relative">
      {[
        { label: "Reviewing", active: phase < 2 },
        { label: "Pursuing", active: phase >= 2 },
        { label: "Passed", active: false },
      ].map((s, i) => (
        <motion.span
          key={s.label}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors duration-300 ${
            s.active
              ? "bg-gold/15 text-gold border-gold/20"
              : "bg-white/[0.03] text-muted/50 border-white/[0.05]"
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 150, damping: 18, delay: 0.6 + i * 0.06 }}
        >
          {s.label}
        </motion.span>
      ))}
      {/* Ghost cursor */}
      {(phase === 1 || phase === 2) && (
        <motion.div
          className="absolute pointer-events-none z-10"
          initial={{ left: 8, bottom: -6, opacity: 0 }}
          animate={
            phase === 1
              ? { left: 8, bottom: -6, opacity: 1 }
              : { left: 100, bottom: -6, opacity: 1 }
          }
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M1 1L1 14.5L4.5 11L8 18L10.5 17L7 10L12 10L1 1Z" fill="white" fillOpacity="0.9" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
          </svg>
        </motion.div>
      )}
      {phase === 3 && (
        <motion.div
          className="absolute pointer-events-none z-10"
          initial={{ left: 100, bottom: -6, opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M1 1L1 14.5L4.5 11L8 18L10.5 17L7 10L12 10L1 1Z" fill="white" fillOpacity="0.9" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
          </svg>
        </motion.div>
      )}
    </div>
  );
}

function StaticStatus() {
  return (
    <div className="flex gap-2 pt-4 border-t border-white/[0.05]">
      {[
        { label: "Reviewing", active: true },
        { label: "Pursuing", active: false },
        { label: "Passed", active: false },
      ].map((s) => (
        <span
          key={s.label}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
            s.active
              ? "bg-gold/15 text-gold border-gold/20"
              : "bg-white/[0.03] text-muted/50 border-white/[0.05]"
          }`}
        >
          {s.label}
        </span>
      ))}
    </div>
  );
}

function StaticScoreRing({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (score / 100) * circumference;
  return (
    <div className="relative w-20 h-20 shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
        <circle cx="48" cy="48" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
        <circle cx="48" cy="48" r="40" fill="none" stroke="#10B981" strokeWidth="4" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-accent font-bold text-xl font-mono leading-none">{score}</span>
        <span className="text-muted/50 text-[8px] uppercase tracking-wider">AI Score</span>
      </div>
    </div>
  );
}

export default function PropertyDetail() {
  const isMobile = useIsMobile();

  return (
    <div className="glass rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-5 py-2.5 border-b border-white/[0.05] text-xs">
        <span className="text-muted/50">Back</span>
        <span className="text-gold bg-gold/10 px-2 py-0.5 rounded font-medium">CMBS</span>
        <span className="text-[#E8EAED] font-medium ml-1">Apex Centre Tower</span>
        <span className="text-muted/40 ml-auto font-mono">Dallas, TX</span>
      </div>

      <div className="p-5 md:p-6">
        {/* AI Intelligence */}
        <div className="flex items-start gap-5 mb-5">
          {isMobile ? <StaticScoreRing score={87} /> : <AnimatedScoreRing score={87} />}
          {isMobile ? (
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-accent/15 text-accent text-[10px] px-2 py-0.5 rounded font-bold uppercase">High Confidence</span>
                <span className="text-muted/40 text-[10px] font-mono">Mar 18, 2026</span>
              </div>
              <Typewriter text={analysisText} delay={0} isStatic />
            </div>
          ) : (
            <motion.div
              className="flex-1 min-w-0"
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring" as const, stiffness: 100, damping: 18, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-accent/15 text-accent text-[10px] px-2 py-0.5 rounded font-bold uppercase">High Confidence</span>
                <span className="text-muted/40 text-[10px] font-mono">Mar 18, 2026</span>
              </div>
              <Typewriter text={analysisText} delay={0.8} />
            </motion.div>
          )}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 py-4 border-t border-white/[0.05]">
          {metrics.map((m, i) =>
            isMobile ? (
              <div key={m.label}>
                <div className="text-muted/50 text-[10px] uppercase tracking-wider">{m.label}</div>
                <div className="text-[#E8EAED] font-semibold font-mono">{m.value}</div>
              </div>
            ) : (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring" as const, stiffness: 120, damping: 18, delay: 0.35 + i * 0.05 }}
              >
                <div className="text-muted/50 text-[10px] uppercase tracking-wider">{m.label}</div>
                <div className="text-[#E8EAED] font-semibold font-mono">{m.value}</div>
              </motion.div>
            )
          )}
        </div>

        {/* Status */}
        {isMobile ? <StaticStatus /> : <GhostCursor />}
      </div>
    </div>
  );
}
