import type { Metadata } from "next";
import {
  CRE_HERO,
  CRE_STATS,
  CRE_PROBLEMS,
  CRE_DATA_SOURCES,
  CRE_DELIVERABLES,
  CRE_ADDITIONAL,
  CRE_PROCESS,
  CRE_FAQ,
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

export const metadata: Metadata = {
  title: "Commercial Real Estate | HorizonsAI",
  description: CRE_HERO.subtext,
};

const pipelinePhases = [
  { label: "Data Sources", detail: "SEC, County, News, FDIC, mREITs, 8-K" },
  { label: "Enrichment", detail: "Clean, normalize, deduplicate" },
  { label: "Deal Finding", detail: "AI scoring & ranking" },
  { label: "Report Generation", detail: "PDF digest & live sheet" },
  { label: "Delivery", detail: "Weekly to your inbox" },
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
              title="6 Public Data Sources"
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

      {/* 7. Additional Services */}
      <section className="bg-dark-deep py-24 md:py-36 relative overflow-hidden">
        <div className="gradient-blob gradient-blob-secondary absolute top-1/2 -right-40 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="Add-Ons"
              title="Additional Services"
              subtitle="Extend your pipeline with these optional capabilities."
              dark={true}
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CRE_ADDITIONAL.map((item, index) => (
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

      {/* 9. FAQ */}
      <section className="bg-dark-deep py-24 md:py-36">
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
