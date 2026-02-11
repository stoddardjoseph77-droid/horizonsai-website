"use client";

import AnimateIn from "./AnimateIn";

interface ProblemSolutionItem {
  problem: string;
  solution: string;
}

interface ProblemSolutionProps {
  items: ProblemSolutionItem[];
  variant?: "dark" | "light";
}

export default function ProblemSolution({
  items,
  variant = "dark",
}: ProblemSolutionProps) {
  const isDark = variant === "dark";

  return (
    <div className="space-y-4">
      {/* Column headers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <p className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-red-400/70" : "text-red-500/70"}`}>
          Problem
        </p>
        <p className={`text-xs font-semibold uppercase tracking-wider hidden md:block ${isDark ? "text-green-400/70" : "text-green-500/70"}`}>
          Solution
        </p>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch"
        >
          <AnimateIn direction="left" delay={index * 0.1}>
            {isDark ? (
              <div className="glass-card p-5 flex items-start gap-3 h-full">
                <span className="text-red-400 text-lg shrink-0 mt-0.5">&#x2717;</span>
                <p className="text-white/80 text-sm leading-relaxed">
                  {item.problem}
                </p>
              </div>
            ) : (
              <div className="bg-red-50 border border-red-200 rounded-3xl p-5 flex items-start gap-3 h-full">
                <span className="text-red-500 text-lg shrink-0 mt-0.5">&#x2717;</span>
                <p className="text-text-primary text-sm leading-relaxed">
                  {item.problem}
                </p>
              </div>
            )}
          </AnimateIn>
          <AnimateIn direction="right" delay={index * 0.1}>
            {isDark ? (
              <div className="glass-card p-5 flex items-start gap-3 h-full">
                <span className="text-green-400 text-lg shrink-0 mt-0.5">&#x2713;</span>
                <p className="text-white/80 text-sm leading-relaxed">
                  {item.solution}
                </p>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-3xl p-5 flex items-start gap-3 h-full">
                <span className="text-green-500 text-lg shrink-0 mt-0.5">&#x2713;</span>
                <p className="text-text-primary text-sm leading-relaxed">
                  {item.solution}
                </p>
              </div>
            )}
          </AnimateIn>
        </div>
      ))}
    </div>
  );
}
