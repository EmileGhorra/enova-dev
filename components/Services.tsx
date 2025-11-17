'use client';

import { CodeBracketIcon, DevicePhoneMobileIcon, SwatchIcon } from "@heroicons/react/24/outline";
import Reveal from "./Reveal";

const services = [
  {
    title: "Web Development",
    description: "High-performance, scalable web platforms tailored to your business goals.",
    icon: CodeBracketIcon
  },
  {
    title: "App Development",
    description: "Cross-platform mobile experiences with seamless performance and UX.",
    icon: DevicePhoneMobileIcon
  },
  {
    title: "UI/UX Design",
    description: "Human-centered interfaces with clean aesthetics and intuitive flows.",
    icon: SwatchIcon
  }
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal className="space-y-2 text-center">
          <h2 className="section-heading">Services</h2>
          <p className="section-subtitle">
            From concept to launch, we craft digital products that are elegant, fast, and future-proof.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 80} className="card p-6 lg:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full border border-white/15 flex items-center justify-center text-white/80 bg-white/5">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-white/70 leading-relaxed">{service.description}</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50">
                <span className="inline-block h-px w-8 bg-white/20" />
                Precision & Performance
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
