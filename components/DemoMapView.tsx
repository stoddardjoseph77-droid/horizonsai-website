"use client";

import { memo } from "react";
import mapboxgl from "mapbox-gl";
import MapGL, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Fix CJS/ESM interop — react-map-gl's dynamic import gets { default: mapboxgl }
// but expects mapboxgl.Map at the top level. We pass it explicitly.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapLib = Promise.resolve({ ...mapboxgl, Map: mapboxgl.Map }) as any;

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

// Fake opportunity data across US markets
const DEMO_POINTS: GeoJSON.FeatureCollection<GeoJSON.Point> = {
  type: "FeatureCollection",
  features: [
    // Southeast cluster — high concentration
    { type: "Feature", geometry: { type: "Point", coordinates: [-84.39, 33.75] }, properties: { ai_score: 92 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-84.20, 33.85] }, properties: { ai_score: 78 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-84.55, 33.65] }, properties: { ai_score: 85 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-80.84, 35.23] }, properties: { ai_score: 94 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-80.95, 35.10] }, properties: { ai_score: 71 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-81.65, 30.33] }, properties: { ai_score: 68 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-82.46, 27.95] }, properties: { ai_score: 88 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-80.19, 25.76] }, properties: { ai_score: 75 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-80.30, 25.85] }, properties: { ai_score: 62 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-86.78, 36.16] }, properties: { ai_score: 82 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-86.80, 33.52] }, properties: { ai_score: 73 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-78.64, 35.78] }, properties: { ai_score: 67 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-81.09, 32.08] }, properties: { ai_score: 58 } },
    // Texas cluster
    { type: "Feature", geometry: { type: "Point", coordinates: [-96.80, 32.78] }, properties: { ai_score: 87 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-96.65, 32.90] }, properties: { ai_score: 79 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-97.10, 32.65] }, properties: { ai_score: 65 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-95.37, 29.76] }, properties: { ai_score: 81 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-95.50, 29.85] }, properties: { ai_score: 72 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-97.74, 30.27] }, properties: { ai_score: 69 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-98.49, 29.42] }, properties: { ai_score: 55 } },
    // Northeast cluster
    { type: "Feature", geometry: { type: "Point", coordinates: [-74.01, 40.71] }, properties: { ai_score: 90 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-73.95, 40.78] }, properties: { ai_score: 83 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-74.15, 40.65] }, properties: { ai_score: 76 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-75.17, 39.95] }, properties: { ai_score: 78 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-77.04, 38.91] }, properties: { ai_score: 84 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-71.06, 42.36] }, properties: { ai_score: 70 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-76.61, 39.29] }, properties: { ai_score: 63 } },
    // Midwest
    { type: "Feature", geometry: { type: "Point", coordinates: [-87.63, 41.88] }, properties: { ai_score: 77 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-87.75, 41.95] }, properties: { ai_score: 66 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-83.05, 42.33] }, properties: { ai_score: 59 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-84.51, 39.10] }, properties: { ai_score: 64 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-86.16, 39.77] }, properties: { ai_score: 61 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-90.20, 38.63] }, properties: { ai_score: 72 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-94.58, 39.10] }, properties: { ai_score: 68 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-93.27, 44.98] }, properties: { ai_score: 53 } },
    // West
    { type: "Feature", geometry: { type: "Point", coordinates: [-104.99, 39.74] }, properties: { ai_score: 86 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-105.10, 39.65] }, properties: { ai_score: 72 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-118.24, 34.05] }, properties: { ai_score: 80 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-118.40, 34.10] }, properties: { ai_score: 69 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-122.42, 37.77] }, properties: { ai_score: 74 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-112.07, 33.45] }, properties: { ai_score: 71 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-115.14, 36.17] }, properties: { ai_score: 60 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-122.33, 47.61] }, properties: { ai_score: 65 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-122.68, 45.51] }, properties: { ai_score: 57 } },
    // Louisiana / Mississippi
    { type: "Feature", geometry: { type: "Point", coordinates: [-90.07, 29.95] }, properties: { ai_score: 74 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-89.97, 32.30] }, properties: { ai_score: 52 } },
    // Additional scatter
    { type: "Feature", geometry: { type: "Point", coordinates: [-97.52, 35.47] }, properties: { ai_score: 63 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-111.89, 40.76] }, properties: { ai_score: 56 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-82.55, 35.60] }, properties: { ai_score: 48 } },
    { type: "Feature", geometry: { type: "Point", coordinates: [-79.93, 32.78] }, properties: { ai_score: 71 } },
  ],
};

const SIDEBAR_DEALS = [
  { property: "Northgate Crossing", market: "Charlotte, NC", score: 94, source: "CMBS" },
  { property: "Apex Centre Tower", market: "Dallas, TX", score: 87, source: "CMBS" },
  { property: "Harborview Commerce Center", market: "Tampa, FL", score: 92, source: "County" },
  { property: "Ironwood Industrial Park", market: "Atlanta, GA", score: 85, source: "Broker" },
];

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 85 ? "border-accent/40 text-accent" : score >= 70 ? "border-severity-high/40 text-severity-high" : "border-severity-medium/40 text-severity-medium";
  return (
    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full border-2 text-[10px] font-bold font-mono ${color}`}>
      {score}
    </span>
  );
}

const DemoMapView = memo(function DemoMapView() {
  return (
    <div className="flex h-full" style={{ minHeight: "420px" }}>
      {/* Sidebar */}
      <div className="w-[200px] shrink-0 border-r border-white/[0.05] overflow-y-auto p-3 space-y-3 hidden lg:block">
        {/* Search */}
        <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-white/[0.06] bg-white/[0.02]">
          <svg className="w-3 h-3 text-muted/30 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <span className="text-muted/30 text-[10px]">Search properties...</span>
        </div>

        {/* Source filters */}
        <div>
          <p className="text-muted/30 text-[8px] uppercase tracking-widest mb-1.5 font-medium">Source</p>
          <div className="flex flex-wrap gap-1">
            {["CMBS", "County", "News", "Broker", "REIT"].map((s, i) => (
              <span key={s} className={`px-1.5 py-0.5 rounded text-[8px] border ${i < 2 ? "border-accent/30 text-accent/70 bg-accent/[0.06]" : "border-white/[0.06] text-muted/30"}`}>{s}</span>
            ))}
          </div>
        </div>

        {/* Score filters */}
        <div>
          <p className="text-muted/30 text-[8px] uppercase tracking-widest mb-1.5 font-medium">Score</p>
          <div className="flex flex-wrap gap-1">
            {["70+", "60-70", "60-65", "< 60"].map((s, i) => (
              <span key={s} className={`px-1.5 py-0.5 rounded text-[8px] border ${i === 0 ? "border-accent/30 text-accent/70 bg-accent/[0.06]" : "border-white/[0.06] text-muted/30"}`}>{s}</span>
            ))}
          </div>
        </div>

        {/* Status filters */}
        <div>
          <p className="text-muted/30 text-[8px] uppercase tracking-widest mb-1.5 font-medium">Status</p>
          <div className="flex flex-wrap gap-1">
            {["New", "Reviewing", "Pursuing", "Passed"].map((s) => (
              <span key={s} className="px-1.5 py-0.5 rounded text-[8px] border border-white/[0.06] text-muted/30">{s}</span>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div className="flex items-center justify-between">
          <p className="text-muted/30 text-[8px] uppercase tracking-widest font-medium">Sort</p>
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-white/[0.06]">
            <span className="text-[8px] text-accent/70">AI Score</span>
            <svg className="w-2 h-2 text-muted/30" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>

        {/* Deal cards */}
        <div className="space-y-1.5 pt-1 border-t border-white/[0.05]">
          {SIDEBAR_DEALS.map((d) => (
            <div key={d.property} className="flex items-center gap-2 px-1.5 py-1.5 rounded-lg hover:bg-white/[0.03] transition-colors cursor-pointer">
              <ScoreBadge score={d.score} />
              <div className="flex-1 min-w-0">
                <p className="text-[#E8EAED] text-[10px] font-medium truncate">{d.property}</p>
                <p className="text-muted/40 text-[9px]">{d.market}</p>
                <p className="text-muted/30 text-[8px]">{d.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="relative flex-1">
      <MapGL
        mapLib={mapLib}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: -97,
          latitude: 38,
          zoom: 3.5,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        interactive={false}
        attributionControl={false}
      >
        <Source id="demo-opportunities" type="geojson" data={DEMO_POINTS}>
          {/* Heatmap — same config as production */}
          <Layer
            id="heatmap-density"
            type="heatmap"
            paint={{
              "heatmap-weight": [
                "interpolate", ["linear"],
                ["coalesce", ["get", "ai_score"], 0],
                0, 0,
                40, 0.2,
                70, 0.6,
                85, 0.85,
                100, 1.0,
              ],
              "heatmap-intensity": [
                "interpolate", ["linear"],
                ["zoom"],
                0, 1.2,
                5, 1.8,
                9, 2.5,
              ],
              "heatmap-color": [
                "interpolate", ["linear"],
                ["heatmap-density"],
                0, "rgba(12, 12, 14, 0)",
                0.1, "rgba(82, 75, 60, 0.12)",
                0.3, "rgba(160, 135, 90, 0.28)",
                0.5, "rgba(185, 155, 100, 0.40)",
                0.7, "rgba(201, 169, 110, 0.52)",
                0.85, "rgba(210, 178, 120, 0.62)",
                1.0, "rgba(220, 188, 130, 0.72)",
              ],
              "heatmap-radius": [
                "interpolate", ["linear"],
                ["zoom"],
                0, 20,
                4, 35,
                7, 55,
                9, 70,
              ],
              "heatmap-opacity": 0.88,
            }}
          />
        </Source>
      </MapGL>

      {/* Stats overlay */}
      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-3">
        <div className="bg-[#0C0C0E]/85 backdrop-blur-sm border border-white/[0.08] rounded-lg px-3 py-2 flex items-center gap-3">
          <span className="text-[10px] text-muted/50 uppercase tracking-wider font-mono font-medium">
            1,341 opportunities
          </span>
          <div className="w-px h-3 bg-white/[0.08]" />
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-muted/50">Low</span>
            <div
              className="w-24 h-1.5 rounded-full"
              style={{
                background: "linear-gradient(to right, #52525B, #C9A96E, #FFFFFF, #4ADE80)",
              }}
            />
            <span className="text-[10px] text-muted/50">High</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
});

export default DemoMapView;
