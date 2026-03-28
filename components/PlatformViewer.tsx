"use client";

import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import dynamic from "next/dynamic";
const DemoMapView = dynamic(() => import("@/components/DemoMapView"), { ssr: false });

/* ─────────────────────────── DATA ─────────────────────────── */

const SEARCH_QUERY = "Denver properties in special servicing";

const SEARCH_RESULTS = [
  {
    property: "Ridgeline Office Plaza",
    score: 78,
    market: "Denver, CO",
    balance: "$24.1M",
    source: "CMBS",
    reason: "Transferred to special servicing Oct 2025, 58% occupancy, DSCR 0.74x",
  },
  {
    property: "Summit Ridge Center",
    score: 72,
    market: "Denver, CO",
    balance: "$8.9M",
    source: "County",
    reason: "SS transfer Aug 2025, retail strip, 45% vacancy, borrower non-responsive",
  },
  {
    property: "Apex Centre Tower",
    score: 87,
    market: "Dallas, TX",
    balance: "$18.2M",
    source: "CMBS",
    reason: "Cross-match: same sponsor holds Denver asset currently in SS",
  },
];

const PROMPT_PILLS = [
  "Distressed office in Florida under $20M",
  "CMBS loans approaching maturity with high vacancy",
  "REO non-recourse loans in the Southeast",
  "Foreclosure filings in Philadelphia",
  "Broker listings under $15M with high NOI",
];

const PIPELINE_COLUMNS = [
  {
    label: "New",
    count: 1334,
    color: "bg-accent",
    textColor: "text-accent",
    subtitle: "$100.3M total",
    deals: [
      { property: "Northgate Crossing", score: 94, market: "Charlotte, NC", balance: "$31.2M", snippet: "Office, 3 mo delinquent, CMBS special servicing" },
      { property: "Ironwood Industrial Park", score: 85, market: "Atlanta, GA", balance: "$6.8M", snippet: "Industrial, 72% occupied, maturity Aug 2026" },
      { property: "Sunridge Apartments", score: 71, market: "Phoenix, AZ", balance: "$15.3M", snippet: "Multifamily, REO since Sep 2025, 68% occupied" },
    ],
  },
  {
    label: "Reviewing",
    count: 3,
    color: "bg-gold",
    textColor: "text-gold",
    subtitle: "$32.9M total",
    deals: [
      { property: "Apex Centre Tower", score: 87, market: "Dallas, TX", balance: "$18.2M", snippet: "Office REO, 58% occupancy, strong value-add" },
      { property: "Harborview Commerce Center", score: 92, market: "Tampa, FL", balance: "$9.4M", snippet: "Retail, SS transfer, Cushman managing" },
    ],
  },
  {
    label: "Pursuing",
    count: 4,
    color: "bg-blue-400",
    textColor: "text-blue-400",
    subtitle: "$63.4M total",
    deals: [
      { property: "Cordova Square", score: 68, market: "Miami, FL", balance: "$11.7M", snippet: "Mixed-use, competitive auction underway" },
    ],
  },
  {
    label: "Passed",
    count: 0,
    color: "bg-muted/30",
    textColor: "text-muted/50",
    subtitle: "",
    deals: [],
  },
];

const TABS = [
  { id: "map", title: "Map View", description: "Visualize opportunities across every market" },
  { id: "search", title: "AI Search", description: "Find opportunities with natural language queries" },
  { id: "pipeline", title: "Pipeline", description: "Track deals through your acquisition workflow" },
] as const;

type TabId = typeof TABS[number]["id"];

/* ─────────────────────── SMALL COMPONENTS ─────────────────── */

const ScoreBadge = memo(function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 85
      ? "border-accent/40 text-accent"
      : score >= 70
      ? "border-severity-high/40 text-severity-high"
      : "border-severity-medium/40 text-severity-medium";
  return (
    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full border-2 text-xs font-bold font-mono ${color}`}>
      {score}
    </span>
  );
});

/* ──────────────────── TYPEWRITER SEARCH BAR ───────────────── */

const SearchTypewriter = memo(function SearchTypewriter() {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"idle" | "typing" | "loading" | "results">("idle");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setPhase("typing"), 1500);
    return () => clearTimeout(t1);
  }, [inView]);

  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(SEARCH_QUERY.slice(0, i));
      if (i >= SEARCH_QUERY.length) {
        clearInterval(interval);
        setTimeout(() => setPhase("loading"), 400);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== "loading") return;
    const t = setTimeout(() => setPhase("results"), 800);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <div ref={ref} className="space-y-6">
      {/* Search bar */}
      <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border bg-white/[0.02] transition-colors duration-300 ${
        phase === "loading" ? "border-accent/30 shadow-[0_0_20px_rgba(16,185,129,0.06)]" : "border-white/[0.08]"
      }`}>
        <svg className="w-4 h-4 text-muted/40 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <span className="flex-1 text-sm text-[#E8EAED] font-mono min-h-[1.25rem]">
          {typed || <span className="text-muted/30">Search opportunities with natural language...</span>}
          {(phase === "typing" || phase === "idle") && (
            <span className="inline-block w-[2px] h-4 bg-accent/70 ml-0.5 animate-pulse align-middle" />
          )}
        </span>
        <span className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-300 ${
          phase === "loading" || phase === "results" ? "bg-accent text-white" : "bg-gold/20 text-gold"
        }`}>
          Search
        </span>
      </div>

      {/* Loading shimmer */}
      <AnimatePresence>
        {phase === "loading" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-1 rounded-full overflow-hidden bg-white/[0.03]"
          >
            <motion.div
              className="h-full bg-accent/40 rounded-full"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "40%" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Prompt pills — visible before results */}
      <AnimatePresence mode="wait">
        {phase !== "results" ? (
          <motion.div
            key="pills"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center space-y-4"
          >
            <div className="flex flex-col items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-muted/20" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <p className="text-[#E8EAED] text-sm font-medium">Ask anything about the pipeline</p>
              <p className="text-muted/40 text-xs">Search uses AI embeddings to find semantically relevant opportunities</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {PROMPT_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1.5 rounded-lg text-[11px] text-muted/50 border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:text-muted transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring" as const, stiffness: 100, damping: 26 }}
            className="space-y-3"
          >
            <p className="text-muted/40 text-xs font-mono">3 results found</p>
            {SEARCH_RESULTS.map((r, i) => (
              <motion.div
                key={r.property}
                className="flex items-start gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] transition-colors"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring" as const, stiffness: 100, damping: 26, delay: i * 0.15 }}
              >
                <ScoreBadge score={r.score} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#E8EAED] text-sm font-medium">{r.property}</span>
                    <span className="text-gold bg-gold/10 px-1.5 py-0.5 rounded text-[9px] font-medium">{r.source}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-muted/40 mb-1.5">
                    <span>{r.market}</span>
                    <span className="font-mono">{r.balance}</span>
                  </div>
                  <p className="text-muted text-[11px] leading-relaxed">{r.reason}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

/* ──────────────── STATIC SEARCH (MOBILE) ──────────────────── */

function SearchStatic() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02]">
        <svg className="w-4 h-4 text-muted/40 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <span className="flex-1 text-sm text-[#E8EAED] font-mono">{SEARCH_QUERY}</span>
        <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-accent text-white">Search</span>
      </div>
      <p className="text-muted/40 text-xs font-mono">3 results found</p>
      {SEARCH_RESULTS.map((r) => (
        <div key={r.property} className="flex items-start gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
          <ScoreBadge score={r.score} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#E8EAED] text-sm font-medium">{r.property}</span>
              <span className="text-gold bg-gold/10 px-1.5 py-0.5 rounded text-[9px] font-medium">{r.source}</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-muted/40 mb-1.5">
              <span>{r.market}</span>
              <span className="font-mono">{r.balance}</span>
            </div>
            <p className="text-muted text-[11px] leading-relaxed">{r.reason}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ──────────────────── PIPELINE / KANBAN ────────────────────── */

const PipelineView = memo(function PipelineView({ isMobile }: { isMobile: boolean }) {
  return (
    <div className={`${isMobile ? "space-y-4" : "grid grid-cols-4 gap-3"}`}>
      {PIPELINE_COLUMNS.map((col) => (
        <div key={col.label} className="space-y-2">
          {/* Column header */}
          <div className="flex items-center gap-2 pb-2 border-b border-white/[0.05]">
            <span className={`w-2 h-2 rounded-full ${col.color}`} />
            <span className={`text-xs font-semibold uppercase tracking-wider ${col.textColor}`}>{col.label}</span>
            <span className="text-[#E8EAED] font-mono text-sm font-bold ml-auto">{col.count.toLocaleString()}</span>
          </div>
          {col.subtitle && <p className="text-muted/30 text-[10px] font-mono">{col.subtitle}</p>}

          {/* Deal cards */}
          {col.deals.length > 0 ? (
            col.deals.map((deal) => (
              <div
                key={deal.property}
                className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-2"
              >
                <div className="flex items-center gap-2">
                  <ScoreBadge score={deal.score} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[#E8EAED] text-xs font-medium truncate">{deal.property}</p>
                    <p className="text-muted/40 text-[10px]">{deal.market}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-muted/40 font-mono">{deal.balance}</span>
                </div>
                <p className="text-muted/50 text-[10px] leading-relaxed">{deal.snippet}</p>
              </div>
            ))
          ) : (
            <div className="p-4 rounded-xl border border-dashed border-white/[0.05] text-center">
              <p className="text-muted/20 text-[10px]">No properties</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
});

/* ──────────────────── MAP VIEW ─────────────────────────────── */


/* ──────────────────── PROGRESS BAR ────────────────────────── */

const ProgressBar = memo(function ProgressBar({ active, duration }: { active: boolean; duration: number }) {
  return (
    <div className="h-[2px] w-full bg-white/[0.04] rounded-full overflow-hidden mt-3">
      {active && (
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration, ease: "linear" }}
        />
      )}
    </div>
  );
});

/* ──────────────────── MAIN COMPONENT ──────────────────────── */

export default function PlatformViewer() {
  const [activeTab, setActiveTab] = useState<TabId>("map");
  const [progressKey, setProgressKey] = useState(0);
  const isMobile = useIsMobile();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const CYCLE_DURATION = 8;

  const advanceTab = useCallback(() => {
    setActiveTab((prev) => {
      const idx = TABS.findIndex((t) => t.id === prev);
      return TABS[(idx + 1) % TABS.length].id;
    });
    setProgressKey((k) => k + 1);
  }, []);

  const selectTab = useCallback((id: TabId) => {
    setActiveTab(id);
    setProgressKey((k) => k + 1);
  }, []);

  // Only start auto-advance when section is in view
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: false, margin: "0px 0px -10% 0px" });

  useEffect(() => {
    if (isMobile || !sectionInView) return;
    timerRef.current = setTimeout(advanceTab, CYCLE_DURATION * 1000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeTab, progressKey, advanceTab, isMobile, sectionInView]);

  const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };

  return (
    <div ref={sectionRef} className={`${isMobile ? "space-y-6" : "grid grid-cols-[280px_1fr] gap-8"}`}>
      {/* Left column — tab selectors */}
      <div className={`${isMobile ? "flex gap-2 overflow-x-auto pb-2" : "space-y-1"}`}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => selectTab(tab.id)}
            className={`text-left transition-colors duration-200 ${
              isMobile
                ? `shrink-0 px-4 py-2.5 rounded-xl border ${
                    activeTab === tab.id
                      ? "border-accent/30 bg-accent/[0.06] text-[#E8EAED]"
                      : "border-white/[0.06] bg-white/[0.02] text-muted/40"
                  }`
                : `w-full px-4 py-4 rounded-xl ${
                    activeTab === tab.id
                      ? "bg-white/[0.03]"
                      : "hover:bg-white/[0.02]"
                  }`
            }`}
          >
            <p className={`text-sm font-medium ${activeTab === tab.id ? "text-[#E8EAED]" : "text-muted/40"}`}>
              {tab.title}
            </p>
            {!isMobile && (
              <>
                <p className={`text-xs mt-1 ${activeTab === tab.id ? "text-muted/60" : "text-muted/20"}`}>
                  {tab.description}
                </p>
                <ProgressBar key={`${tab.id}-${progressKey}`} active={activeTab === tab.id} duration={CYCLE_DURATION} />
              </>
            )}
          </button>
        ))}
      </div>

      {/* Right column — content */}
      <div className="glass rounded-2xl overflow-hidden border border-white/[0.07] h-[520px]">
        <AnimatePresence mode="wait">
          {activeTab === "search" && (
            <motion.div
              key="search"
              className="p-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={springTransition}
            >
              {isMobile ? <SearchStatic /> : <SearchTypewriter />}
            </motion.div>
          )}

          {activeTab === "pipeline" && (
            <motion.div
              key="pipeline"
              className="p-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={springTransition}
            >
              <PipelineView isMobile={isMobile} />
            </motion.div>
          )}

          {activeTab === "map" && (
            <motion.div
              key="map"
              className="h-full"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={springTransition}
            >
              <DemoMapView />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
