"use client";

import { useRef, useEffect, useState } from "react";
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

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: AnimateInProps) {
  const isMobile = useIsMobile();
  const offset = offsets[direction];
  const ref = useRef<HTMLDivElement>(null);
  const [startedAboveFold, setStartedAboveFold] = useState(false);

  useEffect(() => {
    if (!isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100) {
      setStartedAboveFold(true);
    }
  }, [isMobile]);

  if (isMobile) {
    // Elements already visible on load — show instantly, no animation
    if (startedAboveFold) {
      return <div ref={ref} className={className}>{children}</div>;
    }

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px 80px 0px" }}
        transition={{ duration: 0.25, ease: "easeOut", delay: Math.min(delay, 0.15) }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
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
