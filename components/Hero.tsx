'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { useScrollReveal } from "@/utils/useScrollReveal";

const tickerItems = "NEXT.JS · REACT · TYPESCRIPT · FIREBASE · UI/UX · MOBILE · JAVA ·";

export default function Hero() {
  const ref = useScrollReveal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const animatedClass = (delay: number) =>
    mounted
      ? {
          opacity: 1,
          transform: "translateY(0)",
          transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
        }
      : {
          opacity: 0,
          transform: "translateY(20px)",
        };

  return (
    <section
      id="home"
      ref={ref}
      className="section relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        className="pointer-events-none absolute left-0 top-0 h-[400px] w-[500px]"
        style={{
          background: "radial-gradient(ellipse at 20% 60%, var(--accent-07) 0%, transparent 70%)",
        }}
      />
      <div className="container relative z-10">
        <div className="max-w-4xl space-y-8 pt-12 md:pt-16">
          <p
            className="text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]"
            style={animatedClass(0)}
          >
            • Available for projects
          </p>
          <h1
            className="max-w-5xl text-[clamp(40px,6vw,80px)] font-bold leading-[1.04] tracking-[-0.02em]"
            style={animatedClass(100)}
          >
            We build digital products <span className="text-white/25">that convert.</span>
          </h1>
          <p className="text-[14px] text-[var(--text-muted)]" style={animatedClass(200)}>
            Web & App Development Studio - Lebanon
          </p>
          <div className="flex flex-col items-start gap-3 sm:flex-row" style={animatedClass(300)}>
            <Link href="#contact" className="btn-primary">
              Start a project →
            </Link>
            <Link href="#portfolio" className="btn-outline">
              View our work ↓
            </Link>
          </div>
        </div>
        <div className="mt-20 overflow-hidden border-y border-[var(--border)] py-4">
          <div className="marquee-track text-sm tracking-[0.18em] text-white/50">
            <span className="pr-10">{tickerItems}</span>
            <span className="pr-10">{tickerItems}</span>
            <span className="pr-10">{tickerItems}</span>
            <span className="pr-10">{tickerItems}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
