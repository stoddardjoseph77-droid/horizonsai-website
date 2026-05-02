import type { Metadata } from "next";
import CalendlyTracker from "@/components/CalendlyTracker";

export const metadata: Metadata = {
  title: "Book a Call | HorizonsAI",
  description:
    "Book a 30-minute discovery call with HorizonsAI. No commitment required.",
};

export default function BookACallPage() {
  return (
    <section data-section="calendly" className="dark-section py-16 md:py-24 relative overflow-hidden">
      <CalendlyTracker />
      <div className="gradient-blob gradient-blob-primary -top-40 -left-20" />
      <div className="gradient-blob gradient-blob-secondary bottom-0 -right-40" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-text-on-dark mb-12">
          Book a Discovery Call
        </h1>

        {/* Cal.com Embed */}
        <div className="glass-card overflow-hidden" style={{ minHeight: "min(700px, 80vh)" }}>
          <iframe
            src="https://cal.com/joey-stoddard-iy7cjz/20-minute-exploration-call?theme=dark"
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
