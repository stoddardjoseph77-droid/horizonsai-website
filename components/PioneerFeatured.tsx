import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { CRE_STATS } from "@/lib/constants";

export default function PioneerFeatured() {
  return (
    <section className="pt-8 pb-10 md:pt-10 md:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-gold/[0.03] rounded-full blur-[130px]" />
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <div className="glass max-w-5xl mx-auto p-6 md:p-10 lg:p-12">
            <div className="flex flex-col items-center text-center">
              <AnimateIn delay={0.05}>
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-white/[0.06] ring-1 ring-gold/10 mb-5">
                  <Image
                    src="/James-Profile.jpeg"
                    alt="James Peterson, Pioneer Acquisitions"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <p className="text-lg md:text-xl text-[#E8EAED] leading-snug tracking-tight mb-5 max-w-3xl">
                  &ldquo;The platform has surfaced hundreds of opportunities on and off market &mdash; deals that wouldn&rsquo;t have reached our desk otherwise.&rdquo;
                </p>
              </AnimateIn>
              <AnimateIn delay={0.15}>
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm">
                  <span className="font-semibold text-[#E8EAED]">James Peterson</span>
                  <span className="text-muted/50">·</span>
                  <span className="text-muted">Co-Founder, Pioneer Acquisitions</span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/[0.08] border border-accent/20 text-accent text-xs font-medium tracking-wide">
                    $750M+ AUM
                  </span>
                  <TrackedExternalLink
                    href="https://www.linkedin.com/in/james-peterson-803ab419/"
                    label="James Peterson LinkedIn"
                    location="pioneer_featured"
                    ariaLabel="James Peterson on LinkedIn"
                    className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] text-muted hover:text-gold hover:border-gold/20 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                  </TrackedExternalLink>
                </div>
              </AnimateIn>
            </div>

            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/[0.06]">
              <div className="grid grid-cols-3 gap-2 md:gap-8">
                {CRE_STATS.map((stat, i) => (
                  <AnimateIn key={stat.label} delay={0.2 + i * 0.08}>
                    <div className="text-center">
                      <div className="font-bold text-2xl md:text-3xl tracking-tighter text-gold font-mono mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-muted">{stat.label}</div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
