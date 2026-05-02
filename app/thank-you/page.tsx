import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { CRE_FAQ, SITE } from "@/lib/constants";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import AnimateIn from "@/components/AnimateIn";
import ConfirmationDetails from "@/components/ConfirmationDetails";

export const metadata: Metadata = {
  title: "You're booked | HorizonsAI",
  description:
    "Your discovery call with HorizonsAI is confirmed. Here's what to expect, what to bring, and a note from a current client.",
  robots: { index: false, follow: false },
};

const PREP_BULLETS = [
  {
    title: "Your acquisition criteria",
    body: "Asset class, target markets, deal size range, and any hard filters you run today.",
  },
  {
    title: "How you source deals now",
    body: "Brokers, listing platforms, networks, your own outreach — whatever the current flow looks like.",
  },
  {
    title: "What 'good' looks like",
    body: "An example or two of recent deals you closed or chased — helps us calibrate scoring to your buy box.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      {/* ── 1. Hero ── Single column until thank-you video is recorded ── */}
      <section data-section="thank_you_hero" className="min-h-[80dvh] flex items-center relative overflow-hidden pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-900/[0.06] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <AnimateIn>
              <Suspense fallback={null}>
                <ConfirmationDetails />
              </Suspense>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 2. Prep ── What to have ready for the call ── */}
      <section data-section="thank_you_prep" className="py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="Before the call"
              title="What to have ready"
              subtitle="Thirty minutes goes fast. The more we know going in, the more useful we can be on the call."
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PREP_BULLETS.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.05}>
                <div className="glass p-7 h-full">
                  <div className="text-gold/80 text-xs font-mono tracking-wider mb-4">0{i + 1}</div>
                  <h3 className="font-semibold text-lg tracking-tight text-[#E8EAED] mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Testimonial / letter from a current client ── */}
      <section data-section="thank_you_testimonial" className="py-20 md:py-28 relative overflow-hidden bg-surface-raised/30">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold/[0.03] rounded-full blur-[140px]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <SectionHeading
              label="A note from a current client"
              title="Pioneer Acquisitions"
              subtitle="James Peterson, Principal at Pioneer Acquisitions ($750MM AUM), on what HorizonsAI has surfaced for them since launch."
            />
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <div className="max-w-3xl mx-auto">
              <div className="glass p-3 md:p-4">
                <div className="relative w-full overflow-hidden rounded-xl bg-white">
                  <Image
                    src="/pioneer-letter.png"
                    alt="Letter from James Peterson, Principal at Pioneer Acquisitions"
                    width={1200}
                    height={1553}
                    className="w-full h-auto"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── 4. FAQ ── */}
      <section data-section="thank_you_faq" className="py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <AnimateIn>
              <SectionHeading
                label="FAQ"
                title="Common questions"
                subtitle="Short answers now &mdash; full walkthroughs on the call. Video answers coming this week."
              />
            </AnimateIn>
            <AnimateIn delay={0.05}>
              <FAQAccordion items={CRE_FAQ} />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 5. Final note / contact ── */}
      <section data-section="thank_you_outro" className="py-20 md:py-28 relative overflow-hidden bg-surface">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <div className="w-[600px] h-[300px] bg-gold/[0.04] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-semibold text-3xl md:text-4xl tracking-tighter leading-tight text-[#E8EAED] mb-5">
              Anything urgent before we talk?
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl">
              If something comes up, or you want to send context ahead of time &mdash; criteria, recent deals, links &mdash; just reply to the confirmation email or send it straight to me.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 text-[#E8EAED] font-medium border-b border-white/20 hover:border-white/60 pb-1 transition-colors"
            >
              {SITE.email}
              <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
