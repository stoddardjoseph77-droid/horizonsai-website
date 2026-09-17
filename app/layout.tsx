import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import HydrationGate from "@/components/HydrationGate";
import { PostHogProvider } from "@/components/PostHogProvider";
import { OrganizationSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.horizonsai.co"),
  title: "HorizonsAI | Distressed CRE Deal Intelligence",
  description:
    "We monitor SEC filings, county records, and CRE news to surface distressed opportunities before your competitors find them.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "HorizonsAI | Distressed CRE Deal Intelligence",
    description:
      "We monitor SEC filings, county records, and CRE news to surface distressed opportunities before your competitors find them.",
    url: "https://www.horizonsai.co",
    siteName: "HorizonsAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HorizonsAI | Distressed CRE Deal Intelligence",
    description:
      "We monitor SEC filings, county records, and CRE news to surface distressed opportunities before your competitors find them.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,200;6..72,300;6..72,400&family=Libre+Franklin:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual'" }} />
        <OrganizationSchema />
        <PostHogProvider>
          <HydrationGate />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
