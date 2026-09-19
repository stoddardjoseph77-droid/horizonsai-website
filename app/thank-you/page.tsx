import type { Metadata } from "next";
import { Suspense } from "react";
import BookingConfirmed from "@/components/BookingConfirmed";
import "../hz.css";
import "../book-a-call/bk.css";
import "./ty.css";

export const metadata: Metadata = {
  title: "You're booked | HorizonsAI",
  description: "Your call with HorizonsAI is confirmed. Here is what to have ready.",
  robots: { index: false, follow: false },
};

const PREP = [
  ["Your buy box", "Asset classes, target markets, deal size, and any hard filters you run today."],
  ["How deals reach you now", "Brokers, listing sites, your own outreach. Whatever the current flow looks like."],
  ["A deal or two you chased", "Recent ones you closed or passed on. It tells us what a good fit looks like to you."],
];

const FAQ = [
  ["What happens on the call?", "We go through your buy box, then tell you where our coverage is strong in your markets, where it is thin, and whether your niche fits. If it is not a fit we will say so on that call rather than book a second one."],
  ["What does it cost?", "Pricing depends on how much ground you want covered: the markets and asset classes in scope, not how many deals we send. There is no fee on anything you buy and no commission on the trade. You get a number on the call once we know the scope."],
  ["How many deals will I see per month?", "It depends on how tight your criteria are. Narrower markets and asset classes mean fewer deals, each a closer fit. We benchmark against your current deal flow during onboarding so you know what to expect before going live."],
  ["How long until it is running?", "Once scope is agreed we build your pipeline to your criteria and walk you through the first deals. We give you a date on the call."],
];

export default function ThankYouPage() {
  return (
    <div className="hz">
<header className="hdr">
  <div className="wrap hdr-in">
    <a className="mark" href="/">
      <svg className="mark-s" width="50" height="32" viewBox="0 0 181 115" fill="none" aria-hidden="true"><path d="M176.12 52.3465H164.506C160.023 52.2833 155.668 50.8426 152.032 48.2199C148.396 45.5972 145.655 41.9195 144.18 37.6857V37.5667C140.169 26.5557 132.867 17.045 123.267 10.3248C113.666 3.60458 102.23 0 90.5114 0C78.7924 0 67.3569 3.60458 57.7562 10.3248C48.1554 17.045 40.8541 26.5557 36.8424 37.5667V37.6857C35.3597 41.9422 32.5968 45.636 28.9325 48.2607C25.2681 50.8854 20.8817 52.3125 16.3744 52.3465H4.76C3.49757 52.3465 2.28684 52.848 1.39417 53.7406C0.501498 54.6333 0 55.844 0 57.1065C0 58.3689 0.501498 59.5796 1.39417 60.4723C2.28684 61.365 3.49757 61.8665 4.76 61.8665H16.3744C20.8572 61.9296 25.212 63.3703 28.848 65.993C32.484 68.6157 35.2252 72.2934 36.6996 76.5273C40.7019 87.5543 48.0023 97.0817 57.6087 103.815C67.215 110.548 78.6615 114.159 90.3924 114.159C102.123 114.159 113.57 110.548 123.176 103.815C132.783 97.0817 140.083 87.5543 144.085 76.5273C145.565 72.2783 148.321 68.5899 151.976 65.9659C155.631 63.3418 160.007 61.9102 164.506 61.8665H176.12C177.382 61.8665 178.593 61.365 179.486 60.4723C180.379 59.5796 180.88 58.3689 180.88 57.1065C180.88 55.844 180.379 54.6333 179.486 53.7406C178.593 52.848 177.382 52.3465 176.12 52.3465ZM90.44 104.706C78.6397 104.707 67.26 100.324 58.5086 92.4078C49.7572 84.4919 44.258 73.6076 43.078 61.8665H137.802C136.622 73.6076 131.123 84.4919 122.371 92.4078C113.62 100.324 102.24 104.707 90.44 104.706ZM43.078 52.3465C44.2567 40.6042 49.7552 29.7185 58.5067 21.8014C67.2583 13.8844 78.6388 9.50051 90.44 9.50051C102.241 9.50051 113.622 13.8844 122.373 21.8014C131.125 29.7185 136.623 40.6042 137.802 52.3465H43.078Z" fill="currentColor"/></svg>
      <span className="mark-t">HorizonsAI</span>
    </a>
    <nav className="hdr-r"><a className="hdr-l" href="/">Home</a></nav>
  </div>
</header>
<main>
  <section className="bk">
    <div className="bk-g">
      <div className="bk-l">
        <Suspense fallback={<><p className="label ty-ok">Booking confirmed</p><h1 className="bk-h ty-h">You’re booked.</h1></>}>
          <BookingConfirmed />
        </Suspense>
      </div>
      <div className="bk-r">
        <img src="/img/hz-737c0ae1.jpg" alt="Aerial view of an industrial district street grid" />
      </div>
    </div>
  </section>

  <section className="sec sec-auto ty-prep">
    <div className="wrap">
      <div className="sec-head"><span className="sec-n">Before the call</span><span className="sec-r"></span></div>
      <h2 className="h2 display">What helps to have ready.</h2>
      <ol className="ty-grid">
        {PREP.map(([t, b], i) => (
          <li key={t}><i>0{i + 1}</i><strong>{t}</strong><span>{b}</span></li>
        ))}
      </ol>
    </div>
  </section>

  <section className="sec sec-auto" id="faq" style={{ background: "var(--concrete-2)" }}>
    <div className="wrap">
      <div className="sec-head"><span className="sec-n">Questions</span><span className="sec-r"></span></div>
      <h2 className="h2 display">What people ask before the call.</h2>
      <div className="faq">
        {FAQ.map(([q, a]) => (
          <details key={q}><summary>{q}</summary><p className="faq-a">{a}</p></details>
        ))}
      </div>
    </div>
  </section>

  <section className="close">
    <div className="wrap close-in">
      <div>
        <h2 className="close-h display">Anything to send ahead?</h2>
        <p className="close-p">Criteria, a recent deal, a market you care about. Reply to the confirmation email or send it straight to me.</p>
      </div>
      <div className="ty-contact">
        <a href="mailto:joey@horizonsai.co">joey@horizonsai.co</a>
        <a href="tel:+16167233848">616-723-3848</a>
      </div>
    </div>
  </section>
</main>

<footer className="ftr">
  <div className="wrap">
    <div className="ftr-in">
      <p className="label label-q">HorizonsAI · Commercial Real Estate Intelligence</p>
      <div className="ftr-l"><a href="/">Home</a></div>
    </div>
    <div className="ftr-c">
      <a href="mailto:joey@horizonsai.co">joey@horizonsai.co</a>
      <a href="tel:+16167233848">616-723-3848</a>
    </div>
  </div>
</footer>
    </div>
  );
}
