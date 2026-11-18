import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BrainCircuit, 
  Terminal, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Layers,
  Grid3X3,
  Rotate3d
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'ring' | 'grid'>('ring');
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);
  const [dragOffsetDeg, setDragOffsetDeg] = useState(0);
  const [radius, setRadius] = useState(400);

  const categories = PORTFOLIO_DATA.skills;
  const totalCards = categories.length; // 7
  const angleStep = 360 / totalCards; // ~51.43 deg

  const categoryIcons: Record<string, React.ReactNode> = {
    aiml: <BrainCircuit className="w-5 h-5 text-violet-400" />,
    datascience: <Database className="w-5 h-5 text-sky-400" />,
    languages: <Code2 className="w-5 h-5 text-cyan-400" />,
    backend: <Server className="w-5 h-5 text-indigo-400" />,
    frontend: <Layout className="w-5 h-5 text-blue-400" />,
    databases: <Database className="w-5 h-5 text-cyan-300" />,
    tools: <Terminal className="w-5 h-5 text-emerald-400" />,
  };

  // Adjust radius based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(280);
      } else if (window.innerWidth < 1024) {
        setRadius(340);
      } else {
        setRadius(420);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'ring') return;
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, viewMode]);

  // Mouse & Touch Drag Handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragCurrentX.current = clientX;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    dragCurrentX.current = clientX;
    const deltaX = clientX - dragStartX.current;
    // 0.25 deg per pixel of drag
    setDragOffsetDeg(deltaX * 0.25);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const deltaX = dragCurrentX.current - dragStartX.current;
    setDragOffsetDeg(0);

    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  const totalSkillsCount = categories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  const baseRotation = -activeIndex * angleStep + dragOffsetDeg;

  return (
    <section 
      id="skills" 
      className="relative min-h-screen py-16 lg:py-20 flex flex-col justify-center overflow-hidden bg-[#030712]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-600/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col">

        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase">
              // TECHNICAL MATRIX
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            SKILLS<span className="text-cyan-400">.</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-2 rounded-full shadow-[0_0_12px_rgba(0,240,255,0.6)]" />

          <p className="mt-2 text-slate-400 text-xs sm:text-sm font-light max-w-lg mx-auto">
            Interactive 3D Matrix — Rotate the ring or select any domain to explore {totalSkillsCount}+ verified technologies.
          </p>
        </div>

        {/* Top Controls: View Toggle & Domain Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 scrollbar-none">
            {categories.map((cat, idx) => {
              const isActive = activeIndex === idx && viewMode === 'ring';
              return (
                <button
                  key={cat.categoryKey}
                  onClick={() => {
                    setActiveIndex(idx);
                    setViewMode('ring');
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-400/50 shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                      : 'text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08]'
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle Button */}
          <button
            onClick={() => setViewMode((prev) => (prev === 'ring' ? 'grid' : 'ring'))}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-slate-300 hover:text-cyan-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all ml-1"
            title="Toggle View Mode"
          >
            {viewMode === 'ring' ? (
              <>
                <Grid3X3 className="w-3.5 h-3.5 text-cyan-400" />
                <span>All Grid</span>
              </>
            ) : (
              <>
                <Rotate3d className="w-3.5 h-3.5 text-cyan-400" />
                <span>3D Ring</span>
              </>
            )}
          </button>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            MODE A: 3D CYLINDRICAL RING VIEW
            ═══════════════════════════════════════════════════════════ */}
        {viewMode === 'ring' ? (
          <div className="relative w-full flex flex-col items-center select-none">
            
            {/* 3D Ring Stage */}
            <div 
              className="relative w-full h-[400px] sm:h-[430px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden"
              style={{ perspective: '1100px' }}
              onMouseDown={(e) => handleDragStart(e.clientX)}
              onMouseMove={(e) => handleDragMove(e.clientX)}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
              onTouchEnd={handleDragEnd}
            >
              {/* 3D Rotating Carousel Container */}
              <div
                className="relative w-[300px] sm:w-[350px] h-[350px] sm:h-[370px]"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${baseRotation}deg)`,
                  transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {categories.map((cat, idx) => {
                  const cardAngle = idx * angleStep;

                  // Normalize angle difference to find relative position from front
                  let diffAngle = ((cardAngle + baseRotation) % 360 + 360) % 360;
                  if (diffAngle > 180) diffAngle -= 360;
                  const absAngle = Math.abs(diffAngle);
                  const isCurrent = absAngle < 28;
                  const isSide = absAngle >= 28 && absAngle <= 95;

                  // Visual depth calculations
                  const opacity = isCurrent ? 1 : isSide ? 0.65 : 0.2;
                  const scale = isCurrent ? 1 : isSide ? 0.9 : 0.75;
                  const pointerEvents = isCurrent || isSide ? 'auto' : 'none';

                  return (
                    <div
                      key={cat.categoryKey}
                      onClick={() => {
                        if (!isCurrent) setActiveIndex(idx);
                      }}
                      className="absolute inset-0 rounded-2xl glass-panel p-5 sm:p-6 border flex flex-col justify-between transition-opacity duration-300"
                      style={{
                        transform: `rotateY(${cardAngle}deg) translateZ(${radius}px) scale(${scale})`,
                        opacity,
                        pointerEvents,
                        backfaceVisibility: 'hidden',
                        borderColor: isCurrent 
                          ? 'rgba(0, 240, 255, 0.5)' 
                          : 'rgba(255, 255, 255, 0.08)',
                        boxShadow: isCurrent 
                          ? '0 0 35px -5px rgba(0, 240, 255, 0.3), inset 0 0 20px rgba(0, 240, 255, 0.05)' 
                          : 'none',
                        background: isCurrent 
                          ? 'rgba(7, 13, 26, 0.88)' 
                          : 'rgba(11, 17, 32, 0.6)',
                        backdropFilter: 'blur(16px)',
                      }}
                    >
                      {/* Card Content */}
                      <div>
                        {/* Top: Icon + Title + Count */}
                        <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/[0.08]">
                          <div className="flex items-center gap-2.5">
                            <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                              {categoryIcons[cat.categoryKey] || <Code2 className="w-5 h-5 text-cyan-400" />}
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-base font-display font-bold text-white tracking-tight">
                                {cat.title}
                              </h3>
                              <span className="text-[10px] font-mono text-cyan-400">
                                {cat.skills.length} verified technologies
                              </span>
                            </div>
                          </div>

                          {isCurrent && (
                            <span className="flex h-2 w-2 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                            </span>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-[11px] sm:text-xs text-slate-400 font-light mb-3 line-clamp-2">
                          {cat.description}
                        </p>

                        {/* Skill Items List */}
                        <div className="space-y-1.5 max-h-[175px] sm:max-h-[190px] overflow-y-auto pr-1 scrollbar-thin">
                          {cat.skills.map((skill) => (
                            <div
                              key={skill.name}
                              className="group flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.02] hover:bg-cyan-950/30 border border-white/[0.04] hover:border-cyan-500/30 transition-all text-xs"
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70 group-hover:scale-125 transition-all" />
                                <span className="font-mono text-[11px] sm:text-xs font-medium text-slate-200">
                                  {skill.name}
                                </span>
                              </div>
                              {skill.tag && (
                                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 group-hover:text-cyan-300 transition-colors">
                                  {skill.tag}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span>DOMAIN {idx + 1} / {totalCards}</span>
                        <span className="text-cyan-400/90 font-medium">CLICK OR DRAG</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Ring Navigation Controls */}
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={goToPrev}
                aria-label="Previous Skill Category"
                className="p-2.5 rounded-full bg-white/[0.04] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/[0.08] hover:border-cyan-500/40 transition-all shadow-md active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Progress Dots */}
              <div className="flex items-center gap-1.5">
                {categories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Jump to category ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? 'w-6 bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.7)]'
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                aria-label="Next Skill Category"
                className="p-2.5 rounded-full bg-white/[0.04] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/[0.08] hover:border-cyan-500/40 transition-all shadow-md active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ) : (
          /* ═══════════════════════════════════════════════════════════
             MODE B: COMPACT ALL-SKILLS GRID VIEW
             ═══════════════════════════════════════════════════════════ */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-h-[500px] overflow-y-auto pr-1">
            {categories.map((cat, idx) => (
              <div
                key={cat.categoryKey}
                className="glass-panel rounded-xl p-4 border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/[0.06]">
                    <div className="p-1.5 rounded-lg bg-white/[0.03]">
                      {categoryIcons[cat.categoryKey] || <Code2 className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <div>
                      <h4 className="text-xs font-display font-bold text-white">
                        {cat.title}
                      </h4>
                      <span className="text-[9px] font-mono text-cyan-400">
                        {cat.skills.length} items
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.05]"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};