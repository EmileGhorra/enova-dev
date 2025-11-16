import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="section flex items-center justify-center min-h-screen">
      <div className="container text-center space-y-8 fade-in">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">E-Nova Dev</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Web & App Development Studio
          </h1>
          <p className="text-lg text-white/70">
            Building the Future of the Web.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 fade-in-delay">
          <Link href="#contact" className="btn-primary w-full sm:w-auto">Get Started</Link>
          <Link href="#portfolio" className="btn-outline w-full sm:w-auto">View Portfolio</Link>
        </div>
      </div>
    </section>
  );
}
