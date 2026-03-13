'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "./Reveal";
import { useScrollReveal } from "@/utils/useScrollReveal";

const templates = [
  {
    number: "01",
    category: "Photography",
    name: "Sara Mansour - Portrait Studio",
    description:
      "Elegant portfolio for photographers and visual artists. Gallery, lightbox, booking form.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    liveUrl: "https://photography.e-nova.dev",
  },
  {
    number: "02",
    category: "Legal",
    name: "Karim El Hajj - Law Firm",
    description:
      "Professional single-lawyer website. Services, stats, testimonials, consultation booking.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    liveUrl: "https://law.e-nova.dev",
  },
  {
    number: "03",
    category: "Real Estate",
    name: "Prestige Realty - Luxury Properties",
    description:
      "High-end real estate agency site. Listings grid with filters, search, and property cards.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    liveUrl: "https://realestate.e-nova.dev",
  },
];

function buildScreenshotUrl(templateUrl: string) {
  const accessKey = process.env.NEXT_PUBLIC_SCREENSHOTONE_KEY;

  if (!accessKey) {
    return null;
  }

  const params = new URLSearchParams({
    access_key: accessKey,
    url: templateUrl,
    viewport_width: "1280",
    viewport_height: "800",
    device_scale_factor: "1",
    format: "jpg",
    image_quality: "80",
    block_ads: "true",
    block_cookie_banners: "true",
    cache: "true",
  });

  return `https://api.screenshotone.com/take?${params.toString()}`;
}

function TemplatePreview({ liveUrl, name }: { liveUrl: string; name: string }) {
  const [loaded, setLoaded] = useState(false);
  const screenshotUrl = buildScreenshotUrl(liveUrl);

  return (
    <a href={liveUrl} target="_blank" rel="noreferrer" className="block">
      <div className="border border-[var(--border)] bg-[#101010]">
        <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
          </div>
          <div className="min-w-0 flex-1 border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-3 py-1.5 text-[11px] text-white/38">
            <span className="block truncate">{liveUrl.replace(/^https?:\/\//, "")}</span>
          </div>
        </div>
        <div className="relative h-[250px] overflow-hidden bg-[#101010] sm:h-[320px] lg:h-[400px]">
          {!loaded && <div className="absolute inset-0 animate-pulse bg-[#181818]" />}
          {screenshotUrl ? (
            <Image
              src={screenshotUrl}
              alt={`${name} template preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className={`object-cover object-top transition-all duration-[400ms] ease-in-out group-hover:scale-[1.02] ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setLoaded(true)}
              onError={() => setLoaded(true)}
            />
          ) : null}
        </div>
      </div>
    </a>
  );
}

export default function Templates() {
  const ref = useScrollReveal();

  return (
    <section id="templates" ref={ref} className="section">
      <div className="container">
        <Reveal className="space-y-2">
          <p className="section-label">Ready to use</p>
          <h2 className="section-heading text-left md:text-left">
            Templates Built for Real Businesses
          </h2>
          <p className="section-subtitle !mx-0 text-left">
            Production-ready websites. Pick a template, we customize it for your brand.
          </p>
        </Reveal>

        <div className="mt-8 space-y-6">
          {templates.map((template, idx) => (
            <Reveal
              key={template.name}
              delay={idx * 90}
              className="group relative overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#171717] hover:shadow-[0_14px_60px_rgba(0,0,0,0.55)]"
            >
              <div className="absolute left-0 top-0 h-full w-0.5 bg-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="grid gap-8 p-5 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:p-7">
                <div className="relative overflow-hidden">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[-6px] top-[-26px] text-[90px] leading-none text-white/10 sm:text-[120px] lg:text-[140px]"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {template.number}
                  </span>
                  <div className="relative z-10 flex h-full flex-col">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                      {template.category}
                    </p>
                    <h3 className="mt-4 max-w-[14ch] text-[clamp(28px,4vw,40px)] font-bold leading-[1.04] tracking-[-0.02em]">
                      {template.name}
                    </h3>
                    <p className="mt-4 max-w-[48ch] text-[14px] leading-7 text-white/68">
                      {template.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {template.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border px-2 py-0.5 text-[10px]"
                          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={template.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[52px] w-full items-center justify-center border border-transparent bg-[var(--accent)] px-5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0a0a0a] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
                      >
                        View Live →
                      </a>
                      <Link
                        href="/#contact"
                        className="inline-flex min-h-[52px] w-full items-center justify-center border border-[var(--accent)] px-5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] transition-colors duration-200 hover:bg-[rgba(200,242,97,0.06)] sm:w-auto"
                      >
                        Use This Template
                      </Link>
                    </div>
                  </div>
                </div>

                <TemplatePreview liveUrl={template.liveUrl} name={template.name} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-[14px] text-white/45">Need something custom?</p>
          <Link
            href="/#contact"
            className="mt-3 inline-flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)] transition-opacity duration-200 hover:opacity-80"
          >
            Let&apos;s build it together →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
