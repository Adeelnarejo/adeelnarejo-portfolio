import type { CSSProperties } from "react";

export default function Reviews() {
  return (
    <>
      <section className="reviews" id="reviews">
        <div className="rev-scroll">
          <div className="rev-vp">
            <div className="sec-head reveal">
              <span className="scribble">
                <svg
                  className="hw"
                  viewBox="-25 -99 926 252"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    className="hw-ink"
                    pathLength="1"
                    d="M0 24 L12 6L30 -24L36 -36L42 -54L42 -66L36 -72L24 -66L18 -54L12 -30L6 6L0 54L6 36L12 24L24 6L36 0L48 0L54 6L54 18L42 24L24 24L36 30L42 48L48 54L54 54L66 48L72 42L84 24M102 -30 L102 -24L108 -24L108 -30L102 -30M84 24 L96 0L84 36L84 48L90 54L96 54L108 48L114 42L126 24L138 6L150 0L156 6L156 12L150 36L144 54M150 36 L156 24L168 6L180 0L192 0L198 6L198 18L192 36L192 48L198 54L204 54L216 48L222 42L234 24M288 18 L282 6L270 0L258 0L246 6L240 12L234 24L234 36L240 48L252 54L264 54L276 48L282 36L318 -72M294 0 L288 30L288 48L294 54L300 54L312 48L318 42L330 24M444 0 L432 12L426 30L426 42L432 54L444 54L456 48L468 36M480 0 L468 36L468 48L474 54L486 54L498 48L510 36L516 18L516 0L522 24L528 30L540 30L552 24M588 0 L576 0L564 6L558 12L552 24L552 36L558 48L570 54L582 54L594 48L600 42L606 30L606 18L600 6L588 0L582 6L582 18L588 30L600 36L618 36L630 30L636 24L648 6L654 -6L654 6L672 6L678 12L678 24L672 42L672 48L678 54L684 54L696 48L702 42L714 24M768 18 L762 6L750 0L738 0L726 6L720 12L714 24L714 36L720 48L732 54L744 54L756 48L762 36L798 -72M774 0 L768 30L768 48L774 54L780 54L792 48L798 42L810 24L822 6L828 -6L828 6L840 24L846 36L846 48L834 54M810 48 L822 54L846 54L858 48L864 42L876 24"
                    stroke="#F0531C"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h2>Loved by clients</h2>
            </div>
            <div className="rev-stack" id="revStack">
              <article
                className="rcard "
                style={{ "--i": "0", "--lc": "#0D99FF" } as CSSProperties}
              >
                <span className="rc-h tl"></span>
                <span className="rc-h tr"></span>
                <span className="rc-h bl"></span>
                <span className="rc-h br"></span>
                <span className="rc-dim">412 x 232</span>
                <div className="rc-top">
                  <span className="rc-frame">
                    <i></i> review-01
                  </span>
                  <span className="rc-rate">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                  </span>
                </div>
                <blockquote>
                  “It stopped feeling like an agency pretty fast. They cared
                  about getting it right, and in fintech that matters more than
                  most people realise.”
                </blockquote>
                <div className="rc-foot">
                  <span
                    className="rc-av"
                    style={
                      {
                        background: "linear-gradient(135deg,#F0531C,#0D99FF)",
                      } as CSSProperties
                    }
                  >
                    A
                  </span>
                  <div>
                    <span className="rc-nm">Akhil Lodha</span>
                    <span className="rc-rl">CEO, StratiFi</span>
                  </div>
                  <span className="rc-react">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21s-7.5-4.6-10-9.3C.6 8.4 2.3 5 5.6 5c2 0 3.2 1.1 4.4 2.6C11.2 6.1 12.4 5 14.4 5c3.3 0 5 3.4 3.6 6.7C19.5 16.4 12 21 12 21z" />
                    </svg>{" "}
                    28
                  </span>
                </div>
              </article>
              <article
                className="rcard rc-orange"
                style={{ "--i": "1", "--lc": "#ffffff" } as CSSProperties}
              >
                <span className="rc-h tl"></span>
                <span className="rc-h tr"></span>
                <span className="rc-h bl"></span>
                <span className="rc-h br"></span>
                <span className="rc-dim">412 x 224</span>
                <div className="rc-top">
                  <span className="rc-frame">
                    <i></i> review-02
                  </span>
                  <span className="rc-rate">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                  </span>
                </div>
                <blockquote>
                  “I’d put my site off for years because nothing ever felt like
                  me. Vishal turned it around way faster than I expected and
                  somehow nailed my voice instead of a designer’s idea of it.
                  People bring it up now, unprompted.”
                </blockquote>
                <div className="rc-foot">
                  <span
                    className="rc-av"
                    style={
                      { background: "rgba(255,255,255,.25)" } as CSSProperties
                    }
                  >
                    D
                  </span>
                  <div>
                    <span className="rc-nm">Dipak Vadera</span>
                    <span className="rc-rl">CEO, Full Time Backpacker</span>
                  </div>
                  <span className="rc-react">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21s-7.5-4.6-10-9.3C.6 8.4 2.3 5 5.6 5c2 0 3.2 1.1 4.4 2.6C11.2 6.1 12.4 5 14.4 5c3.3 0 5 3.4 3.6 6.7C19.5 16.4 12 21 12 21z" />
                    </svg>{" "}
                    14
                  </span>
                </div>
              </article>
              <article
                className="rcard rc-ink"
                style={{ "--i": "2", "--lc": "#0D99FF" } as CSSProperties}
              >
                <span className="rc-h tl"></span>
                <span className="rc-h tr"></span>
                <span className="rc-h bl"></span>
                <span className="rc-h br"></span>
                <span className="rc-dim">412 x 228</span>
                <div className="rc-top">
                  <span className="rc-frame">
                    <i></i> review-03
                  </span>
                  <span className="rc-rate">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                  </span>
                </div>
                <blockquote>
                  “The best part was how little I had to chase anyone. We’d
                  talk, they’d go quiet for a bit, then come back with something
                  better than I asked for. The Kaelio site does the explaining
                  for us now, so I’m off repeat calls.”
                </blockquote>
                <div className="rc-foot">
                  <span
                    className="rc-av"
                    style={
                      { background: "rgba(255,255,255,.22)" } as CSSProperties
                    }
                  >
                    L
                  </span>
                  <div>
                    <span className="rc-nm">Luca Martial</span>
                    <span className="rc-rl">CEO, Kaelio</span>
                  </div>
                  <span className="rc-react">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21s-7.5-4.6-10-9.3C.6 8.4 2.3 5 5.6 5c2 0 3.2 1.1 4.4 2.6C11.2 6.1 12.4 5 14.4 5c3.3 0 5 3.4 3.6 6.7C19.5 16.4 12 21 12 21z" />
                    </svg>{" "}
                    33
                  </span>
                </div>
              </article>
              <article
                className="rcard rc-peach"
                style={{ "--i": "3", "--lc": "#F0531C" } as CSSProperties}
              >
                <span className="rc-h tl"></span>
                <span className="rc-h tr"></span>
                <span className="rc-h bl"></span>
                <span className="rc-h br"></span>
                <span className="rc-dim">412 x 236</span>
                <div className="rc-top">
                  <span className="rc-frame">
                    <i></i> review-04
                  </span>
                  <span className="rc-rate">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                  </span>
                </div>
                <blockquote>
                  “What we do isn’t easy to explain, and most designers either
                  water it down or bury it in jargon. They found the line in
                  between. It’s clear without being shallow, and it’s the first
                  time our landing page sounded like how we actually talk about
                  the work.”
                </blockquote>
                <div className="rc-foot">
                  <span
                    className="rc-av"
                    style={{ background: "#F0531C" } as CSSProperties}
                  >
                    R
                  </span>
                  <div>
                    <span className="rc-nm">Rayees R.</span>
                    <span className="rc-rl">CEO, Harmonic Discovery</span>
                  </div>
                  <span className="rc-react">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21s-7.5-4.6-10-9.3C.6 8.4 2.3 5 5.6 5c2 0 3.2 1.1 4.4 2.6C11.2 6.1 12.4 5 14.4 5c3.3 0 5 3.4 3.6 6.7C19.5 16.4 12 21 12 21z" />
                    </svg>{" "}
                    11
                  </span>
                </div>
              </article>
              <article
                className="rcard "
                style={{ "--i": "4", "--lc": "#F0531C" } as CSSProperties}
              >
                <span className="rc-h tl"></span>
                <span className="rc-h tr"></span>
                <span className="rc-h bl"></span>
                <span className="rc-h br"></span>
                <span className="rc-dim">412 x 224</span>
                <div className="rc-top">
                  <span className="rc-frame">
                    <i></i> review-05
                  </span>
                  <span className="rc-rate">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                  </span>
                </div>
                <blockquote>
                  “Our old site made us look smaller than we are, and the
                  redesign fixed that overnight. There are these tiny
                  interactions on every page you don’t catch at first and then
                  can’t unsee. The detail is almost absurd, in the best way, and
                  it’s quick on top of it.”
                </blockquote>
                <div className="rc-foot">
                  <span
                    className="rc-av"
                    style={{ background: "#0D99FF" } as CSSProperties}
                  >
                    A
                  </span>
                  <div>
                    <span className="rc-nm">Atul Guleria</span>
                    <span className="rc-rl">CEO, Catalyst AI</span>
                  </div>
                  <span className="rc-react">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21s-7.5-4.6-10-9.3C.6 8.4 2.3 5 5.6 5c2 0 3.2 1.1 4.4 2.6C11.2 6.1 12.4 5 14.4 5c3.3 0 5 3.4 3.6 6.7C19.5 16.4 12 21 12 21z" />
                    </svg>{" "}
                    47
                  </span>
                </div>
              </article>
              <article
                className="rcard "
                style={{ "--i": "5", "--lc": "#14202B" } as CSSProperties}
              >
                <span className="rc-h tl"></span>
                <span className="rc-h tr"></span>
                <span className="rc-h bl"></span>
                <span className="rc-h br"></span>
                <span className="rc-dim">412 x 222</span>
                <div className="rc-top">
                  <span className="rc-frame">
                    <i></i> review-06
                  </span>
                  <span className="rc-rate">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 17.8 5.9 20.5l1.5-6.7L2.3 8.8l6.8-.6z" />
                    </svg>
                  </span>
                </div>
                <blockquote>
                  “Reliable sounds boring until you’ve worked with people who
                  aren’t. They reply, they hit dates, and the work keeps getting
                  sharper. I’ve stopped asking anyone else for quotes.”
                </blockquote>
                <div className="rc-foot">
                  <span
                    className="rc-av"
                    style={{ background: "#14202B" } as CSSProperties}
                  >
                    K
                  </span>
                  <div>
                    <span className="rc-nm">Kevin Khoury</span>
                    <span className="rc-rl">CEO, Viral Holdings</span>
                  </div>
                  <span className="rc-react">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21s-7.5-4.6-10-9.3C.6 8.4 2.3 5 5.6 5c2 0 3.2 1.1 4.4 2.6C11.2 6.1 12.4 5 14.4 5c3.3 0 5 3.4 3.6 6.7C19.5 16.4 12 21 12 21z" />
                    </svg>{" "}
                    19
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
