import React, { useState } from 'react';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';

export function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Cyber / Particle Background */}
      <BackgroundEffect />

      {/* Navigation Bar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Layout */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Interactive Command Palette (Cmd+K / Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}

export default App;
