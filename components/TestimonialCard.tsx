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
    <div className={isDark ? "glass-card p-8" : "glass-card-light p-8"}>
      <div
        className={`text-5xl font-serif mb-4 ${
          isDark ? "text-gradient" : "text-brand-primary"
        }`}
      >
        &ldquo;
      </div>
      <p
        className={`text-sm leading-relaxed mb-6 ${
          isDark ? "text-white/70" : "text-text-secondary"
        }`}
      >
        {quote}
      </p>
      <div>
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
