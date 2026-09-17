import type { Metadata } from "next";
import Script from "next/script";
import "../hz.css";
import "./bk.css";

export const metadata: Metadata = {
  title: "Book a Call | HorizonsAI",
  description: "Bring your buy box. We will tell you where our coverage is strong in your markets and whether your niche fits.",
  alternates: { canonical: "/book-a-call" },
};

export default function Page() {
  return (
    <div className="hz">
      <Script src="/hz.js" strategy="afterInteractive" />
      <Script src="/bk.js" strategy="afterInteractive" />
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
        <p className="label">Book a call</p>
        <h1 className="bk-h">Bring your buy box.</h1>
        <ul className="bk-list">
          <li><i>01</i><span><strong>Your criteria</strong> — markets, asset classes, cheque size, and how you actually buy.</span></li>
          <li><i>02</i><span><strong>Coverage, straight</strong> — where it is strong, where it is thin, and whether your niche fits.</span></li>
          <li><i>03</i><span><strong>What you would get</strong> — how a pipeline built to your box would reach you, and what it would cost.</span></li>
        </ul>
        <p className="bk-real">No deck. A straight conversation about what you buy, and whether we can find it.</p>
        <p className="bk-note">We don’t broker. No fee on anything you buy.</p>
      </div>
      <div className="bk-r">
        <img src="/img/hz-667f07b1.jpg" alt="Loading dock elevation of a single-tenant distribution warehouse" />
      </div>
    </div>
  </section>

  <section className="cal">
    <div className="wrap">
      <div className="sec-head"><span className="sec-n">Pick a time</span><span className="sec-r"></span></div>
      <div className="cal-frame">
        <div className="cal-bar">
          <span className="label">Availability</span>
          <span className="label label-q">Google Meet · your timezone</span>
        </div>
        <div className="cal-live">
          <div className="cal-month">
            <div className="cal-mh"><span>September 2026</span><span className="cal-nav">‹  ›</span></div>
            <div className="cal-dow"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
            <div className="cal-days"><span></span><span></span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><button className="day" type="button" data-d="17" aria-pressed="false">17</button><span>18</span><span>19</span><span>20</span><button className="day" type="button" data-d="21" aria-pressed="false">21</button><button className="day" type="button" data-d="22" aria-pressed="false">22</button><button className="day" type="button" data-d="23" aria-pressed="false">23</button><button className="day" type="button" data-d="24" aria-pressed="false">24</button><span>25</span><span>26</span><span>27</span><button className="day" type="button" data-d="28" aria-pressed="false">28</button><button className="day" type="button" data-d="29" aria-pressed="false">29</button><button className="day" type="button" data-d="30" aria-pressed="false">30</button><span></span><span></span><span></span></div>
          </div>
          <div className="cal-times">
            <p className="label label-q" id="cal-day">Select a date</p>
            <div id="cal-slots"></div>
            <a className="btn" id="cal-go" href="https://cal.com/joey-stoddard-iy7cjz/20-minute-exploration-call" target="_blank" rel="noopener" style={{marginTop:'14px',textAlign:'center'}}>Confirm</a>
          </div>
        </div>
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
  </div>
</footer>
    </div>
  );
}
