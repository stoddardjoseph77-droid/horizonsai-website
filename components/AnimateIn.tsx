"use client";

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

  return (
    <motion.div
      initial={isMobile ? { opacity: 1 } : { opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={
        isMobile
          ? { duration: 0 }
          : { type: "spring", stiffness: 100, damping: 26, delay: Math.min(delay, 0.4) }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
