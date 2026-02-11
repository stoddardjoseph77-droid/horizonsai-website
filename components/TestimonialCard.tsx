interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  variant?: "dark" | "light";
}

export default function TestimonialCard({
  quote,
  name,
  role,
  variant = "dark",
}: TestimonialCardProps) {
  const isDark = variant === "dark";

  return (
    <div className={`${isDark ? "glass-card p-8 shimmer-border" : "glass-card-light p-8"} h-full flex flex-col`}>
      <div
        className={`text-5xl font-serif leading-none mb-3 ${
          isDark ? "text-gradient" : "text-brand-primary"
        }`}
      >
        &ldquo;
      </div>
      <p
        className={`text-sm leading-relaxed mb-6 flex-1 ${
          isDark ? "text-white/70" : "text-text-secondary"
        }`}
      >
        {quote}
      </p>
      <div className={`pt-4 border-t ${isDark ? "border-white/[0.06]" : "border-light-border"}`}>
        <p
          className={`font-heading font-semibold ${
            isDark ? "text-text-on-dark" : "text-text-primary"
          }`}
        >
          {name}
        </p>
        <p
          className={`text-sm ${
            isDark ? "text-white/50" : "text-text-muted"
          }`}
        >
          {role}
        </p>
      </div>
    </div>
  );
}
