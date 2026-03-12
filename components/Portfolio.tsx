'use client';

import Reveal from "./Reveal";

const portfolioSections = [
  {
    title: "Menus",
    items: [
      {
        title: "Dar El Baher Menu",
        description: "Digital menu and ordering experience built for restaurants.",
        url: "https://menubyte-darelbaher.e-nova.dev/menus/dar-el-baher",
      },
    ],
  },
  {
    title: "NGO",
    items: [
      {
        title: "Ibrahim Sakr Foundation",
        description: "Nonprofit website focused on mission, outreach, and community impact.",
        url: "https://ibrahimsakrfoundation.org",
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <Reveal className="space-y-2 text-center">
          <h2 className="section-heading">Portfolio</h2>
          <p className="section-subtitle">
            A snapshot of the experiences we craft - purposeful, polished, and performance-driven.
          </p>
        </Reveal>
        <div className="space-y-10">
          {portfolioSections.map((section, sectionIdx) => (
            <div key={section.title} className="space-y-5">
              <Reveal delay={sectionIdx * 80} className="space-y-1">
                <h3 className="text-xl font-semibold uppercase tracking-[0.08em] text-white/85">
                  {section.title}
                </h3>
              </Reveal>
              <div className="grid gap-6 md:grid-cols-1">
                {section.items.map((project, idx) => (
                  <div key={project.title} className="card space-y-4 p-6 lg:p-8">
                    <Reveal delay={sectionIdx * 120 + idx * 90}>
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
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <p className="leading-relaxed text-white/70">{project.description}</p>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 underline underline-offset-4 hover:text-white"
                        >
                          Visit site
                        </a>
                      )}
                    </Reveal>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
