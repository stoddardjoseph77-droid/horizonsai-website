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
  up: { x: 0, y: 12 },
  down: { x: 0, y: -12 },
  left: { x: 12, y: 0 },
  right: { x: -12, y: 0 },
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

  // Mobile: snappy (0.2s, no delay). Desktop: smooth (0.4s, staggered).
  const duration = isMobile ? 0.2 : 0.4;
  const finalDelay = isMobile ? 0 : Math.min(delay, 0.3);

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
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
