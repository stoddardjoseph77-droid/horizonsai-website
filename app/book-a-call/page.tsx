import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call | HorizonsAI",
  description:
    "Book a 30-minute discovery call with HorizonsAI. No commitment required.",
};

export default function BookACallPage() {
  return (
    <section className="dark-section py-24 md:py-40 relative overflow-hidden">
      <div className="gradient-blob gradient-blob-primary -top-40 -left-20" />
      <div className="gradient-blob gradient-blob-secondary bottom-0 -right-40" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-text-on-dark mb-4">
          Book a Discovery Call
        </h1>
        <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
          30 minutes. No commitment. We&apos;ll discuss your current workflow
          and where AI can help.
        </p>

        {/* Calendly Embed */}
        <div className="glass-card overflow-hidden" style={{ minHeight: "min(700px, 80vh)" }}>
          <iframe
            src="https://calendly.com/stoddardjoseph77/exploration-call?background_color=0a0a1a&text_color=f9fafb&primary_color=6d7aff"
            width="100%"
            height="700"
            frameBorder="0"
            title="Schedule a call with HorizonsAI"
            className="rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
