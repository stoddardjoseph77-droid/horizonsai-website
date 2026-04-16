"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    let url = window.origin + pathname;
    const qs = searchParams?.toString();
    if (qs) url += `?${qs}`;
    posthog.capture("$pageview", { $current_url: url, path: pathname });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";
    if (!key) return;
    if (posthog.__loaded) return;

    const isDev = process.env.NODE_ENV === "development";

    posthog.init(key, {
      api_host: host,
      capture_pageview: false,
      capture_pageleave: true,
      capture_heatmaps: true,
      capture_performance: true,
      autocapture: true,
      rageclick: true,
      person_profiles: "identified_only",
      session_recording: {
        maskAllInputs: false,
        maskTextSelector: "[data-ph-mask]",
      },
      opt_out_useragent_filter: isDev,
      loaded: (ph) => {
        if (typeof window !== "undefined") (window as unknown as { posthog: typeof ph }).posthog = ph;
      },
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
      {children}
    </PHProvider>
  );
}
