'use client';

import { useState } from "react";
import Reveal from "./Reveal";
import { useScrollReveal } from "@/utils/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal();
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="section">
      <div className="container mx-auto max-w-3xl">
        <Reveal className="space-y-2 text-center">
          <p className="section-label justify-center">Contact</p>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subtitle">Let&apos;s build something extraordinary together.</p>
        </Reveal>
        <Reveal className="mt-6">
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://www.instagram.com/enova.dev/"
              target="_blank"
              rel="noreferrer"
              className="group w-full sm:w-auto"
            >
              <span className="flex min-h-[72px] min-w-[220px] items-center gap-4 rounded-[10px] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(36,36,36,0.96),rgba(18,18,18,0.96))] px-5 py-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-white/20 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#f9ce34,#ee2a7b,#6228d7)] text-white shadow-[0_10px_24px_rgba(238,42,123,0.28)]">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <span className="flex flex-1 flex-col text-left">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-white/35">
                    Social
                  </span>
                  <span className="mt-1 text-[15px] font-medium text-white">Instagram</span>
                </span>
                <span className="text-sm text-white/38 transition-colors duration-300 group-hover:text-white/70">
                  →
                </span>
              </span>
            </a>
            <a
              href="https://wa.me/96181605898"
              target="_blank"
              rel="noreferrer"
              className="group w-full sm:w-auto"
            >
              <span className="flex min-h-[72px] min-w-[220px] items-center gap-4 rounded-[10px] border border-[rgba(200,242,97,0.2)] bg-[linear-gradient(135deg,rgba(200,242,97,0.14),rgba(20,20,20,0.96))] px-5 py-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[rgba(200,242,97,0.42)] group-hover:shadow-[0_18px_40px_rgba(200,242,97,0.14)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[var(--accent)] text-[#0a0a0a] shadow-[0_10px_24px_rgba(200,242,97,0.2)]">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.33-1.66a11.88 11.88 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42Zm-8.46 18.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.67-.24-.38a9.85 9.85 0 0 1-1.52-5.24c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.11 1.02 6.98 2.9a9.8 9.8 0 0 1 2.9 6.98c0 5.45-4.44 9.9-9.88 9.9Zm5.43-7.43c-.3-.15-1.8-.89-2.07-.99-.28-.1-.48-.15-.68.15-.2.3-.79.99-.97 1.19-.18.2-.36.22-.66.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.47.13-.62.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.94-2.24-.25-.6-.5-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.88 1.23 3.08c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.8-.73 2.05-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
                  </svg>
                </span>
                <span className="flex flex-1 flex-col text-left">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[rgba(200,242,97,0.62)]">
                    Fast Reply
                  </span>
                  <span className="mt-1 text-[15px] font-medium text-white">WhatsApp</span>
                </span>
                <span className="text-sm text-[rgba(200,242,97,0.62)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                  →
                </span>
              </span>
            </a>
          </div>
        </Reveal>
        <Reveal>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                aria-label="Name"
                required
                className="h-12 w-full px-4"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                required
                className="h-12 w-full px-4"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              aria-label="Message"
              required
              className="w-full px-4 py-3 md:col-span-2"
            />
            <button
              type="submit"
              className="btn-primary min-h-[52px] w-full md:w-auto"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : status === "sent" ? "Sent!" : "Submit"}
            </button>
            {error && <p className="text-sm text-red-300">{error}</p>}
            {status === "sent" && !error && (
              <p className="text-sm text-white/70">Thanks! We&apos;ll be in touch shortly.</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
