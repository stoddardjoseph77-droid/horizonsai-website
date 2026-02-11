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

  const isLightPage =
    pathname === "/commercial" || pathname.startsWith("/commercial");

  // When scrolled on a light page, switch navbar to light theme
  const isLightScrolled = scrolled && isLightPage;

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
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? isLightPage
              ? "bg-white/95 shadow-lg border-b border-light-border/50"
              : "bg-white/[0.04] border-b border-white/[0.08]"
            : "bg-transparent"
        )}
        style={
          scrolled
            ? {
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }
            : undefined
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* -- Logo ----------------------------------- */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">
                  H
                </span>
              </div>
              <span
                className={cn(
                  "font-heading font-bold text-xl transition-colors duration-300",
                  isLightScrolled ? "text-text-primary" : "text-text-on-dark"
                )}
              >
                {SITE.name}
              </span>
            </Link>

            {/* -- Desktop nav links ---------------------- */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200",
                    isLightScrolled
                      ? pathname === link.href
                        ? "text-brand-primary"
                        : "text-text-secondary hover:text-text-primary"
                      : pathname === link.href
                        ? "text-white"
                        : "text-white/70 hover:text-white"
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
                  "block w-6 h-0.5 transition-all duration-300 origin-center",
                  mobileOpen
                    ? "bg-white"
                    : isLightScrolled
                      ? "bg-text-primary"
                      : "bg-white",
                  mobileOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 transition-all duration-300",
                  mobileOpen
                    ? "bg-white"
                    : isLightScrolled
                      ? "bg-text-primary"
                      : "bg-white",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 transition-all duration-300 origin-center",
                  mobileOpen
                    ? "bg-white"
                    : isLightScrolled
                      ? "bg-text-primary"
                      : "bg-white",
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
          "fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden bg-dark-deep",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "text-2xl font-heading font-medium transition-colors duration-200",
                pathname === link.href
                  ? "text-white"
                  : "text-white/70 hover:text-white"
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
      <div className="h-16 md:h-20" />
    </>
  );
}
