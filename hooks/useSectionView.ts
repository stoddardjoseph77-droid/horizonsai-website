"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track, EVENTS } from "@/lib/analytics";

export function useSectionViewTracking() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-section]")
    );
    if (sections.length === 0) return;

    const fired = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const name = entry.target.getAttribute("data-section");
          if (!name || fired.has(name)) continue;
          fired.add(name);
          track(EVENTS.SECTION_VIEWED, {
            section: name,
            path: pathname,
          });
        }
      },
      { threshold: 0.4 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
}
