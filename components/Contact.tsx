'use client';

import Reveal from "./Reveal";
import { useState } from "react";

export default function Contact() {
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
        body: JSON.stringify({ name, email, message })
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
    <section id="contact" className="section">
      <div className="container max-w-3xl mx-auto">
        <Reveal className="space-y-2 text-center">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subtitle">Let’s build something extraordinary together.</p>
        </Reveal>
        <Reveal>
          <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <input type="text" name="name" placeholder="Name" aria-label="Name" required className="h-12 px-4 w-full" />
              <input type="email" name="email" placeholder="Email" aria-label="Email" required className="h-12 px-4 w-full" />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              aria-label="Message"
              required
              className="px-4 py-3 w-full md:col-span-2"
            />
            <button type="submit" className="btn-primary w-full md:w-auto min-h-[52px] rounded-xl" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : status === "sent" ? "Sent!" : "Submit"}
            </button>
            {error && <p className="text-sm text-red-300">{error}</p>}
            {status === "sent" && !error && (
              <p className="text-sm text-white/70">Thanks! We’ll be in touch shortly.</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
