import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          // Hero section view
          if (window.scrollY < 200) {
            setActiveSection('');
            ticking = false;
            return;
          }

          // Check if near bottom of page -> contact
          if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
            setActiveSection('contact');
            ticking = false;
            return;
          }

          const sections = ['about', 'skills', 'experience', 'projects', 'education', 'achievements', 'contact'];
          let current = '';

          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const rect = el.getBoundingClientRect();
              // Active when section top passes upper viewport threshold and bottom is still visible
              if (rect.top <= 200 && rect.bottom >= 150) {
                current = section;
              }
            }
          }

          if (current) {
            setActiveSection(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Awards', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#030712]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Mobile / Left Branding */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="font-display text-sm sm:text-base font-bold text-white tracking-wider flex items-center gap-1.5"
          >
            <span>DHUSHANTH</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          </a>
        </div>

        {/* Desktop Nav Links — centered */}
        <nav className="hidden lg:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-white/[0.08]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-mono tracking-wide rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 bg-white/[0.1] shadow-[0_0_12px_rgba(56,189,248,0.25)] font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Desktop Resume CTA Button */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={PORTFOLIO_DATA.personal.resumePath}
            download="Dhushanth_Srinivasa_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-medium text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/70 border border-cyan-500/40 hover:border-cyan-300 transition-all duration-200 shadow-[0_0_15px_-3px_rgba(56,189,248,0.25)]"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile: Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.08] transition-all cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Accessible on 375px & 768px screens) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#030712]/95 backdrop-blur-xl border-b border-white/[0.08] px-5 py-5 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-mono transition-colors ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 font-semibold'
                      : 'text-slate-200 hover:text-cyan-300 hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-40" />
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/[0.08]">
              <a
                href={PORTFOLIO_DATA.personal.resumePath}
                download="Dhushanth_Srinivasa_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 hover:bg-cyan-900/80 transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
