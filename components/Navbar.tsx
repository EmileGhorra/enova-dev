'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const dragMode = useRef<"opening" | "closing" | null>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!dragging) {
      setProgress(open ? 1 : 0);
    }
  }, [open, dragging]);

  useEffect(() => {
    progressRef.current = progress;
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      const isDesktop = window.innerWidth >= 768;
      root.style.setProperty("--menu-progress", isDesktop ? "0" : progress.toString());
    }
  }, [progress]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-35% 0px -45% 0px"
      }
    );

    navLinks.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const body = document.body;
    if (open || progress > 0.05) {
      body.classList.add("menu-open");
    } else {
      body.classList.remove("menu-open");
    }
    if (dragging) {
      body.classList.add("nav-dragging");
    } else {
      body.classList.remove("nav-dragging");
    }
    return () => {
      body.classList.remove("menu-open");
      body.classList.remove("nav-dragging");
    };
  }, [open, progress, dragging]);

  useEffect(() => {
    const maxDrag = 240;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const touchX = e.touches[0].clientX;
      const fromRightEdge = window.innerWidth - touchX < 80;

      if (!open && fromRightEdge) {
        setDragging(true);
        dragMode.current = "opening";
        startX.current = touchX;
      } else if (open) {
        setDragging(true);
        dragMode.current = "closing";
        startX.current = touchX;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!dragging || e.touches.length !== 1 || !dragMode.current) return;
      const currentX = e.touches[0].clientX;
      const delta = currentX - startX.current;

      if (dragMode.current === "opening") {
        const next = Math.min(Math.max((startX.current - currentX) / maxDrag, 0), 1);
        setProgress(next);
      } else if (dragMode.current === "closing") {
        const next = Math.min(Math.max(1 + delta / maxDrag, 0), 1);
        setProgress(next);
      }
    };

    const onTouchEnd = () => {
      if (!dragMode.current) return;
      const final = progressRef.current;
      if (dragMode.current === "opening") {
        setOpen(final > 0.05);
      } else if (dragMode.current === "closing") {
        setOpen(final > 0.75);
      }
      dragMode.current = null;
      setDragging(false);
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [open, dragging]);

  const overlayActive = progress > 0.01;
  const asideStyle = {
    transform: `translateX(${(1 - Math.min(Math.max(progress, 0), 1)) * 100}%)`,
    transitionDuration: dragging ? "0s" : "300ms"
  } as const;
  const overlayStyle = {
    opacity: Math.min(Math.max(progress, 0), 1),
    transitionDuration: dragging ? "0s" : "300ms"
  } as const;

  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-sm bg-black/40 border-b border-white/5">
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
                aria-current={activeSection === link.href.replace("#", "") ? "page" : undefined}
                className={`transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 items-center md:hidden py-3">
          <div />
          <Link href="#home" className="flex items-center justify-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/20 bg-white p-[3px]">
              <Image src="/logo.png" alt="E-Nova Dev" fill className="object-contain" priority />
            </div>
            <span className="text-sm font-semibold tracking-wide leading-none">E-Nova</span>
          </Link>
          <div className="flex items-center justify-end">
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
            >
              {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mounted &&
          createPortal(
            <>
              <div
                className={`fixed inset-0 z-40 md:hidden ${
                  overlayActive ? "pointer-events-auto" : "pointer-events-none"
                } bg-black/80 backdrop-blur-sm`}
                style={overlayStyle}
                onClick={() => setOpen(false)}
              />
              <aside
                className="fixed right-0 top-0 z-50 h-full w-[78vw] max-w-xs sm:max-w-sm transform bg-black/95 backdrop-blur-md border-l border-white/10 transition-transform duration-300 md:hidden"
                style={asideStyle}
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
                aria-current={activeSection === link.href.replace("#", "") ? "page" : undefined}
                className={`rounded-lg border px-3 py-3 transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "border-white/40 bg-white/10 text-white"
                    : "border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/30"
                }`}
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
