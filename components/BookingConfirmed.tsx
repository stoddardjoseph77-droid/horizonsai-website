"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { track, EVENTS } from "@/lib/analytics";

// Sovereign-styled confirmation hero for /thank-you. CalEmbed forwards
// name / date / bookingUid on bookingSuccessful; everything degrades to a
// plain "You're booked." when a param is missing.

function formatBookedDate(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(d);
}

function firstNameOf(name: string | null): string | undefined {
  const trimmed = name?.trim();
  if (!trimmed) return undefined;
  const parts = trimmed.split(/\s+/);
  if (parts.length > 1) return parts[0];
  const camel = trimmed.match(/^([A-Z][a-z]{2,})(?=[A-Z])/);
  return camel ? camel[1] : trimmed;
}

export default function BookingConfirmed() {
  const params = useSearchParams();
  const [hydrated, setHydrated] = useState(false);

  const name = useMemo(() => params?.get("name") || params?.get("attendeeName") || null, [params]);
  const dateRaw = useMemo(
    () => params?.get("date") || params?.get("startTime") || params?.get("start") || null,
    [params],
  );
  const bookingUid = useMemo(
    () => params?.get("bookingUid") || params?.get("uid") || params?.get("bookingId") || null,
    [params],
  );

  useEffect(() => {
    setHydrated(true);
    track("booking_confirmed_page_viewed", {
      has_name: Boolean(name),
      has_date: Boolean(dateRaw),
      has_uid: Boolean(bookingUid),
    });
  }, [name, dateRaw, bookingUid]);

  const firstName = hydrated ? firstNameOf(name) : undefined;
  const when = hydrated ? formatBookedDate(dateRaw) : null;
  const manageHref = bookingUid ? `https://cal.com/booking/${bookingUid}` : null;

  return (
    <>
      <p className="label ty-ok"><span className="ty-dot" aria-hidden="true"></span>Booking confirmed</p>
      <h1 className="bk-h ty-h">
        {firstName ? <>You’re booked, {firstName}.</> : <>You’re booked.</>}
      </h1>
      {when && (
        <p className="ty-when">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="16" rx="1" />
            <path d="M3 9h18M8 3v4M16 3v4" />
          </svg>
          <span>{when}</span>
        </p>
      )}
      <p className="ty-p">
        The call link is on its way to your inbox. Thirty minutes, on Google Meet. Below is what
        helps to have ready.
      </p>
      {manageHref && (
        <a
          className="ty-manage"
          href={manageHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track(EVENTS.EXTERNAL_LINK_CLICKED, { location: "thank_you_manage_booking", href: manageHref })}
        >
          Reschedule or cancel <span aria-hidden="true">→</span>
        </a>
      )}
    </>
  );
}
