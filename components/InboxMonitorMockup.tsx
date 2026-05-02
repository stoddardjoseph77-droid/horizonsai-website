const emails = [
  { sender: "CBRE Research", subject: "Q4 Office Distress Report", matched: true, score: 82 },
  { sender: "Marcus & Millichap", subject: "New Retail Listings - FL", matched: true, score: 71 },
  { sender: "JLL Capital Markets", subject: "Rate Update Newsletter", matched: false },
  { sender: "Eastdil Secured", subject: "Loan Sale Portfolio - SE", matched: true, score: 89 },
  { sender: "Newmark", subject: "Weekly Market Wrap", matched: false },
  { sender: "Cushman & Wakefield", subject: "Distressed Asset Alert", matched: true, score: 94 },
] as const;

export default function InboxMonitorMockup() {
  const matchedCount = emails.filter((e) => e.matched).length;
  const filteredCount = emails.length - matchedCount;

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="bg-surface-raised/50 px-5 py-3 border-b border-white/[0.05] flex items-center justify-between">
        <span className="font-medium text-[#E8EAED] text-sm">Broker Email Monitor</span>
        <span className="flex items-center text-accent text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block mr-1.5" />
          Scanning
        </span>
      </div>
      <div className="divide-y divide-white/[0.03]">
        {emails.map((email, i) => (
          <div key={i} className="flex items-center px-5 py-3 gap-4 hover:bg-surface-overlay/30 transition-colors">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${email.matched ? "bg-accent" : "bg-muted/30"}`} />
            <span className="text-[#E8EAED] text-sm font-medium w-40 shrink-0 truncate">{email.sender}</span>
            <span className="text-muted text-sm truncate flex-1">{email.subject}</span>
            {email.matched ? (
              <span className="flex items-center gap-2 shrink-0">
                <span className="text-accent text-xs font-medium">Match</span>
                <span className="bg-accent/15 text-accent px-2 py-0.5 rounded-full text-xs font-bold font-mono">{email.score}</span>
              </span>
            ) : (
              <span className="text-muted/40 text-xs shrink-0">Filtered</span>
            )}
          </div>
        ))}
      </div>
      <div className="bg-surface-raised/30 px-5 py-3 border-t border-white/[0.04] flex items-center justify-between text-xs">
        <span className="text-muted/50">{emails.length} scanned</span>
        <span className="text-accent">{matchedCount} matched</span>
        <span className="text-muted/40">{filteredCount} filtered</span>
      </div>
    </div>
  );
}
