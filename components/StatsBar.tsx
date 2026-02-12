import AnimateIn from "@/components/AnimateIn";

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  variant?: "dark" | "light";
}

export default function StatsBar({
  stats,
  variant = "dark",
}: StatsBarProps) {
  const isDark = variant === "dark";

  return (
    <div className={isDark ? "bg-transparent py-8 md:py-16" : "bg-white py-8 md:py-16 border-b border-light-border/50"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <AnimateIn key={index} delay={index * 0.1}>
              <div
                className={`font-heading font-bold text-4xl mb-2 ${
                  isDark ? "text-gradient" : "text-brand-primary"
                }`}
              >
                {stat.value}
              </div>
              <div
                className={`text-sm ${
                  isDark ? "text-white/60" : "text-text-secondary"
                }`}
              >
                {stat.label}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  );
}
