'use client';

import Image from "next/image";
import Reveal from "./Reveal";
import { useScrollReveal } from "@/utils/useScrollReveal";

const projects = [
  {
    title: "Dar El Baher",
    year: "2025",
    description:
      "Dar El Baher needed a digital menu for their Zahle restaurant. Built a bilingual Arabic/English web app with QR code access and mobile-first layout, replacing paper menus entirely.",
    url: "https://menubyte-darelbaher.e-nova.dev/menus/dar-el-baher",
    tech: ["Next.js", "TypeScript", "Tailwind", "Mobile-first"],
    imageSrc: "/dar-el-baher.png",
    imageAlt: "Dar El Baher digital menu",
  },
  {
    title: "Ibrahim Sakr Foundation",
    year: "2024",
    description:
      "A focused NGO website built to communicate mission, programs, and credibility clearly. Structured to support outreach, trust, and fast access to the foundation's core work.",
    url: "https://ibrahimsakrfoundation.org",
    tech: ["Next.js", "React", "Tailwind", "Content strategy"],
    imageSrc: "/ibrahimsakrfoundation.png",
    imageAlt: "Ibrahim Sakr Foundation website preview",
  },
];

export default function Portfolio() {
  const ref = useScrollReveal();

  return (
    <section id="portfolio" ref={ref} className="section">
      <div className="container">
        <Reveal className="space-y-2">
          <p className="section-label">Selected work</p>
          <h2 className="section-heading text-left md:text-left">Proof over promises.</h2>
          <p className="section-subtitle !mx-0 text-left">
            Recent work designed to look sharp, load fast, and move clients toward action.
          </p>
        </Reveal>
        <div className="grid gap-6 xl:grid-cols-2">
          {projects.map((project, idx) => (
            <Reveal
              key={project.title}
              delay={idx * 90}
              className="project-card card mx-auto w-full max-w-[900px] overflow-hidden p-5"
            >
              <a href={project.url} target="_blank" rel="noreferrer" className="group block">
                <div
                  className="relative overflow-hidden rounded-t-[8px] border border-[var(--border)]"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    width={1200}
                    height={675}
                    className="h-full w-full transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.02]"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                  <div className="absolute inset-0" style={{ background: "rgba(10, 10, 10, 0.45)" }} />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 60% 50% at 0% 100%, rgba(200,242,97,0.12) 0%, transparent 70%)",
                    }}
                  />
                  <div className="card-hover-overlay absolute inset-0 flex items-center justify-center bg-[rgba(10,10,10,0.7)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-[14px] font-semibold tracking-[0.06em] text-[var(--accent)]">
                      VIEW LIVE →
                    </span>
                  </div>
                </div>
              </a>
              <div className="mt-4">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                  CLIENT WORK - {project.year}
                </p>
                <h4 className="mt-2 text-[15px] font-medium">{project.title}</h4>
                <p className="mt-3 leading-7 text-white/68">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-[3px] border px-2 py-0.5 text-[10px]"
                      style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
