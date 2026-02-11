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

export const metadata: Metadata = {
  title: "Real Estate Agencies | HorizonsAI",
  description: RE_HERO.subtext,
};

export default function RealEstatePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-dark-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-text-on-dark mb-6">
            {RE_HERO.headline}
          </h1>
          <p className="text-text-on-dark/70 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            {RE_HERO.subtext}
          </p>
          <Button href="/book-a-call" size="lg">
            {RE_HERO.cta}
          </Button>
          <p className="text-text-on-dark/50 text-sm mt-6">
            {RE_HERO.proofText}
          </p>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Problem / Solution */}
      <section className="py-16 md:py-24 bg-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Problem"
            title="Sound Familiar?"
            subtitle="These are the challenges we hear from agencies every week."
          />
          <ProblemSolution items={RE_PROBLEMS} />
        </div>
      </section>

      {/* 4. Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Build"
            title="Next-Gen AI Solutions"
            subtitle="Tailored automation systems designed specifically for real estate workflows."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RE_SERVICES.map((service) => (
              <Card
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits */}
      <section className="py-16 md:py-24 bg-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Results"
            title="Experience the AI Advantage"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RE_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl border border-light-border p-6 hover:shadow-lg hover:border-brand-primary/30 transition-all duration-200"
              >
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How It Works"
            title="Our Proven Process"
          />
          <div className="max-w-2xl mx-auto">
            {RE_PROCESS.map((proc, index) => (
              <ProcessStep
                key={proc.step}
                step={proc.step}
                title={proc.title}
                description={proc.description}
                isLast={index === RE_PROCESS.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. About */}
      <section className="py-16 md:py-24 bg-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="About"
              title="Meet the Founder"
            />
            <p className="text-text-secondary text-lg leading-relaxed">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Social Proof"
            title="What Our Clients Say"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RE_TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
              />
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
          <FAQAccordion items={RE_FAQ} />
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
