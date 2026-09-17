import type { Metadata } from "next";
import Script from "next/script";
import { CommercialSchema } from "@/components/StructuredData";
import "./hz.css";

export const metadata: Metadata = {
  title: "HorizonsAI | Off-Market CRE Deal Sourcing",
  description:
    "Off-market commercial real estate deal sourcing. We read public filings and county records months before a property is listed, scored to your buy box.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="hz">
      <CommercialSchema />
      <Script src="/hz.js" strategy="afterInteractive" />
<header className="hdr">
  <div className="wrap hdr-in">
    <a className="mark" href="#top">
      <svg className="mark-s" width="50" height="32" viewBox="0 0 181 115" fill="none" aria-hidden="true"><path d="M176.12 52.3465H164.506C160.023 52.2833 155.668 50.8426 152.032 48.2199C148.396 45.5972 145.655 41.9195 144.18 37.6857V37.5667C140.169 26.5557 132.867 17.045 123.267 10.3248C113.666 3.60458 102.23 0 90.5114 0C78.7924 0 67.3569 3.60458 57.7562 10.3248C48.1554 17.045 40.8541 26.5557 36.8424 37.5667V37.6857C35.3597 41.9422 32.5968 45.636 28.9325 48.2607C25.2681 50.8854 20.8817 52.3125 16.3744 52.3465H4.76C3.49757 52.3465 2.28684 52.848 1.39417 53.7406C0.501498 54.6333 0 55.844 0 57.1065C0 58.3689 0.501498 59.5796 1.39417 60.4723C2.28684 61.365 3.49757 61.8665 4.76 61.8665H16.3744C20.8572 61.9296 25.212 63.3703 28.848 65.993C32.484 68.6157 35.2252 72.2934 36.6996 76.5273C40.7019 87.5543 48.0023 97.0817 57.6087 103.815C67.215 110.548 78.6615 114.159 90.3924 114.159C102.123 114.159 113.57 110.548 123.176 103.815C132.783 97.0817 140.083 87.5543 144.085 76.5273C145.565 72.2783 148.321 68.5899 151.976 65.9659C155.631 63.3418 160.007 61.9102 164.506 61.8665H176.12C177.382 61.8665 178.593 61.365 179.486 60.4723C180.379 59.5796 180.88 58.3689 180.88 57.1065C180.88 55.844 180.379 54.6333 179.486 53.7406C178.593 52.848 177.382 52.3465 176.12 52.3465ZM90.44 104.706C78.6397 104.707 67.26 100.324 58.5086 92.4078C49.7572 84.4919 44.258 73.6076 43.078 61.8665H137.802C136.622 73.6076 131.123 84.4919 122.371 92.4078C113.62 100.324 102.24 104.707 90.44 104.706ZM43.078 52.3465C44.2567 40.6042 49.7552 29.7185 58.5067 21.8014C67.2583 13.8844 78.6388 9.50051 90.44 9.50051C102.241 9.50051 113.622 13.8844 122.373 21.8014C131.125 29.7185 136.623 40.6042 137.802 52.3465H43.078Z" fill="currentColor"/></svg>
      <span className="mark-t">HorizonsAI</span>
    </a>
    <nav className="hdr-r">
      <a className="hdr-l" href="#process">Process</a>
      <a className="hdr-l" href="#benefits">What it means</a>
      <a className="hdr-l" href="#signals-link">What we see</a>
      <a className="hdr-l" href="#delivery">What you get</a>
      <a className="hdr-l" href="#compare">Why us</a>
      <a className="hdr-l" href="#faq">Questions</a>
      <a className="btn" href="/book-a-call">Book a call</a>
    </nav>
  </div>
</header>
<main id="top">
  <section className="hero">
    <div className="hero-g">
      <div className="hero-l">
        <h1 className="display">Source off-market deals <em>before</em> they hit the market.</h1>
        <p className="sub">HorizonsAI monitors $2T+ in commercial real estate debt and finds off-market opportunities months ahead of the broker cycle — every one scored against your acquisition criteria.</p>
        <p className="cap">Off-market sourcing + AI scoring + owner contact <b>/</b> Commercial real estate</p>
        <div className="hero-cta">
          <a className="btn btn-lg" href="/book-a-call">Book a call</a>
          <span className="hero-note">We don’t broker. No fee on anything you buy.</span>
        </div>
      </div>
      <div className="hero-r"><canvas id="hero" aria-hidden="true"></canvas></div>
    </div>
    <div className="hero-strip">
    <div className="wrap strip-in">
      <div className="strip-m"><b>$0</b><span>Commission on what you buy</span></div>
      <div className="strip-m"><b>50</b><span>States covered</span></div>
      <div className="strip-m"><b>6</b><span>Asset classes</span></div>
      <div className="strip-m"><b>30+</b><span>Signals read per property</span></div>
    </div>
    </div>
  </section>

  <section className="cs" id="case">
    <div className="cs-g">
      <div className="cs-l">
        <p className="label">Case study / Pioneer Acquisitions</p>
        <div className="cs-who">
          <img className="cs-face" src="/img/hz-7204aad5.jpg" alt="James Peterson, Co-Founder of Pioneer Acquisitions" />
          <span><b>James Peterson</b><i>Co-Founder, Pioneer Acquisitions</i></span>
        </div>
        <p className="cs-q">“In the months since launch, the platform has surfaced hundreds of opportunities on and off market aligned with our criteria — including deals headed for maturity with weak refi math, county pre-foreclosure filings and pre-marketed REO properties that would not have reached our desk otherwise.”</p>
        
      </div>
      <div className="cs-r">
<canvas id="cs-radar" aria-hidden="true"></canvas>
      </div>
    </div>
  </section>

  <section className="sec" id="process">
    <div className="wrap">
      <div className="sec-head"><span className="sec-n">01 / Process</span><span className="sec-r"></span></div>
      <h2 className="h2 display">Configured to your buy box in three steps.</h2>
      <div className="steps">
        <div className="step"><div className="step-n">01</div><h3 className="step-t">Tell us your criteria</h3><p className="step-d">Target markets, asset classes, deal size and strategy. We configure the pipeline to match how you actually buy.</p></div>
        <div className="step"><div className="step-n">02</div><h3 className="step-t">We build your pipeline</h3><p className="step-d">Coverage configured to your strategy, across public, filed and market channels in your markets.</p></div>
        <div className="step"><div className="step-n">03</div><h3 className="step-t">Deals arrive scored</h3><p className="step-d">Ranked opportunities land on your dashboard as they appear, with a weekly digest for the ones worth a call.</p></div>
      </div>
    </div>
  </section>

    <section className="sec" id="benefits" style={{background:'var(--concrete-2)'}}>
    <div className="wrap">
      <div className="sec-head"><span className="sec-n">02 / Built around you</span><span className="sec-r"></span></div>
      <h2 className="h2 display">Built around how you already buy.</h2>
      <p className="lede">We sit down with your team, define what you are actually trying to acquire, and compile the pipeline around that.</p>
      <div className="ben-g">
        <div className="ben-l">
      <div className="ben" style={{gridTemplateColumns:'repeat(2,1fr)',marginTop:'clamp(28px,3.4vw,42px)'}}>
        <div className="ben-c">
          <h3 className="ben-t">We start with your buy box</h3>
          <p className="ben-d">Markets, asset classes, cheque size, hold period, the deal terms you actually transact on. We define these with your team on the way in.</p>
        </div>
        <div className="ben-c">
          <h3 className="ben-t">The pipeline is compiled around it</h3>
          <p className="ben-d">Sources, screens and scoring are configured to that mandate. Nothing here is a shared feed that four other firms read the same morning.</p>
        </div>
        <div className="ben-c">
          <h3 className="ben-t">Your own data can go in</h3>
          <p className="ben-d">Deals you have passed on, properties you have already reviewed, rent comps and owner relationships you hold. If you have proprietary data or a process that works, it becomes part of the screen.</p>
        </div>
        <div className="ben-c">
          <h3 className="ben-t">You only see what fits</h3>
          <p className="ben-d">Everything that reaches you has been measured against your criteria first. As the strategy moves, the screens move with it.</p>
        </div>
      </div>
        </div>
        <div className="ben-r">
          <img src="/img/hz-66000c73.jpg" alt="Elevation of a four-storey garden-style apartment building" />
        </div>
      </div>
    </div>
  </section>
  <section className="sec" id="signals-link" style={{background:'var(--concrete-2)'}}>
    <div className="wrap">
      <div className="sec-head"><span className="sec-n">03 / What we see</span><span className="sec-r"></span></div>
      <h2 className="h2 display">Everything moves<br />before the listing does.</h2>
      <p className="lede">Months before a property is marketed, the owner, the title and the debt have already moved. Every one of those moves is filed somewhere public. We read more than thirty of them — long hold, probate, lis pendens, tax delinquency, maturity inside 24 months, occupancy decline — and the order they arrive in is what puts you ahead of the cycle.</p>
      <div className="hero-cta" style={{marginTop:'clamp(26px,3vw,38px)'}}>
        <a className="btn btn-lg btn-o" href="/how-we-find-deals">See the signals we read</a>
      </div>
    </div>
  </section>


  <section className="fb">
    <div className="fb-g">
      <div className="fb-l">
        <p className="label">Coverage</p>
        <h2 className="fb-h">Whatever you buy, the record exists before the listing does.</h2>
        <div className="fb-list">
          <span>Industrial</span><span>Multifamily</span><span>Retail</span>
          <span>Office</span><span>Outdoor storage</span><span>Flex</span><span>All 50 states</span>
        </div>
      </div>
      <div className="fb-r">
        <img src="/img/hz-667f07b1.jpg" alt="Loading dock elevation of a single-tenant distribution warehouse" />
      </div>
    </div>
  </section>

  <section className="sec" id="delivery" style={{background:'var(--concrete-2)'}}>
    <div className="wrap">
      <div className="sec-head"><span className="sec-n">04 / What you get</span><span className="sec-r"></span></div>
      <h2 className="h2 display">What lands on your desk.</h2>
      <p className="lede">Every opportunity arrives scored, with who owns it and how long they have held it — alongside the debt, and the filing each claim came from. A built-in AI assistant sits on top of it, holding your criteria and the whole database, so you can ask it anything.</p>

      <div className="tape">
        <div className="tape-h">
          <span className="label">What you receive</span>
          <span className="label label-q">Sample view</span>
        </div>
        <div className="tape-scroll">
          <table>
            <thead>
              <tr>
                <th scope="col">Asset</th>
                <th scope="col">Market</th>
                <th scope="col" style={{textAlign:'right'}}>Value</th>
                <th scope="col" style={{textAlign:'right'}}>Held</th>
                <th scope="col">Signal</th>
                <th scope="col">Filing</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="td-a" data-k="Asset">Industrial<small>214,000 sf</small></td><td className="td-m" data-k="Market">Columbus, OH</td><td className="num" data-k="Value">$18.4M</td><td className="num" data-k="Held">31 yr</td><td className="sig" data-k="Signal">No mortgage of record</td><td className="src-l" data-k="Filing"><a href="#" data-src="1">Source</a></td></tr>
              <tr><td className="td-a" data-k="Asset">Multifamily<small>188 units</small></td><td className="td-m" data-k="Market">Charlotte, NC</td><td className="num" data-k="Value">$24.1M</td><td className="num" data-k="Held">12 yr</td><td className="sig" data-k="Signal">Estate on the deed</td><td className="src-l" data-k="Filing"><a href="#" data-src="1">Source</a></td></tr>
              <tr><td className="td-a" data-k="Asset">Retail<small>96,400 sf</small></td><td className="td-m" data-k="Market">Tampa, FL</td><td className="num" data-k="Value">$12.6M</td><td className="num" data-k="Held">9 yr</td><td className="sig" data-k="Signal">Fund hold ends 2027</td><td className="src-l" data-k="Filing"><a href="#" data-src="1">Source</a></td></tr>
              <tr><td className="td-a" data-k="Asset">Flex / IOS<small>9.2 acres</small></td><td className="td-m" data-k="Market">Dallas, TX</td><td className="num" data-k="Value">$7.9M</td><td className="num" data-k="Held">6 yr</td><td className="sig" data-k="Signal">Matures 11/2026</td><td className="src-l" data-k="Filing"><a href="#" data-src="1">Source</a></td></tr>
              <tr><td className="td-a" data-k="Asset">Office<small>141,000 sf</small></td><td className="td-m" data-k="Market">Kansas City, MO</td><td className="num" data-k="Value">$31.2M</td><td className="num" data-k="Held">23 yr</td><td className="sig" data-k="Signal">Heirs of record</td><td className="src-l" data-k="Filing"><a href="#" data-src="1">Source</a></td></tr>
            </tbody>
          </table>
        </div>
        <p className="tape-note">Every figure links to the filing it came from</p>
      </div>

      <p className="lede" style={{marginTop:'clamp(44px,5vw,66px)'}}><b style={{color:'var(--ink)',fontWeight:'600'}}>Then the whole record on any one of them.</b> The asset, the owner, the debt, the submarket around it and the screens it passed — every figure carrying the filing it came from.</p>
      <div className="app">
        <div className="app-bar">
          <span className="app-dots"><i></i><i></i><i></i></span>
          <span className="app-url">app.horizonsai.co / pipeline / columbus-oh / brookfield-commerce-center</span>
          <span className="app-me">Your workspace</span>
        </div>
        <div className="app-body"><div className="app-wrap"><div className="app-tabs" role="tablist" aria-label="Opportunity record">
          <button role="tab" aria-selected="true"  aria-controls="tp-over" id="tb-over">Overview</button>
          <button role="tab" aria-selected="false" aria-controls="tp-debt" id="tb-debt">Debt</button>
          <button role="tab" aria-selected="false" aria-controls="tp-own"  id="tb-own">Ownership</button>
          <button role="tab" aria-selected="false" aria-controls="tp-mkt"  id="tb-mkt">Market</button>
          <button role="tab" aria-selected="false" aria-controls="tp-env"  id="tb-env">Environmental</button>
          <button role="tab" aria-selected="false" aria-controls="tp-doc"  id="tb-doc">Documents</button>
          <button role="tab" aria-selected="false" aria-controls="tp-ask"  id="tb-ask">Ask</button>
</div></div>
      <div className="app-main">
      <div className="det">
        <div className="det-h">
          <div>
            <h3 className="det-n">Brookfield Commerce Center</h3>
            <p className="det-loc">4400 Westerville Road · Columbus, OH 43231</p>
            <div className="det-chips">
              <span className="chip on">Off-market</span>
              <span className="chip">Industrial</span>
              <span className="chip">214,000 sf</span>
              <span className="chip">Built 1998</span>
              <span className="chip">High confidence</span>
            </div>
          </div>
          <div className="det-score">
            <div className="det-sv">87</div>
            <p className="label det-sl">Fit score</p>
          </div>
        </div>

        <div className="tp-wrap">

        <div className="tp" data-on="1" id="tp-over" role="tabpanel" aria-labelledby="tb-over">
          <div className="det-map"><canvas id="deal-map" aria-label="Site map of the subject parcel with rail, flood zone, traffic and comparable sales"></canvas></div>
          <div className="det-grid">
            <div className="det-c"><p className="det-k">Owner of record</p><p className="det-v">Brookfield Holdings LLC<small>Franklin County Auditor</small></p></div>
            <div className="det-c"><p className="det-k">Held since</p><p className="det-v">2002<small>23 years, one owner</small></p></div>
            <div className="det-c"><p className="det-k">Loan matures</p><p className="det-v">04 / 2027<small>8 months out</small></p></div>
            <div className="det-c"><p className="det-k">DSCR</p><p className="det-v">1.12<small>Down from 1.41 in 2024</small></p></div>
          </div>
        </div>

        <div className="tp" id="tp-debt" role="tabpanel" aria-labelledby="tb-debt">
          <div className="det-grid">
            <div className="det-c"><p className="det-k">Loan balance</p><p className="det-v">$18.4M<small>Servicer report, Aug 2026</small></p></div>
            <div className="det-c"><p className="det-k">Interest rate</p><p className="det-v">4.62%<small>Fixed, originated 2017</small></p></div>
            <div className="det-c"><p className="det-k">Maturity</p><p className="det-v">04 / 2027<small>8 months out</small></p></div>
            <div className="det-c"><p className="det-k">DSCR</p><p className="det-v">1.12<small>Down from 1.41 in 2024</small></p></div>
          </div>
          <div className="inst">
            <div className="in-c">
              <p className="in-t">Rent position</p>
              <p className="in-h">17%<em>below market</em></p>
              <p className="in-s">In-place rent against the submarket asking average for comparable industrial space.</p>
              <div className="rng"><div className="rng-track"><span className="rng-fill" style={{width:'82.4%'}}></span><span className="rng-mark" style={{left:'82.4%'}}></span></div>
                <div className="rng-keys"><span>In place <b>$5.85</b>/sf</span><span>Submarket <b>$7.10</b>/sf</span></div></div>
            </div>
            <div className="in-c">
              <p className="in-t">Basis against replacement</p>
              <p className="in-h">39%<em>below cost to build</em></p>
              <p className="in-s">What the asset would trade at against what the same building costs to deliver today, land included.</p>
              <div className="rng"><div className="rng-track"><span className="rng-fill" style={{width:'61%'}}></span><span className="rng-mark" style={{left:'61%'}}></span></div>
                <div className="rng-keys"><span>Implied basis <b>$86</b>/sf</span><span>Replacement <b>$141</b>/sf</span></div></div>
            </div>
          </div>
        </div>

        <div className="tp" id="tp-own" role="tabpanel" aria-labelledby="tb-own">
          <div className="det-grid">
            <div className="det-c"><p className="det-k">Owner of record</p><p className="det-v">Brookfield Holdings LLC<small>Franklin County Auditor</small></p></div>
            <div className="det-c"><p className="det-k">Held since</p><p className="det-v">2002<small>23 years, one owner</small></p></div>
            <div className="det-c"><p className="det-k">Owner type</p><p className="det-v">Family entity<small>Two members, both local</small></p></div>
            <div className="det-c"><p className="det-k">Mailing address</p><p className="det-v">Residential<small>Not the property</small></p></div>
          </div>
          <div className="ppl">
            <div className="ppl-c">
              <p className="ppl-n">Managing member</p>
              <p className="ppl-r">Named on the 2002 articles and every filing since</p>
              <p className="ppl-d">Direct line · Email on the company domain</p>
              <span className="ppl-v ppl-ok">Line verified active</span><span className="ppl-v">Corroborated, two sources</span>
            </div>
            <div className="ppl-c">
              <p className="ppl-n">Second member</p>
              <p className="ppl-r">Added 2011, shares the mailing address</p>
              <p className="ppl-d">Mobile · No email found</p>
              <span className="ppl-v ppl-ok">Line verified active</span><span className="ppl-v">Single source, unconfirmed</span>
            </div>
          </div>
        </div>

        <div className="tp" id="tp-mkt" role="tabpanel" aria-labelledby="tb-mkt">
          <div className="det-grid">
            <div className="det-c"><p className="det-k">Submarket vacancy</p><p className="det-v">4.2%<small>Down 90bps year on year</small></p></div>
            <div className="det-c"><p className="det-k">Population, 10 mi</p><p className="det-v">+5.8%<small>Five-year change, Census</small></p></div>
            <div className="det-c"><p className="det-k">Median HH income</p><p className="det-v">$68,900<small>10-mile radius, ACS 2023</small></p></div>
            <div className="det-c"><p className="det-k">Daily traffic count</p><p className="det-v">31,400<small>Westerville Rd, ODOT</small></p></div>
          </div>
          <div className="inst" style={{gridTemplateColumns:'1fr'}}>
            <div className="in-c">
              <p className="in-t">Competing supply delivered</p>
              <p className="in-h">0.4<em>M sf this year</em></p>
              <p className="in-s">New industrial completions in the submarket. Nothing under construction within three miles.</p>
              <div className="spk"><div style={{height:'38%'}}></div><div style={{height:'61%'}}></div><div style={{height:'96%'}}></div><div style={{height:'74%'}}></div><div style={{height:'29%'}}></div><div className="on" style={{height:'16%'}}></div></div>
              <div className="spk-keys"><span>2021 · 1.0M</span><span>peak 2.4M</span><span>2026 · 0.4M</span></div>
            </div>
          </div>
        </div>

        <div className="tp" id="tp-env" role="tabpanel" aria-labelledby="tb-env">
          <div className="inst" style={{gridTemplateColumns:'1fr'}}>
            <div className="in-c">
              <p className="in-t">Site gates</p>
              <p className="in-h">1<em>of 6 flagged</em></p>
              <p className="in-s">Screens run against federal and state layers before an opportunity is delivered.</p>
              <div className="gates">
                <span className="gate"><b>✓</b>Flood zone X</span>
                <span className="gate"><b>✓</b>Soil clear</span>
                <span className="gate flag"><b>!</b>UST within 500 ft</span>
                <span className="gate"><b>✓</b>No wetlands</span>
                <span className="gate"><b>✓</b>Rail served</span>
                <span className="gate"><b>✓</b>Power adequate</span>
              </div>
            </div>
          </div>
          <div className="det-grid">
            <div className="det-c"><p className="det-k">Flood zone</p><p className="det-v">X<small>FEMA panel 39049C</small></p></div>
            <div className="det-c"><p className="det-k">Rail</p><p className="det-v">0.3 mi<small>Norfolk Southern spur</small></p></div>
            <div className="det-c"><p className="det-k">Assessed value</p><p className="det-v">$21.9M<small>2025 reassessment</small></p></div>
            <div className="det-c"><p className="det-k">Taxes</p><p className="det-v">Current<small>No lien of record</small></p></div>
          </div>
        </div>

        <div className="tp" id="tp-doc" role="tabpanel" aria-labelledby="tb-doc">
          <div className="det-sec" style={{borderTop:'0'}}>
            <p className="det-st">Signal history</p>
            <div className="ev"><time>Mar 2024</time><span><b>Tenant vacated</b> — 38,000 sf back to market</span><a href="#" data-src="1">Broker listing</a></div>
            <div className="ev"><time>Nov 2024</time><span><b>DSCR decline</b> — 1.41 to 1.19 over two quarters</span><a href="#" data-src="1">Servicer report</a></div>
            <div className="ev"><time>Jun 2025</time><span><b>Watchlist</b> — servicer flags upcoming maturity</span><a href="#" data-src="1">Servicer report</a></div>
            <div className="ev"><time>Jan 2026</time><span><b>Refinance gap</b> — coverage below the par-refi threshold</span><a href="#" data-src="1">Derived</a></div>
            <div className="ev"><time>Aug 2026</time><span><b>Delivered to you</b> — eight months before maturity</span><a href="#" data-src="1">HorizonsAI</a></div>
          </div>
        </div>

        <div className="tp" id="tp-ask" role="tabpanel" aria-labelledby="tb-ask">
          <div className="det-sec" style={{borderTop:'0'}}>
            <p className="det-st">Ask</p>
            <div className="ask">
              <p className="ask-q">Which of my Columbus industrial deals has a maturity inside twelve months and coverage under 1.2?</p>
              <div className="ask-a">
                <p>Three. Brookfield Commerce Center is the tightest — 1.19 against an August 2027 maturity.</p>
                <p className="ask-src">Coverage from the servicer report. Maturity from the loan filing.</p>
              </div>
              <p className="ask-q">Who owns it and how long have they held it?</p>
              <div className="ask-a">
                <p>Held nineteen years by a family partnership. Two of the three partners are on title individually.</p>
                <p className="ask-src">Ownership from the county record.</p>
              </div>
            </div>
            <p className="ask-note">It already knows your buy box and can read every deal in your pipeline. Ask in plain English; the answer comes back with the filing behind it.</p>
          </div>
        </div>

        </div>
      </div>
      </div>
        <button className="app-ask" type="button" aria-controls="tp-ask" id="ask-jump">
          <span className="app-ask-i">◆</span>
          <span className="app-ask-t">Ask anything about this deal, or the whole pipeline</span>
          <span className="app-ask-k">Ask</span>
        </button>
      </div>
      </div>
    </div>
  </section>


  <section className="sec" id="compare">
    <div className="wrap">
      <div className="sec-head"><span className="sec-n">05 / Why us</span><span className="sec-r"></span></div>
      <h2 className="h2 display">Against the other three ways to find a deal.</h2>
      <p className="lede">You already have brokers, you have probably bought a list, and you could hire for this. Here is where each one actually lands.</p>

      <div className="cmp-w">
        <table className="cmp">
          <thead>
            <tr>
              <th scope="col"> </th>
              <th scope="col" className="us">HorizonsAI</th>
              <th scope="col">Broker relationships</th>
              <th scope="col">A bought list</th>
              <th scope="col">Hiring an analyst</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="row">Reaches you pre-listing</th>
              <td data-k="HorizonsAI" className="us">Months ahead</td><td data-k="Broker relationships" data-m="Brokers">Only where the relationship is strong</td><td data-k="A bought list" data-m="Bought list">No, it is scraped after the fact</td><td data-k="Hiring an analyst" data-m="An analyst">Yes, at the pace one person can read</td>
            </tr>
            <tr>
              <th scope="row" className="row">Built to your buy box</th>
              <td data-k="HorizonsAI" className="us">Configured to your criteria</td><td data-k="Broker relationships" data-m="Brokers">Partly — they show what they have</td><td data-k="A bought list" data-m="Bought list">No, the same file goes to everyone</td><td data-k="Hiring an analyst" data-m="An analyst">Yes</td>
            </tr>
            <tr>
              <th scope="row" className="row">Exclusive to you</th>
              <td data-k="HorizonsAI" className="us">Yes, per market</td><td data-k="Broker relationships" data-m="Brokers">No</td><td data-k="A bought list" data-m="Bought list">No</td><td data-k="Hiring an analyst" data-m="An analyst">Yes</td>
            </tr>
            <tr>
              <th scope="row" className="row">Owner contact</th>
              <td data-k="HorizonsAI" className="us">Named human, corroborated</td><td data-k="Broker relationships" data-m="Brokers">They hold the relationship</td><td data-k="A bought list" data-m="Bought list">Often an LLC and an agent address</td><td data-k="Hiring an analyst" data-m="An analyst">Manual, a week per deal</td>
            </tr>
            <tr>
              <th scope="row" className="row">Where the number came from</th>
              <td data-k="HorizonsAI" className="us">Linked to the filing</td><td data-k="Broker relationships" data-m="Brokers">Verbal</td><td data-k="A bought list" data-m="Bought list">Unsourced</td><td data-k="Hiring an analyst" data-m="An analyst">Depends who you hired</td>
            </tr>
            <tr>
              <th scope="row" className="row">Question the whole book</th>
              <td data-k="HorizonsAI" className="us">Ask it, any hour</td><td data-k="Broker relationships" data-m="Brokers">You call and wait</td><td data-k="A bought list" data-m="Bought list">No, it is a file</td><td data-k="Hiring an analyst" data-m="An analyst">Yes, when they are free</td>
            </tr>
            <tr>
              <th scope="row" className="row">Cost</th>
              <td data-k="HorizonsAI" className="us">Fixed monthly, no fee on the trade</td><td data-k="Broker relationships" data-m="Brokers">Commission on what you buy</td><td data-k="A bought list" data-m="Bought list">Per file</td><td data-k="Hiring an analyst" data-m="An analyst">Salary, benefits, ramp</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="cmp-n">We are not arguing you drop your brokers. Most of our clients run this alongside them — it changes which calls they are making.</p>
    </div>
  </section>

  <section className="sec" id="faq" style={{background:'var(--concrete-2)'}}>
    <div className="wrap">
      <div className="sec-head"><span className="sec-n">06 / Questions</span><span className="sec-r"></span></div>
      <h2 className="h2 display">What acquisition teams ask first.</h2>
      <div className="faq">
        <details><summary>Can I trust the owner contacts?</summary>
          <p className="faq-a">You can see where every one came from. A contact reaches you with the chain attached — the assessor record that named the owner, the state registry filing that named the human behind the entity, and the second source that corroborated the number or email. Every opportunity carries the owner’s name, phone and email where available, plus servicer detail on securitised loans. Anything we could not corroborate is marked unconfirmed. Where the owner is a government body or a railroad we tell you it is not acquirable instead of selling you a contact for it.</p>
        </details>
        <details><summary>How is this different from CoStar, Reonomy, Trepp, or CRED iQ?</summary>
          <p className="faq-a">CoStar and Reonomy are property databases — comps, tenants, ownership, market data; you still have to find the deals yourself, and every subscriber is searching the same file. Trepp and CRED iQ go deep on CMBS, but CMBS is only a small share of CRE debt — bank, life-co and private debt are not there. Yours is built around one mandate and keeps what it learns, and a built-in assistant holds your criteria and reads every deal in it. Ask it which deals fit a change in your buy box, in plain English. A database cannot answer that.</p>
        </details>
        <details><summary>Will this work for my specific asset class and market?</summary>
          <p className="faq-a">Yes — we cover office, retail, industrial, and multifamily across all 50 states. On the intro call we’ll tell you straight up where coverage is strong, where it’s thin, and whether your niche fits before you commit to anything.</p>
        </details>
        <details><summary>How many deals will I actually see per month?</summary>
          <p className="faq-a">It depends on how tight your criteria is — narrower geographies and asset classes mean fewer, higher-quality opportunities. We benchmark against your existing deal flow during onboarding so you know what to expect before going live.</p>
        </details>
        <details><summary>What does it cost?</summary>
          <p className="faq-a">Pricing depends on how much ground you want covered — the markets and asset classes in scope, not how many deals we send. There is no fee on anything you buy and no commission on the trade. We will give you a number on the first call once we know the scope.</p>
        </details>
        <details><summary>What happens on the first call?</summary>
          <p className="faq-a">Bring your buy box. We will tell you where our coverage is strong in your markets, where it is thin, and whether your niche fits. If it is not a fit we will tell you on that call rather than book a second one.</p>
        </details>
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
<div className="talk" id="talk" aria-hidden="true">
  <span className="talk-t">See what’s moving in <em>your markets</em>.</span>
  <a className="talk-b" href="/book-a-call">Let’s talk</a>
</div>
<footer className="ftr">
  <div className="wrap">
    <div className="ftr-in">
      <p className="label label-q">HorizonsAI · Commercial Real Estate Intelligence</p>
      <div className="ftr-l"><a href="#process">Process</a><a href="#benefits">What it means</a><a href="#signals-link">What we see</a><a href="#delivery">What you get</a><a href="#compare">Why us</a><a href="#faq">Questions</a></div>
    </div>
    
  </div>
</footer>
    </div>
  );
}
