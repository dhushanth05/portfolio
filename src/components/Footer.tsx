import React from 'react';
import { ArrowUp, Heart, Terminal, Shield, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#02050e] py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Branding & Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 font-medium">ALL SYSTEMS OPERATIONAL</span>
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="text-slate-500">BENGALURU, INDIA (UTC+5:30)</span>
        </div>

        {/* Center Copyright */}
        <div className="text-center text-slate-500">
          DEV//SPACE © 2026-2027 — Crafted for{' '}
          <span className="text-slate-300 font-medium">{PORTFOLIO_DATA.personal.name}</span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
};
