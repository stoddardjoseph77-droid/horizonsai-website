interface CardProps {
  icon: string;
  title: string;
  description: string;
  variant?: "light" | "dark";
  timing?: string;
}

const iconMap: Record<string, string> = {
  workflow: "\u2699\ufe0f",
  message: "\u2709\ufe0f",
  chart: "\ud83d\udcca",
  phone: "\ud83d\udcde",
  file: "\ud83d\udcc4",
  building: "\ud83c\udfe2",
  newspaper: "\ud83d\udcf0",
  bank: "\ud83c\udfe6",
  trending: "\ud83d\udcc8",
  alert: "\u26a0\ufe0f",
  document: "\ud83d\udcd1",
  table: "\ud83d\udcca",
  mail: "\ud83d\udce7",
  calculator: "\ud83e\uddee",
};

export default function Card({
  icon,
  title,
  description,
  variant = "light",
  timing,
}: CardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`${isDark ? "glass-card p-8 glow-border card-accent" : "glass-card-light p-8 glow-border card-accent"} h-full`}
    >
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 ${
          isDark ? "bg-brand-primary/10" : "bg-brand-primary/[0.07]"
        }`}
      >
        {iconMap[icon] || "\ud83d\udd39"}
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
