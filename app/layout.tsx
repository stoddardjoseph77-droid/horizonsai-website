import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HydrationGate from "@/components/HydrationGate";
import { PostHogProvider } from "@/components/PostHogProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.horizonsai.co"),
  title: "HorizonsAI | Distressed CRE Deal Intelligence",
  description:
    "We monitor SEC filings, county records, and CRE news to surface distressed opportunities before your competitors find them.",
  alternates: {
    canonical: "/commercial",
  },
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
    url: "https://www.horizonsai.co/commercial",
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
      <body className="noise-overlay font-sans antialiased bg-surface text-[#E8EAED]">
        <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual'" }} />
        <PostHogProvider>
          <Navbar />
          <HydrationGate />
          <main id="main-content">{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
