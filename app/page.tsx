import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import Button from "@/components/Button";
import TrustBar from "@/components/TrustBar";
import CTABanner from "@/components/CTABanner";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "HorizonsAI | AI Automation for Real Estate",
  description: SITE.description,
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="hero-gradient py-28 md:py-44 relative overflow-hidden">
        <div className="gradient-blob gradient-blob-primary -top-40 -left-20" />
        <div className="gradient-blob gradient-blob-secondary top-20 -right-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-text-on-dark mb-6 leading-tight">
              {SITE.tagline}
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-text-on-dark/70 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              {SITE.description}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Button href="/book-a-call" size="lg">
              Book a Free Consultation
            </Button>
          </AnimateIn>
        </div>
      </section>

      {/* ── Two Service Cards ── */}
      <section className="bg-dark-deep py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateIn delay={0}>
              <Link
                href="/real-estate"
                className="group block glass-card p-8 md:p-10 shimmer-border"
              >
                <div className="text-4xl mb-4">🏠</div>
                <h2 className="font-heading font-bold text-2xl text-text-on-dark mb-3 group-hover:text-brand-primary transition-colors">
                  For Real Estate Agencies
                </h2>
                <p className="text-white/60 leading-relaxed">
                  AI agents that qualify leads, automate follow-ups, and deliver
                  real-time reporting dashboards for real estate agencies.
                </p>
                <span className="inline-block mt-6 text-brand-primary font-heading font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Learn more &rarr;
                </span>
              </Link>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <Link
                href="/commercial"
                className="group block glass-card p-8 md:p-10 shimmer-border"
              >
                <div className="text-4xl mb-4">🏢</div>
                <h2 className="font-heading font-bold text-2xl text-text-on-dark mb-3 group-hover:text-brand-primary transition-colors">
                  For Commercial Real Estate
                </h2>
                <p className="text-white/60 leading-relaxed">
                  AI-powered distressed deal sourcing from SEC filings, county
                  records, and CRE news &mdash; delivered to your inbox weekly.
                </p>
                <span className="inline-block mt-6 text-brand-primary font-heading font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Learn more &rarr;
                </span>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Trust Bar ── */}
      <TrustBar heading="Partners We Work With" variant="dark" />

      <div className="section-divider" />

      {/* ── 3-Column Value Prop ── */}
      <section className="bg-[#0A0A1A] py-24 md:py-36 relative overflow-hidden">
        <div className="gradient-blob gradient-blob-primary -bottom-40 -right-20" />
        <div className="gradient-blob gradient-blob-secondary -top-20 -left-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimateIn delay={0}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-xl text-text-on-dark mb-3">
                  Qualify Leads Instantly
                </h3>
                <p className="text-white/60 leading-relaxed">
                  AI agents respond in under 60 seconds, qualifying buyers and
                  routing warm leads to your team automatically.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-xl text-text-on-dark mb-3">
                  Automate Operations
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Replace manual data entry, follow-ups, and reporting with
                  seamless AI-powered workflows.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-xl text-text-on-dark mb-3">
                  Data-Driven Decisions
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Real-time dashboards and automated reports give you clarity on
                  pipeline health, conversion rates, and ROI.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner
        headline="Ready to see what AI can do for your business?"
        subtext="Book a free 30-minute consultation. No commitment required."
        ctaText="Get Started"
        ctaHref="/book-a-call"
      />
    </>
  );
}
