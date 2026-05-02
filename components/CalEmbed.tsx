"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const CAL_LINK = "joey-stoddard-iy7cjz/20-minute-exploration-call";
const NAMESPACE = "discovery";

type CalBookingDetail = {
  data?: unknown;
};

function extractBookingDetails(data: unknown): { name?: string; date?: string; uid?: string } {
  if (!data || typeof data !== "object") return {};
  const d = data as Record<string, unknown>;
  const booking = (d.booking ?? d) as Record<string, unknown>;
  const attendees = Array.isArray(d.attendees)
    ? d.attendees
    : Array.isArray(booking.attendees)
    ? booking.attendees
    : [];
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

export default function CalEmbed() {
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      if (cancelled) return;

      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#10B981" },
          dark: { "cal-brand": "#10B981" },
        },
        hideEventTypeDetails: false,
      });

      cal("on", {
        action: "bookingSuccessful",
        callback: (e: CustomEvent<CalBookingDetail>) => {
          const { name, date, uid } = extractBookingDetails(e?.detail?.data);
          const params = new URLSearchParams();
          if (name) params.set("name", name);
          if (date) params.set("date", date);
          if (uid) params.set("bookingUid", uid);
          const qs = params.toString();
          router.push(qs ? `/thank-you?${qs}` : "/thank-you");
        },
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [router]);

  // The official embed posts its content height back to the host and resizes
  // itself, so we don't pin a height — that was the source of the clipped
  // form / floating Back-Confirm footer with the raw iframe.
  return (
    <Cal
      namespace={NAMESPACE}
      calLink={CAL_LINK}
      style={{ width: "100%", height: "auto", overflow: "hidden" }}
      config={{ layout: "month_view", theme: "dark" }}
    />
  );
}
