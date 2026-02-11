"use client";

import AnimateIn from "./AnimateIn";

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
          <AnimateIn direction="left" delay={index * 0.1}>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 flex items-start gap-3 h-full">
              <span className="text-red-500 text-lg shrink-0 mt-0.5">&#x2717;</span>
              <p className="text-text-primary text-sm leading-relaxed">
                {item.problem}
              </p>
            </div>
          </AnimateIn>
          <AnimateIn direction="right" delay={index * 0.1}>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 flex items-start gap-3 h-full">
              <span className="text-green-500 text-lg shrink-0 mt-0.5">&#x2713;</span>
              <p className="text-text-primary text-sm leading-relaxed">
                {item.solution}
              </p>
            </div>
          </AnimateIn>
        </div>
      ))}
    </div>
  );
}
