import type { Metadata } from "next";
import ContactForm from "@/app/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact | ADeeLNariai",
  description:
    "Tell us what you are building. Send a brief, book a call, or just say hello — replies within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="scribble">say hello</span>
          <h2>START A PROJECT</h2>
          <span className="note">
            One brief is all we need. No forms with fourteen fields.
          </span>
        </div>

        <div className="ct-grid stagger">
          <div className="cell ct-card">
            <span className="clbl">BRIEF</span>
            <ContactForm />
          </div>

          <aside className="ct-side">
            <div className="cell ct-mini">
              <span className="clbl">DIRECT</span>
              <span className="ct-k mono">Email</span>
              <a className="ct-v" href="mailto:hello@ADeeLNariai.com">
                hello@ADeeLNariai.com
              </a>
              <span className="ct-k mono">WhatsApp</span>
              <a
                className="ct-v"
                href="https://wa.me/919461219922"
                target="_blank"
                rel="noopener"
              >
                +91 94612 19922
              </a>
            </div>

            <div className="cell ct-mini">
              <span className="clbl">FASTEST</span>
              <p className="ct-p">
                Rather talk it through? Grab thirty minutes and bring whatever you
                have — a deck, a sketch, or just the idea.
              </p>
              <a
                className="btn"
                href="https://cal.com/ADeeLNariai/30min"
                target="_blank"
                rel="noopener"
              >
                Book a call
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>

            <div className="cell ct-mini ct-status">
              <span className="ct-live">
                <span className="dot"></span> available for projects
              </span>
              <span className="ct-k mono">Working worldwide</span>
              <span className="ct-v-sm">Your timezone, handled</span>
              <span className="ct-k mono">Open for 2026</span>
              <span className="ct-v-sm">Two project slots left this quarter</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
