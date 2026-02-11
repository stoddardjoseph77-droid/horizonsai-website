export default function EmailDigestMockup() {
  return (
    <div className="glass-card glow-border rounded-3xl overflow-hidden">
      {/* Email client chrome — top bar */}
      <div className="bg-white/[0.04] px-5 py-3 border-b border-white/[0.06] flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="text-white/40 text-sm ml-3">Inbox</span>
      </div>

      {/* Email header */}
      <div className="px-6 py-5 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
          <span className="text-text-on-dark font-semibold text-sm">
            HorizonsAI
          </span>
          <span className="text-white/40 text-xs ml-auto">Mon, Feb 10</span>
        </div>
        <p className="mt-1.5 text-text-on-dark font-medium">
          Your Weekly Deal Digest — 12 New Opportunities
        </p>
      </div>

      {/* Email body */}
      <div className="px-6 py-6">
        <p className="text-white/70 text-sm mb-4">Hi John,</p>
        <p className="text-white/70 text-sm mb-3">
          Here&apos;s your weekly pipeline update:
        </p>

        <ul className="space-y-2">
          <li className="text-white/60 text-sm">
            &bull; 12 new distressed opportunities identified
          </li>
          <li className="text-white/60 text-sm">
            &bull; 3 scored above 85 (high priority)
          </li>
          <li className="text-white/60 text-sm">
            &bull; Top deal: Sunrise Office Park, Tampa — Score: 87
          </li>
        </ul>

        {/* CTA buttons */}
        <div className="mt-6 flex gap-3">
          <span className="bg-brand-primary/20 text-brand-primary px-4 py-2 rounded-xl text-sm font-semibold">
            View Full Report
          </span>
          <span className="bg-white/[0.06] text-white/70 px-4 py-2 rounded-xl text-sm font-medium">
            Open Pipeline
          </span>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/[0.06]">
          <p className="text-white/30 text-xs">
            HorizonsAI &middot; Automated Deal Intelligence
          </p>
        </div>
      </div>
    </div>
  );
}
