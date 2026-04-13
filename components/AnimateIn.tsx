"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const offsets: Record<string, { x: number; y: number }> = {
  up: { x: 0, y: 12 },
  down: { x: 0, y: -12 },
  left: { x: 12, y: 0 },
  right: { x: -12, y: 0 },
};

/* ── Shared IntersectionObserver for all mobile reveals ── */
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          sharedObserver!.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px 100px 0px", threshold: 0 },
  );
  return sharedObserver;
}

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: AnimateInProps) {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const offset = offsets[direction];

  /* Mobile: CSS-based reveal via shared observer */
  useEffect(() => {
    if (!isMobile || !ref.current) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight + 200) {
      el.classList.add("above-fold");
      return;
    }

    const obs = getSharedObserver();
    obs.observe(el);
    return () => {
      obs.unobserve(el);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div
        ref={ref}
        className={`mobile-reveal ${className || ""}`}
        style={delay > 0 ? { animationDelay: `${Math.min(delay, 0.3)}s` } : undefined}
      >
        {children}
      </div>
    );
  }

  /* Desktop: Framer Motion spring animation (unchanged) */
  return (
    <motion.div
      data-animate-in
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ type: "spring", stiffness: 100, damping: 26, delay: Math.min(delay, 0.4) }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
