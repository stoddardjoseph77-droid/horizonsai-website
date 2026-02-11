interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl border border-light-border p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="text-brand-primary text-4xl font-serif mb-4">&ldquo;</div>
      <p className="text-text-secondary text-sm leading-relaxed mb-6">
        {quote}
      </p>
      <div>
        <p className="font-heading font-semibold text-text-primary">{name}</p>
        <p className="text-text-muted text-sm">{role}</p>
      </div>
    </div>
  );
}
