export default function DashboardMockup() {
  const stats = [
    { value: "127", label: "Leads This Month" },
    { value: "47s", label: "Avg Response" },
    { value: "89%", label: "Qualified Rate" },
    { value: "$2.4M", label: "Pipeline Value" },
  ];

  const leads = [
    {
      name: "Sarah Mitchell",
      source: "Rightmove",
      score: "Hot",
      scoreColor: "green",
      status: "Viewing Booked",
      response: "34s",
    },
    {
      name: "James Cooper",
      source: "Facebook Ad",
      score: "Hot",
      scoreColor: "green",
      status: "Follow-Up Sent",
      response: "52s",
    },
    {
      name: "Emma Williams",
      source: "WhatsApp",
      score: "Warm",
      scoreColor: "yellow",
      status: "Contacted",
      response: "1m 12s",
    },
    {
      name: "David Chen",
      source: "Website Form",
      score: "Warm",
      scoreColor: "yellow",
      status: "Qualifying",
      response: "28s",
    },
    {
      name: "Lisa Thompson",
      source: "Instagram",
      score: "Cold",
      scoreColor: "red",
      status: "New Lead",
      response: "\u2014",
    },
  ];

  const barHeights = [45, 60, 50, 75, 65, 85, 90];
  const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const scorePillClasses: Record<string, string> = {
    green: "bg-green-500/20 text-green-400",
    yellow: "bg-yellow-500/20 text-yellow-400",
    red: "bg-red-500/20 text-red-400",
  };

  return (
    <div className="glass-card glow-border p-6 md:p-8 rounded-3xl overflow-hidden">
      {/* Dashboard header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading font-semibold text-text-on-dark text-lg">
          Lead Dashboard
        </h3>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-xs">Live</span>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-4"
          >
            <p className="text-2xl font-heading font-bold text-gradient">
              {stat.value}
            </p>
            <p className="text-white/50 text-xs mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Lead table */}
      <div className="mt-6 overflow-x-auto">
        {/* Table header */}
        <div className="grid grid-cols-5 gap-4 pb-3 border-b border-white/[0.06] min-w-[600px]">
          {["Name", "Source", "Score", "Status", "Response Time"].map(
            (header) => (
              <span
                key={header}
                className="text-white/40 text-xs font-semibold uppercase tracking-wider"
              >
                {header}
              </span>
            )
          )}
        </div>

        {/* Table rows */}
        <div className="min-w-[600px]">
          {leads.map((lead, i) => (
            <div
              key={i}
              className="grid grid-cols-5 gap-4 py-3 border-b border-white/[0.04] items-center"
            >
              <span className="text-white/80 text-sm">{lead.name}</span>
              <span className="text-white/60 text-sm">{lead.source}</span>
              <span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    scorePillClasses[lead.scoreColor]
                  }`}
                >
                  {lead.score}
                </span>
              </span>
              <span className="text-white/70 text-sm">{lead.status}</span>
              <span className="text-white/60 text-sm font-mono">
                {lead.response}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mini bar chart */}
      <div className="mt-6">
        <p className="text-white/40 text-xs mb-3">Leads per Week</p>
        <div className="flex items-end gap-2 h-20">
          {barHeights.map((height, i) => (
            <div
              key={i}
              className="w-full rounded-t-md bg-gradient-to-t from-brand-primary/40 to-brand-primary/80"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="flex gap-2 mt-1.5">
          {dayLabels.map((day) => (
            <span
              key={day}
              className="w-full text-center text-white/30 text-[10px]"
            >
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
