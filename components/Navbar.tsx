'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (open) {
      body.classList.add("menu-open");
    } else {
      body.classList.remove("menu-open");
    }
    return () => body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    let startX = 0;
    let currentX = 0;
    let touching = false;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      currentX = startX;
      touching = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!touching || e.touches.length !== 1) return;
      currentX = e.touches[0].clientX;
    };

    const onTouchEnd = () => {
      if (!touching) return;
      const deltaX = currentX - startX;
      const startAtRightEdge = startX > window.innerWidth - 80; // px from right edge
      if (!open && startAtRightEdge && deltaX < -40) {
        setOpen(true);
      } else if (open && deltaX > 40) {
        setOpen(false);
      }
      touching = false;
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 backdrop-blur-sm bg-black/40 border-b border-white/5">
      <nav className="container">
        <div className="hidden md:flex items-center justify-between py-4">
          <Link href="#home" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white p-1">
              <Image src="/logo.png" alt="E-Nova Dev" fill className="object-contain" priority />
            </div>
            <span className="text-lg font-semibold tracking-wide">E-Nova</span>
          </Link>
          <div className="flex items-center gap-8 text-sm uppercase tracking-[0.08em]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 items-center md:hidden py-3">
          <div />
          <Link href="#home" className="flex items-center justify-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white p-1">
              <Image src="/logo.png" alt="E-Nova Dev" fill className="object-contain" priority />
            </div>
            <span className="text-base font-semibold tracking-wide">E-Nova</span>
          </Link>
          <div className="flex items-center justify-end">
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
            >
              {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mounted &&
          createPortal(
            <>
              <div
                className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
                  open ? "pointer-events-auto bg-black/80 backdrop-blur-sm opacity-100" : "pointer-events-none opacity-0"
                }`}
                onClick={() => setOpen(false)}
              />
              <aside
                className={`fixed right-0 top-0 z-50 h-full w-[78vw] max-w-xs sm:max-w-sm transform bg-black/95 backdrop-blur-md border-l border-white/10 transition-transform duration-300 md:hidden ${
                  open ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                  <span className="text-sm uppercase tracking-[0.18em] text-white/70">Navigate</span>
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-white/10 p-2 text-white/80"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex flex-col gap-3 px-5 py-6 text-sm uppercase tracking-[0.12em]">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-white/80 hover:text-white hover:border-white/30"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </aside>
            </>,
            document.body
          )}
      </nav>
    </header>
  );
}
