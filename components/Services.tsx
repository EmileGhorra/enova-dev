import { CodeBracketIcon, DevicePhoneMobileIcon, SwatchIcon } from "@heroicons/react/24/outline";

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
        <h2 className="section-heading">Services</h2>
        <p className="section-subtitle">
          From concept to launch, we craft digital products that are elegant, fast, and future-proof.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="card p-6 lg:p-8 space-y-4">
              <div className="h-12 w-12 rounded-full border border-white/15 flex items-center justify-center text-white/80">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-white/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
