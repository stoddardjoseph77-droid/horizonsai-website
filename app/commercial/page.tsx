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
      <section className="hero-gradient py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-text-on-dark mb-6">
              {CRE_HERO.headline}
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-text-on-dark/70 text-lg md:text-xl max-w-3xl mx-auto mb-8">
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
      <StatsBar stats={CRE_STATS} />

      {/* 3. Problem / Solution */}
      <section className="py-16 md:py-24 bg-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              label="The Problem"
              title="Manual Deal Sourcing Is Costing You"
              subtitle="Most CRE investors are still relying on outdated methods to find distressed opportunities."
            />
          </AnimateIn>
          <ProblemSolution items={CRE_PROBLEMS} />
        </div>
      </section>

      {/* 4. System Overview - Pipeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              label="System Overview"
              title="How It Works"
              subtitle="A fully automated pipeline from public data to actionable deal reports."
            />
          </AnimateIn>
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-0">
            {pipelinePhases.map((phase, index) => (
              <AnimateIn key={phase.label} delay={index * 0.15}>
                <div className="flex items-center">
                  <div className="bg-light-secondary border border-light-border rounded-xl p-5 text-center min-w-[160px]">
                    <div className="font-heading font-semibold text-text-primary mb-1">
                      {phase.label}
                    </div>
                    <div className="text-text-muted text-xs">
                      {phase.detail}
                    </div>
                  </div>
                  {index < pipelinePhases.length - 1 && (
                    <div className="hidden md:flex items-center px-2">
                      <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                  {index < pipelinePhases.length - 1 && (
                    <div className="flex md:hidden items-center justify-center py-2">
                      <svg className="w-6 h-6 text-brand-primary rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* 5. Data Sources */}
      <section className="py-16 md:py-24 bg-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              label="Data"
              title="6 Public Data Sources"
              subtitle="We aggregate and analyze data from the most reliable public sources in commercial real estate."
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
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What You Receive */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              label="Deliverables"
              title="What You Receive"
              subtitle="Professional reports and a live pipeline, delivered weekly."
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CRE_DELIVERABLES.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 0.1}>
                <Card
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Additional Services */}
      <section className="py-16 md:py-24 bg-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              label="Add-Ons"
              title="Additional Services"
              subtitle="Extend your pipeline with these optional capabilities."
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CRE_ADDITIONAL.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 0.1}>
                <Card
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              label="Get Started"
              title="Getting Started"
              subtitle="Three simple steps to a fully automated deal pipeline."
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
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-16 md:py-24 bg-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
          />
          <FAQAccordion items={CRE_FAQ} />
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
