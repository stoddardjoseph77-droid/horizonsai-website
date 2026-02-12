export default function DashboardMockup() {
  const leads = [
    {
      name: "Sarah Mitchell",
      source: "Rightmove",
      score: "Hot",
      scoreColor: "green",
      status: "Viewing Booked",
      aiNote: "Pre-approved $620K, wants 3-bed",
      response: "34s",
    },
    {
      name: "James Cooper",
      source: "Facebook Ad",
      score: "Hot",
      scoreColor: "green",
      status: "Follow-Up Sent",
      aiNote: "Investor, looking for rental yield",
      response: "52s",
    },
    {
      name: "Emma Williams",
      source: "WhatsApp",
      score: "Warm",
      scoreColor: "yellow",
      status: "Contacted",
      aiNote: "First-time buyer, needs mortgage advice",
      response: "1m 12s",
    },
    {
      name: "David Chen",
      source: "Website",
      score: "Warm",
      scoreColor: "yellow",
      status: "Qualifying",
      aiNote: "Budget confirmed, viewing Sat AM",
      response: "28s",
    },
    {
      name: "Lisa Thompson",
      source: "Instagram",
      score: "Cold",
      scoreColor: "red",
      status: "New Lead",
      aiNote: "Browsing only, no timeline given",
      response: "\u2014",
    },
  ];

  const scorePillClasses: Record<string, string> = {
    green: "bg-green-500/20 text-green-400",
    yellow: "bg-yellow-500/20 text-yellow-400",
    red: "bg-red-500/20 text-red-400",
  };

  return (
    <div className="glass-card glow-border p-6 md:p-8 rounded-3xl overflow-hidden">
      {/* CRM header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-primary/15 flex items-center justify-center">
            <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-text-on-dark text-sm">
              CRM Pipeline
            </h3>
            <p className="text-white/40 text-[10px]">Enhanced by HorizonsAI</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-semibold">
            AI Sync Active
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-[10px]">Live</span>
          </div>
        </div>
      </div>

      {/* Quick stats row */}
      <div className="grid grid-cols-4 gap-2 mb-5">
        {[
          { value: "127", label: "Total Leads" },
          { value: "47s", label: "Avg Response" },
          { value: "89%", label: "Qualified" },
          { value: "$2.4M", label: "Pipeline" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white/[0.03] rounded-lg border border-white/[0.06] px-3 py-2.5 text-center"
          >
            <p className="text-lg font-heading font-bold text-gradient leading-none">
              {stat.value}
            </p>
            <p className="text-white/40 text-[10px] mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Lead table — desktop */}
      <div className="overflow-x-auto hidden md:block">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_0.7fr_0.5fr_0.8fr_1.2fr_0.6fr] gap-3 pb-2.5 border-b border-white/[0.06] min-w-[650px]">
          {["Lead", "Source", "Score", "Status", "AI Notes", "Response"].map(
            (header) => (
              <span
                key={header}
                className="text-white/40 text-[10px] font-semibold uppercase tracking-wider"
              >
                {header}
              </span>
            )
          )}
        </div>

        {/* Table rows */}
        <div className="min-w-[650px]">
          {leads.map((lead, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_0.7fr_0.5fr_0.8fr_1.2fr_0.6fr] gap-3 py-2.5 border-b border-white/[0.04] items-center"
            >
              <span className="text-white/80 text-xs">{lead.name}</span>
              <span className="text-white/50 text-xs">{lead.source}</span>
              <span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                    scorePillClasses[lead.scoreColor]
                  }`}
                >
                  {lead.score}
                </span>
              </span>
              <span className="text-white/60 text-xs">{lead.status}</span>
              <span className="text-brand-primary/70 text-[10px] italic">
                {lead.aiNote}
              </span>
              <span className="text-white/50 text-xs font-mono">
                {lead.response}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lead cards — mobile */}
      <div className="space-y-3 md:hidden">
        {leads.map((lead, i) => (
          <div
            key={i}
            className="bg-white/[0.03] rounded-lg border border-white/[0.06] p-3"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/80 text-sm font-medium">
                {lead.name}
              </span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                  scorePillClasses[lead.scoreColor]
                }`}
              >
                {lead.score}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-white/40 mb-1">
              <span>{lead.source}</span>
              <span>&middot;</span>
              <span>{lead.status}</span>
              <span>&middot;</span>
              <span className="font-mono">{lead.response}</span>
            </div>
            <p className="text-brand-primary/70 text-[10px] italic">
              {lead.aiNote}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.06]">
        <p className="text-white/30 text-[10px]">
          AI auto-qualifies leads and syncs scores, notes, and follow-up status directly to your CRM.
        </p>
        <span className="text-brand-primary/60 text-[10px] font-semibold shrink-0 ml-4">
          Powered by HorizonsAI
        </span>
      </div>
    </div>
  );
}
