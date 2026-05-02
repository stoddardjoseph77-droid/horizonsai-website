"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { track, EVENTS } from "@/lib/analytics";

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

export default function ConfirmationDetails() {
  const params = useSearchParams();
  const [hydrated, setHydrated] = useState(false);

  const name = useMemo(
    () => params?.get("name") || params?.get("attendeeName") || null,
    [params],
  );
  const dateRaw = useMemo(
    () => params?.get("date") || params?.get("startTime") || params?.get("start") || null,
    [params],
  );
  const bookingUid = useMemo(
    () => params?.get("bookingUid") || params?.get("uid") || params?.get("bookingId") || null,
    [params],
  );

  const formattedDate = formatBookedDate(dateRaw);

  useEffect(() => {
    setHydrated(true);
    track("booking_confirmed_page_viewed", {
      has_name: Boolean(name),
      has_date: Boolean(dateRaw),
      has_uid: Boolean(bookingUid),
    });
  }, [name, dateRaw, bookingUid]);

  const firstName = name?.trim().split(/\s+/)[0];
  const manageHref = bookingUid ? `https://cal.com/booking/${bookingUid}` : null;

  return (
    <div className="space-y-7">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="text-accent text-xs font-medium tracking-wide">Booking confirmed</span>
      </div>

      <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05] text-[#E8EAED]">
        {hydrated && firstName ? (
          <>You&rsquo;re booked, {firstName}.</>
        ) : (
          <>You&rsquo;re booked.</>
        )}
        <br />
        <span className="text-muted">Here&rsquo;s what&rsquo;s next.</span>
      </h1>

      {hydrated && formattedDate && (
        <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.07]">
          <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 9h18M8 3v4M16 3v4" />
          </svg>
          <span className="text-[#E8EAED] text-sm md:text-base font-medium">{formattedDate}</span>
        </div>
      )}

      <p className="text-muted text-lg leading-relaxed max-w-[55ch]">
        A confirmation with the call link is on its way to your inbox. Below you&rsquo;ll
        find a quick rundown of what to have ready, a note from a current client, and
        answers to the questions that come up most.
      </p>

      {manageHref && (
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href={manageHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.07] text-[#E8EAED] text-sm font-medium hover:bg-white/[0.06] hover:border-white/[0.12] transition-colors"
            onClick={() => track(EVENTS.EXTERNAL_LINK_CLICKED, { location: "thank_you_manage_booking", href: manageHref })}
          >
            Manage or reschedule
            <span aria-hidden>&rarr;</span>
          </a>
        </div>
      )}
    </div>
  );
}
