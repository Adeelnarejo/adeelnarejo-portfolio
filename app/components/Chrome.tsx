"use client";

import Link from "next/link";
import SiteScripts from "@/app/components/SiteScripts";
import { usePathname } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";

const NAV = [
  { href: "/", label: "Home", cls: "home" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  /* Contact used to carry the always-dark `cta` pill, which read as "active".
     The filled pill is now reserved for the page you are actually on. */
  { href: "/contact", label: "Contact" },
];

let themeTimer: ReturnType<typeof setTimeout> | undefined;

/* only touches <html data-theme> + localStorage — no other behaviour on the page */
function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";

  root.classList.add("theme-switching");
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {}

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", next === "dark" ? "#08111F" : "#5EAEEA");

  clearTimeout(themeTimer);
  themeTimer = setTimeout(() => root.classList.remove("theme-switching"), 700);
}

/* Every page renders inside this: loader, sky, ruler, nav, cursor and footer.
   Navigation is client-side (<Link>); SiteScripts re-runs the DOM scripts for
   whatever sections the new route mounted. */
export default function Chrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div className="loader" id="loader">
        <div className="ld-grid"></div>
        <div className="ld-stage">
          <div className="ld-sel">
            <span className="ld-mark">
              <span className="o">O</span>hhMyDesign
            </span>
            <i className="h tl"></i>
            <i className="h tr"></i>
            <i className="h bl"></i>
            <i className="h br"></i>
            <span className="ld-dim">1280 × 196</span>
          </div>
          <div className="ld-bar">
            <span></span>
          </div>
        </div>
      </div>

      <div className="nsky-bg" aria-hidden="true"></div>

      <div className="sky" aria-hidden="true">
        <span className="nsky-star nsky-1"></span>
        <span className="nsky-star nsky-2"></span>
        <span className="nsky-star nsky-3"></span>
        <span className="nsky-flare nsky-f1"></span>
        <span className="nsky-flare nsky-f2"></span>
        <span className="nsky-flare nsky-f3"></span>
        <span className="nsky-flare nsky-f4"></span>
        <span className="nsky-shoot nsky-sh1"></span>
        <span className="nsky-shoot nsky-sh2"></span>
        <span className="nsky-moon"></span>
        <span className="cloud a c1"></span>
        <span className="cloud b c2"></span>
        <span className="cloud a c3"></span>
        <span className="cloud b c4"></span>
        <span className="cloud a c5"></span>
        <span className="cloud b c6"></span>
        <span className="cloud a c7"></span>
        <span className="cloud b c8"></span>
        <span className="cloud a c9"></span>
      </div>

      <div className="ruler">
        <div className="r-logo">
          <b className="r-mark"></b>ADeeLNariai
        </div>
        <div className="ticks">
          <canvas id="rulerTop"></canvas>
          <div className="r-fill" id="rFill"></div>
          <span className="r-pct" id="rPct">
            0%
          </span>
        </div>
        <div className="r-zoom">
          <span className="dot"></span> LIVE · <span id="ct">--:--:-- --</span>
        </div>
      </div>

      <div className="topbar">
        <div className="pill status-pill">
          <span className="dot"></span> available for projects
        </div>
        <nav className="pill nav-pill">
          {NAV.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={[n.cls, active ? "active" : ""].filter(Boolean).join(" ") || undefined}
                aria-current={active ? "page" : undefined}
              >
                {n.label}
              </Link>
            );
          })}
          <button
            type="button"
            id="themeToggle"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            <span className="tt-track" aria-hidden="true">
              <span className="tt-thumb">
                <svg
                  className="tt-sun"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none" />
                  <path d="M12 1.8v2.4M12 19.8v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M1.8 12h2.4M19.8 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
                </svg>
                <svg className="tt-moon" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1z"
                    fill="currentColor"
                  />
                  <circle cx="17.4" cy="5.4" r="1" fill="currentColor" opacity=".85" />
                  <circle cx="20.6" cy="9.1" r=".7" fill="currentColor" opacity=".6" />
                </svg>
              </span>
            </span>
          </button>
        </nav>
        <a className="pill mail-pill" href="mailto:hello@ADeeLNariai.com">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>{" "}
          hello@ADeeLNariai.com
        </a>
      </div>

      <div className="cursor-layer" id="cursorLayer">
        <div className="fcursor" id="curYou">
          <svg viewBox="0 0 24 24">
            <path
              d="M5 3l14 7-6 2-2 6z"
              fill="#0D99FF"
              stroke="#fff"
              strokeWidth="1.2"
            />
          </svg>
          <span
            className="name"
            style={{ background: "#0D99FF" } as CSSProperties}
          >
            You
          </span>
        </div>
        <div
          className="fcursor"
          id="curMate"
          style={{ opacity: ".9" } as CSSProperties}
        >
          <svg viewBox="0 0 24 24">
            <path
              d="M5 3l14 7-6 2-2 6z"
              fill="#F0531C"
              stroke="#fff"
              strokeWidth="1.2"
            />
          </svg>
          <span
            className="name"
            style={{ background: "#F0531C" } as CSSProperties}
          >
            Mahima
          </span>
        </div>
      </div>

      <div className="grain"></div>

      {/* sub-pages start right under the fixed ruler + nav, so they need the
          offset the hero used to provide on the landing page */}
      <main className={pathname === "/" ? undefined : "route-body"}>{children}</main>

      <footer className="foot">
        <canvas
          id="footDots"
          className="foot-canvas"
          aria-hidden="true"
        ></canvas>
        <div className="foot-horizon"></div>
        <span className="foot-flabel">
          <span className="ff-mark"></span> footer.frame
        </span>
        <button
          className="foot-totop"
          id="toTop"
          type="button"
          aria-label="Back to top"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M6 11l6-6 6 6" />
          </svg>
        </button>
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-cta">
              <div className="foot-eyebrow">have an idea worth building?</div>
              <a className="foot-mail" href="mailto:hello@ADeeLNariai.com">
                hello@ADeeLNariai.com{" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
              <div className="foot-row">
                <a
                  className="foot-book"
                  href="https://cal.com/ADeeLNariai/30min"
                  target="_blank"
                  rel="noopener"
                >
                  Show us the idea{" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <span className="foot-live">
                  <span className="foot-dot"></span> available for projects
                </span>
              </div>
            </div>
            <div className="foot-nav">
              <div className="fcol">
                <h4>Studio</h4>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/work">Work</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/pricing#faq">FAQ</Link>
              </div>
              <div className="fcol">
                <h4>Company</h4>
                <Link href="/contact">Contact</Link>
                <a href="privacy">Privacy</a>
                <a href="terms">Terms</a>
              </div>
              <div className="fcol">
                <h4>Connect</h4>
                <a
                  href="https://www.instagram.com/ADeeLNariai_"
                  target="_blank"
                  rel="noopener"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/ohhmyads"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.behance.net/vishalarora12"
                  target="_blank"
                  rel="noopener"
                >
                  Behance
                </a>
                <a href="mailto:hello@ADeeLNariai.com">Email</a>
              </div>
            </div>
          </div>
        </div>
        <div className="foot-stage reveal">
          <div className="foot-word" id="footWord" aria-label="ADeeLNariai">
            <span className="o">A</span>
            <span>D</span>
            <span>e</span>
            <span>e</span>
            <span>L</span>
            <span>-</span>
            <span>N</span>
            <span>a</span>
            <span>r</span>
            <span>i</span>
            <span>a</span>
            <span>i</span>
          </div>
        </div>
        <div className="foot-rule"></div>
        <div className="wrap">
          <div className="foot-bar">
            <span className="fbar-l">
              <b></b>ADeeLNariai.fig
            </span>
            <span className="fbar-c">
              <span className="foot-dot"></span> 2 cursors online &middot;{" "}
              <span id="fClock">--:--</span> IST
            </span>
            <span className="fbar-r">
              &copy; 2026 &middot; made byADeeLNariai, not framer
            </span>
          </div>
        </div>
      </footer>

      <svg id="phMeas">
        <line id="phMeasL" x1="0" y1="0" x2="0" y2="0"></line>
      </svg>
      <div id="phMeasLbl"></div>
      <div id="phBub"></div>

      <div id="waFloat" className="wa-float">
        <button className="wa-x" type="button" aria-label="close">
          &times;
        </button>
        <a href="https://wa.me/919461219922" target="_blank" rel="noopener">
          <span className="wa-av">
            <span className="wa-dot"></span>
          </span>
          <span className="wa-body">
            <span className="wa-top">
              <b>ADeeLNariai</b>
              <span className="wa-now">online</span>
            </span>
            <span className="wa-msg">
              Why wait? <span className="a">Let&apos;s chat &rarr;</span>
            </span>
          </span>
        </a>
      </div>

      <SiteScripts />
    </>
  );
}
