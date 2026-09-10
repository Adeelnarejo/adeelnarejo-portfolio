"use client";

import type { CSSProperties } from "react";

export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="scribble">
              <svg
                className="hw"
                viewBox="-25 -99 1304 252"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  className="hw-ink"
                  pathLength="1"
                  d="M54 18 L48 6L36 0L24 0L12 6L6 12L0 24L0 36L6 48L18 54L30 54L42 48L48 36L60 0L54 30L54 48L60 54L66 54L78 48L84 42L96 24M192 24 L204 6L222 -24L228 -36L234 -54L234 -66L228 -72L216 -66L210 -54L204 -30L198 12L198 48L204 54L210 54L222 48L228 42L240 24M258 -30 L258 -24L264 -24L264 -30L258 -30M240 24 L252 0L240 36L240 48L246 54L252 54L264 48L270 42L282 24L294 6L306 -18M324 -72 L288 36L288 48L294 54L306 54L318 48L324 42L336 24M288 -24 L330 -24M336 24 L348 6L360 -18M378 -72 L342 36L342 48L348 54L360 54L372 48L378 42L390 24M342 -24 L384 -24M390 24 L402 6L420 -24L426 -36L432 -54L432 -66L426 -72L414 -66L408 -54L402 -30L396 12L396 48L402 54L408 54L420 48L426 42L438 24M444 42 L456 36L462 30L468 18L468 6L462 0L456 0L444 6L438 18L438 36L444 48L456 54L468 54L480 48L486 42L498 24M648 18 L642 6L630 0L618 0L606 6L600 12L594 24L594 36L600 48L612 54L624 54L636 48L642 36L654 0L648 30L648 48L654 54L660 54L672 48L678 42L690 24L702 6L720 -24L726 -36L732 -54L732 -66L726 -72L714 -66L708 -54L702 -30L696 12L696 48L702 54L708 54L720 48L732 36L738 18L738 0L744 24L750 30L762 30L774 24M810 0 L798 0L786 6L780 12L774 24L774 36L780 48L792 54L804 54L816 48L822 42L828 30L828 18L822 6L810 0L804 6L804 18L810 30L822 36L840 36L852 30L858 24L870 0L858 36L858 48L864 54L876 54L888 48L900 36L912 18M918 0 L906 36L906 48L912 54L918 54L930 48L936 42L948 24L960 6L972 -18M990 -72 L954 36L954 48L960 54L972 54L984 48L990 42L1002 24M954 -24 L996 -24M1098 24 L1110 0L1098 36L1098 48L1104 54L1116 54L1128 48L1140 36L1152 18M1158 0 L1146 36L1146 48L1152 54L1158 54L1170 48L1176 42L1188 24L1200 6L1206 -6L1206 6L1218 24L1224 36L1224 48L1212 54M1188 48 L1200 54L1224 54L1236 48L1242 42L1254 24"
                  stroke="#F0531C"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2>What&apos;s up</h2>
          </div>
          <div className="bento stagger">
            <div
              className="cell c-stmt sel"
              style={{ "--i": "0" } as CSSProperties}
            >
              <span className="clbl">STATEMENT.TXT</span>
              <span className="h tl"></span>
              <span className="h tr"></span>
              <span className="h bl"></span>
              <span className="h br"></span>
              <div className="stmt-quote">
                <span className="stmt-qm" aria-hidden="true">
                  <svg viewBox="0 0 64 48" fill="#F0531C">
                    <path d="M0 48V27C0 12 9 3 26 0l2 8C17 11 13 16 13 24h13v24H0zm35 0V27C35 12 44 3 61 0l2 8c-11 3-15 8-15 16h13v24H35z" />
                  </svg>
                </span>
                <h2 className="stmt-head">
                  We make people stop and ask,{" "}
                  <span className="stmt-em">who made that?</span>
                </h2>
                <p className="stmt-sub">
                  That reaction is the whole job. <b>Two people</b> doing
                  strategy, design, and code for startups that refuse to look
                  ordinary. No templates, ever.
                </p>
              </div>
              <div className="stmt-foot2">
                <span className="stmt-sign2">ADeeLNariai, since 2019</span>
                <span className="stmt-avail2">
                  <i></i>available now
                </span>
              </div>
            </div>
            <div
              className="cell c-stats"
              style={{ "--i": "1" } as CSSProperties}
            >
              <span className="clbl">METRICS</span>
              <div className="stat-row">
                <span className="num" data-count="120">
                  0
                </span>
                <span className="cap">projects shipped</span>
              </div>
              <div className="stat-row">
                <span
                  className="num"
                  data-count="5"
                  data-dec="1"
                  data-suffix="★"
                >
                  0
                </span>
                <span className="cap">average rating</span>
              </div>
              <div className="stat-row">
                <span className="num" data-count="48">
                  0
                </span>
                <span className="cap">hr avg turnaround</span>
              </div>
            </div>
            <div
              className="cell c-skills"
              style={{ "--i": "2" } as CSSProperties}
            >
              <span className="clbl">CAPABILITIES</span>
              <div className="chips">
                <span className="chip">
                  <i>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect
                        pathLength="1"
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                      />
                      <path pathLength="1" d="M3 9h18M9 21V9" />
                    </svg>
                  </i>
                  UI/UX
                </span>
                <span className="chip">
                  <i>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path pathLength="1" d="m8 7-5 5 5 5M16 7l5 5-5 5" />
                    </svg>
                  </i>
                  Web Dev
                </span>
                <span className="chip">
                  <i>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path pathLength="1" d="M12 2 2 7l10 5 10-5z" />
                    </svg>
                  </i>
                  Brand
                </span>
                <span className="chip">
                  <i>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle pathLength="1" cx="12" cy="12" r="3" />
                      <path pathLength="1" d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                    </svg>
                  </i>
                  Prototyping
                </span>
                <span className="chip">
                  <i>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path pathLength="1" d="M5 3v18l15-9z" />
                    </svg>
                  </i>
                  Motion
                </span>
                <span className="chip">
                  <i>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect pathLength="1" x="3" y="3" width="7" height="7" />
                      <rect pathLength="1" x="14" y="3" width="7" height="7" />
                      <rect pathLength="1" x="3" y="14" width="7" height="7" />
                      <rect pathLength="1" x="14" y="14" width="7" height="7" />
                    </svg>
                  </i>
                  Systems
                </span>
              </div>
            </div>
            <div
              className="cell c-photo"
              style={{ "--i": "3" } as CSSProperties}
            >
              <div className="fd-stage">
                <span className="fd-flab">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                  </svg>
                  hero.frame
                </span>
                <div className="fd-art">
                  <div className="fd-inner">
                    <div className="fd-eyeb">
                      <span className="fd-dot"></span>
                      <span className="fd-et">your brand</span>
                    </div>
                    <div className="fd-hl">
                      <span className="fd-ln">Build</span>
                      <br />
                      <span className="fd-ln fd-o">bold.</span>
                    </div>
                    <a className="fd-cta">
                      Start{" "}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2.4"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>
                  </div>
                  <span className="fd-selbox"></span>
                  <span className="fd-hd tl"></span>
                  <span className="fd-hd tr"></span>
                  <span className="fd-hd bl"></span>
                  <span className="fd-hd br"></span>
                </div>
                <span className="fd-guide"></span>
                <span className="fd-gapb">24</span>
                <span className="fd-dim">40 &times; 30</span>
                <span className="fd-rip"></span>
                <div className="fd-curs">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M5 3l14 7-6 2-2 6z"
                      stroke="#0E1622"
                      strokeWidth="1.1"
                    />
                  </svg>
                  <span className="fd-nm">ADeeLNariai</span>
                </div>
                <span className="cap">designed live</span>
              </div>
            </div>
            <div className="cell c-now" style={{ "--i": "4" } as CSSProperties}>
              <span className="label">▶ currently building in</span>
              <div className="nbig">Webflow & Framer</div>
              <div className="tools">
                <span className="tchip">Figma</span>
                <span className="tchip">Webflow</span>
                <span className="tchip">Framer</span>
              </div>
              <div className="eq">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div
              className="cell c-quote"
              style={{ "--i": "5" } as CSSProperties}
            >
              <span className="clbl">REVIEW_07</span>
              <div className="stars">★★★★★</div>
              <div className="q">
                &quot;Super fresh, super innovative, always ahead of the game.
                You tell them what you need, and wow.&quot;
              </div>
              <div className="by">
                <span className="av">
                  <img
                    className="av-img"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Angelique O."
                    loading="lazy"
                    onError={function (e) {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRUFGMkZCIi8+PGNpcmNsZSBjeD0iMzIiIGN5PSIyNCIgcj0iMTEiIGZpbGw9IiM4QUE2QjgiLz48cGF0aCBkPSJNMTEgNjFjMC0xMiA5LTE5IDIxLTE5czIxIDcgMjEgMTl6IiBmaWxsPSIjOEFBNkI4Ii8+PC9zdmc+";
                    }}
                  />
                </span>
                <span className="bn">ANGELIQUE O. · CLIENT</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
