import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call | HorizonsAI",
  description:
    "Book a 30-minute discovery call with HorizonsAI. No commitment required.",
};

export default function BookACallPage() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-text-primary mb-4">
          Book a Discovery Call
        </h1>
        <p className="text-text-secondary text-lg mb-12 max-w-xl mx-auto">
          30 minutes. No commitment. We&apos;ll discuss your current workflow
          and where AI can help.
        </p>

        {/* Calendly placeholder */}
        <div className="border-2 border-dashed border-light-border rounded-xl p-16 bg-light-secondary">
          <div className="text-text-muted">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-text-muted/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="font-heading font-semibold text-lg text-text-secondary mb-1">
              Calendly scheduling widget will be embedded here
            </p>
            <p className="text-sm text-text-muted">
              Replace this placeholder with your Calendly inline embed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
