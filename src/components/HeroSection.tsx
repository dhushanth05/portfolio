import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, FileDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Only update scroll state when within or near hero section to keep mobile FPS maxed out
          if (window.scrollY < window.innerHeight * 1.5) {
            setScrollY(window.scrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax calculations — different layers move at different speeds
  const imageOpacity = Math.max(0, 1 - scrollY / 700);
  const imageTranslateY = scrollY * 0.18;
  const imageScale = 1 + scrollY * 0.00025;
  const glowTranslateY = scrollY * 0.08;
  const shardTranslateY = scrollY * 0.12;
  const textTranslateY = scrollY * 0.04;

  return (
    <section
      id="hero"
      aria-label="Dhushanth Srinivasa — Developer Portfolio Hero"
      className="relative h-[100dvh] sm:min-h-screen sm:h-auto overflow-hidden bg-[#030712]"
    >
      {/* ═══════════════════════════════════════════════════════════
          PARALLAX LAYER 0 — Ambient Glow Orbs (slowest layer)
          ═══════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{ transform: `translateY(${glowTranslateY}px)` }}
      >
        {/* Primary cyan glow behind image area */}
        <div className="absolute top-[10%] right-[5%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-cyan-500/[0.12] blur-[80px] sm:blur-[140px]" />
        {/* Secondary violet glow lower-left of image */}
        <div className="absolute top-[40%] right-[15%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-violet-600/[0.1] blur-[70px] sm:blur-[130px]" />
        {/* Tertiary blue glow at top */}
        <div className="absolute top-[-5%] right-[25%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-sky-500/[0.08] blur-[60px] sm:blur-[120px]" />
        {/* Warm accent glow at center-right */}
        <div className="absolute top-[25%] right-[-5%] w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] rounded-full bg-indigo-500/[0.07] blur-[50px] sm:blur-[100px]" />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          PARALLAX LAYER 1 — Profile Image (medium speed)
          ═══════════════════════════════════════════════════════════ */}
      <div
        className="absolute top-0 right-0 h-full w-[90%] sm:w-[70%] lg:w-[55%] will-change-transform"
        style={{
          transform: `translateY(${imageTranslateY}px) scale(${imageScale})`,
          opacity: imageOpacity,
        }}
      >
        {/* The actual profile image */}
        <img
          src={PORTFOLIO_DATA.personal.profileImage}
          alt="Dhushanth Srinivasa — AI/ML Engineer & Software Developer"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-top select-none"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0.9) 40%, black 60%), linear-gradient(to top, transparent 0%, rgba(0,0,0,0.5) 12%, black 30%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0.9) 40%, black 60%), linear-gradient(to top, transparent 0%, rgba(0,0,0,0.5) 12%, black 30%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'destination-in',
            filter: 'contrast(1.05) brightness(0.95)',
          }}
          draggable={false}
        />

        {/* Color overlay tint — blends the image into our palette */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712]/70 via-cyan-950/20 to-violet-950/30 mix-blend-multiply pointer-events-none" />

        {/* Bottom edge fade to background */}
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent pointer-events-none" />

        {/* Left edge fade to background */}
        <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-[#030712] via-[#030712]/60 to-transparent pointer-events-none" />

        {/* Top subtle vignette */}
        <div className="absolute inset-x-0 top-0 h-[15%] bg-gradient-to-b from-[#030712]/50 to-transparent pointer-events-none" />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          PARALLAX LAYER 2 — Geometric Tech Lines & Accent Glass
          (Face area masked to soften line intensity & glass removed from face)
          ═══════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 pointer-events-none will-change-transform hidden sm:block"
        style={{
          transform: `translateY(${shardTranslateY}px)`,
          opacity: imageOpacity,
          maskImage:
            'radial-gradient(ellipse 260px 300px at 74% 36%, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,1) 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 260px 300px at 74% 36%, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,1) 80%)',
        }}
      >
        {/* Ambient Glass Shard Panel — lower accent (kept away from face) */}
        <div
          className="absolute top-[48%] right-[0%] w-[320px] h-[220px] origin-center"
          style={{ transform: 'rotate(22deg)' }}
        >
          <div className="w-full h-full bg-gradient-to-tl from-violet-500/[0.04] via-transparent to-sky-400/[0.02] border border-violet-400/[0.08] backdrop-blur-[1px] rounded-sm" />
        </div>

        {/* Thin Glass Line 1 */}
        <div
          className="absolute top-[15%] right-[-10%] w-[120%] h-[1px]"
          style={{ transform: 'rotate(-22deg)' }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        </div>

        {/* Thin Glass Line 2 */}
        <div
          className="absolute top-[55%] right-[-10%] w-[120%] h-[1px]"
          style={{ transform: 'rotate(18deg)' }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
        </div>

        {/* Thin Glass Line 3 */}
        <div
          className="absolute top-[35%] right-[-10%] w-[120%] h-[1px]"
          style={{ transform: 'rotate(-12deg)' }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Thin Glass Line 4 — subtle */}
        <div
          className="absolute top-[72%] right-[-10%] w-[120%] h-[1px]"
          style={{ transform: 'rotate(-28deg)' }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent" />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          CONTENT LAYER — Text & CTAs (scrolls at near-normal speed)
          On mobile: Locked to dynamic viewport height so all elements,
          face, and the stats grid are 100% visible on opening page!
          ═══════════════════════════════════════════════════════════ */}
      <div
        className="relative z-20 h-full sm:min-h-screen flex flex-col justify-between sm:justify-center will-change-transform"
        style={{ transform: `translateY(${textTranslateY}px)` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between sm:justify-center sm:block pt-14 pb-[118px] sm:pt-28 sm:pb-32 lg:pt-32">
          <div className="max-w-xl lg:max-w-2xl h-full flex flex-col justify-between sm:block">

            {/* TOP BLOCK: Role, Academic Line & Bold Heading (positioned in top empty space above forehead) */}
            <div className="pt-1 sm:pt-0">
              {/* Role / Academic Line */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-6 flex-wrap">
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-cyan-400">
                  B.E. CS & Design
                </span>
                <span className="text-slate-500 font-mono">•</span>
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-slate-300">
                  DSATM
                </span>
                <span className="text-slate-500 font-mono">•</span>
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-violet-400">
                  2027
                </span>
              </div>

              {/* Primary Name — Huge Bold */}
              <h1 className="mb-1.5 sm:mb-5">
                <span className="block text-3xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight sm:tracking-tighter text-white leading-[0.95] sm:leading-[0.9] drop-shadow-[0_2px_12px_rgba(3,7,18,0.9)]">
                  DHUSHANTH
                </span>
                <span className="block text-3xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight sm:tracking-tighter leading-[0.95] sm:leading-[0.9] bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-500 drop-shadow-[0_2px_12px_rgba(3,7,18,0.9)]">
                  SRINIVASA
                </span>
              </h1>

              {/* Primary Title */}
              <p className="font-display text-sm sm:text-2xl md:text-3xl font-semibold text-slate-100 tracking-wide mb-1 sm:mb-5 drop-shadow-[0_2px_8px_rgba(3,7,18,0.8)]">
                AI/ML Engineer <span className="text-slate-400 font-normal">&</span> <span className="text-cyan-300">Software Developer</span>
              </p>
            </div>

            {/* LOWER BLOCK: Bio line & CTA Buttons moved slightly up with +1/+2 text size (mobile only) */}
            <div className="mt-auto sm:mt-0 pt-2 sm:pt-0">
              {/* Bio line */}
              <p className="text-[13px] sm:text-base text-slate-200 leading-snug sm:leading-relaxed max-w-sm sm:max-w-lg mb-2.5 sm:mb-8 font-normal drop-shadow-[0_1px_6px_rgba(3,7,18,0.9)]">
                Building intelligent software that solves real problems — from RAG knowledge platforms and multi-agent biomedical AI to end-to-end full-stack systems.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-row items-center gap-2.5 sm:gap-4 flex-wrap">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-full font-mono text-[13px] sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(0,240,255,0.5)] hover:shadow-[0_0_40px_-2px_rgba(0,240,255,0.7)] transform hover:-translate-y-0.5"
                >
                  <span>Explore My Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-full font-mono text-[13px] sm:text-sm font-bold uppercase tracking-wider text-slate-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.15] hover:border-cyan-400/40 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          BOTTOM STATS BAR — anchored to bottom of viewport (100% visible on open)
          ═══════════════════════════════════════════════════════════ */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/[0.08] bg-[#030712]/80 backdrop-blur-md"
        style={{ opacity: imageOpacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/[0.06]">
            {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
              <div key={idx} className="py-2 sm:py-5 px-2.5 sm:px-6 text-center">
                <span className="block text-sm sm:text-xl font-mono font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="block text-[8px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SCROLL INDICATOR — subtle centered bounce
          Mobile: in between the 2x2 stats grid
          Desktop (sm+): centered above stats bar
          ═══════════════════════════════════════════════════════════ */}
      <div
        className="absolute bottom-[46px] sm:bottom-24 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <span className="font-mono text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-0.5 sm:mb-2">
          Scroll
        </span>
        <div className="w-4 h-7 sm:w-5 sm:h-9 rounded-full border border-slate-500/80 sm:border-slate-600 p-0.5 sm:p-1 flex justify-center bg-[#030712]/40 backdrop-blur-[2px]">
          <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
