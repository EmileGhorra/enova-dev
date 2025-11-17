'use client';

import { useEffect, useRef } from "react";

export default function ParallaxBackdrop() {
  const slowRef = useRef<HTMLDivElement | null>(null);
  const fastRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frame: number;
    const loop = () => {
      const y = window.scrollY || 0;
      if (slowRef.current) slowRef.current.style.transform = `translateY(${y * 0.06}px)`;
      if (fastRef.current) fastRef.current.style.transform = `translateY(${y * 0.12}px)`;
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden will-change-transform">
      <div
        ref={slowRef}
        className="absolute inset-[-20%] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.05),transparent_42%),radial-gradient(circle_at_60%_80%,rgba(255,255,255,0.04),transparent_45%)] will-change-transform"
      />
      <div
        ref={fastRef}
        className="absolute inset-[-10%] mix-blend-screen opacity-30 will-change-transform"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 18%, rgba(255,255,255,0.08) 36%, rgba(255,255,255,0) 54%, rgba(255,255,255,0.08) 72%, rgba(255,255,255,0) 90%)"
        }}
      />
    </div>
  );
}
