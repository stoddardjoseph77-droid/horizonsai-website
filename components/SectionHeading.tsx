interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-2xl mb-16 ${alignClass}`}>
      {label && (
        <span className="inline-block text-gold text-xs font-medium tracking-widest uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className="font-semibold text-3xl md:text-4xl tracking-tighter leading-none text-[#E8EAED] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-muted leading-relaxed max-w-[65ch]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
