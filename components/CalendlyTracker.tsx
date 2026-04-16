"use client";

import { useEffect } from "react";
import { track, EVENTS } from "@/lib/analytics";

export default function CalendlyTracker() {
  useEffect(() => {
    track(EVENTS.CALENDLY_LOADED);

    const handler = (event: MessageEvent) => {
      if (!event.data || typeof event.data !== "object") return;
      const { type, data } = event.data as { type?: string; data?: unknown };
      if (!type || typeof type !== "string") return;
      if (!type.startsWith("__cal") && !type.startsWith("cal:")) return;

      if (/booking.*success|bookingSuccessful/i.test(type)) {
        track(EVENTS.CALENDLY_BOOKING_COMPLETED, { raw_type: type, data });
      } else {
        track("calendly_event", { raw_type: type });
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return null;
}
