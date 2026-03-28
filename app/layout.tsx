import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HorizonsAI | Distressed CRE Deal Intelligence",
  description:
    "We monitor SEC filings, county records, and CRE news to surface distressed opportunities before your competitors find them.",
  openGraph: {
    title: "HorizonsAI | Distressed CRE Deal Intelligence",
    description:
      "We monitor SEC filings, county records, and CRE news to surface distressed opportunities before your competitors find them.",
    type: "website",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
