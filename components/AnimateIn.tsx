"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  up: { x: 0, y: 10 },
  down: { x: 0, y: -10 },
  left: { x: 10, y: 0 },
  right: { x: -10, y: 0 },
};

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

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: AnimateInProps) {
  const isMobile = useIsMobile();
  const offset = isMobile ? mobileOffsets[direction] : directionOffsets[direction];

  // Mobile: 0.25s smooth fade, small stagger (half of desktop delay), trigger 100px early.
  // Desktop: 0.4s smooth fade, full stagger delays, trigger at -15% from bottom.
  const duration = isMobile ? 0.25 : 0.4;
  const finalDelay = isMobile ? Math.min(delay * 0.5, 0.15) : Math.min(delay, 0.3);
  const margin = isMobile ? "0px 0px 100px 0px" : "0px 0px -15% 0px";

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
