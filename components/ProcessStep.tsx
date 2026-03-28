interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({ step, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 text-gold flex items-center justify-center font-bold text-lg font-mono shrink-0">
          {step}
        </div>
        {!isLast && <div className="w-px flex-1 mt-4 bg-gradient-to-b from-gold/20 to-transparent" />}
      </div>
      <div className={isLast ? "pb-0" : "pb-12"}>
        <h3 className="font-semibold text-xl tracking-tight text-[#E8EAED] mb-2">{title}</h3>
        <p className="text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
