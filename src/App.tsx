import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { FeaturedWorks } from './components/FeaturedWorks';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SocialGallery } from './components/SocialGallery';
import { BrandingDeepDive } from './components/BrandingDeepDive';
import { BannerShowcase } from './components/BannerShowcase';
import { Toolkit } from './components/Toolkit';
import { CreativeProcess } from './components/CreativeProcess';
import { AiDesignSection } from './components/AiDesignSection';
import { DesignThinking } from './components/DesignThinking';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { CaseStudyData } from './types';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Brand Identity Concepts');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#E9C99E]/20 selection:text-white font-sans overflow-x-hidden">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Persistent Navigation Bar */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Content Sections */}
      <main className="pt-20">
        {/* Selected Works Grid */}
        <FeaturedWorks onSelectProject={(project) => setSelectedCaseStudy(project)} />

        {/* About Harsh Gaurav & Design Philosophy */}
        <About />

        {/* Social Media Design Gallery with Lightbox */}
        <SocialGallery />

        {/* Identity Deep Dive (ELARA) */}
        <BrandingDeepDive />

        {/* Banner Design Presentation */}
        <BannerShowcase />

        {/* Creative Toolkit (Design, AI, Disciplines) */}
        <Toolkit />

        {/* Creative Process (01-06) */}
        <CreativeProcess />

        {/* DESIGN × AI Section & Prompt Lab */}
        <AiDesignSection />

        {/* Design Thinking Methodology */}
        <DesignThinking />

        {/* Education & Journey (Hansraj College, DU Chemistry) */}
        <ExperienceEducation />

        {/* What I Can Create (Services) */}
        <Services onSelectService={handleSelectService} />

        {/* Contact Section & Working Briefing Form */}
        <Contact
          prefilledService={selectedService}
          onViewWork={() => scrollToSection('work')}
        />
      </main>

      {/* Clean Editorial Footer */}
      <Footer />

      {/* Fullscreen Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
}
