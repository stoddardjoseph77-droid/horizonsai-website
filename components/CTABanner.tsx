import Button from "./Button";

interface CTABannerProps {
  headline: string;
  subtext?: string;
  ctaText: string;
  ctaHref: string;
  dark?: boolean;
}

export default function CTABanner({
  headline,
  subtext,
  ctaText,
  ctaHref,
  dark = true,
}: CTABannerProps) {
  return (
    <section
      className={`py-24 md:py-32 relative overflow-hidden ${
        dark ? "hero-gradient" : "bg-brand-primary"
      }`}
    >
      {/* Gradient blobs */}
      <div className="gradient-blob gradient-blob-primary -top-40 -left-40" />
      <div className="gradient-blob gradient-blob-secondary -bottom-40 -right-40" />

      {/* Radial glow overlay behind the text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-[600px] h-[300px] bg-brand-primary/15 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
          {headline}
        </h2>
        {subtext && (
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            {subtext}
          </p>
        )}
        <Button href={ctaHref} size="lg">
          {ctaText}
        </Button>
      </div>
    </section>
  );
}
