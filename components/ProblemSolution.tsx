import AnimateIn from "./AnimateIn";

interface ProblemSolutionItem { problem: string; solution: string; }
interface ProblemSolutionProps { items: ProblemSolutionItem[]; }

export default function ProblemSolution({ items }: ProblemSolutionProps) {
  return (
    <div className="space-y-3 md:space-y-4">
      <div className="hidden md:grid grid-cols-2 gap-4 mb-2">
        <p className="text-xs font-medium uppercase tracking-wider text-severity-critical/70">Problem</p>
        <p className="text-xs font-medium uppercase tracking-wider text-accent/70">Solution</p>
      </div>
      {items.map((item, index) => (
        <div key={index}>
          <AnimateIn delay={index * 0.08}>
            <div className="glass p-5 md:hidden">
              <div className="flex items-start gap-3 pb-4 border-b border-white/[0.06]">
                <span className="text-severity-critical text-sm shrink-0 mt-0.5">&#x2717;</span>
                <p className="text-gold/80 text-sm leading-relaxed">{item.problem}</p>
              </div>
              <div className="flex items-start gap-3 pt-4">
                <span className="text-accent text-sm shrink-0 mt-0.5">&#x2713;</span>
                <p className="text-gold/80 text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          </AnimateIn>
          <div className="hidden md:grid grid-cols-2 gap-4 items-stretch">
            <AnimateIn direction="left" delay={index * 0.06}>
              <div className="glass p-5 flex items-start gap-3 h-full">
                <span className="text-severity-critical text-sm shrink-0 mt-0.5">&#x2717;</span>
                <p className="text-gold/80 text-base leading-relaxed">{item.problem}</p>
              </div>
            </AnimateIn>
            <AnimateIn direction="right" delay={index * 0.06 + 0.03}>
              <div className="glass p-5 flex items-start gap-3 h-full">
                <span className="text-accent text-sm shrink-0 mt-0.5">&#x2713;</span>
                <p className="text-gold/80 text-base leading-relaxed">{item.solution}</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      ))}
    </div>
  );
}
