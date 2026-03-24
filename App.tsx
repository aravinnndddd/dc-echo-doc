import React, { useState, useEffect } from "react";
import { SECTIONS } from "./constants";
import { SectionId } from "./types";
import Sidebar from "./components/layout/Sidebar";
import MobileHeader from "./components/layout/MobileHeader";
import Footer from "./components/layout/Footer";
import IntroSection from "./components/sections/IntroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import SetupSection from "./components/sections/SetupSection";
import ConfigSection from "./components/sections/ConfigSection";
import ApiSection from "./components/sections/ApiSection";
import ResponseSection from "./components/sections/ResponseSection";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("intro");

  const scrollTo = (id: SectionId) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const section of SECTIONS) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#313338]">
      <Sidebar activeSection={activeSection} onNavigate={scrollTo} />

      <main className="flex-1 md:ml-64 p-6 md:p-12 max-w-5xl mx-auto w-full">
        <MobileHeader />

        <IntroSection onGetStarted={() => scrollTo("setup")} />
        <FeaturesSection />
        <SetupSection />
        <ConfigSection />
        <ApiSection />
        <ResponseSection />
        <Footer />
      </main>
    </div>
  );
};

export default App;
