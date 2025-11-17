'use client';

import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="section flex items-center justify-center min-h-screen">
      <div className="container relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 px-6 py-12 sm:py-16 lg:py-20 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_0%,transparent_100%)]">
          <div className="absolute inset-0 opacity-20 blur-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.1),transparent_35%)]" />
        </div>
        <Reveal className="relative text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">E-Nova Dev</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Web & App Development Studio
            </h1>
            <p className="text-lg text-white/70">
              Building the Future of the Web.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href="#contact" className="btn-primary w-full sm:w-auto">Get Started</Link>
            <Link href="#portfolio" className="btn-outline w-full sm:w-auto">View Portfolio</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/70">
            {[
              { label: "End-to-end Delivery", value: "Concept → Launch" },
              { label: "Platforms", value: "Web, Mobile, Cloud" },
              { label: "Engagement", value: "Experience-led builds" }
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-white text-base font-semibold">{item.value}</p>
                <p className="text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
