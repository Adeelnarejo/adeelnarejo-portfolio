import type { CSSProperties } from "react";

export default function Pricing() {
  return (
    <>
      <section className="pricing" id="pricing">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="scribble">
              <svg
                className="hw"
                viewBox="-22 -221 1512 252"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  className="hw-ink"
                  pathLength="1"
                  d="M40.3 -109.4L40.3 -115.2L34.5 -120.9L23 -120.9L11.5 -115.2L5.8 -109.4L0 -97.9L0 -86.4L5.8 -74.8L17.3 -69.1L34.5 -69.1L51.8 -80.6L63.3 -97.9L74.8 -115.2L92.1 -143.9L97.9 -155.5L103.6 -172.7L103.6 -184.2L97.9 -190L86.4 -184.2L80.6 -172.7L74.8 -149.7L69.1 -115.2L63.3 -69.1L69.1 -86.4L74.8 -97.9L86.4 -115.2L97.9 -120.9L109.4 -120.9L115.2 -115.2L115.2 -103.6L109.4 -86.4L109.4 -74.8L115.2 -69.1L120.9 -69.1L132.4 -74.8L138.2 -80.6L149.7 -97.9M155.5 -80.6L167 -86.4L172.7 -92.1L178.5 -103.6L178.5 -115.2L172.7 -120.9L167 -120.9L155.5 -115.2L149.7 -103.6L149.7 -86.4L155.5 -74.8L167 -69.1L178.5 -69.1L190 -74.8L195.8 -80.6L207.3 -97.9M259.1 -103.6L253.3 -115.2L241.8 -120.9L230.3 -120.9L218.8 -115.2L213 -109.4L207.3 -97.9L207.3 -86.4L213 -74.8L224.5 -69.1L236.1 -69.1L247.6 -74.8L253.3 -86.4L264.8 -120.9L259.1 -92.1L259.1 -74.8L264.8 -69.1L270.6 -69.1L282.1 -74.8L287.9 -80.6L299.4 -97.9L310.9 -115.2L316.7 -126.7L310.9 -103.6L276.4 -0M310.9 -103.6L316.7 -115.2L328.2 -120.9L339.7 -120.9L351.2 -115.2L357 -103.6L357 -92.1L351.2 -80.6L345.5 -74.8L333.9 -69.1M310.9 -74.8L322.4 -69.1L339.7 -69.1L357 -74.8L368.5 -80.6L385.8 -97.9M391.5 -80.6L403 -86.4L408.8 -92.1L414.5 -103.6L414.5 -115.2L408.8 -120.9L403 -120.9L391.5 -115.2L385.8 -103.6L385.8 -86.4L391.5 -74.8L403 -69.1L414.5 -69.1L426.1 -74.8L431.8 -80.6L443.3 -97.9L454.8 -115.2L460.6 -126.7L460.6 -115.2L477.9 -115.2L483.6 -109.4L483.6 -97.9L477.9 -80.6L477.9 -74.8L483.6 -69.1L489.4 -69.1L500.9 -74.8L506.7 -80.6L518.2 -97.9M610.3 -97.9L621.8 -115.2L633.3 -138.2M650.6 -190L616.1 -86.4L616.1 -74.8L621.8 -69.1L633.3 -69.1L644.8 -74.8L650.6 -80.6L662.1 -97.9M616.1 -143.9L656.4 -143.9M662.1 -97.9L673.6 -115.2L690.9 -143.9L696.7 -155.5L702.4 -172.7L702.4 -184.2L696.7 -190L685.2 -184.2L679.4 -172.7L673.6 -149.7L667.9 -115.2L662.1 -69.1L667.9 -86.4L673.6 -97.9L685.2 -115.2L696.7 -120.9L708.2 -120.9L713.9 -115.2L713.9 -103.6L708.2 -86.4L708.2 -74.8L713.9 -69.1L719.7 -69.1L731.2 -74.8L737 -80.6L748.5 -97.9M800.3 -103.6L794.5 -115.2L783 -120.9L771.5 -120.9L760 -115.2L754.2 -109.4L748.5 -97.9L748.5 -86.4L754.2 -74.8L765.8 -69.1L777.3 -69.1L788.8 -74.8L794.5 -86.4L806.1 -120.9L800.3 -92.1L800.3 -74.8L806.1 -69.1L811.8 -69.1L823.3 -74.8L829.1 -80.6L840.6 -97.9L852.1 -115.2L863.6 -120.9L869.4 -115.2L869.4 -109.4L863.6 -86.4L857.9 -69.1M863.6 -86.4L869.4 -97.9L880.9 -115.2L892.4 -120.9L903.9 -120.9L909.7 -115.2L909.7 -103.6L903.9 -86.4L903.9 -74.8L909.7 -69.1L915.5 -69.1L927 -74.8L932.7 -80.6L944.2 -97.9M1036.4 -97.9L1047.9 -115.2L1065.2 -143.9L1070.9 -155.5L1076.7 -172.7L1076.7 -184.2L1070.9 -190L1059.4 -184.2L1053.6 -172.7L1047.9 -149.7L1042.1 -115.2L1036.4 -69.1L1042.1 -86.4L1047.9 -97.9L1059.4 -115.2L1070.9 -120.9L1082.4 -120.9L1088.2 -115.2L1088.2 -103.6L1082.4 -86.4L1082.4 -74.8L1088.2 -69.1L1093.9 -69.1L1105.5 -74.8L1111.2 -80.6L1122.7 -97.9M1140 -149.7L1140 -143.9L1145.8 -143.9L1145.8 -149.7L1140 -149.7M1122.7 -97.9L1134.2 -120.9L1122.7 -86.4L1122.7 -74.8L1128.5 -69.1L1134.2 -69.1L1145.8 -74.8L1151.5 -80.6L1163 -97.9L1174.5 -115.2L1180.3 -126.7L1180.3 -115.2L1197.6 -115.2L1203.3 -109.4L1203.3 -97.9L1197.6 -80.6L1197.6 -74.8L1203.3 -69.1L1209.1 -69.1L1220.6 -74.8L1226.4 -80.6L1237.9 -97.9M1255.2 -149.7L1255.2 -143.9L1260.9 -143.9L1260.9 -149.7L1255.2 -149.7M1237.9 -97.9L1249.4 -120.9L1237.9 -86.4L1237.9 -74.8L1243.6 -69.1L1249.4 -69.1L1260.9 -74.8L1266.7 -80.6L1278.2 -97.9L1289.7 -115.2L1301.2 -120.9L1307 -115.2L1307 -109.4L1301.2 -86.4L1295.5 -69.1M1301.2 -86.4L1307 -97.9L1318.5 -115.2L1330 -120.9L1341.5 -120.9L1347.3 -115.2L1347.3 -103.6L1341.5 -86.4L1341.5 -74.8L1347.3 -69.1L1353 -69.1L1364.5 -74.8L1370.3 -80.6L1381.8 -97.9M1433.6 -103.6L1427.9 -115.2L1416.4 -120.9L1404.8 -120.9L1393.3 -115.2L1387.6 -109.4L1381.8 -97.9L1381.8 -86.4L1387.6 -74.8L1399.1 -69.1L1410.6 -69.1L1422.1 -74.8L1427.9 -80.6M1439.4 -120.9L1427.9 -80.6L1404.8 -17.3L1399.1 -5.8L1387.6 -0L1381.8 -5.8L1381.8 -17.3L1387.6 -34.5L1404.8 -51.8L1422.1 -63.3L1433.6 -69.1L1450.9 -80.6L1468.2 -97.9"
                  stroke="#F0531C"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2>
              Pick your <span className="o">plan.</span>
            </h2>
            <span className="note">
              one flat price. pause or cancel whenever.
            </span>
          </div>
          <div id="lp-root">
            <span className="flabel">pricing.fig</span>
            <div className="card">
              <div className="disp">
                <div className="dleft">
                  <div className="gauge">
                    <span className="cur">$</span>
                    <span className="amt">1,499</span>
                    <span className="per">/month</span>
                  </div>
                  <div className="pname">
                    <b className="pnm">Design</b> &#183; billed monthly{" "}
                    <span className="was">$1,699</span>
                  </div>
                </div>
                <div className="hero-side">
                  <span className="badge">
                    <span className="ld"></span>Founding rate, ends soon
                  </span>
                  <div className="hsum">
                    <div className="hrow">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <b className="hsum-req">One request at a time</b>
                    </div>
                    <div className="hrow">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>
                        <b className="hsum-cnt">8 things</b> included
                      </span>
                    </div>
                    <div className="hrow">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Avg 48 hour delivery
                    </div>
                  </div>
                  <div className="proof">
                    <span className="avs">
                      <span
                        className="av"
                        style={{ background: "#F0531C" } as CSSProperties}
                      >
                        &#128525;
                      </span>
                      <span
                        className="av"
                        style={{ background: "#0D99FF" } as CSSProperties}
                      >
                        &#129395;
                      </span>
                      <span
                        className="av"
                        style={{ background: "#14202b" } as CSSProperties}
                      >
                        &#128526;
                      </span>
                    </span>
                    <span className="ptext">
                      Loved by <b>40+</b> founders &amp; teams
                    </span>
                  </div>
                </div>
              </div>
              <div className="lower">
                <div className="ends">
                  <span className="a on ea">
                    <span className="pl">Just design</span>
                    <span className="pr">$1,499</span>
                  </span>
                  <span className="a r eb">
                    <span className="poptag">Most picked</span>
                    <span className="pl">Design + Dev</span>
                    <span className="pr">$1,999</span>
                  </span>
                </div>
                <div className="track">
                  <div className="fill"></div>
                  <div className="handle">
                    <svg
                      className="ch l"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 6l-6 6 6 6" />
                    </svg>
                    <svg
                      className="ch r"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </div>
                </div>
                <div className="hint">slide the lever, or tap a side</div>
                <hr className="pdash" />
                <ul className="feats-base"></ul>
                <div className="unlock">
                  <span className="ul-line"></span>
                  <span className="ul-chip">
                    <span className="lk">
                      <svg
                        className="lock-closed"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <rect x="5" y="11" width="14" height="9" rx="2" />
                        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                      </svg>
                      <svg
                        className="lock-open"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <rect x="5" y="11" width="14" height="9" rx="2" />
                        <path d="M8 11V8a4 4 0 0 1 7.5-1.6" />
                      </svg>
                    </span>
                    <span className="ul-txt">Unlocks with Design + Dev</span>
                  </span>
                  <span className="ul-line"></span>
                </div>
                <ul className="feats-dev"></ul>
                <div className="ctarow">
                  <a className="cta" href="#">
                    Start today{" "}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                  <span className="reassure">
                    No contracts. Cancel or pause anytime.
                  </span>
                </div>
              </div>
            </div>
            <span className="sel"></span>
            <span className="hnd tl"></span>
            <span className="hnd tr"></span>
            <span className="hnd bl"></span>
            <span className="hnd br"></span>
          </div>
        </div>
      </section>
    </>
  );
}
