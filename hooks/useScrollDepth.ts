"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track, EVENTS } from "@/lib/analytics";

const MILESTONES = [25, 50, 75, 100];

export function useScrollDepthTracking() {
  const pathname = usePathname();

  useEffect(() => {
    const fired = new Set<number>();

    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = window.scrollY + window.innerHeight;
      const total = doc.scrollHeight;
      if (total <= window.innerHeight) return;
      const pct = Math.min(100, Math.round((scrolled / total) * 100));
      for (const m of MILESTONES) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          track(EVENTS.SCROLL_DEPTH_REACHED, { depth: m, path: pathname });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
}
