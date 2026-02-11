"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/lib/constants";
import Button from "@/components/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  /* Track scroll position for transparent -> glass transition */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* Lock body scroll when mobile overlay is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "max-w-7xl mx-auto transition-all duration-500 mt-4 rounded-2xl",
            scrolled
              ? "bg-white/[0.06] border border-white/[0.08] shadow-lg shadow-black/20"
              : "bg-transparent border border-transparent"
          )}
          style={
            scrolled
              ? {
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                }
              : undefined
          }
        >
          <div className="flex items-center justify-between h-14 md:h-16 px-5 md:px-6">
            {/* -- Logo ----------------------------------- */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-md shadow-brand-primary/20">
                <span className="text-white font-heading font-bold text-sm">
                  H
                </span>
              </div>
              <span className="font-heading font-bold text-lg text-text-on-dark">
                {SITE.name}
              </span>
            </Link>

            {/* -- Desktop nav links ---------------------- */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200",
                    pathname === link.href
                      ? "text-white bg-white/[0.08]"
                      : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* -- Desktop CTA ---------------------------- */}
            <div className="hidden md:block">
              <Button variant="primary" size="sm" href="/book-a-call">
                Book a Call
              </Button>
            </div>

            {/* -- Mobile hamburger ----------------------- */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={cn(
                  "block w-6 h-0.5 bg-white transition-all duration-300 origin-center",
                  mobileOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-white transition-all duration-300",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-white transition-all duration-300 origin-center",
                  mobileOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* -- Mobile fullscreen overlay ------------------- */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden bg-dark-deep/95",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={
          mobileOpen
            ? {
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }
            : undefined
        }
      >
        <nav className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "text-2xl font-heading font-medium transition-colors duration-200",
                pathname === link.href
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4">
            <Button variant="primary" size="lg" href="/book-a-call">
              Book a Call
            </Button>
          </div>
        </nav>
      </div>

      {/* Spacer so page content sits below the fixed navbar */}
      <div className="h-20 md:h-24" />
    </>
  );
}
