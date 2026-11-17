import "./App.css";
import ReactLenis from "lenis/react";
import Header from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection/ServicesSection";
import { CareerTimeline } from "./components/CareerSection/CareerTimeline";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import { FaqSection } from "./components/FaqSection/FaqSection";
import { HighlightsSection } from "./components/HighlightsSection/HighlightsSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#3458ff]/20">
      <ReactLenis
        root
        options={{
          smoothWheel: true,
          duration: 1.15,
          wheelMultiplier: 1,
        }}
      >
        <Header />

        <main className="w-full flex flex-col">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />

          {/* Portfon Signature Deep Royal Navy Band (Services -> Journey & Credentials -> Testimonials) */}
          <div className="relative w-full overflow-hidden bg-[var(--navy-deep)]">
            {/* Soft Top Edge Transition from Page Background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-background via-background/35 to-transparent z-0"
            />

            {/* Radial Cobalt Depth Glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[12%] left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full blur-[130px] bg-[#3458ff]/35 z-0"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[12%] right-[-10%] w-[650px] h-[480px] rounded-full blur-[130px] bg-[#3458ff]/25 z-0"
            />

            <ServicesSection />
            <CareerTimeline />
            <TestimonialsSection />

            {/* Soft Bottom Edge Transition back to Page Background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background via-background/35 to-transparent z-0"
            />
          </div>

          <FaqSection />
          <HighlightsSection />
          <ContactSection />
        </main>

        <Footer />
      </ReactLenis>
    </div>
  );
}

export default App;
