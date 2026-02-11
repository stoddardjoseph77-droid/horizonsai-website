import type { Metadata } from "next";
import {
  RE_HERO,
  RE_PROBLEMS,
  RE_SERVICES,
  RE_BENEFITS,
  RE_PROCESS,
  RE_TESTIMONIALS,
  RE_FAQ,
  ABOUT_TEXT,
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

export const metadata: Metadata = {
  title: "Real Estate Agencies | HorizonsAI",
  description: RE_HERO.subtext,
};

export default function RealEstatePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero-gradient py-24 md:py-40 relative overflow-hidden">
        <div className="gradient-blob gradient-blob-primary -top-40 -left-20" />
        <div className="gradient-blob gradient-blob-secondary top-20 -right-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
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
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="text-text-on-dark/50 text-sm mt-6">
              {RE_HERO.proofText}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <TrustBar variant="dark" />

      <div className="section-divider" />

      {/* 3. Problem / Solution */}
      <section className="bg-dark-deep py-24 md:py-36 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              label="The Problem"
              title="Sound Familiar?"
              subtitle="These are the challenges we hear from agencies every week."
              dark={true}
            />
          </AnimateIn>
          <ProblemSolution items={RE_PROBLEMS} variant="dark" />
        </div>
      </section>

      <div className="section-divider" />

      {/* 4. Services */}
      <section className="bg-[#0A0A1A] py-24 md:py-36 relative overflow-hidden grid-pattern">
        <div className="gradient-blob gradient-blob-primary -top-20 -right-40" />
        <div className="gradient-blob gradient-blob-secondary bottom-0 -left-20" />
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
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 5. Benefits */}
      <section className="bg-dark-deep py-24 md:py-36">
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
                <div className="glass-card p-7 shimmer-border card-accent h-full">
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
      <section className="bg-[#0A0A1A] py-24 md:py-36 relative overflow-hidden">
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
              <div className="glass-card p-8 md:p-10">
                <p className="text-white/70 text-lg leading-relaxed">
                  {ABOUT_TEXT}
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 8. Testimonials */}
      <section className="bg-[#0A0A1A] py-24 md:py-36 relative overflow-hidden grid-pattern">
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
      <section className="bg-dark-deep py-24 md:py-36">
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
