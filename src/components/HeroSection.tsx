import React from 'react';
import { ArrowDown, Sparkles, FileDown, ArrowUpRight, ShieldCheck, Terminal, MapPin, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { DeveloperTerminalCard } from './DeveloperTerminalCard';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Dhushanth Srinivasa Hero Section"
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Profile Avatar, Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Identity Tag with Profile Picture */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {/* Profile Avatar with Neon Glow Ring */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-cyan-400/80 bg-[#030712] shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                  <img
                    src={PORTFOLIO_DATA.personal.profileImage}
                    alt={PORTFOLIO_DATA.personal.name}
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Active Indicator dot */}
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#030712]"></span>
                </span>
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-cyan-500/30 shadow-[0_0_20px_-3px_rgba(0,240,255,0.2)]">
                <span className="text-xs font-mono font-medium tracking-wide text-cyan-300">
                  {PORTFOLIO_DATA.personal.statusBadge}
                </span>
              </div>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              <span className="block text-slate-400 text-lg sm:text-xl md:text-2xl font-mono font-normal tracking-wider mb-2 text-glow-cyan">
                HELLO, I AM
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                DHUSHANTH
              </span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500">
                SRINIVASA
              </span>
            </h1>

            {/* Subtitle */}
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base md:text-lg font-mono text-cyan-300/90 mb-6">
              <span className="text-white font-medium">Software Developer</span>
              <span className="text-slate-600">//</span>
              <span className="text-violet-300 font-medium">AI/ML & MLOps</span>
              <span className="text-slate-600">//</span>
              <span className="text-sky-300 font-medium">Full-Stack & Cloud</span>
            </div>

            {/* Introduction paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-light">
              B.E. Computer Science & Design undergraduate at{' '}
              <span className="text-white font-normal underline decoration-cyan-500/40 underline-offset-4">
                DSATM
              </span>{' '}
              (CGPA: 8.54) and Data Science & MLOps Intern at{' '}
              <span className="text-white font-normal underline decoration-violet-500/40 underline-offset-4">
                Krosum Labs
              </span>
              . Engineering LLM-powered applications, multi-agent frameworks (CYNTHERA), RAG platforms (PlantMind), and scalable cloud microservices.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_25px_-5px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_-2px_rgba(0,240,255,0.6)] transform hover:-translate-y-0.5"
              >
                <span>Explore My Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumePath}
                download="Dhushanth_Srinivasa_Resume.pdf"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-medium text-slate-200 glass-panel hover:bg-white/[0.08] hover:text-white border border-white/10 hover:border-violet-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-violet-400 group-hover:text-cyan-300 transition-colors" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/[0.07]">
              {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-slate-400 tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Clean Developer Terminal Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <DeveloperTerminalCard />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 lg:mt-16 flex flex-col items-center justify-center text-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <span className="tracking-widest uppercase text-[11px]">Scroll to Explore</span>
            <div className="w-5 h-9 rounded-full border border-slate-700 group-hover:border-cyan-400/60 p-1 flex justify-center transition-colors">
              <div className="w-1.5 h-2 rounded-full bg-cyan-400 animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
