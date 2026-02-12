import type { Metadata } from "next";
import {
  RE_HERO,
  RE_PROBLEMS,
  RE_SERVICES,
  RE_BENEFITS,
  RE_PROCESS,
  RE_TESTIMONIALS,
  RE_FAQ,
  ABOUT_TEXT_RE,
} from "@/lib/constants";
import Button from "@/components/Button";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import ProcessStep from "@/components/ProcessStep";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import AnimateIn from "@/components/AnimateIn";
import Image from "next/image";
import ChatMockup from "@/components/ChatMockup";
import DashboardMockup from "@/components/DashboardMockup";
import HeroSilhouette from "@/components/HeroSilhouette";
import SectionAccent from "@/components/SectionAccent";
import HeroStats from "@/components/HeroStats";

export const metadata: Metadata = {
  title: "Real Estate Agencies | HorizonsAI",
  description: RE_HERO.subtext,
};

export default function RealEstatePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero-gradient py-20 md:py-40 relative overflow-hidden">
        <div className="gradient-blob gradient-blob-primary -top-40 -left-20" />
        <div className="gradient-blob gradient-blob-secondary top-20 -right-40" />
        <HeroSilhouette variant="residential" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-white/60 text-xs font-medium tracking-wide">Trusted by Founders Worldwide</span>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-text-on-dark mb-6">
              {RE_HERO.headline}
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-text-on-dark/70 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              {RE_HERO.subtext}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Button href="/book-a-call" size="lg">
              {RE_HERO.cta}
            </Button>
            <p className="text-text-on-dark/50 text-sm mt-4">
              {RE_HERO.proofText}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <HeroStats />
          </AnimateIn>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <TrustBar variant="dark" />

      <div className="section-divider" />

      {/* 3. Problem / Solution */}
      <section className="bg-dark-deep py-16 md:py-36 relative overflow-hidden">
        <SectionAccent icon="search" position="top-right" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              label="Problem / Solution"
              title="Where Most Agencies Get Stuck — And How We Fix It"
              dark={true}
            />
          </AnimateIn>
          <ProblemSolution items={RE_PROBLEMS} variant="dark" />
        </div>
      </section>

      <div className="section-divider" />

      {/* 3.5 AI Agent Chat Preview */}
      <section className="bg-[#0A0A1A] py-16 md:py-36 relative overflow-hidden dashboard-dots">
        <div className="gradient-blob gradient-blob-secondary -top-40 -right-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="See It In Action"
              title="AI That Qualifies Leads Instantly"
              subtitle="Our AI agent responds in under 60 seconds — qualifying buyers and routing warm leads to your team."
              dark={true}
            />
          </AnimateIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn delay={0.1}>
              <div className="mockup-float-left rounded-[2.5rem]">
                <ChatMockup />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="space-y-6">
                <div className="glass-card p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                  </div>
                  <div>
                    <p className="text-text-on-dark font-heading font-semibold text-sm">Qualified in 47 Seconds</p>
                    <p className="text-white/50 text-xs">Budget, timeline, and area confirmed automatically</p>
                  </div>
                </div>
                <div className="glass-card p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4v5h5M20 20v-5h-5" /><path d="M20.49 9A9 9 0 005.64 5.64L4 4m16 16l-1.64-1.64A9 9 0 013.51 15" /></svg>
                  </div>
                  <div>
                    <p className="text-text-on-dark font-heading font-semibold text-sm">Auto-Synced to CRM</p>
                    <p className="text-white/50 text-xs">Lead data flows directly into your pipeline</p>
                  </div>
                </div>
                <div className="glass-card p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-text-on-dark font-heading font-semibold text-sm">Agent Notified Instantly</p>
                    <p className="text-white/50 text-xs">Warm leads routed to the right team member</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 4. Services */}
      <section className="bg-[#0A0A1A] py-16 md:py-36 relative overflow-hidden grid-pattern">
        <div className="gradient-blob gradient-blob-primary -top-20 -right-40" />
        <div className="gradient-blob gradient-blob-secondary bottom-0 -left-20" />
        <SectionAccent icon="gear" position="bottom-left" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="What We Build"
              title="Next-Gen AI Solutions"
              subtitle="Tailored automation systems designed specifically for real estate workflows."
              dark={true}
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RE_SERVICES.map((service, index) => (
              <AnimateIn key={service.title} delay={index * 0.1}>
                <Card
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  variant="dark"
                  accent
                  tags={service.tags}
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 4.5 Dashboard Preview */}
      <section className="bg-dark-deep py-16 md:py-36 relative overflow-hidden">
        <div className="gradient-blob gradient-blob-primary -bottom-40 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="CRM Integration"
              title="Your CRM, Supercharged by AI"
              subtitle="Lead scores, qualification notes, and follow-up status — synced directly into your existing CRM in real time."
              dark={true}
            />
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <div className="mockup-float-center rounded-3xl max-w-5xl mx-auto">
              <DashboardMockup />
            </div>
          </AnimateIn>
        </div>
      </section>

      <div className="section-divider" />

      {/* 5. Benefits */}
      <section className="bg-dark-deep py-16 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              label="Results"
              title="Experience the AI Advantage"
              dark={true}
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RE_BENEFITS.map((benefit, index) => (
              <AnimateIn key={benefit.title} delay={index * 0.1}>
                <div className="glass-card p-7 glow-border card-accent h-full">
                  <h3 className="font-heading font-semibold text-lg text-text-on-dark mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 6. Process */}
      <section className="bg-[#0A0A1A] py-16 md:py-36 relative overflow-hidden">
        <div className="gradient-blob gradient-blob-secondary -bottom-40 -left-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="How It Works"
              title="Our Proven Process"
              dark={true}
            />
          </AnimateIn>
          <div className="max-w-2xl mx-auto">
            {RE_PROCESS.map((proc, index) => (
              <AnimateIn key={proc.step} delay={index * 0.1}>
                <ProcessStep
                  step={proc.step}
                  title={proc.title}
                  description={proc.description}
                  isLast={index === RE_PROCESS.length - 1}
                  variant="dark"
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 7. About */}
      <section className="bg-dark-deep py-16 md:py-36 relative overflow-hidden">
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
                  {ABOUT_TEXT_RE}
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

      {/* 8. Testimonials */}
      <section className="bg-[#0A0A1A] py-16 md:py-36 relative overflow-hidden grid-pattern">
        <div className="gradient-blob gradient-blob-primary -top-40 -right-20" />
        <div className="gradient-blob gradient-blob-secondary -bottom-40 -left-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="Social Proof"
              title="What Our Clients Say"
              dark={true}
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RE_TESTIMONIALS.map((testimonial, index) => (
              <AnimateIn key={testimonial.name} delay={index * 0.1}>
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  variant="dark"
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 9. FAQ */}
      <section className="bg-dark-deep py-16 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            dark={true}
          />
          <FAQAccordion items={RE_FAQ} variant="dark" />
        </div>
      </section>

      {/* 10. CTA Banner */}
      <CTABanner
        headline="Book a free consultation with Joey"
        subtext="30 minutes. No commitment. Let's talk about how AI can transform your agency."
        ctaText="Book a Call"
        ctaHref="/book-a-call"
      />
    </>
  );
}
