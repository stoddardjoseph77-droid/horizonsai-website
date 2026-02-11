import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark-deep text-text-on-dark relative overflow-hidden">
      {/* Gradient blob */}
      <div className="gradient-blob gradient-blob-secondary absolute -bottom-40 -right-40" />

      {/* Section divider */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* -- Column 1: Logo + Tagline ----------------- */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">
                  H
                </span>
              </div>
              <span className="font-heading font-bold text-xl text-text-on-dark">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-4 text-text-on-dark/60 text-sm leading-relaxed max-w-xs">
              {SITE.tagline}. {SITE.description}
            </p>
          </div>

          {/* -- Column 2: Page Links --------------------- */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-text-on-dark/40 mb-4">
              Pages
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-on-dark/70 hover:text-text-on-dark transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/book-a-call"
                  className="text-text-on-dark/70 hover:text-text-on-dark transition-colors duration-200 text-sm"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>

          {/* -- Column 3: Contact ------------------------ */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-text-on-dark/40 mb-4">
              Contact
            </h4>
            <a
              href={`mailto:${SITE.email}`}
              className="text-text-on-dark/70 hover:text-text-on-dark transition-colors duration-200 text-sm block"
            >
              {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="text-text-on-dark/70 hover:text-text-on-dark transition-colors duration-200 text-sm block mt-1"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* -- Bottom bar ---------------------------------- */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-text-on-dark/40 text-sm">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
