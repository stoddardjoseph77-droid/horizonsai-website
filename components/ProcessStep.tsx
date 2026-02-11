interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
  variant?: "dark" | "light";
}

export default function ProcessStep({
  step,
  title,
  description,
  isLast = false,
  variant = "dark",
}: ProcessStepProps) {
  const isDark = variant === "dark";

  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary text-white flex items-center justify-center font-heading font-bold text-lg shrink-0 shadow-lg shadow-brand-primary/20">
          {step}
        </div>
        {!isLast && (
          <div
            className={`w-px flex-1 mt-4 ${
              isDark
                ? "bg-gradient-to-b from-brand-primary/30 to-transparent"
                : "bg-light-border"
            }`}
          />
        )}
      </div>
      <div className={isLast ? "pb-0" : "pb-12"}>
        <h3
          className={`font-heading font-semibold text-xl mb-2 ${
            isDark ? "text-text-on-dark" : "text-text-primary"
          }`}
        >
          {title}
        </h3>
        <p
          className={`leading-relaxed ${
            isDark ? "text-white/60" : "text-text-secondary"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
