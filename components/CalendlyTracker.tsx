"use client";

import { useEffect } from "react";
import { track, EVENTS } from "@/lib/analytics";

const KNOWN_CAL_EVENTS = new Set([
  "__iframeReady",
  "__dimensionChanged",
  "__closeIframe",
  "__connectInitiated",
  "__connectCompleted",
  "__windowLoadComplete",
  "__scrollByDistance",
  "linkReady",
  "linkPrerendered",
  "linkFailed",
  "bookerReady",
  "bookerViewed",
  "bookerReopened",
  "bookerReloaded",
  "availabilityLoaded",
  "eventTypeSelected",
  "slotSelected",
  "bookingSuccessful",
  "bookingSuccessfulV2",
  "rescheduleBookingSuccessful",
  "rescheduleBookingSuccessfulV2",
  "dryRunBookingSuccessfulV2",
  "dryRunRescheduleBookingSuccessfulV2",
  "bookingCancelled",
  "bookingFailed",
]);

function toSnakeCase(type: string): string {
  return type
    .replace(/^__+/, "")
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase()
    .replace(/^_+/, "");
}

export default function CalendlyTracker() {
  useEffect(() => {
    track(EVENTS.CALENDLY_LOADED);

    const handler = (event: MessageEvent) => {
      if (!event.data || typeof event.data !== "object") return;
      const payload = event.data as { type?: string; namespace?: string; fullType?: string; data?: unknown };
      const type = payload.type;
      const fullType = payload.fullType;

      const isCalEvent =
        (typeof fullType === "string" && fullType.startsWith("CAL:")) ||
        (typeof type === "string" && KNOWN_CAL_EVENTS.has(type));

      if (!isCalEvent || !type) return;

      const eventName = `calendly_${toSnakeCase(type)}`;

      if (type === "bookingSuccessful" || type === "bookingSuccessfulV2") {
        track(EVENTS.CALENDLY_BOOKING_COMPLETED, { raw_type: type, data: payload.data });
      } else {
        track(eventName, { raw_type: type, namespace: payload.namespace, data: payload.data });
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return null;
}
