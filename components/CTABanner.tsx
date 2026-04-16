import Button from "./Button";
import { EVENTS } from "@/lib/analytics";

interface CTABannerProps {
  headline: string;
  subtext?: string;
  ctaText: string;
  ctaHref: string;
  location?: string;
}

export default function CTABanner({ headline, subtext, ctaText, ctaHref, location = "cta_banner" }: CTABannerProps) {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden bg-surface" data-section="cta_banner">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[600px] h-[300px] bg-gold/[0.06] rounded-full blur-[120px]" />
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h2 className="font-semibold text-4xl md:text-5xl tracking-tighter leading-none text-[#E8EAED] mb-5">{headline}</h2>
          {subtext && <p className="text-muted text-lg mb-10 max-w-xl">{subtext}</p>}
          <Button
            href={ctaHref}
            size="lg"
            trackEvent={EVENTS.CTA_CLICKED}
            trackProps={{ location, label: ctaText, href: ctaHref }}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
