'use client';

import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-4 z-40 inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-black/40 backdrop-blur hover:border-white/40 hover:bg-white/20 transition"
    >
      <ArrowUpIcon className="h-4 w-4" />
      Top
    </button>
  );
}
