import React, { useState, useEffect, useRef } from 'react';
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

/** Wrapper that reveals a section when it enters the viewport */
interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  initialRevealed?: boolean;
}

const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  className = '',
  initialRevealed = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(initialRevealed);

  useEffect(() => {
    if (initialRevealed) return;

    const el = ref.current;
    if (!el) return;

    // Use a large rootMargin so sections are pre-revealed before entering viewport on mobile & desktop
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { 
        rootMargin: '250px 0px', 
        threshold: 0 
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [initialRevealed]);

  return (
    <div
      ref={ref}
      className={`reveal-section ${revealed ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  /* Keyboard shortcut to open command palette */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Cyber / Particle Background — behind everything */}
      <BackgroundEffect />

      {/* Navigation Bar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Layout */}
      <main className="relative z-10 flex flex-col">
        {/* Hero has its own parallax system — no wrapper needed */}
        <HeroSection />

        {/* 2nd page / About Section: rendered immediately to eliminate mobile load latency */}
        <RevealSection initialRevealed={true}>
          <AboutSection />
        </RevealSection>

        <RevealSection>
          <SkillsSection />
        </RevealSection>

        <RevealSection>
          <ExperienceSection />
        </RevealSection>

        <RevealSection>
          <ProjectsSection />
        </RevealSection>

        <RevealSection>
          <EducationSection />
        </RevealSection>

        <RevealSection>
          <AchievementsSection />
        </RevealSection>

        <RevealSection>
          <ContactSection />
        </RevealSection>
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
