import Link from "next/link";
import type { CSSProperties } from "react";

export default function Why() {
  return (
    <>
      <section className="diff" id="why">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="scribble">
              <svg
                className="hw"
                viewBox="-22 -221 1357 252"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  className="hw-ink"
                  pathLength="1"
                  d="M17.3 -120.9L5.8 -109.4L0 -92.1L0 -80.6L5.8 -69.1L17.3 -69.1L28.8 -74.8L40.3 -86.4M51.8 -120.9L40.3 -86.4L40.3 -74.8L46.1 -69.1L57.6 -69.1L69.1 -74.8L80.6 -86.4L86.4 -103.6L86.4 -120.9L92.1 -97.9L97.9 -92.1L109.4 -92.1L120.9 -97.9L132.4 -115.2L149.7 -143.9L155.5 -155.5L161.2 -172.7L161.2 -184.2L155.5 -190L143.9 -184.2L138.2 -172.7L132.4 -149.7L126.7 -115.2L120.9 -69.1L126.7 -86.4L132.4 -97.9L143.9 -115.2L155.5 -120.9L167 -120.9L172.7 -115.2L172.7 -103.6L167 -86.4L167 -74.8L172.7 -69.1L178.5 -69.1L190 -74.8L195.8 -80.6L207.3 -97.9L218.8 -120.9L207.3 -86.4L207.3 -74.8L213 -69.1L224.5 -69.1L236.1 -74.8L247.6 -86.4L259.1 -103.6M264.8 -120.9L230.3 -17.3L224.5 -5.8L213 -0L207.3 -5.8L207.3 -17.3L213 -34.5L230.3 -51.8L247.6 -63.3L259.1 -69.1L276.4 -80.6L293.6 -97.9M385.8 -97.9L397.3 -115.2L408.8 -138.2M426.1 -190L391.5 -86.4L391.5 -74.8L397.3 -69.1L408.8 -69.1L420.3 -74.8L426.1 -80.6L437.6 -97.9M391.5 -143.9L431.8 -143.9M443.3 -80.6L454.8 -86.4L460.6 -92.1L466.4 -103.6L466.4 -115.2L460.6 -120.9L454.8 -120.9L443.3 -115.2L437.6 -103.6L437.6 -86.4L443.3 -74.8L454.8 -69.1L466.4 -69.1L477.9 -74.8L483.6 -80.6L495.2 -97.9M547 -103.6L541.2 -115.2L529.7 -120.9L518.2 -120.9L506.7 -115.2L500.9 -109.4L495.2 -97.9L495.2 -86.4L500.9 -74.8L512.4 -69.1L523.9 -69.1L535.5 -74.8L541.2 -86.4L552.7 -120.9L547 -92.1L547 -74.8L552.7 -69.1L558.5 -69.1L570 -74.8L575.8 -80.6L587.3 -97.9L598.8 -115.2L610.3 -120.9L616.1 -115.2L616.1 -109.4L610.3 -86.4L604.5 -69.1M610.3 -86.4L616.1 -97.9L627.6 -115.2L639.1 -120.9L650.6 -120.9L656.4 -115.2L656.4 -109.4L650.6 -86.4L644.8 -69.1M650.6 -86.4L656.4 -97.9L667.9 -115.2L679.4 -120.9L690.9 -120.9L696.7 -115.2L696.7 -103.6L690.9 -86.4L690.9 -74.8L696.7 -69.1L702.4 -69.1L713.9 -74.8L719.7 -80.6L731.2 -97.9L742.7 -115.2L748.5 -126.7L748.5 -115.2L760 -97.9L765.8 -86.4L765.8 -74.8L754.2 -69.1M731.2 -74.8L742.7 -69.1L765.8 -69.1L777.3 -74.8L783 -80.6L794.5 -97.9M886.7 -97.9L898.2 -115.2L903.9 -126.7L903.9 -115.2L915.5 -97.9L921.2 -86.4L921.2 -74.8L909.7 -69.1M886.7 -74.8L898.2 -69.1L921.2 -69.1L932.7 -74.8L938.5 -80.6L950 -97.9M967.3 -120.9L955.8 -109.4L950 -92.1L950 -80.6L955.8 -69.1L967.3 -69.1L978.8 -74.8L990.3 -86.4M1001.8 -120.9L990.3 -86.4L990.3 -74.8L996.1 -69.1L1007.6 -69.1L1019.1 -74.8L1030.6 -86.4L1036.4 -103.6L1036.4 -120.9L1042.1 -97.9L1047.9 -92.1L1059.4 -92.1L1070.9 -97.9M1088.2 -149.7L1088.2 -143.9L1093.9 -143.9L1093.9 -149.7L1088.2 -149.7M1070.9 -97.9L1082.4 -120.9L1070.9 -86.4L1070.9 -74.8L1076.7 -69.1L1082.4 -69.1L1093.9 -74.8L1099.7 -80.6L1111.2 -97.9L1122.7 -115.2L1134.2 -138.2M1151.5 -190L1117 -86.4L1117 -74.8L1122.7 -69.1L1134.2 -69.1L1145.8 -74.8L1151.5 -80.6L1163 -97.9M1117 -143.9L1157.3 -143.9M1203.3 -109.4L1203.3 -115.2L1197.6 -120.9L1186.1 -120.9L1174.5 -115.2L1168.8 -109.4L1163 -97.9L1163 -86.4L1168.8 -74.8L1180.3 -69.1L1197.6 -69.1L1214.8 -80.6L1226.4 -97.9L1237.9 -115.2L1255.2 -143.9L1260.9 -155.5L1266.7 -172.7L1266.7 -184.2L1260.9 -190L1249.4 -184.2L1243.6 -172.7L1237.9 -149.7L1232.1 -115.2L1226.4 -69.1L1232.1 -86.4L1237.9 -97.9L1249.4 -115.2L1260.9 -120.9L1272.4 -120.9L1278.2 -115.2L1278.2 -103.6L1272.4 -86.4L1272.4 -74.8L1278.2 -69.1L1283.9 -69.1L1295.5 -74.8L1301.2 -80.6L1312.7 -97.9"
                  stroke="#F0531C"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2>
              same brief.
              <br />
              different studio.
            </h2>
          </div>
          <div className="figwin diff-win reveal">
            <div className="figbar">
              <div className="lights">
                <i className="r"></i>
                <i className="y"></i>
                <i className="g"></i>
              </div>
              <div className="fname">the-difference.fig</div>
              <div className="fright">
                <span className="zoom">100%</span>
                <span className="avs">
                  <span
                    className="av"
                    style={{ background: "#F0531C" } as CSSProperties}
                  >
                    V
                  </span>
                  <span
                    className="av"
                    style={{ background: "#0D99FF" } as CSSProperties}
                  >
                    M
                  </span>
                </span>
              </div>
            </div>
            <div className="diff-body">
              <div className="diff-frame diff-them">
                <div className="diff-fhead">
                  <span className="diff-flock">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="5" y="11" width="14" height="9" rx="2" />
                      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                    </svg>
                  </span>
                  <span className="diff-fname">most studios</span>
                  <span className="diff-fmeta">locked</span>
                </div>
                <ul className="diff-list">
                  <li>
                    <span className="diff-mark x">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    </span>
                    <b>Pitched by seniors, built by whoever is free.</b>
                  </li>
                  <li>
                    <span className="diff-mark x">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    </span>
                    <b>Booked out for weeks, then slow to deliver.</b>
                  </li>
                  <li>
                    <span className="diff-mark x">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    </span>
                    <b>Fat monthly retainer, plus surprise invoices.</b>
                  </li>
                  <li>
                    <span className="diff-mark x">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    </span>
                    <b>Five calls and a deck before a single pixel.</b>
                  </li>
                  <li>
                    <span className="diff-mark x">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    </span>
                    <b>Safe, on brand-ish, instantly forgettable.</b>
                  </li>
                </ul>
              </div>
              <div className="diff-spine">
                <span className="diff-vs">vs</span>
              </div>
              <div className="diff-frame diff-us">
                <span className="diff-h tl"></span>
                <span className="diff-h tr"></span>
                <span className="diff-h bl"></span>
                <span className="diff-h br"></span>
                <span className="diff-dim">ADeeLNariai · selected</span>
                <div className="diff-fhead">
                  <span className="diff-favatar">O</span>
                  <span className="diff-fname">ADeeLNariai</span>
                  <span className="diff-fmeta">editing</span>
                </div>
                <ul className="diff-list">
                  <li>
                    <span className="diff-mark c">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4 10-12" />
                      </svg>
                    </span>
                    <b>You talk to the person actually designing it.</b>
                  </li>
                  <li>
                    <span className="diff-mark c">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4 10-12" />
                      </svg>
                    </span>
                    <b>First real screens in days, not quarters.</b>
                  </li>
                  <li>
                    <span className="diff-mark c">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4 10-12" />
                      </svg>
                    </span>
                    <b>Fixed scope, fixed price, zero surprises.</b>
                  </li>
                  <li>
                    <span className="diff-mark c">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4 10-12" />
                      </svg>
                    </span>
                    <b>Less meetings. More shipping.</b>
                  </li>
                  <li>
                    <span className="diff-mark c">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4 10-12" />
                      </svg>
                    </span>
                    <b>Custom, opinionated, genuinely hard to forget.</b>
                  </li>
                </ul>
                <span className="diff-pin">
                  <span className="diff-pinb">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 13l4 4 10-12" />
                    </svg>
                  </span>
                  <span className="tag">pick this one</span>
                </span>
              </div>
            </div>
            <div className="diff-foot">
              <p>
                Same brief, same budget.{" "}
                <span className="o">Wildly different outcome.</span>
              </p>
              <Link className="btn ghost" href="/work">
                see the work{" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ width: "15px", height: "15px" } as CSSProperties}
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
