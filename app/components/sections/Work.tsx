import Link from "next/link";
import type { CSSProperties } from "react";

export default function Work() {
  return (
    <>
      <section className="work-alt workA" id="work">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="scribble">
              <svg
                className="hw"
                viewBox="-25 -99 1382 252"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  className="hw-ink"
                  pathLength="1"
                  d="M6 42 L18 36L24 30L30 18L30 6L24 0L18 0L6 6L0 18L0 36L6 48L18 54L30 54L42 48L48 42L60 24L72 6L84 0L96 0L102 6L102 48L108 54L126 54L144 42L156 24M138 6 L132 0L120 0L114 6L90 48L84 54L72 54L66 48M156 24 L168 6L174 -6L168 18L132 126M168 18 L174 6L186 0L198 0L210 6L216 18L216 30L210 42L204 48L192 54M168 48 L180 54L198 54L216 48L228 42L246 24L258 6L276 -24L282 -36L288 -54L288 -66L282 -72L270 -66L264 -54L258 -30L252 12L252 48L258 54L264 54L276 48L282 42L294 24M330 0 L318 0L306 6L300 12L294 24L294 36L300 48L312 54L324 54L336 48L342 42L348 30L348 18L342 6L330 0L324 6L324 18L330 30L342 36L360 36L372 30L378 24L390 6L396 -6L396 6L414 6L420 12L420 24L414 42L414 48L420 54L426 54L438 48L444 42L456 24M462 42 L474 36L480 30L486 18L486 6L480 0L474 0L462 6L456 18L456 36L462 48L474 54L486 54L498 48L504 42L516 24M648 0 L636 0L624 6L618 12L612 24L612 36L618 48L630 54L642 54L654 48L660 42L666 30L666 18L660 6L648 0L642 6L642 18L648 30L660 36L678 36L690 30L696 24L708 0L696 36L696 48L702 54L714 54L726 48L738 36L750 18M756 0 L744 36L744 48L750 54L756 54L768 48L774 42L786 24L798 6L804 -6L804 6L822 6L828 12L828 24L822 42L822 48L828 54L834 54L846 48L852 42L864 24M978 0 L966 12L960 30L960 42L966 54L978 54L990 48L1002 36M1014 0 L1002 36L1002 48L1008 54L1020 54L1032 48L1044 36L1050 18L1050 0L1056 24L1062 30L1074 30L1086 24M1122 0 L1110 0L1098 6L1092 12L1086 24L1086 36L1092 48L1104 54L1116 54L1128 48L1134 42L1140 30L1140 18L1134 6L1122 0L1116 6L1116 18L1122 30L1134 36L1152 36L1164 30L1170 24L1182 6L1188 -6L1188 6L1206 6L1212 12L1212 24L1206 42L1206 48L1212 54L1218 54L1230 48L1236 42L1248 24L1260 6L1278 -24L1284 -36L1290 -54L1290 -66L1284 -72L1272 -66L1266 -54L1260 -30L1254 6L1248 54L1254 36L1260 24L1272 6L1284 0L1296 0L1302 6L1302 18L1290 24L1272 24L1284 30L1290 48L1296 54L1302 54L1314 48L1320 42L1332 24"
                  stroke="#F0531C"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2>Featured works</h2>
            <span className="note">
              The good kind of name-drop. Hover to peek.
            </span>
          </div>
          <div className="wlist reveal" id="wlist">
            <a
              className="witem"
              data-img="https://www.ADeeLNariai.com/assets/harmonic-discovery.webp"
              href="https://www.harmonicdiscovery.com/"
              target="_blank"
              rel="noopener"
            >
              <span className="wix">/01</span>
              <span className="wnm">Harmonic Discovery</span>
              <span className="wmid">
                <span className="wsub">
                  Complex drug-discovery science, distilled into a site that
                  reads clean.
                </span>
                <span className="wtags">
                  <span className="ft yc">YC S21</span>
                  <span className="ft">BIOTECH</span>
                  <span className="ft">WEBSITE</span>
                </span>
              </span>
              <span className="wdate">2025</span>
              <span className="warr">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
              <span className="winline">
                <span className="flbl">IMAGE.JPG</span>
                <img
                  src="/assets/harmonic-discovery.webp"
                  alt=""
                  loading="lazy"
                />
              </span>
            </a>
            <a
              className="witem"
              data-img="https://www.ADeeLNariai.com/assets/Kaelio.webp"
              href="https://www.kaelio.com/"
              target="_blank"
              rel="noopener"
            >
              <span className="wix">/02</span>
              <span className="wnm">Kaelio</span>
              <span className="wmid">
                <span className="wsub">
                  A product story told in one clean scroll.
                </span>
                <span className="wtags">
                  <span className="ft yc">YC Spring 2025</span>
                  <span className="ft">SAAS</span>
                  <span className="ft">WEBFLOW</span>
                </span>
              </span>
              <span className="wdate">2025</span>
              <span className="warr">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
              <span className="winline">
                <span className="flbl">IMAGE.JPG</span>
                <img src="/assets/Kaelio.webp" alt="" loading="lazy" />
              </span>
            </a>
            <a
              className="witem"
              data-img="https://www.ADeeLNariai.com/assets/jupiter.webp"
              href="https://www.jupiter.co/"
              target="_blank"
              rel="noopener"
            >
              <span className="wix">/03</span>
              <span className="wnm">Jupiter</span>
              <span className="wmid">
                <span className="wsub">
                  Creator recipes, turned into a shoppable storefront.
                </span>
                <span className="wtags">
                  <span className="ft yc">YC S19</span>
                  <span className="ft">CREATOR</span>
                  <span className="ft">COMMERCE</span>
                </span>
              </span>
              <span className="wdate">2025</span>
              <span className="warr">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
              <span className="winline">
                <span className="flbl">IMAGE.JPG</span>
                <img src="/assets/jupiter.webp" alt="" loading="lazy" />
              </span>
            </a>
            <a
              className="witem"
              data-img="https://www.ADeeLNariai.com/assets/CorgiLabs.webp"
              href="https://www.corgilabs.ai/"
              target="_blank"
              rel="noopener"
            >
              <span className="wix">/04</span>
              <span className="wnm">Corgi Labs</span>
              <span className="wmid">
                <span className="wsub">
                  Fraud prevention that finally feels effortless and
                  trustworthy.
                </span>
                <span className="wtags">
                  <span className="ft yc">YC W23</span>
                  <span className="ft">FINTECH</span>
                  <span className="ft">AI</span>
                </span>
              </span>
              <span className="wdate">2025</span>
              <span className="warr">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
              <span className="winline">
                <span className="flbl">IMAGE.JPG</span>
                <img src="/assets/CorgiLabs.webp" alt="" loading="lazy" />
              </span>
            </a>
          </div>
          <div
            style={{ textAlign: "center", marginTop: "40px" } as CSSProperties}
            className="reveal"
          >
            <Link className="btn ghost" href="/work">
              See more work &rarr;
            </Link>
          </div>
        </div>
      </section>

      <div className="wpreview" id="wpreview">
        <span className="flbl">IMAGE.JPG</span>
        <img id="wpimg" alt="" />
      </div>
    </>
  );
}
