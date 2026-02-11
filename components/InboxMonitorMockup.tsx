const emails = [
  { sender: "CBRE Research", subject: "Q4 Office Distress Report", matched: true, score: 82 },
  { sender: "Marcus & Millichap", subject: "New Retail Listings — FL", matched: true, score: 71 },
  { sender: "JLL Capital Markets", subject: "Rate Update Newsletter", matched: false, reason: "No deals" },
  { sender: "Eastdil Secured", subject: "Loan Sale Portfolio — SE", matched: true, score: 89 },
  { sender: "Newmark", subject: "Weekly Market Wrap", matched: false, reason: "No deals" },
  { sender: "Cushman & Wakefield", subject: "Distressed Asset Alert", matched: true, score: 94 },
] as const;

export default function InboxMonitorMockup() {
  const matchedCount = emails.filter((e) => e.matched).length;
  const filteredCount = emails.length - matchedCount;

  return (
    <div className="glass-card glow-border rounded-3xl overflow-hidden">
      {/* Top bar — email client chrome */}
      <div className="bg-white/[0.04] px-5 py-3 border-b border-white/[0.06] flex items-center justify-between">
        <span className="font-heading font-semibold text-text-on-dark text-sm">
          Broker Email Monitor
        </span>
        <span className="flex items-center text-green-400 text-xs">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block mr-1.5" />
          AI Scanning Active
        </span>
      </div>

      {/* Email list */}
      <div className="divide-y divide-white/[0.04]">
        {emails.map((email, i) => (
          <div key={i} className="flex items-center px-5 py-3.5 gap-4">
            {/* Indicator dot */}
            <span
              className={`w-2 h-2 rounded-full shrink-0 ${
                email.matched ? "bg-green-400" : "bg-white/20"
              }`}
            />

            {/* Sender */}
            <span className="text-text-on-dark text-sm font-medium w-40 shrink-0 truncate">
              {email.sender}
            </span>

            {/* Subject */}
            <span className="text-white/50 text-sm truncate flex-1">
              {email.subject}
            </span>

            {/* Result */}
            {email.matched ? (
              <span className="flex items-center gap-2 shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-400 text-xs font-medium">Matched</span>
                <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-xs font-bold">
                  {email.score}
                </span>
              </span>
            ) : (
              <span className="flex items-center gap-2 shrink-0">
                <span className="text-white/30">&#10005;</span>
                <span className="text-white/30 text-xs">Filtered</span>
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Status bar */}
      <div className="bg-white/[0.03] px-5 py-3 border-t border-white/[0.06] flex items-center justify-between">
        <span className="text-white/40 text-xs">
          {emails.length} emails scanned
        </span>
        <span className="text-green-400 text-xs">
          {matchedCount} matched your criteria
        </span>
        <span className="text-white/30 text-xs">
          {filteredCount} filtered
        </span>
      </div>
    </div>
  );
}
