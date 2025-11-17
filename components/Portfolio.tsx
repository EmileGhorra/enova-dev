'use client';

import Reveal from "./Reveal";

const projects = [
  {
    title: "MenuByte",
    description: "Digital menu and ordering experience built for restaurants.",
    url: "https://menubyte.e-nova.dev"
  },
  {
    title: "Nova Commerce",
    description: "Headless eCommerce experience with real-time inventory and personalized journeys."
  },
  {
    title: "Pulse Analytics",
    description: "Data-rich dashboards with streaming insights and executive-ready storytelling."
  },
  {
    title: "Orbit Mobile",
    description: "Cross-platform mobile suite delivering frictionless onboarding and engagement."
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <Reveal className="space-y-2 text-center">
          <h2 className="section-heading">Portfolio</h2>
          <p className="section-subtitle">
            A snapshot of the experiences we craft — purposeful, polished, and performance-driven.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="card p-6 lg:p-8 space-y-4">
              <Reveal>
                {project.url ? (
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/15 bg-white/5">
                    <iframe
                      src={project.url}
                      title={`${project.title} preview`}
                      className="h-full w-full scale-[1.01]"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] w-full rounded-xl border border-white/15 bg-white/5" />
                )}
              </Reveal>
              <Reveal className="space-y-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-white/70 leading-relaxed">{project.description}</p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white underline underline-offset-4"
                  >
                    Visit site
                  </a>
                )}
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
