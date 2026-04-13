"use client";

import { useEffect } from "react";

export default function HydrationGate() {
  useEffect(() => {
    requestAnimationFrame(() => {
      document.getElementById("main-content")?.classList.add("hydrated");
    });
  }, []);
  return null;
}
