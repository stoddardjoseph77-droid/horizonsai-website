"use client";

import { useEffect, useRef, useMemo } from "react";
import { useInView } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";
import { useIsMobile } from "@/hooks/useIsMobile";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function AnimatedValue({ value, isMobile }: { value: string; isMobile: boolean }) {
  const match = value.match(/^([\d,]+)(.*)/);
  const numericTarget = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[2] : "";
  const hasComma = match ? match[1].includes(",") : false;
  const isNumeric = !!match;

  const ref = useRef<HTMLSpanElement>(null);
  const fmt = useMemo(() => new Intl.NumberFormat("en-US"), []);
  const inView = useInView(ref, {
    once: true,
    margin: undefined,
  });

  useEffect(() => {
    if (!inView || !isNumeric || !ref.current || isMobile) return;
    const el = ref.current;
    const duration = 1800;
    let start: number | null = null;
    let raf: number;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const val = Math.round(easeOutCubic(progress) * numericTarget);
      el.textContent = `${hasComma ? fmt.format(val) : val}${suffix}`;
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, numericTarget, isNumeric, isMobile, hasComma, suffix, fmt]);

  if (!isNumeric) return <>{value}</>;

  if (isMobile) {
    return <span style={{ fontVariantNumeric: "tabular-nums" }}>{value}</span>;
  }

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      0{suffix}
    </span>
  );
}

interface Stat { value: string; label: string; }
interface StatsBarProps { stats: Stat[]; }

export default function StatsBar({ stats }: StatsBarProps) {
  const isMobile = useIsMobile();
  return (
    <div className="pt-4 pb-6 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-2 md:gap-8">
          {stats.map((stat, index) => (
            <AnimateIn key={index} delay={index * 0.1}>
              <div className="text-center md:text-left">
                <div className="font-bold text-2xl md:text-4xl tracking-tighter text-gold font-mono mb-1">
                  {/^\d/.test(stat.value) ? <AnimatedValue value={stat.value} isMobile={isMobile} /> : stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted">{stat.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  );
}
