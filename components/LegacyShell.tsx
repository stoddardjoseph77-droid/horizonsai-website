import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="noise-overlay bg-surface text-[#E8EAED] min-h-screen">
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
