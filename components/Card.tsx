import {
  FileText, Buildings, Newspaper, Bank, TrendUp, Warning,
  ClipboardText, Table, EnvelopeSimple, Calculator,
  ChatCircle, ChartLineUp, Phone, TreeStructure, Lightning,
} from "@phosphor-icons/react/dist/ssr";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  timing?: string;
  tags?: string[];
}

function CardIcon({ name }: { name: string }) {
  const props = { size: 24, weight: "regular" as const };
  switch (name) {
    case "file": return <FileText {...props} />;
    case "building": return <Buildings {...props} />;
    case "newspaper": return <Newspaper {...props} />;
    case "bank": return <Bank {...props} />;
    case "trending": return <TrendUp {...props} />;
    case "alert": return <Warning {...props} />;
    case "document": return <ClipboardText {...props} />;
    case "table": return <Table {...props} />;
    case "mail": return <EnvelopeSimple {...props} />;
    case "calculator": return <Calculator {...props} />;
    case "message": return <ChatCircle {...props} />;
    case "chart": return <ChartLineUp {...props} />;
    case "phone": return <Phone {...props} />;
    case "workflow": return <TreeStructure {...props} />;
    default: return <Lightning {...props} />;
  }
}

export default function Card({ icon, title, description, timing, tags }: CardProps) {
  return (
    <div className="glass p-8 h-full group">
      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-5 text-gold">
        <CardIcon name={icon} />
      </div>
      <h3 className="font-semibold text-lg tracking-tight text-[#E8EAED] mb-3">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
      {timing && (
        <span className="inline-block mt-4 text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">{timing}</span>
      )}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/[0.04] text-muted/60 border border-white/[0.04]">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}
