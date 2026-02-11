"use client";

import { useInView } from "framer-motion";
import { useEffect, useState, useRef, useMemo } from "react";

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
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

function AnimatedStat({ value, label }: Stat) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(value);
  const parsed = useMemo(() => parseStatValue(value), [value]);

  useEffect(() => {
    if (!isInView || !parsed) return;

    const duration = 2000;
    const startTime = performance.now();
    const target = parsed.numeric;

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut curve
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setDisplayValue(`${parsed!.prefix}${current}${parsed!.suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    setDisplayValue(`${parsed.prefix}0${parsed.suffix}`);
    requestAnimationFrame(animate);
  }, [isInView, parsed]);

  return (
    <div ref={ref}>
      <div
        className="font-heading font-bold text-4xl text-brand-primary mb-2 transition-opacity duration-500"
        style={{ opacity: isInView ? 1 : 0 }}
      >
        {displayValue}
      </div>
      <div
        className="text-text-secondary text-sm transition-opacity duration-500"
        style={{ opacity: isInView ? 1 : 0, transitionDelay: "0.3s" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
