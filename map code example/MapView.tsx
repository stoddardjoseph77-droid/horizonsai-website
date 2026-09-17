"use client";

import { useEffect, useRef, useCallback, useState, useMemo } from "react";
import Map, {
  Source,
  Layer,
  Popup,
  NavigationControl,
  type MapRef,
  type MapMouseEvent,
} from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { aiScoreColor } from "@/lib/severity";
import type { OpportunityRow } from "@/app/opportunities/page";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

const MAP_STYLES = {
  dark: "mapbox://styles/mapbox/dark-v11",
  satellite: "mapbox://styles/mapbox/satellite-streets-v12",
} as const;

type MapStyleKey = keyof typeof MAP_STYLES;

interface PinFeatureProperties {
  id: string;
  source_type: string;
  source_id: number;
  property_name: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  ai_score: number | null;
  geocode_accuracy: string | null;
  is_secondary: 0 | 1;
}

export interface MarketHealthEntry {
  vacancy: number;
  trend: "improving" | "stable" | "declining" | null;
}

interface MapViewProps {
  pins: OpportunityRow[];
  selectedId: string | null;
  onSelectPin: (sourceType: string, sourceId: number) => void;
  marketHealth?: Map<string, MarketHealthEntry>;
}

// Build GeoJSON from OpportunityRow[] — includes secondary pins for multi-address properties
function buildGeoJSON(pins: OpportunityRow[]): GeoJSON.FeatureCollection<GeoJSON.Point, PinFeatureProperties> {
  const features: GeoJSON.Feature<GeoJSON.Point, PinFeatureProperties>[] = [];

  for (const p of pins) {
    if (p.lat == null || p.lng == null) continue;

    const base = {
      source_type: p.source_type,
      source_id: p.source_id,
      property_name: p.property_name,
      address: p.address,
      city: p.city,
      state: p.state,
      ai_score: p.ai_score ?? null,
      geocode_accuracy: p.geocode_accuracy ?? null,
    };

    // Primary pin
    features.push({
      type: "Feature",
      geometry: { type: "Point", coordinates: [p.lng, p.lat] },
      properties: { ...base, id: `${p.source_type}:${p.source_id}`, is_secondary: 0 },
    });

    // Secondary pins (lat2/lng2, lat3/lng3) — same click target, smaller radius
    if (p.lat2 != null && p.lng2 != null) {
      features.push({
        type: "Feature",
        geometry: { type: "Point", coordinates: [p.lng2, p.lat2] },
        properties: { ...base, id: `${p.source_type}:${p.source_id}`, is_secondary: 1 },
      });
    }
    if (p.lat3 != null && p.lng3 != null) {
      features.push({
        type: "Feature",
        geometry: { type: "Point", coordinates: [p.lng3, p.lat3] },
        properties: { ...base, id: `${p.source_type}:${p.source_id}`, is_secondary: 1 },
      });
    }
  }

  return { type: "FeatureCollection", features };
}

function MapPlaceholder({ message }: { message: string }) {
  return (
    <div
      className="relative h-full flex items-center justify-center"
      style={{
        background: "radial-gradient(ellipse at center, #1C1C1F 0%, #0C0C0E 70%)",
      }}
    >
      <div className="text-center max-w-xs">
        <div className="w-12 h-12 rounded-full bg-pioneer-blue/10 border border-pioneer-border flex items-center justify-center mx-auto mb-4">
          <svg className="w-5 h-5 text-pioneer-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <p className="text-pioneer-secondary text-xs font-sans">{message}</p>
      </div>
    </div>
  );
}

export function MapView({ pins, selectedId, onSelectPin, marketHealth }: MapViewProps) {
  const mapRef = useRef<MapRef>(null);
  const [mapStyle, setMapStyle] = useState<MapStyleKey>("dark");
  const [hoveredPin, setHoveredPin] = useState<{
    longitude: number;
    latitude: number;
    properties: PinFeatureProperties;
  } | null>(null);
  const [mapError, setMapError] = useState(false);

  const geojson = useMemo(() => buildGeoJSON(pins), [pins]);

  // Auto-fit bounds when filtered pin set changes (if ≥ 2 pins)
  useEffect(() => {
    const map = mapRef.current?.getMap();
    if (!map || pins.length < 2) return;
    const validPins = pins.filter((p) => p.lat != null && p.lng != null);
    if (validPins.length < 2) return;

    const lngs = validPins.map((p) => p.lng as number);
    const lats = validPins.map((p) => p.lat as number);
    const bounds: [[number, number], [number, number]] = [
      [Math.min(...lngs), Math.min(...lats)],
      [Math.max(...lngs), Math.max(...lats)],
    ];
    map.fitBounds(bounds, { padding: 60, maxZoom: 12, duration: 400 });
  }, [pins]);

  // Fly to selected pin
  useEffect(() => {
    if (!selectedId) return;
    const row = pins.find(
      (p) => `${p.source_type}:${p.source_id}` === selectedId
    );
    if (!row || row.lat == null || row.lng == null) return;
    mapRef.current?.flyTo({
      center: [row.lng, row.lat],
      zoom: 13,
      duration: 600,
    });
  }, [selectedId, pins]);

  const handleMapClick = useCallback(
    (e: MapMouseEvent) => {
      const map = mapRef.current?.getMap();
      if (!map) return;

      const pinFeatures = map.queryRenderedFeatures(e.point, {
        layers: ["unclustered-pin"],
      });
      if (pinFeatures.length > 0) {
        const props = pinFeatures[0].properties as PinFeatureProperties;
        onSelectPin(props.source_type, props.source_id);
      }
    },
    [onSelectPin]
  );

  const handleMouseEnter = useCallback((e: MapMouseEvent) => {
    const map = mapRef.current?.getMap();
    if (!map) return;
    map.getCanvas().style.cursor = "pointer";

    const features = map.queryRenderedFeatures(e.point, {
      layers: ["unclustered-pin"],
    });
    if (features.length > 0) {
      const geom = features[0].geometry as GeoJSON.Point;
      setHoveredPin({
        longitude: geom.coordinates[0],
        latitude: geom.coordinates[1],
        properties: features[0].properties as PinFeatureProperties,
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (map) map.getCanvas().style.cursor = "";
    setHoveredPin(null);
  }, []);


  if (!MAPBOX_TOKEN) {
    return (
      <MapPlaceholder message="Map not configured — set NEXT_PUBLIC_MAPBOX_TOKEN" />
    );
  }

  return (
    <div className="relative flex-1 min-h-0 h-full">
      {mapError && (
        <div className="absolute inset-0 z-10">
          <MapPlaceholder message="Map tiles unavailable — list view still works" />
        </div>
      )}

      <Map
        ref={mapRef}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: -82,
          latitude: 37,
          zoom: 4.5,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={MAP_STYLES[mapStyle]}
        onClick={handleMapClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onError={() => setMapError(true)}
        interactiveLayerIds={["unclustered-pin"]}
      >
        <NavigationControl position="bottom-right" />

        {/* GeoJSON source — no clustering, heatmap handles density */}
        <Source
          id="opportunities"
          type="geojson"
          data={geojson}
        >
          {/* ── Heatmap layer — score-based: 0=clear, 100=bright red ── */}
          <Layer
            id="heatmap-density"
            type="heatmap"
            maxzoom={11}
            paint={{
              // Weight directly proportional to AI score: 0→0, 100→1
              "heatmap-weight": [
                "interpolate", ["linear"],
                ["coalesce", ["get", "ai_score"], 0],
                0,  0,
                40, 0.2,
                70, 0.6,
                85, 0.85,
                100, 1.0,
              ],
              // Moderate intensity — keep it crisp, not blown out
              "heatmap-intensity": [
                "interpolate", ["linear"],
                ["zoom"],
                0, 1.2,
                5, 1.8,
                9, 2.5,
              ],
              // Warm amber glow — subtle, not white, not flashy
              "heatmap-color": [
                "interpolate", ["linear"],
                ["heatmap-density"],
                0,    "rgba(12, 12, 14, 0)",
                0.1,  "rgba(82, 75, 60, 0.12)",
                0.3,  "rgba(160, 135, 90, 0.28)",
                0.5,  "rgba(185, 155, 100, 0.40)",
                0.7,  "rgba(201, 169, 110, 0.52)",
                0.85, "rgba(210, 178, 120, 0.62)",
                1.0,  "rgba(220, 188, 130, 0.72)",
              ],
              // Large radius for smooth overlapping field, not isolated blobs
              "heatmap-radius": [
                "interpolate", ["linear"],
                ["zoom"],
                0, 20,
                4, 35,
                7, 55,
                9, 70,
              ],
              // Fade out as individual pins come in
              "heatmap-opacity": [
                "interpolate", ["linear"],
                ["zoom"],
                8, 0.88,
                11, 0,
              ],
            }}
          />

          {/* ── Individual pins — fade in at z≥9 ── */}
          {/* City-level pins get lower opacity + dashed stroke to signal approximate location */}
          {/* Secondary pins (lat2/lng2, lat3/lng3) are smaller */}
          <Layer
            id="unclustered-pin"
            type="circle"
            minzoom={9}
            filter={["!", ["has", "point_count"]]}
            paint={{
              "circle-radius": [
                "case",
                ["==", ["get", "id"], selectedId ?? ""],
                9,
                ["==", ["get", "is_secondary"], 1],
                4,
                6,
              ],
              // Color by AI score: 0=gray, 50=orange, 70=white, 85+=green
              // City-level pins use muted blue-gray to distinguish from building-level
              "circle-color": [
                "case",
                ["==", ["get", "geocode_accuracy"], "city"],
                "#6B8CAE",
                [
                  "interpolate", ["linear"],
                  ["coalesce", ["get", "ai_score"], 0],
                  0,   "#52525B",
                  40,  "#D4A043",
                  70,  "#FFFFFF",
                  85,  "#4ADE80",
                  100, "#4ADE80",
                ],
              ],
              "circle-opacity": [
                "interpolate", ["linear"],
                ["zoom"],
                9, 0,
                10, [
                  "case",
                  ["==", ["get", "geocode_accuracy"], "city"],
                  0.55,
                  0.88,
                ],
              ],
              "circle-stroke-width": [
                "case",
                ["==", ["get", "id"], selectedId ?? ""],
                2.5,
                ["==", ["get", "geocode_accuracy"], "city"],
                2,
                1,
              ],
              "circle-stroke-color": [
                "case",
                ["==", ["get", "id"], selectedId ?? ""],
                "#ffffff",
                ["==", ["get", "geocode_accuracy"], "city"],
                "rgba(107, 140, 174, 0.5)",
                "rgba(12, 12, 14, 0.6)",
              ],
              "circle-blur": [
                "case",
                ["==", ["get", "geocode_accuracy"], "city"],
                0.4,
                0.15,
              ],
            }}
          />
        </Source>

        {/* Hover popup */}
        {hoveredPin && (
          <Popup
            longitude={hoveredPin.longitude}
            latitude={hoveredPin.latitude}
            closeButton={false}
            closeOnClick={false}
            anchor="bottom"
            offset={12}
          >
            <div className="text-xs">
              <div className="font-semibold text-white leading-snug">
                {hoveredPin.properties.property_name || hoveredPin.properties.address?.split(",")[0] || "Unknown Property"}
              </div>
              {(hoveredPin.properties.city || hoveredPin.properties.state) && (
                <div className="text-pioneer-secondary mt-0.5">
                  {[hoveredPin.properties.city, hoveredPin.properties.state]
                    .filter(Boolean)
                    .join(", ")}
                </div>
              )}
              {hoveredPin.properties.geocode_accuracy === "city" && (
                <div className="text-[10px] text-blue-300/70 mt-0.5 italic">Approximate location (city-level)</div>
              )}
              {hoveredPin.properties.ai_score != null && (
                <div
                  className="mt-1 font-bold text-sm"
                  style={{ color: aiScoreColor(hoveredPin.properties.ai_score) }}
                >
                  Score: {hoveredPin.properties.ai_score}
                </div>
              )}
              {(() => {
                if (!marketHealth || !hoveredPin.properties.city || !hoveredPin.properties.state) return null;
                const health = marketHealth.get(`${hoveredPin.properties.city},${hoveredPin.properties.state}`);
                if (!health) return null;
                const color = health.trend === "improving" ? "#4ADE80" : health.trend === "declining" ? "#EF4444" : "#EAB308";
                const arrow = health.trend === "improving" ? "↑" : health.trend === "declining" ? "↓" : "→";
                return (
                  <div className="mt-1 text-[10px]" style={{ color }}>
                    Market: {health.vacancy.toFixed(1)}% vacancy {arrow} {health.trend ?? "stable"}
                  </div>
                );
              })()}
            </div>
          </Popup>
        )}
      </Map>

      {/* Map style toggle */}
      <div className="absolute top-3 right-3 z-10 flex gap-1">
        {(["dark", "satellite"] as MapStyleKey[]).map((style) => (
          <button
            key={style}
            onClick={() => setMapStyle(style)}
            className={[
              "px-3 py-1.5 rounded text-[11px] font-display font-semibold uppercase tracking-wider transition-all duration-150 border",
              mapStyle === style
                ? "bg-pioneer-navy text-white border-pioneer-orange"
                : "bg-pioneer-navy/80 text-pioneer-secondary border-pioneer-border hover:border-pioneer-orange/40 hover:text-white",
            ].join(" ")}
          >
            {style}
          </button>
        ))}
      </div>

      {/* Heatmap legend */}
      <div className="absolute bottom-8 left-3 z-10">
        <div className="bg-pioneer-navy/85 backdrop-blur-sm border border-pioneer-border rounded-lg px-3 py-2.5 flex items-center gap-3">
          <span className="text-[10px] text-pioneer-muted uppercase tracking-wider font-sans font-medium">
            {pins.length.toLocaleString()} shown
          </span>
          <div className="w-px h-3 bg-pioneer-border" />
          {/* Gradient bar: gray → orange → white → green */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-pioneer-muted font-sans">Low</span>
            <div
              className="w-28 h-2 rounded-full"
              style={{
                background: "linear-gradient(to right, #52525B, #C9A96E, #FFFFFF, #4ADE80)",
              }}
            />
            <span className="text-[10px] text-pioneer-muted font-sans">High</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapView;
