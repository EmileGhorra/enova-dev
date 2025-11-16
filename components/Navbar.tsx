import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-sm bg-black/40 border-b border-white/5">
      <nav className="container flex items-center justify-between py-4">
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white p-1">
            <Image src="/logo.png" alt="E-Nova Dev" fill className="object-contain" priority />
          </div>
          <span className="text-lg font-semibold tracking-wide">E-Nova Dev</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.08em]">
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
        <div className="flex md:hidden gap-3 text-xs uppercase tracking-[0.08em] text-white/70">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
