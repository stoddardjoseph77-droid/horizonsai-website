"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
  "navigatedToBooker",
  "routeChanged",
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

// Pull a usable subset out of Cal's bookingSuccessfulV2 payload. Shape isn't
// formally documented and varies by Cal version, so dig defensively.
function extractBookingDetails(data: unknown): { name?: string; date?: string; uid?: string } {
  if (!data || typeof data !== "object") return {};
  const d = data as Record<string, unknown>;
  const booking = (d.booking ?? d) as Record<string, unknown>;
  const attendees = Array.isArray(d.attendees) ? d.attendees : Array.isArray(booking.attendees) ? booking.attendees : [];
  const firstAttendee = (attendees[0] ?? {}) as Record<string, unknown>;

  const name =
    (typeof firstAttendee.name === "string" && firstAttendee.name) ||
    (typeof d.name === "string" && d.name) ||
    undefined;

  const date =
    (typeof booking.startTime === "string" && booking.startTime) ||
    (typeof booking.start === "string" && booking.start) ||
    (typeof d.startTime === "string" && d.startTime) ||
    (typeof d.date === "string" && d.date) ||
    undefined;

  const uid =
    (typeof booking.uid === "string" && booking.uid) ||
    (typeof booking.id === "string" && booking.id) ||
    (typeof d.uid === "string" && d.uid) ||
    undefined;

  return { name, date, uid };
}

export default function CalendlyTracker() {
  const router = useRouter();

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

      // Cal.com emits both bookingSuccessful (v1, legacy) and bookingSuccessfulV2
      // per real booking. Canonical booking event = V2 only. V1 kept as separate
      // legacy event so we don't double-count. V2 also triggers our redirect to
      // /thank-you so we don't depend on Cal's paid "redirect on booking" setting.
      if (type === "bookingSuccessfulV2") {
        track(EVENTS.CALENDLY_BOOKING_COMPLETED, { raw_type: type, data: payload.data });

        const { name, date, uid } = extractBookingDetails(payload.data);
        const params = new URLSearchParams();
        if (name) params.set("name", name);
        if (date) params.set("date", date);
        if (uid) params.set("bookingUid", uid);
        const qs = params.toString();
        // Small delay so the tracking fetch flushes before navigation.
        window.setTimeout(() => {
          router.push(qs ? `/thank-you?${qs}` : "/thank-you");
        }, 250);
      } else if (type === "bookingSuccessful") {
        track("calendly_booking_successful_legacy", { raw_type: type, data: payload.data });
      } else {
        track(eventName, { raw_type: type, namespace: payload.namespace, data: payload.data });
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [router]);

  return null;
}
