"use client";

import { useSectionViewTracking } from "@/hooks/useSectionView";
import { useScrollDepthTracking } from "@/hooks/useScrollDepth";

export default function EngagementTracker() {
  useSectionViewTracking();
  useScrollDepthTracking();
  return null;
}
