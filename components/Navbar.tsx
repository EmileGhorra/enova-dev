'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "scrolled" : ""}`}
      style={
        scrolled
          ? {
              backdropFilter: "blur(16px)",
              background: "rgba(10,10,10,0.8)",
              borderBottom: "1px solid var(--border)",
            }
          : undefined
      }
    >
      <nav className="container flex items-center justify-between py-5">
        <Link href="#home" className="flex items-center justify-center gap-2">
          <span className="relative h-8 w-8 overflow-hidden rounded-full border border-white/20 bg-white p-[3px]">
            <Image
              src="/logo.png"
              alt="E-Nova"
              fill
              priority
              sizes="32px"
              className="object-contain"
            />
          </span>
          <span className="text-sm font-semibold leading-none tracking-wide text-white">
            E-Nova
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-[var(--text-muted)] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          className="rounded-[4px] border px-4 py-2 text-[13px] font-medium transition-colors hover:bg-[var(--accent-08)]"
          style={{
            borderColor: "var(--accent)",
            color: "var(--accent)",
            background: "transparent",
          }}
        >
          Contact us →
        </Link>
      </nav>
    </header>
  );
}
