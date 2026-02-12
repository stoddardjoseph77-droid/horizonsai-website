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

function useShouldSkipAnimation() {
  const [skip, setSkip] = useState(false);
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSkip(mobile.matches || reducedMotion.matches);
    update();
    mobile.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);
  return skip;
}

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: AnimateInProps) {
  const skipAnimation = useShouldSkipAnimation();
  const offset = directionOffsets[direction];
  // Cap delay so staggered items don't take forever to appear
  const clampedDelay = Math.min(delay, 0.3);

  if (skipAnimation) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.4,
        delay: clampedDelay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
