interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({
  step,
  title,
  description,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-heading font-bold text-lg shrink-0">
          {step}
        </div>
        {!isLast && <div className="w-px flex-1 bg-light-border mt-4" />}
      </div>
      <div className={isLast ? "pb-0" : "pb-12"}>
        <h3 className="font-heading font-semibold text-xl text-text-primary mb-2">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
