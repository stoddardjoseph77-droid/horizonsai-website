"use client";

import Marquee from "react-fast-marquee";

interface TrustBarProps {
  heading?: string;
}

function ClaudeLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4L8 12V28L20 36L32 28V12L20 4Z" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="14" y="25" fontSize="16" fontWeight="bold" fill="currentColor">A</text>
    </svg>
  );
}

function OpenAILogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
      <polygon points="20,8 28.5,13 28.5,23 20,28 11.5,23 11.5,13" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function N8nLogo() {
  return (
    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="27" fontSize="18" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">n8n</text>
    </svg>
  );
}

function ZapierLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8H28L16 32H28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function GoogleSheetsLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="4" width="24" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="8" y1="14" x2="32" y2="14" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="22" x2="32" y2="22" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="30" x2="32" y2="30" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="14" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function GmailLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M4 10L20 22L36 10" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

function ExcelLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="4" width="24" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M14 14L26 26M26 14L14 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function HubSpotLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="20" cy="12" r="2.5" fill="currentColor" />
      <circle cx="13" cy="24" r="2.5" fill="currentColor" />
      <circle cx="27" cy="24" r="2.5" fill="currentColor" />
      <line x1="20" y1="14.5" x2="14.5" y2="22" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="14.5" x2="25.5" y2="22" stroke="currentColor" strokeWidth="1.5" />
      <line x1="15.5" y1="24" x2="24.5" y2="24" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function AirtableLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L34 20L20 34L6 20L20 6Z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M20 12L28 20L20 28L12 20L20 12Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function FollowUpBossLogo() {
  return (
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="27" fontSize="16" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">FUB</text>
    </svg>
  );
}

const LOGOS = [
  { name: "Claude", Component: ClaudeLogo },
  { name: "OpenAI", Component: OpenAILogo },
  { name: "n8n", Component: N8nLogo },
  { name: "Zapier", Component: ZapierLogo },
  { name: "Google Sheets", Component: GoogleSheetsLogo },
  { name: "Gmail", Component: GmailLogo },
  { name: "Excel", Component: ExcelLogo },
  { name: "HubSpot", Component: HubSpotLogo },
  { name: "Airtable", Component: AirtableLogo },
  { name: "Follow Up Boss", Component: FollowUpBossLogo },
];

export default function TrustBar({
  heading = "Tools & Partners We Work With",
}: TrustBarProps) {
  return (
    <section className="py-12 bg-light-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <p className="text-center text-text-muted text-sm font-heading font-semibold uppercase tracking-wide mb-8">
            {heading}
          </p>
        )}
        <Marquee
          speed={40}
          gradient={true}
          gradientColor="rgb(249, 250, 251)"
          gradientWidth={100}
          pauseOnHover={true}
        >
          {LOGOS.map(({ name, Component }) => (
            <div
              key={name}
              className="px-8 flex items-center gap-2 text-text-secondary opacity-60 hover:opacity-100 transition-opacity duration-200 select-none cursor-default"
              title={name}
            >
              <Component />
              <span className="text-sm font-heading font-semibold whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
