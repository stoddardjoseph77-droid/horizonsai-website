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
  const isLight = variant === "light";

  return (
    <div
      className={`rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl ${
        isLight
          ? "bg-white border border-light-border hover:border-brand-primary/30"
          : "bg-dark-surface border border-dark-border hover:border-brand-primary/50"
      }`}
    >
      <div className="text-3xl mb-4">{iconMap[icon] || "\ud83d\udd39"}</div>
      <h3
        className={`font-heading font-semibold text-lg mb-2 ${
          isLight ? "text-text-primary" : "text-text-on-dark"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          isLight ? "text-text-secondary" : "text-text-on-dark/70"
        }`}
      >
        {description}
      </p>
      {timing && (
        <span className="inline-block mt-3 text-xs font-semibold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
          {timing}
        </span>
      )}
    </div>
  );
}
