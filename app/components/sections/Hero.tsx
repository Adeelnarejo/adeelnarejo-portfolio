import Link from "next/link";
export default function Hero() {
  return (
    <>
      <a id="top"></a>

      {/* HERO */}
      <header id="phero">
        <div className="ph-corner bl">
          working worldwide
          <br />
          <span className="soft">no office, on purpose</span>
        </div>
        <div className="ph-corner br">
          open for 2026
          <br />
          <span className="soft">your timezone, handled</span>
        </div>
        <div className="ph-col">
          <div className="ph-ycw">
            <div
              className="ph-yc"
              role="note"
              aria-label="Worked with 15+ Y Combinator companies"
            >
              <i className="h tl"></i>
              <i className="h tr"></i>
              <i className="h bl"></i>
              <i className="h br"></i>
              <span className="yc-pre">Worked with 15+</span>
              <span className="yc-mark" aria-hidden="true">
                Y
              </span>
              <span className="yc-comb">Combinator</span>
              <span className="yc-post">companies</span>
            </div>
          </div>
          <canvas id="phPc"></canvas>
          <h1 className="ph-fallback">
            IMPOSSIBLE
            <br />
            TO <span className="hi">IGNORE</span> .
          </h1>
          <div className="ph-hint">we don&apos;t do forgettable &#10022;</div>
          <div className="ph-sub" id="phSub">
            <span className="ph-move">do not drag</span>
            <span className="ph-txt">
              Most brands you can scroll right past. The ones we build do this
              to your eyes.
            </span>
            <span className="ph-sel">
              <b></b>
              <b></b>
              <b></b>
              <b></b>
            </span>
          </div>
          <div className="ph-cta">
            <a
              className="ph-btn primary"
              href="https://cal.com/ADeeLNariai/30min"
              target="_blank"
              rel="noopener"
            >
              Book a call{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <Link className="ph-btn ghost" href="/work">
              See the work
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
