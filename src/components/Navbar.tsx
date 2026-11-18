import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileDown, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#030712]/80 backdrop-blur-md border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-white transition-all"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-blue-500/20 border border-cyan-500/40 flex items-center justify-center overflow-hidden group-hover:border-cyan-400 transition-colors">
            <span className="text-cyan-400 font-mono text-sm font-semibold tracking-tighter">DS</span>
            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-semibold tracking-wide text-slate-100 group-hover:text-cyan-300 transition-colors">
              DHUSHANTH<span className="text-cyan-400">.</span>DEV
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider hidden sm:block">
              // SPACE
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-white/[0.07]">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wide rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 bg-white/[0.08] shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]'
                }`}
              >
                <span className="text-slate-500 mr-1">0{index + 1}.</span>
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Actions */}
        <div className="flex items-center gap-2.5">
          {/* Quick Terminal / Command Palette trigger */}
          <button
            onClick={onOpenCommandPalette}
            aria-label="Open Command Palette"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-cyan-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
            title="Press Ctrl+K or Cmd+K"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-400">Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-white/[0.06] rounded border border-white/10 text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Resume Quick Action */}
          <a
            href={PORTFOLIO_DATA.personal.resumePath}
            download="Dhushanth_Srinivasa_Resume.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-200 shadow-[0_0_15px_-3px_rgba(56,189,248,0.25)]"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 bg-white/[0.04] border border-white/[0.08] transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#030712]/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-6 transition-all duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-mono text-slate-300 hover:text-cyan-300 hover:bg-white/[0.05] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-cyan-500/70 text-xs">0{index + 1}.</span>
                  <span>{link.name}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-40" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/[0.08]"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Open Command Palette</span>
              </button>

              <a
                href={PORTFOLIO_DATA.personal.resumePath}
                download="Dhushanth_Srinivasa_Resume.pdf"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/40"
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
