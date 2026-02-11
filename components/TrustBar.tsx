"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

interface TrustBarProps {
  heading?: string;
  variant?: "dark" | "light";
}

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

export default function TrustBar({
  heading = "Partners We Work With",
  variant = "dark",
}: TrustBarProps) {
  const isDark = variant === "dark";

  return (
    <section className={isDark ? "py-12 bg-transparent" : "py-12 bg-light-secondary"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <p
            className={`text-center text-sm font-heading font-semibold uppercase tracking-wide mb-8 ${
              isDark ? "text-white/40" : "text-text-muted"
            }`}
          >
            {heading}
          </p>
        )}
        <Marquee
          speed={40}
          gradient={true}
          gradientColor={isDark ? "rgb(5, 5, 5)" : "rgb(249, 250, 251)"}
          gradientWidth={100}
          pauseOnHover={true}
        >
          {LOGOS.map(({ name, src }) => (
            <div
              key={name}
              className="px-8 flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-200 select-none cursor-default"
              title={name}
            >
              <Image
                src={src}
                alt={name}
                width={28}
                height={28}
                className={`shrink-0 ${isDark ? "grayscale brightness-[2]" : ""}`}
              />
              <span
                className={`text-sm font-heading font-semibold whitespace-nowrap ${
                  isDark ? "text-white/60" : "text-text-secondary"
                }`}
              >
                {name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
