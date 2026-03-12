'use client';

import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import Reveal from "./Reveal";
import { useScrollReveal } from "@/utils/useScrollReveal";

const services = [
  {
    title: "Web Development",
    description: "Shipped in under 4 weeks. Fast, SEO-ready, and built to scale.",
    icon: CodeBracketIcon,
  },
  {
    title: "Mobile",
    description: "Cross-platform apps that feel native on iOS and Android.",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "UI/UX",
    description: "Interfaces clients actually enjoy using - designed before a line of code is written.",
    icon: SwatchIcon,
  },
];

const stack = ["Next.js", "React", "Tailwind", "TypeScript", "Firebase", "Node.js"];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" ref={ref} className="section">
      <div className="container">
        <Reveal className="space-y-2">
          <p className="section-label">Services</p>
          <h2 className="section-heading text-left md:text-left">Built for speed, clarity, and client conversion.</h2>
          <p className="section-subtitle !mx-0 text-left">
            We design and ship digital products with a clear commercial outcome, not just a polished surface.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, idx) => (
            <Reveal
              key={service.title}
              delay={idx * 80}
              className="card group space-y-5 p-6 lg:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[var(--border)] bg-black/20 text-white/80">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium">{service.title}</h3>
              </div>
              <p className="leading-relaxed text-white/68">{service.description}</p>
              <div
                className="h-0.5 w-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ background: "var(--accent)" }}
              />
              <style jsx>{`
                div.group:hover {
                  border-top: 2px solid var(--accent);
                  background: rgba(200, 242, 97, 0.03);
                }
              `}</style>
            </Reveal>
          ))}
        </div>
        <Reveal delay={220} className="mt-10 flex flex-wrap gap-3">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-[4px] border px-3 py-1.5 text-sm text-white/60"
              style={{ borderColor: "var(--border)" }}
            >
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
