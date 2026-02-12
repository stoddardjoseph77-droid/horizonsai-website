"use client";

import { useInView } from "framer-motion";
import { useEffect, useState, useRef, useMemo } from "react";

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  variant?: "dark" | "light";
}

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return mobile;
}

function parseStatValue(value: string): { numeric: number; prefix: string; suffix: string } | null {
  const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
  if (!match) return null;
  return {
    prefix: match[1],
    numeric: parseInt(match[2], 10),
    suffix: match[3],
  };
}

function AnimatedStat({
  value,
  label,
  isDark,
}: Stat & { isDark: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });
  const isMobile = useIsMobile();
  const [displayValue, setDisplayValue] = useState(value);
  const parsed = useMemo(() => parseStatValue(value), [value]);

  useEffect(() => {
    if (!isInView || !parsed) return;

    // Mobile: 700ms count. Desktop: 2000ms count.
    const duration = isMobile ? 700 : 2000;
    const startTime = performance.now();
    const target = parsed.numeric;

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setDisplayValue(`${parsed!.prefix}${current}${parsed!.suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    setDisplayValue(`${parsed.prefix}0${parsed.suffix}`);
    requestAnimationFrame(animate);
  }, [isInView, parsed, isMobile]);

  // Mobile: faster fade (200ms, no label delay). Desktop: 500ms fade, 300ms label delay.
  const fadeDuration = isMobile ? 200 : 500;
  const labelDelay = isMobile ? "0s" : "0.3s";

  return (
    <div ref={ref}>
      <div
        className={`font-heading font-bold text-4xl mb-2 ${
          isDark ? "text-gradient" : "text-brand-primary"
        }`}
        style={{
          opacity: isInView ? 1 : 0,
          transition: `opacity ${fadeDuration}ms ease`,
        }}
      >
        {displayValue}
      </div>
      <div
        className={`text-sm ${
          isDark ? "text-white/60" : "text-text-secondary"
        }`}
        style={{
          opacity: isInView ? 1 : 0,
          transition: `opacity ${fadeDuration}ms ease`,
          transitionDelay: labelDelay,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function StatsBar({
  stats,
  variant = "dark",
}: StatsBarProps) {
  const isDark = variant === "dark";

  return (
    <div className={isDark ? "bg-transparent py-8 md:py-16" : "bg-white py-8 md:py-16 border-b border-light-border/50"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              value={stat.value}
              label={stat.label}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
