interface CardProps {
  icon: string;
  title: string;
  description: string;
  variant?: "light" | "dark";
  timing?: string;
  accent?: boolean;
}

function IconSvg({ name }: { name: string }) {
  const props = {
    className: "w-6 h-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "workflow":
      return (
        <svg {...props}>
          <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      );
    case "message":
      return (
        <svg {...props}>
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case "chart":
      return (
        <svg {...props}>
          <path d="M3 3v18h18" />
          <path d="M7 16l4-4 4 4 6-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      );
    case "file":
      return (
        <svg {...props}>
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case "building":
      return (
        <svg {...props}>
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "newspaper":
      return (
        <svg {...props}>
          <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6" />
        </svg>
      );
    case "bank":
      return (
        <svg {...props}>
          <path d="M12 3L2 9h20L12 3z" />
          <path d="M4 9v9m4-9v9m4-9v9m4-9v9m4-9v9" />
          <path d="M2 18h20v3H2v-3z" />
        </svg>
      );
    case "trending":
      return (
        <svg {...props}>
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case "alert":
      return (
        <svg {...props}>
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    case "document":
      return (
        <svg {...props}>
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case "table":
      return (
        <svg {...props}>
          <path d="M3 10h18M3 14h18M10 3v18M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "calculator":
      return (
        <svg {...props}>
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 6h8M8 10h2m4 0h2M8 14h2m4 0h2M8 18h2m4 0h2" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
}

export default function Card({
  icon,
  title,
  description,
  variant = "light",
  timing,
  accent,
}: CardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`${isDark ? "glass-card p-8 glow-border card-accent" : "glass-card-light p-8 glow-border card-accent"} h-full${accent ? " border-l-2 border-l-brand-primary" : ""}`}
    >
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-brand-primary ${
          isDark ? "bg-brand-primary/10" : "bg-brand-primary/[0.07]"
        }`}
      >
        <IconSvg name={icon} />
      </div>
      <h3
        className={`font-heading font-semibold text-lg mb-3 ${
          isDark ? "text-text-on-dark" : "text-text-primary"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          isDark ? "text-white/60" : "text-text-secondary"
        }`}
      >
        {description}
      </p>
      {timing && (
        <span className="inline-block mt-4 text-xs font-semibold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
          {timing}
        </span>
      )}
    </div>
  );
}
