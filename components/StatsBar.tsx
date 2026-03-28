"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function AnimatedValue({ value }: { value: string }) {
  const match = value.match(/^([\d,]+)(.*)/);
  const numericTarget = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[2] : "";
  const hasComma = match ? match[1].includes(",") : false;
  const isNumeric = !!match;

  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !isNumeric) return;
    const duration = 1800;
    let start: number | null = null;
    let raf: number;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.round(easeOutCubic(progress) * numericTarget));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, numericTarget, isNumeric]);

  if (!isNumeric) return <>{value}</>;

  return (
    <span ref={ref}>
      {hasComma ? count.toLocaleString() : count}
      {suffix}
    </span>
  );
}

interface Stat { value: string; label: string; }
interface StatsBarProps { stats: Stat[]; }

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="py-8 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <AnimateIn key={index} delay={index * 0.1}>
              <div className="text-center md:text-left">
                <div className="font-bold text-4xl tracking-tighter text-gold font-mono mb-1">
                  {/^\d/.test(stat.value) ? <AnimatedValue value={stat.value} /> : stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  );
}
