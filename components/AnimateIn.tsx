"use client";

import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const directionOffsets: Record<string, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
};

const mobileOffsets: Record<string, { x: number; y: number }> = {
  up: { x: 0, y: 8 },
  down: { x: 0, y: -8 },
  left: { x: 8, y: 0 },
  right: { x: -8, y: 0 },
};

// useLayoutEffect on client (fires before paint), useEffect on server (no-op during SSR)
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useIsomorphicLayoutEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return mobile;
}

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: AnimateInProps) {
  const isMobile = useIsMobile();
  const offset = isMobile ? mobileOffsets[direction] : directionOffsets[direction];

  // Mobile: 0.15s fast fade, tiny stagger for hero cascade, trigger 30px early.
  // Scroll content cascades naturally via vertical stacking.
  // Desktop: 0.4s smooth fade, full stagger delays, trigger at -15% from bottom.
  const duration = isMobile ? 0.15 : 0.4;
  const finalDelay = isMobile ? Math.min(delay * 0.4, 0.08) : Math.min(delay, 0.3);
  const margin = isMobile ? "0px 0px 30px 0px" : "0px 0px -15% 0px";

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration,
        delay: finalDelay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
