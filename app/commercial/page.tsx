import type { Metadata } from "next";
import {
  CRE_HERO,
  CRE_STATS,
  CRE_PROBLEMS,
  CRE_DATA_SOURCES,
  CRE_DELIVERABLES,
  CRE_PROCESS,
  CRE_FAQ,
  ABOUT_TEXT,
} from "@/lib/constants";
import Button from "@/components/Button";
import StatsBar from "@/components/StatsBar";
import ProblemSolution from "@/components/ProblemSolution";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import ProcessStep from "@/components/ProcessStep";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import TrustBar from "@/components/TrustBar";
import AnimateIn from "@/components/AnimateIn";
import Image from "next/image";
import DealCard from "@/components/DealCard";
import PipelineTable from "@/components/PipelineTable";
import EmailDigestMockup from "@/components/EmailDigestMockup";
import InboxMonitorMockup from "@/components/InboxMonitorMockup";
import UnderwritingMockup from "@/components/UnderwritingMockup";

export const metadata: Metadata = {
  title: "Commercial Real Estate | HorizonsAI",
  description: CRE_HERO.subtext,
};

const pipelinePhases = [
  { label: "Data Sources", detail: "SEC, County, News, FDIC, mREITs, 8-K" },
  { label: "Enrichment", detail: "Clean, normalize, deduplicate" },
  { label: "Deal Finding", detail: "AI scoring & ranking" },
  { label: "Report Generation", detail: "PDF digest & live dashboard" },
  { label: "Delivery", detail: "Live dashboard + weekly PDF" },
];

export default function CommercialPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero-gradient py-28 md:py-44 relative overflow-hidden">
        <div className="gradient-blob gradient-blob-primary -top-40 -left-20" />
        <div className="gradient-blob gradient-blob-secondary top-20 -right-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-text-on-dark mb-6 leading-tight">
              {CRE_HERO.headline}
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-text-on-dark/70 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              {CRE_HERO.subtext}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Button href="/book-a-call" size="lg">
              {CRE_HERO.cta}
            </Button>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="text-text-on-dark/50 text-sm mt-6">
              {CRE_HERO.proofText}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <StatsBar stats={CRE_STATS} variant="dark" />

      {/* Trust Bar */}
      <TrustBar variant="dark" />

      <div className="section-divider" />

      {/* 3. Problem / Solution */}
      <section className="bg-dark-deep py-24 md:py-36 relative overflow-hidden">
        <div className="gradient-blob gradient-blob-primary absolute -top-40 -right-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="The Problem"
              title="Manual Deal Sourcing Is Costing You"
              subtitle="Most CRE investors are still relying on outdated methods to find distressed opportunities."
              dark={true}
            />
          </AnimateIn>
          <ProblemSolution items={CRE_PROBLEMS} variant="dark" />
        </div>
      </section>

      <div className="section-divider" />

      {/* 4. System Overview - Pipeline */}
      <section className="bg-[#0A0A1A] py-24 md:py-36 relative overflow-hidden grid-pattern">
        <div className="gradient-blob gradient-blob-secondary absolute -bottom-40 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="System Overview"
              title="How It Works"
              subtitle="A fully automated pipeline from public data to actionable deal reports."
              dark={true}
            />
          </AnimateIn>
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-0">
            {pipelinePhases.map((phase, index) => (
              <AnimateIn key={phase.label} delay={index * 0.12}>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="glass-card p-5 text-center min-w-[150px] glow-border card-accent">
                    <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center mx-auto mb-2">
                      <span className="text-brand-primary font-heading font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="font-heading font-semibold text-text-on-dark text-sm mb-1">
                      {phase.label}
                    </div>
                    <div className="text-white/50 text-xs">
                      {phase.detail}
                    </div>
                  </div>
                  {index < pipelinePhases.length - 1 && (
                    <div className="hidden md:flex items-center px-2">
                      <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                  {index < pipelinePhases.length - 1 && (
                    <div className="flex md:hidden items-center justify-center py-2">
                      <svg className="w-5 h-5 text-brand-primary rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 5. Data Sources */}
      <section className="bg-dark-deep py-24 md:py-36 relative overflow-hidden">
        <div className="gradient-blob gradient-blob-primary absolute -top-20 -left-40" />
        <div className="gradient-blob gradient-blob-secondary absolute -bottom-20 -right-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="Data"
              title="Core Data Sources"
              subtitle="We aggregate and analyze data from the most reliable public sources in commercial real estate."
              dark={true}
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CRE_DATA_SOURCES.map((source, index) => (
              <AnimateIn key={source.title} delay={index * 0.1}>
                <Card
                  icon={source.icon}
                  title={source.title}
                  description={source.description}
                  timing={source.timing}
                  variant="dark"
                />
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.7}>
            <p className="text-center text-white/40 text-sm mt-8 max-w-2xl mx-auto">
              These are just the starting point. Our pipeline is fully customizable — we can add additional data sources based on your target market, asset class, and investment criteria.
            </p>
          </AnimateIn>
        </div>
      </section>

      <div className="section-divider" />

      {/* 6. What You Receive */}
      <section className="bg-[#0A0A1A] py-24 md:py-36 relative overflow-hidden grid-pattern">
        <div className="gradient-blob gradient-blob-primary absolute -top-40 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="Deliverables"
              title="What You Receive"
              subtitle="Professional reports and a live pipeline, delivered weekly."
              dark={true}
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CRE_DELIVERABLES.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 0.1}>
                <Card
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  variant="dark"
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 6.5 Deal Preview Snapshots */}
      <section className="bg-dark-deep py-24 md:py-36 relative overflow-hidden">
        <div className="gradient-blob gradient-blob-primary -top-40 -left-40" />
        <div className="gradient-blob gradient-blob-secondary -bottom-40 -right-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="Example Output"
              title="What a Scored Deal Looks Like"
              subtitle="Every opportunity is ranked, annotated, and delivered with actionable commentary."
              dark={true}
            />
          </AnimateIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <AnimateIn delay={0.1}>
              <div className="mockup-float-left rounded-3xl">
                <DealCard />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="mockup-float-right rounded-3xl">
                <PipelineTable />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 7. Additional Services — Visual Mockups */}
      <section className="bg-[#0A0A1A] py-24 md:py-36 relative overflow-hidden grid-pattern">
        <div className="gradient-blob gradient-blob-secondary absolute top-1/2 -right-40 -translate-y-1/2" />
        <div className="gradient-blob gradient-blob-primary absolute -top-40 -left-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="Add-On Systems"
              title="Extend Your Pipeline"
              subtitle="Optional AI-powered capabilities that take your deal sourcing further."
              dark={true}
            />
          </AnimateIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AnimateIn delay={0.1}>
              <div>
                <h3 className="font-heading font-semibold text-lg text-text-on-dark mb-4">Broker Email Intelligence</h3>
                <p className="text-white/50 text-sm mb-6">We scan your inbox so you never miss a deal from your broker network.</p>
                <div className="mockup-float-left rounded-3xl">
                  <InboxMonitorMockup />
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div>
                <h3 className="font-heading font-semibold text-lg text-text-on-dark mb-4">AI-Powered Underwriting</h3>
                <p className="text-white/50 text-sm mb-6">Preliminary analysis in seconds, not hours. Screen deals against your criteria instantly.</p>
                <div className="mockup-float-right rounded-3xl">
                  <UnderwritingMockup />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 8. Process */}
      <section className="bg-[#0A0A1A] py-24 md:py-36 relative overflow-hidden">
        <div className="gradient-blob gradient-blob-primary absolute -bottom-40 -left-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="Get Started"
              title="Getting Started"
              subtitle="Three simple steps to a fully automated deal pipeline."
              dark={true}
            />
          </AnimateIn>
          <div className="max-w-2xl mx-auto">
            {CRE_PROCESS.map((proc, index) => (
              <AnimateIn key={proc.step} delay={index * 0.1}>
                <ProcessStep
                  step={proc.step}
                  title={proc.title}
                  description={proc.description}
                  isLast={index === CRE_PROCESS.length - 1}
                  variant="dark"
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 8.5 Weekly Email Preview */}
      <section className="bg-dark-deep py-24 md:py-36 relative overflow-hidden">
        <div className="gradient-blob gradient-blob-primary -top-40 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="Delivery"
              title="Delivered Every Monday"
              subtitle="No searching. No manual work. Just open your inbox."
              dark={true}
            />
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <div className="mockup-float-center rounded-3xl max-w-2xl mx-auto">
              <EmailDigestMockup />
            </div>
          </AnimateIn>
        </div>
      </section>

      <div className="section-divider" />

      {/* 9. About */}
      <section className="bg-dark-deep py-24 md:py-36 relative overflow-hidden">
        <div className="gradient-blob gradient-blob-primary -top-40 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateIn>
              <SectionHeading
                label="About"
                title="Meet the Founder"
                dark={true}
              />
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="glass-card p-10 md:p-14 flex flex-col items-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/10 mb-8 ring-2 ring-brand-primary/20 ring-offset-4 ring-offset-transparent">
                  <Image
                    src="/joey.jpg"
                    alt="Joey Stoddard"
                    width={192}
                    height={192}
                    className="object-cover object-top w-full h-full scale-[1.3]"
                  />
                </div>
                <h3 className="font-heading font-semibold text-xl text-text-on-dark mb-1">Joey Stoddard</h3>
                <p className="text-brand-primary text-sm mb-6">Founder, HorizonsAI</p>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {ABOUT_TEXT}
                </p>
                <a
                  href="https://www.linkedin.com/in/joey-stoddard-8a2b78357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/60 hover:text-brand-primary hover:border-brand-primary/30 hover:bg-brand-primary/[0.06] transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm font-medium">Connect on LinkedIn</span>
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 10. FAQ */}
      <section className="bg-[#0A0A1A] py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            dark={true}
          />
          <FAQAccordion items={CRE_FAQ} variant="dark" />
        </div>
      </section>

      {/* 10. CTA Banner */}
      <CTABanner
        headline="Get Ahead of the Market"
        subtext="Start receiving scored distressed opportunities before your competitors find them."
        ctaText="Book a Call"
        ctaHref="/book-a-call"
      />
    </>
  );
}
