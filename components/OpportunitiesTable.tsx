"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const deals = [
  { property: "Northgate Crossing", market: "Charlotte, NC", type: "Office", score: 94, balance: "$31.2M", source: "CMBS", status: "New" },
  { property: "Harborview Commerce Center", market: "Tampa, FL", type: "Retail", score: 92, balance: "$9.4M", source: "County", status: "Reviewing" },
  { property: "Apex Centre Tower", market: "Dallas, TX", type: "Office", score: 87, balance: "$18.2M", source: "CMBS", status: "Reviewing" },
  { property: "Ironwood Industrial Park", market: "Atlanta, GA", type: "Industrial", score: 85, balance: "$6.8M", source: "Broker", status: "New" },
  { property: "Ridgeline Office Plaza", market: "Denver, CO", type: "Office", score: 78, balance: "$24.1M", source: "REIT", status: "New" },
  { property: "Sunridge Apartments", market: "Phoenix, AZ", type: "Multifamily", score: 71, balance: "$15.3M", source: "News", status: "New" },
];

const incomingDeal = {
  property: "Cordova Square", market: "Miami, FL", type: "Mixed-Use", score: 68, balance: "$11.7M", source: "Broker", status: "New",
};

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 85 ? "border-accent/40 text-accent" : score >= 70 ? "border-severity-high/40 text-severity-high" : "border-severity-medium/40 text-severity-medium";
  return (
    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full border-2 text-xs font-bold font-mono ${color}`}>
      {score}
    </span>
  );
}

function StatusDot({ status }: { status: string }) {
  const color = status === "New" ? "bg-accent" : status === "Reviewing" ? "bg-gold" : "bg-muted/30";
  return (
    <span className="flex items-center gap-1.5">
      {status === "New" && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#10B981" }} />
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${color}`} />
        </span>
      )}
      {status !== "New" && <span className={`w-1.5 h-1.5 rounded-full ${color}`} />}
      <span className="text-muted text-xs">{status}</span>
    </span>
  );
}

function DealRow({ d, i, isNew }: { d: typeof deals[0]; i: number; isNew?: boolean }) {
  return (
    <motion.tr
      className={`border-b border-white/[0.03] transition-colors ${isNew ? "bg-accent/[0.04]" : "hover:bg-surface-overlay/30"}`}
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 18, delay: isNew ? 0 : 0.1 + i * 0.06 }}
    >
      <td className="px-4 py-3 text-xs text-[#E8EAED] font-medium">
        {isNew && <span className="inline-block w-1 h-1 rounded-full bg-accent mr-1.5 animate-pulse" />}
        {d.property}
      </td>
      <td className="px-4 py-3 text-xs text-muted">{d.market}</td>
      <td className="px-4 py-3 text-xs text-muted">{d.type}</td>
      <td className="px-4 py-3"><ScoreBadge score={d.score} /></td>
      <td className="px-4 py-3 text-xs text-muted font-mono">{d.balance}</td>
      <td className="px-4 py-3 text-xs text-muted">{d.source}</td>
      <td className="px-4 py-3"><StatusDot status={d.status} /></td>
    </motion.tr>
  );
}

// Counter that ticks up
function OpportunityCount() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const target = 1341;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
        setDone(true);
      } else {
        setCount(Math.floor(current));
      }
    }, 1200 / steps);
    return () => clearInterval(interval);
  }, [inView]);

  // Tick up by 1 when new deal arrives
  useEffect(() => {
    if (!done) return;
    const timer = setTimeout(() => setCount((c) => c + 1), 5000);
    return () => clearTimeout(timer);
  }, [done]);

  return <span ref={ref} className="inline-block tabular-nums" style={{ minWidth: "3.2em" }}>{count.toLocaleString()}</span>;
}

export default function OpportunitiesTable() {
  const [showNew, setShowNew] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setShowNew(true), 5000);
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <div ref={ref} className="glass rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.05]">
        <div className="flex items-center gap-4">
          <span className="text-[#E8EAED] font-medium text-sm">
            <OpportunityCount /> <span className="text-muted/50 font-normal">opportunities</span>
          </span>
        </div>
        <div className="flex items-center gap-1">
          {["All Sources", "CMBS", "Broker", "News"].map((f, i) => (
            <motion.span
              key={f}
              className={`px-3 py-1 rounded-lg text-[10px] font-medium uppercase tracking-wider ${
                i === 0 ? "bg-white/[0.05] text-[#E8EAED] border-b border-gold" : "text-muted/40"
              }`}
              initial={{ opacity: 0, y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 18, delay: i * 0.05 }}
            >
              {f}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Table - fixed height prevents layout shift when new row appears */}
      <div className="overflow-x-auto overflow-y-hidden" style={{ maxHeight: "320px" }}>
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.04]">
              {["Property", "Market", "Type", "Score", "Balance", "Source", "Status"].map((h) => (
                <th key={h} className="px-4 py-2.5 text-left text-muted/50 text-[10px] font-medium uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {showNew && <DealRow key="new" d={incomingDeal} i={0} isNew />}
            </AnimatePresence>
            {deals.map((d, i) => (
              <DealRow key={d.property} d={d} i={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
