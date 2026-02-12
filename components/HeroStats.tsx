const stats = [
  { value: "< 60s", label: "Response Time" },
  { value: "500+", label: "Leads Qualified" },
  { value: "24/7", label: "Always On" },
];

export default function HeroStats() {
  return (
    <div className="inline-flex items-center justify-center gap-5 sm:gap-8 md:gap-12 mt-8">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`text-center ${
            index < stats.length - 1
              ? "pr-5 sm:pr-8 md:pr-12 border-r border-white/10"
              : ""
          }`}
        >
          <div className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-text-on-dark">
            {stat.value}
          </div>
          <div className="text-white/50 text-[10px] sm:text-xs mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
