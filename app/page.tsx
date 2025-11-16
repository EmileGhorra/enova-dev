import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
