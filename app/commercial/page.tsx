import type { Metadata } from "next";
import {
  CRE_HERO,
  CRE_PROBLEMS,
  CRE_DATA_SOURCES,
  CRE_PROCESS,
  CRE_FAQ,
  ABOUT_TEXT_CRE,
} from "@/lib/constants";
import Button from "@/components/Button";
import ProblemSolution from "@/components/ProblemSolution";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import ProcessStep from "@/components/ProcessStep";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import TrustBar from "@/components/TrustBar";
import AnimateIn from "@/components/AnimateIn";
import Image from "next/image";
import BriefingDashboard from "@/components/BriefingDashboard";
import MarketIntel from "@/components/MarketIntel";
import OpportunityMapView from "@/components/OpportunityMapView";
import OpportunityMapViewMobile from "@/components/OpportunityMapViewMobile";
import PlatformViewer from "@/components/PlatformViewer";
import PioneerFeatured from "@/components/PioneerFeatured";

export const metadata: Metadata = {
  title: "HorizonsAI | AI Deal Intelligence for Commercial Real Estate",
  description: CRE_HERO.subtext,
};

const pipelinePhases = [
  { label: "Data Sources", detail: "CMBS, County, Brokers, News, REITs" },
  { label: "Enrichment", detail: "Clean, normalize, deduplicate" },
  { label: "AI Scoring", detail: "AI scoring & ranking" },
  { label: "Delivery", detail: "Live dashboard + weekly digest" },
];

export default function CommercialPage() {
  return (
    <>
      {/* ── 1. Hero ── Asymmetric split: text left, product right */}
      <section className="min-h-[100dvh] flex items-end lg:items-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-900/[0.06] rounded-full blur-[100px]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-12 lg:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <AnimateIn>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-muted text-xs font-medium tracking-wide">AI Deal Intelligence</span>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.05}>
                <p className="text-muted/60 text-sm md:text-base mb-4">Built for CRE investors and acquisitions teams.</p>
                <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-none text-[#E8EAED] mb-6">
                  {CRE_HERO.headline}
                </h1>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <p className="text-muted text-lg md:text-xl leading-relaxed max-w-[55ch] mb-8">
                  {CRE_HERO.subtext}
                </p>
              </AnimateIn>
              <AnimateIn delay={0.15}>
                <div className="flex flex-wrap items-center gap-4">
                  <Button href="/book-a-call" size="lg">{CRE_HERO.cta}</Button>
                  <span className="text-muted/50 text-sm md:text-base">{CRE_HERO.proofText}</span>
                </div>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.2} direction="right">
              <div className="hidden lg:block">
                <BriefingDashboard />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 2. Pioneer Featured Quote + Stats (unified proof band) ── */}
      <PioneerFeatured />

      {/* ── 3. Trust Bar ── */}
      <TrustBar />

      <div className="divider" />

      {/* ── 4. Platform Viewer ── */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="See the Platform"
              title="Three ways to find your next deal"
              subtitle="Search with AI, track your pipeline, or browse every scored opportunity."
            />
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <PlatformViewer />
          </AnimateIn>
        </div>
      </section>

      <div className="divider" />

      {/* ── 5. Full Opportunity View ── */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="Deep Dive"
              title="Full opportunity intelligence at a glance"
              subtitle="Every property comes with AI analysis, financial metrics, distress timeline, and an interactive satellite view — all in one panel."
            />
          </AnimateIn>
          <div className="hidden lg:block">
            <AnimateIn delay={0.1}>
              <OpportunityMapView />
            </AnimateIn>
          </div>
          <div className="lg:hidden">
            <AnimateIn delay={0.1}>
              <OpportunityMapViewMobile />
            </AnimateIn>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── 6. Problem / Solution ── */}
      <section className="py-16 md:py-36 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="Problem / Solution"
              title="What changes when AI takes over"
              subtitle="Most CRE investors rely on outdated, manual methods. Here is what your workflow looks like with an automated pipeline."
            />
          </AnimateIn>
          <ProblemSolution items={CRE_PROBLEMS} />
        </div>
      </section>

      <div className="divider" />

      {/* ── 6. Pipeline Overview ── */}
      <section className="py-16 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/[0.04] rounded-full blur-[140px]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="System Overview"
              title="From public data to actionable deals"
              subtitle="A fully automated pipeline monitors, enriches, scores, and delivers distressed opportunities."
            />
          </AnimateIn>
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-0">
            {pipelinePhases.map((phase, index) => (
              <AnimateIn key={phase.label} delay={index * 0.15}>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="relative p-6 md:p-8 text-center min-w-[180px] rounded-2xl border border-white/[0.08] bg-surface-raised/60 md:backdrop-blur-sm hover:border-accent/20 transition-colors duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors duration-300">
                      <span className="text-accent font-bold text-base font-mono">{index + 1}</span>
                    </div>
                    <div className="font-semibold text-[#E8EAED] text-sm mb-1">{phase.label}</div>
                    <div className="text-muted/50 text-xs">{phase.detail}</div>
                  </div>
                  {index < pipelinePhases.length - 1 && (
                    <>
                      <div className="hidden md:flex items-center px-3">
                        <svg className="w-5 h-5 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="flex md:hidden items-center justify-center py-2">
                        <svg className="w-5 h-5 text-accent/30 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── 7. Data Sources ── */}
      <section className="py-16 md:py-36 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="Data"
              title="Five core sources, one pipeline"
              subtitle="CMBS filings, county records, broker sites, CRE news, and major REITs — aggregated, cleaned, and scored automatically."
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CRE_DATA_SOURCES.map((source, index) => (
              <AnimateIn key={source.title} delay={index * 0.08}>
                <Card icon={source.icon} title={source.title} description={source.description} timing={source.timing} tags={source.tags} />
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.5}>
            <p className="text-muted/50 text-sm mt-8 max-w-xl">
              These are the starting point. Our pipeline is customizable — we add data sources based on your target market, asset class, and criteria.
            </p>
          </AnimateIn>
        </div>
      </section>

      <div className="divider hidden lg:block" />

      {/* ── 8. Market Intelligence ── */}
      <section className="hidden lg:block py-24 md:py-36 relative overflow-hidden grid-bg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="Market Intelligence"
              title="Analytics that drive decisions"
              subtitle="Track maturity walls, severity distributions, deal flow trends, and vacancy rates across every market you care about."
            />
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <MarketIntel />
          </AnimateIn>
        </div>
      </section>

      <div className="divider hidden lg:block" />


      {/* ── 10. Process ── */}
      <section className="py-16 md:py-36 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="Get Started"
              title="Three steps to a live pipeline"
              subtitle="From criteria to scored deals in under two weeks."
            />
          </AnimateIn>
          <div className="max-w-xl">
            {CRE_PROCESS.map((proc, index) => (
              <AnimateIn key={proc.step} delay={index * 0.1}>
                <ProcessStep step={proc.step} title={proc.title} description={proc.description} isLast={index === CRE_PROCESS.length - 1} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── 11. About ── */}
      <section className="py-16 md:py-36 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-start">
            <AnimateIn>
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border border-white/[0.06] ring-1 ring-gold/10">
                  <Image src="/joey.jpg" alt="Joey Stoddard" width={176} height={176} className="object-cover object-top w-full h-full scale-[1.3]" />
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div>
                <span className="text-gold text-xs font-medium uppercase tracking-widest mb-4 block">About</span>
                <h3 className="font-semibold text-2xl tracking-tight text-[#E8EAED] mb-1">Joey Stoddard</h3>
                <p className="text-gold text-sm mb-6">Founder, HorizonsAI</p>
                <p className="text-muted text-base leading-relaxed max-w-[55ch] mb-6">{ABOUT_TEXT_CRE}</p>
                <a href="https://www.linkedin.com/in/joey-stoddard-8a2b78357" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06] text-muted hover:text-gold hover:border-gold/20 transition-all duration-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── 12. FAQ ── */}
      <section className="py-16 md:py-36">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently asked questions" />
          <FAQAccordion items={CRE_FAQ} />
        </div>
      </section>

      {/* ── 13. CTA ── */}
      <CTABanner
        headline="Get ahead of the market"
        subtext="Start receiving scored distressed opportunities before your competitors find them."
        ctaText="Book a Call"
        ctaHref="/book-a-call"
      />
    </>
  );
}
