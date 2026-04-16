"use client";

import { track, EVENTS } from "@/lib/analytics";

interface Props {
  href: string;
  label: string;
  location: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}

export default function TrackedExternalLink({ href, label, location, className, ariaLabel, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      onClick={() => track(EVENTS.EXTERNAL_LINK_CLICKED, { href, label, location })}
    >
      {children}
    </a>
  );
}
