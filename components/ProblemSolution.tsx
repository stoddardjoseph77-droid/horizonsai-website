import AnimateIn from "./AnimateIn";

interface ProblemSolutionItem { problem: string; solution: string; }
interface ProblemSolutionProps { items: ProblemSolutionItem[]; }

export default function ProblemSolution({ items }: ProblemSolutionProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <p className="text-xs font-medium uppercase tracking-wider text-severity-critical/70">Problem</p>
        <p className="text-xs font-medium uppercase tracking-wider hidden md:block text-accent/70">Solution</p>
      </div>
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          <AnimateIn direction="left" delay={index * 0.08}>
            <div className="glass p-5 flex items-start gap-3 h-full">
              <span className="text-severity-critical text-sm shrink-0 mt-0.5">&#x2717;</span>
              <p className="text-[#E8EAED]/80 text-sm md:text-base leading-relaxed">{item.problem}</p>
            </div>
          </AnimateIn>
          <AnimateIn direction="right" delay={index * 0.08}>
            <div className="glass p-5 flex items-start gap-3 h-full">
              <span className="text-accent text-sm shrink-0 mt-0.5">&#x2713;</span>
              <p className="text-[#E8EAED]/80 text-sm md:text-base leading-relaxed">{item.solution}</p>
            </div>
          </AnimateIn>
        </div>
      ))}
    </div>
  );
}
