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
    <section
      className={`py-14 ${
        isDark ? "bg-transparent" : "bg-white border-y border-light-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <p
            className={`text-center text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-10 ${
              isDark ? "text-white/30" : "text-text-muted"
            }`}
          >
            {heading}
          </p>
        )}
        <Marquee
          speed={30}
          gradient={true}
          gradientColor={isDark ? "rgb(5, 5, 5)" : "rgb(255, 255, 255)"}
          gradientWidth={80}
          pauseOnHover={true}
        >
          {LOGOS.map(({ name, src }) => (
            <div
              key={name}
              className="mx-10 flex items-center justify-center"
              title={name}
            >
              <Image
                src={src}
                alt={name}
                width={40}
                height={40}
                className={`shrink-0 transition-all duration-300 ${
                  isDark
                    ? "brightness-0 invert opacity-40 hover:opacity-80"
                    : "grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
                }`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
