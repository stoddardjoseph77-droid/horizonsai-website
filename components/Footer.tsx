import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-surface text-muted relative overflow-hidden">
      <div className="divider" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <svg viewBox="0 0 120 120" width="32" height="32" className="shrink-0">
                <rect width="120" height="120" rx="22" fill="#0B1622"/>
                <polyline points="30,32 60,52 30,72" fill="none" stroke="#E8EAED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.18"/>
                <polyline points="43,32 73,52 43,72" fill="none" stroke="#E8EAED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.48"/>
                <polyline points="56,32 86,52 56,72" fill="none" stroke="#E8EAED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-semibold text-xl tracking-tight text-[#E8EAED]">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-4 text-muted/70 text-sm leading-relaxed max-w-sm">
              AI-powered deal intelligence for commercial real estate investors.
              We surface distressed opportunities before they hit the market.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-3">
            <h4 className="text-xs font-medium uppercase tracking-widest text-muted/50 mb-2">Contact</h4>
            <a href={`mailto:${SITE.email}`} className="text-muted hover:text-[#E8EAED] transition-colors duration-200 text-sm">{SITE.email}</a>
            <a href={`tel:${SITE.phone}`} className="text-muted hover:text-[#E8EAED] transition-colors duration-200 text-sm">{SITE.phone}</a>
            <Link href="/book-a-call" className="text-gold hover:text-gold-light transition-colors duration-200 text-sm font-medium mt-2">Book a Call</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-muted/50 text-sm">&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
