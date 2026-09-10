export default function Faq() {
  return (
    <>
      <section className="faq" id="faq">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="scribble">
              <svg
                className="hw"
                viewBox="-25 -99 800 252"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  className="hw-ink"
                  pathLength="1"
                  d="M54 18 L48 6L36 0L24 0L12 6L6 12L0 24L0 36L6 48L18 54L30 54L42 48L48 36L60 0L54 30L54 48L60 54L66 54L78 48L84 42L96 24L108 6L114 -6L114 6L126 24L132 36L132 48L120 54M96 48 L108 54L132 54L144 48L150 42L162 24L174 6L192 -24L198 -36L204 -54L204 -66L198 -72L186 -66L180 -54L174 -30L168 6L162 54L168 36L174 24L186 6L198 0L210 0L216 6L216 18L204 24L186 24L198 30L204 48L210 54L216 54L228 48L234 42L246 24M396 18 L390 6L378 0L366 0L354 6L348 12L342 24L342 36L348 48L360 54L372 54L384 48L390 36L402 0L396 30L396 48L402 54L408 54L420 48L426 42L438 24M456 0 L444 12L438 30L438 42L444 54L456 54L468 48L480 36M492 0 L480 36L480 48L486 54L498 54L510 48L522 36L528 18L528 0L534 24L540 30L552 30L564 24M618 18 L612 6L600 0L588 0L576 6L570 12L564 24L564 36L570 48L582 54L594 54L606 48L612 36L624 0L618 30L618 48L624 54L630 54L642 48L648 42L660 24L672 0L660 36L660 48L666 54L678 54L690 48L702 36L714 18M720 0 L684 108L678 120L666 126L660 120L660 108L666 90L684 72L702 60L714 54L732 42L750 24"
                  stroke="#F0531C"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2>The nosy section</h2>
            <span className="note">
              everything you&apos;d grill us on a call, minus the call.
            </span>
          </div>
          <div className="fx-frames reveal">
            <div className="fx-qa">
              <span className="fx-tab">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="4" y="4" width="16" height="16" rx="1" />
                </svg>
                how-it-works.frame
              </span>
              <div className="fx-card">
                <span className="fx-sel"></span>
                <span className="fx-h tl"></span>
                <span className="fx-h tr"></span>
                <span className="fx-h bl"></span>
                <span className="fx-h br"></span>
                <span className="fx-dim" data-dim></span>
                <button className="fx-head" aria-expanded="false">
                  <span className="fx-ix">01</span>
                  <span className="fx-q">
                    Okay, how does this subscription thing work?
                  </span>
                  <span className="fx-pm"></span>
                </button>
                <div className="fx-a">
                  <div>
                    <div className="fx-inspect">
                      <div className="fx-prop">
                        <div className="fx-k">answer</div>
                        <div className="fx-v">
                          You pay <b>one flat monthly fee</b> and we become your
                          design team on tap. Send over as many tasks as you
                          like, we build them one at a time and ship fast. No
                          contracts, no “book a call to unlock the good tier,”
                          no surprise line items.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fx-qa">
              <span className="fx-tab">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="4" y="4" width="16" height="16" rx="1" />
                </svg>
                need-for-speed.frame
              </span>
              <div className="fx-card">
                <span className="fx-sel"></span>
                <span className="fx-h tl"></span>
                <span className="fx-h tr"></span>
                <span className="fx-h bl"></span>
                <span className="fx-h br"></span>
                <span className="fx-dim" data-dim></span>
                <button className="fx-head" aria-expanded="false">
                  <span className="fx-ix">02</span>
                  <span className="fx-q">
                    How fast will I actually see stuff?
                  </span>
                  <span className="fx-pm"></span>
                </button>
                <div className="fx-a">
                  <div>
                    <div className="fx-inspect">
                      <div className="fx-prop">
                        <div className="fx-k">answer</div>
                        <div className="fx-v">
                          Most things land in <b>around 48 hours</b>, quicker
                          for the small asks, a little longer for full builds.
                          You&apos;ll always know exactly where your request
                          sits, so no black holes and no “we&apos;ll get to it
                          next sprint.”
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fx-qa">
              <span className="fx-tab">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="4" y="4" width="16" height="16" rx="1" />
                </svg>
                the-firehose.frame
              </span>
              <div className="fx-card">
                <span className="fx-sel"></span>
                <span className="fx-h tl"></span>
                <span className="fx-h tr"></span>
                <span className="fx-h bl"></span>
                <span className="fx-h br"></span>
                <span className="fx-dim" data-dim></span>
                <button className="fx-head" aria-expanded="false">
                  <span className="fx-ix">03</span>
                  <span className="fx-q">
                    How much can I pile onto the queue?
                  </span>
                  <span className="fx-pm"></span>
                </button>
                <div className="fx-a">
                  <div>
                    <div className="fx-inspect">
                      <div className="fx-prop">
                        <div className="fx-k">answer</div>
                        <div className="fx-v">
                          Pile on as much as you want, the queue never fills up.
                          We just work <b>one thing at a time</b> so each gets
                          our full brain instead of a rushed 60 percent.
                          Reshuffle your list whenever, it&apos;s yours to boss
                          around.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fx-qa">
              <span className="fx-tab">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="4" y="4" width="16" height="16" rx="1" />
                </svg>
                the-whole-thing.frame
              </span>
              <div className="fx-card">
                <span className="fx-sel"></span>
                <span className="fx-h tl"></span>
                <span className="fx-h tr"></span>
                <span className="fx-h bl"></span>
                <span className="fx-h br"></span>
                <span className="fx-dim" data-dim></span>
                <button className="fx-head" aria-expanded="false">
                  <span className="fx-ix">04</span>
                  <span className="fx-q">
                    Is it just design, or the whole thing?
                  </span>
                  <span className="fx-pm"></span>
                </button>
                <div className="fx-a">
                  <div>
                    <div className="fx-inspect">
                      <div className="fx-prop">
                        <div className="fx-k">answer</div>
                        <div className="fx-v">
                          Design&apos;s our first love, but we also do websites,
                          brands, and the marketing that gets people clicking.{" "}
                          <b>Webflow, Framer and Figma, all in house.</b> One
                          team for the lot means a lot fewer tabs open for you.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fx-qa">
              <span className="fx-tab">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="4" y="4" width="16" height="16" rx="1" />
                </svg>
                the-do-over.frame
              </span>
              <div className="fx-card">
                <span className="fx-sel"></span>
                <span className="fx-h tl"></span>
                <span className="fx-h tr"></span>
                <span className="fx-h bl"></span>
                <span className="fx-h br"></span>
                <span className="fx-dim" data-dim></span>
                <button className="fx-head" aria-expanded="false">
                  <span className="fx-ix">05</span>
                  <span className="fx-q">
                    What if the first draft makes me go ‘hmm’?
                  </span>
                  <span className="fx-pm"></span>
                </button>
                <div className="fx-a">
                  <div>
                    <div className="fx-inspect">
                      <div className="fx-prop">
                        <div className="fx-k">answer</div>
                        <div className="fx-v">
                          Then it&apos;s not done, simple as that.{" "}
                          <b>
                            We revise until you get that little ‘oh, that&apos;s
                            the one’ grin.
                          </b>{" "}
                          No ego, no “but the grid,” no drama. Fresh eyes and
                          another round, always on us.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
