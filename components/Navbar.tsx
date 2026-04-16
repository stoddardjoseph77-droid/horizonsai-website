"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";
import { track, EVENTS } from "@/lib/analytics";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobile = () => {
    const next = !mobileOpen;
    track(EVENTS.MOBILE_MENU_TOGGLED, { open: next });
    setMobileOpen(next);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "max-w-[1400px] mx-auto transition-all duration-500 mt-4 rounded-2xl",
            scrolled
              ? "bg-surface/80 border border-white/[0.07] shadow-lg shadow-black/30 nav-blur"
              : "bg-transparent border border-transparent"
          )}
        >
          <div className="flex items-center justify-between h-14 md:h-16 px-5 md:px-6">
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0"
              onClick={() => track(EVENTS.LOGO_CLICKED, { location: "navbar" })}
            >
              <svg viewBox="0 0 40 28" width="48" height="34" className="shrink-0">
                <polyline points="2,2 14,14 2,26" fill="none" stroke="#E8EAED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
                <polyline points="13,2 25,14 13,26" fill="none" stroke="#E8EAED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                <polyline points="24,2 36,14 24,26" fill="none" stroke="#E8EAED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-semibold text-xl tracking-tight text-[#E8EAED]">
                {SITE.name}
              </span>
            </Link>

            <div className="hidden md:block">
              <Link
                href="/book-a-call"
                onClick={() => track(EVENTS.CTA_CLICKED, { location: "navbar", label: "Book a Call", href: "/book-a-call" })}
                className="inline-flex items-center justify-center rounded-xl font-medium text-sm px-5 py-2.5 bg-[#E8EAED] text-[#0B1622] font-semibold transition-all duration-200 hover:bg-white active:scale-[0.98] shadow-lg shadow-white/20"
              >
                Book a Call
              </Link>
            </div>

            <button
              type="button"
              onClick={toggleMobile}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span className={cn("block w-6 h-0.5 bg-[#E8EAED] transition-all duration-300 origin-center", mobileOpen && "rotate-45 translate-y-2")} />
              <span className={cn("block w-6 h-0.5 bg-[#E8EAED] transition-all duration-300", mobileOpen && "opacity-0")} />
              <span className={cn("block w-6 h-0.5 bg-[#E8EAED] transition-all duration-300 origin-center", mobileOpen && "-rotate-45 -translate-y-2")} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden bg-surface/95",
          mobileOpen ? "opacity-100 pointer-events-auto nav-blur" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          <Link
            href="/book-a-call"
            onClick={() => {
              track(EVENTS.CTA_CLICKED, { location: "mobile_menu", label: "Book a Call", href: "/book-a-call" });
              setMobileOpen(false);
            }}
            className="inline-flex items-center justify-center rounded-xl font-medium text-lg px-8 py-4 bg-[#E8EAED] text-[#0B1622] font-semibold transition-all duration-200 hover:bg-white active:scale-[0.98] shadow-lg shadow-white/20"
          >
            Book a Call
          </Link>
        </nav>
      </div>

      <div className="h-20 md:h-24" />
    </>
  );
}
