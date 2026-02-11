interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  dark = true,
}: SectionHeadingProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold tracking-wide uppercase mb-4">
          {label}
        </span>
      )}
      <h2
        className={`font-heading font-bold text-3xl md:text-4xl mb-4 ${
          dark ? "text-text-on-dark" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg ${
            dark ? "text-white/60" : "text-text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
