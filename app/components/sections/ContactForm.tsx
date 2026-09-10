"use client";

import { useState } from "react";

const SCOPES = ["Brand", "Website", "Product UI", "Development", "Not sure yet"];
const BUDGETS = ["< $2k", "$2k – $5k", "$5k – $15k", "$15k +"];

/* No backend on this site, so the form composes a mail draft and hands it to
   the visitor's mail client. Nothing is sent or stored anywhere. */
export default function ContactForm() {
  const [scope, setScope] = useState(SCOPES[0]);
  const [budget, setBudget] = useState(BUDGETS[1]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const brief = String(data.get("brief") || "").trim();

    const subject = `New project — ${scope}${company ? ` — ${company}` : ""}`;
    const body = [
      `Name: ${name}`,
      company ? `Company: ${company}` : "",
      `Scope: ${scope}`,
      `Budget: ${budget}`,
      "",
      brief,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:hello@ADeeLNariai.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="ct-form" onSubmit={onSubmit}>
      <span className="ct-tab">
        <i></i>brief.txt
      </span>

      <div className="ct-row">
        <label className="ct-field">
          <span className="ct-label">Your name</span>
          <input className="ct-input" name="name" required placeholder="Adeel Narejo" />
        </label>
        <label className="ct-field">
          <span className="ct-label">Email</span>
          <input
            className="ct-input"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="ct-field">
        <span className="ct-label">Company / product</span>
        <input className="ct-input" name="company" placeholder="Optional" />
      </label>

      <div className="ct-field">
        <span className="ct-label">What do you need?</span>
        <div className="ct-chips">
          {SCOPES.map((s) => (
            <button
              key={s}
              type="button"
              className={s === scope ? "ct-chip on" : "ct-chip"}
              onClick={() => setScope(s)}
              aria-pressed={s === scope}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="ct-field">
        <span className="ct-label">Budget</span>
        <div className="ct-chips">
          {BUDGETS.map((b) => (
            <button
              key={b}
              type="button"
              className={b === budget ? "ct-chip on" : "ct-chip"}
              onClick={() => setBudget(b)}
              aria-pressed={b === budget}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <label className="ct-field">
        <span className="ct-label">The brief</span>
        <textarea
          className="ct-input ct-textarea"
          name="brief"
          rows={5}
          required
          placeholder="What are you building, who is it for, and when does it need to be live?"
        />
      </label>

      <div className="ct-actions">
        <button className="btn" type="submit">
          Send the brief
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
        <span className="ct-hint mono">opens your mail app · replies within 24h</span>
      </div>
    </form>
  );
}
