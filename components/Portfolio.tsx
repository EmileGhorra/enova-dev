const projects = [
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
        <h2 className="section-heading">Portfolio</h2>
        <p className="section-subtitle">
          A snapshot of the experiences we craft — purposeful, polished, and performance-driven.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="card p-6 lg:p-8 space-y-4">
              <div className="aspect-[4/3] w-full rounded-xl border border-white/15 bg-white/5" />
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-white/70 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
