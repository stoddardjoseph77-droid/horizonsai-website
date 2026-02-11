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
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {label && (
        <span className="inline-block text-brand-primary font-heading font-semibold text-sm tracking-wide uppercase mb-3">
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
            dark ? "text-text-on-dark/70" : "text-text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
