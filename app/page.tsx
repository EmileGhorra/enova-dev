import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import SmoothScroll from "@/components/SmoothScroll";
import ParallaxBackdrop from "@/components/ParallaxBackdrop";

export const metadata: Metadata = {
  title: "Web & App Development Studio",
  description:
    "Freelance-focused web and app development studio building high-performance websites, mobile apps, and conversion-driven digital products.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://e-nova.dev/#organization",
      name: "E-Nova",
      url: "https://e-nova.dev",
      logo: "https://e-nova.dev/logo.png",
      sameAs: ["https://www.instagram.com/enova.dev/"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+96181605898",
          areaServed: ["LB", "Worldwide"],
          availableLanguage: ["en", "ar"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://e-nova.dev/#website",
      url: "https://e-nova.dev",
      name: "E-Nova",
      publisher: {
        "@id": "https://e-nova.dev/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://e-nova.dev/#service",
      name: "E-Nova",
      url: "https://e-nova.dev",
      image: "https://e-nova.dev/logo.png",
      description:
        "E-Nova builds websites and mobile apps with a focus on performance, UX, and conversion.",
      areaServed: ["Lebanon", "Worldwide"],
      address: {
        "@type": "PostalAddress",
        addressCountry: "LB",
        addressLocality: "Sidon",
      },
      sameAs: ["https://www.instagram.com/enova.dev/"],
      telephone: "+96181605898",
      makesOffer: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <SmoothScroll>
      <main className="relative bg-black text-white min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ParallaxBackdrop />
        <Navbar />
        <div className="relative z-10 page-shell pt-20">
          <Hero />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
        <ScrollTop />
      </main>
    </SmoothScroll>
  );
}
