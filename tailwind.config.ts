import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#6D7AFF",
          secondary: "#8B5CF6",
        },
        dark: {
          bg: "#0F0F1A",
          surface: "#1A1A2E",
          border: "#2D2D3F",
        },
        light: {
          bg: "#FFFFFF",
          secondary: "#F9FAFB",
          border: "#E5E7EB",
        },
        text: {
          primary: "#111827",
          secondary: "#6B7280",
          muted: "#9CA3AF",
          "on-dark": "#F9FAFB",
          accent: "#6D7AFF",
        },
        status: {
          success: "#10B981",
          warning: "#F59E0B",
          danger: "#EF4444",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
