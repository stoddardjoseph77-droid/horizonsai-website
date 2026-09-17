import type { Metadata } from "next";
import Script from "next/script";
import "../hz.css";

export const metadata: Metadata = {
  title: "How We Find Deals | HorizonsAI",
  description: "The public records we read before a commercial property is listed: ownership and succession, pressure on title, the debt, and how the asset is running.",
  alternates: { canonical: "/how-we-find-deals" },
  openGraph: {
    title: "Where Off-Market CRE Signals Come From | HorizonsAI",
    description:
      "The public records we read before a commercial property is listed: ownership and succession, pressure on title, the debt, and how the asset is running.",
    url: "https://www.horizonsai.co/how-we-find-deals",
    siteName: "HorizonsAI",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Off-Market CRE Signals Come From | HorizonsAI",
    description:
      "The public records we read before a commercial property is listed: ownership and succession, pressure on title, the debt, and how the asset is running.",
  },
};

export default function Page() {
  return (
    <div className="hz">
      <Script src="/hz.js" strategy="afterInteractive" />
<header className="hdr">
  <div className="wrap hdr-in">
    <a className="mark" href="/">
      <svg className="mark-s" width="50" height="32" viewBox="0 0 181 115" fill="none" aria-hidden="true"><path d="M176.12 52.3465H164.506C160.023 52.2833 155.668 50.8426 152.032 48.2199C148.396 45.5972 145.655 41.9195 144.18 37.6857V37.5667C140.169 26.5557 132.867 17.045 123.267 10.3248C113.666 3.60458 102.23 0 90.5114 0C78.7924 0 67.3569 3.60458 57.7562 10.3248C48.1554 17.045 40.8541 26.5557 36.8424 37.5667V37.6857C35.3597 41.9422 32.5968 45.636 28.9325 48.2607C25.2681 50.8854 20.8817 52.3125 16.3744 52.3465H4.76C3.49757 52.3465 2.28684 52.848 1.39417 53.7406C0.501498 54.6333 0 55.844 0 57.1065C0 58.3689 0.501498 59.5796 1.39417 60.4723C2.28684 61.365 3.49757 61.8665 4.76 61.8665H16.3744C20.8572 61.9296 25.212 63.3703 28.848 65.993C32.484 68.6157 35.2252 72.2934 36.6996 76.5273C40.7019 87.5543 48.0023 97.0817 57.6087 103.815C67.215 110.548 78.6615 114.159 90.3924 114.159C102.123 114.159 113.57 110.548 123.176 103.815C132.783 97.0817 140.083 87.5543 144.085 76.5273C145.565 72.2783 148.321 68.5899 151.976 65.9659C155.631 63.3418 160.007 61.9102 164.506 61.8665H176.12C177.382 61.8665 178.593 61.365 179.486 60.4723C180.379 59.5796 180.88 58.3689 180.88 57.1065C180.88 55.844 180.379 54.6333 179.486 53.7406C178.593 52.848 177.382 52.3465 176.12 52.3465ZM90.44 104.706C78.6397 104.707 67.26 100.324 58.5086 92.4078C49.7572 84.4919 44.258 73.6076 43.078 61.8665H137.802C136.622 73.6076 131.123 84.4919 122.371 92.4078C113.62 100.324 102.24 104.707 90.44 104.706ZM43.078 52.3465C44.2567 40.6042 49.7552 29.7185 58.5067 21.8014C67.2583 13.8844 78.6388 9.50051 90.44 9.50051C102.241 9.50051 113.622 13.8844 122.373 21.8014C131.125 29.7185 136.623 40.6042 137.802 52.3465H43.078Z" fill="currentColor"/></svg>
      <span className="mark-t">HorizonsAI</span>
    </a>
    <nav className="hdr-r">
      <a className="hdr-l" href="/">Home</a>
      <a className="btn" href="/book-a-call">Book a call</a>
    </nav>
  </div>
</header>
<main>

  <section className="sec sec-auto" id="signals" style={{background:'var(--concrete-2)'}}>
    <div className="wrap">
      <div className="sec-head"><span className="sec-n">The signals</span><span className="sec-r"></span></div>
      <h1 className="h2 display">Where the signals come from.</h1>
      <p className="lede">No one record means much. Read together they name the seller, months before a broker does.</p>
      <div className="sig-g">
        <div className="sig-c">
          <p className="label label-q">From the owner</p>
          <h3 className="sig-t">Ownership & succession</h3>
          <ul className="sig-u">
            <li>Held 20+ years</li><li>Probate filing</li><li>Estate or heirs on the deed</li>
            <li>Successor trustee</li><li>Divorce filing</li>
            <li>Partnership dissolution</li>
            <li>Individual, not an entity</li><li>Absentee owner</li>
          </ul>
        </div>
        <div className="sig-c">
          <p className="label label-q">From the courthouse</p>
          <h3 className="sig-t">Pressure on title</h3>
          <ul className="sig-u">
            <li>Lis pendens</li><li>Notice of default</li><li>Tax delinquency</li>
            <li>Tax lien</li><li>Mechanic’s lien</li><li>Code violation</li>
            <li>Receivership</li><li>Bankruptcy</li>
          </ul>
        </div>
        <div className="sig-c">
          <p className="label label-q">From the debt</p>
          <h3 className="sig-t">Capital structure</h3>
          <ul className="sig-u">
            <li>Maturity inside 24 months</li><li>Fund hold period ending</li>
            <li>No mortgage of record</li><li>Refinance gap</li>
            <li>DSCR decline</li><li>Missed payment</li>
            <li>Servicer advances</li><li>Special servicing</li>
          </ul>
        </div>
        <div className="sig-c">
          <p className="label label-q">From the asset</p>
          <h3 className="sig-t">Operations & market</h3>
          <ul className="sig-u">
            <li>Occupancy decline</li><li>Under-market rents</li><li>Tenant reviews falling</li>
            <li>Deferred maintenance</li><li>Failed listing</li>
            <li>Expired listing</li><li>Repeated price cut</li>
            <li>Broker change</li>
          </ul>
        </div>
      </div>

      <div className="tl">
        <p className="label" style={{marginTop:'clamp(50px,5.4vw,76px)'}}>The order signals arrive in</p>

        <div className="tl-lane">
          <p className="tl-lane-k">Ownership path</p>
          <div className="tl-rail">
          <span className="tl-lit" style={{width:'78%'}}></span>
          <span className="tl-mk" style={{left:'0%'}}></span>
          <span className="tl-lab first" style={{left:'0%'}}><span className="tl-sg">Long hold</span></span>
          <span className="tl-mk" style={{left:'26%'}}></span>
          <span className="tl-lab" style={{left:'26%'}}><span className="tl-sg">Dissolution filed</span></span>
          <span className="tl-mk" style={{left:'52%'}}></span>
          <span className="tl-lab" style={{left:'52%'}}><span className="tl-sg">Title transfers</span></span>
          <span className="tl-mk" style={{left:'78%'}}></span>
          <span className="tl-lab" style={{left:'78%'}}><span className="tl-sg">Owner engages broker</span></span>
          </div>
        </div>

        <div className="tl-lane">
          <p className="tl-lane-k">Debt path</p>
          <div className="tl-rail">
          <span className="tl-lit" style={{width:'78%'}}></span>
          <span className="tl-mk" style={{left:'0%'}}></span>
          <span className="tl-lab first" style={{left:'0%'}}><span className="tl-sg">Coverage falls</span></span>
          <span className="tl-mk" style={{left:'26%'}}></span>
          <span className="tl-lab" style={{left:'26%'}}><span className="tl-sg">Loan watchlisted</span></span>
          <span className="tl-mk" style={{left:'52%'}}></span>
          <span className="tl-lab" style={{left:'52%'}}><span className="tl-sg">Special servicing</span></span>
          <span className="tl-mk" style={{left:'78%'}}></span>
          <span className="tl-lab" style={{left:'78%'}}><span className="tl-sg">Maturity default</span></span>
          </div>
        </div>

        <p className="tl-conv">Both paths end in the same place — a broker listing. We read them long before that.</p>

        <div className="tl-list">
          <p className="tl-grp-k">Ownership path</p>
          <div className="tl-li"><b>Long hold</b></div>
          <div className="tl-li"><b>Dissolution filed</b></div>
          <div className="tl-li"><b>Title transfers</b></div>
          <div className="tl-li"><b>Owner engages broker</b></div>
          <p className="tl-grp-k">Debt path</p>
          <div className="tl-li"><b>Coverage falls</b></div>
          <div className="tl-li"><b>Loan watchlisted</b></div>
          <div className="tl-li"><b>Special servicing</b></div>
          <div className="tl-li"><b>Maturity default</b></div>
          <div className="tl-li end"><b>Broker listing appears</b></div>
        </div>
        <div className="tl-foot">
          <span>Everything in bronze is public and already filed</span>
          <span>Illustrative order</span>
        </div>
      </div>
    </div>
  </section>
  <section className="close" id="book">
    <div className="wrap close-in">
      <div>
        <h2 className="close-h display">See what’s moving in your markets.</h2>
        <p className="close-p">Bring your buy box. We’ll tell you where our coverage is strong in those markets, and whether your niche fits.</p>
      </div>
      <a className="btn btn-lg btn-o" href="/book-a-call">Book a call</a>
    </div>
  </section>
</main>

<footer className="ftr">
  <div className="wrap">
    <div className="ftr-in">
      <p className="label label-q">HorizonsAI · Commercial Real Estate Intelligence</p>
      <div className="ftr-l"><a href="/">Home</a><a href="/#process">Process</a><a href="/#benefits">What it means</a><a href="#signals">What we see</a><a href="/#delivery">What you get</a><a href="/#compare">Why us</a><a href="/#faq">Questions</a></div>
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
