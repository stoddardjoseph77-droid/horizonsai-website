export default function EmailDigestMockup() {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="bg-white/[0.03] px-5 py-3 border-b border-white/[0.04] flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        </div>
        <span className="text-zinc-600 text-sm ml-3">Inbox</span>
      </div>

      <div className="px-6 py-5 border-b border-white/[0.04]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-zinc-200 font-medium text-sm">HorizonsAI</span>
          <span className="text-zinc-600 text-xs ml-auto font-mono">Mon, Feb 10</span>
        </div>
        <p className="mt-1.5 text-zinc-100 font-medium">
          Your Weekly Deal Digest — 12 New Opportunities
        </p>
      </div>

      <div className="px-6 py-6">
        <p className="text-zinc-400 text-sm mb-4">Hi John,</p>
        <p className="text-zinc-400 text-sm mb-3">
          Here&apos;s your weekly pipeline update:
        </p>

        <ul className="space-y-2 text-zinc-500 text-sm">
          <li>12 new distressed opportunities identified</li>
          <li>3 scored above 85 (high priority)</li>
          <li>Top deal: Sunrise Office Park, Tampa — Score: 87</li>
        </ul>

        <div className="mt-6 flex gap-3">
          <span className="bg-accent/15 text-accent px-4 py-2 rounded-xl text-sm font-medium">
            View Full Report
          </span>
          <span className="bg-white/[0.04] text-zinc-400 px-4 py-2 rounded-xl text-sm font-medium">
            Open Pipeline
          </span>
        </div>

        <div className="mt-6 pt-4 border-t border-white/[0.04]">
          <p className="text-zinc-700 text-xs">
            HorizonsAI &middot; Automated Deal Intelligence
          </p>
        </div>
      </div>
    </div>
  );
}
