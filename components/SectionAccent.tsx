interface SectionAccentProps {
  icon: "search" | "gear" | "filing" | "report" | "building" | "chart";
  position?: "top-right" | "bottom-left";
}

export default function SectionAccent({
  icon,
  position = "top-right",
}: SectionAccentProps) {
  const positionClasses =
    position === "top-right"
      ? "top-10 right-10"
      : "bottom-10 left-10";

  const svgProps = {
    className: "w-full h-full",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 0.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };

  function renderIcon() {
    switch (icon) {
      case "search":
        return (
          <svg {...svgProps}>
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case "gear":
        return (
          <svg {...svgProps}>
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case "filing":
        return (
          <svg {...svgProps}>
            <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        );
      case "report":
        return (
          <svg {...svgProps}>
            <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case "building":
        return (
          <svg {...svgProps}>
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case "chart":
        return (
          <svg {...svgProps}>
            <path d="M3 3v18h18" />
            <path d="M7 16l4-4 4 4 6-6" />
          </svg>
        );
    }
  }

  return (
    <div
      className={`absolute ${positionClasses} w-48 h-48 md:w-64 md:h-64 text-white opacity-[0.03] pointer-events-none hidden md:block`}
      aria-hidden="true"
    >
      {renderIcon()}
    </div>
  );
}
