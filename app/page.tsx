import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import SmoothScroll from "@/components/SmoothScroll";
import ParallaxBackdrop from "@/components/ParallaxBackdrop";

export default function HomePage() {
  return (
    <SmoothScroll>
      <main className="relative bg-black text-white min-h-screen">
        <ParallaxBackdrop />
        <Navbar />
        <div className="relative z-10 page-shell pt-20">
          <Hero />
          <Services />
          <TechStack />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
        <ScrollTop />
      </main>
    </SmoothScroll>
  );
}
