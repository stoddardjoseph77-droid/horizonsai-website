"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const LOGOS = [
  { name: "OpenAI", src: "/logos/openai.svg" },
  { name: "Anthropic", src: "/logos/anthropic.svg" },
  { name: "Gemini", src: "/logos/googlegemini.svg" },
  { name: "n8n", src: "/logos/n8n.svg" },
  { name: "Zapier", src: "/logos/zapier.svg" },
  { name: "Gmail", src: "/logos/gmail.svg" },
  { name: "Google Drive", src: "/logos/googledrive.svg" },
  { name: "Excel", src: "/logos/microsoftexcel.svg" },
  { name: "HubSpot", src: "/logos/hubspot.svg" },
  { name: "Airtable", src: "/logos/airtable.svg" },
];

export default function TrustBar() {
  return (
    <section className="py-8 md:py-14 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] mb-10 text-muted/40">Our Partners</p>
        <Marquee speed={30} gradient={true} gradientColor="rgb(11, 22, 34)" gradientWidth={80} pauseOnHover={true}>
          {[...LOGOS, ...LOGOS].map(({ name, src }, i) => (
            <div key={`${name}-${i}`} className="mx-10 flex items-center justify-center" title={name}>
              <Image src={src} alt={name} width={36} height={36} className="shrink-0 brightness-0 invert opacity-25 hover:opacity-50 transition-opacity duration-300" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
