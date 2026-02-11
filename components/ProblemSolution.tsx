interface ProblemSolutionItem {
  problem: string;
  solution: string;
}

interface ProblemSolutionProps {
  items: ProblemSolutionItem[];
}

export default function ProblemSolution({ items }: ProblemSolutionProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch"
        >
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 flex items-start gap-3">
            <span className="text-red-500 text-lg shrink-0 mt-0.5">&#x2717;</span>
            <p className="text-text-primary text-sm leading-relaxed">
              {item.problem}
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 flex items-start gap-3">
            <span className="text-green-500 text-lg shrink-0 mt-0.5">&#x2713;</span>
            <p className="text-text-primary text-sm leading-relaxed">
              {item.solution}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
