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
  Grid3X3,
  Rotate3d
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'ring' | 'grid'>('ring');
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);
  const [dragOffsetDeg, setDragOffsetDeg] = useState(0);
  const [radius, setRadius] = useState(380);
  const lastWheelTime = useRef(0);

  const categories = PORTFOLIO_DATA.skills;
  const totalCards = categories.length; // 7
  const angleStep = 360 / totalCards; // ~51.43 deg

  const categoryIcons: Record<string, React.ReactNode> = {
    aiml: <BrainCircuit className="w-4 h-4 text-violet-400" />,
    datascience: <Database className="w-4 h-4 text-sky-400" />,
    languages: <Code2 className="w-4 h-4 text-cyan-400" />,
    backend: <Server className="w-4 h-4 text-indigo-400" />,
    frontend: <Layout className="w-4 h-4 text-blue-400" />,
    databases: <Database className="w-4 h-4 text-cyan-300" />,
    tools: <Terminal className="w-4 h-4 text-emerald-400" />,
  };

  // Adjust radius based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(260);
      } else if (window.innerWidth < 1024) {
        setRadius(320);
      } else {
        setRadius(390);
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

  // Mouse wheel rotation handler (throttled to avoid rapid skipping)
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 220) return;
    if (Math.abs(e.deltaY) > 12 || Math.abs(e.deltaX) > 12) {
      lastWheelTime.current = now;
      if (e.deltaY > 0 || e.deltaX > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

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
    setDragOffsetDeg(deltaX * 0.22);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const deltaX = dragCurrentX.current - dragStartX.current;
    setDragOffsetDeg(0);

    if (Math.abs(deltaX) > 35) {
      if (deltaX < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  const baseRotation = -activeIndex * angleStep + dragOffsetDeg;

  return (
    <section 
      id="skills" 
      className="relative min-h-screen py-16 lg:py-20 flex flex-col justify-center overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col">

        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-1.5">
            <span className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase">
              // TECHNICAL MATRIX
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            SKILLS<span className="text-cyan-400">.</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-2 rounded-full shadow-[0_0_12px_rgba(0,240,255,0.6)]" />

          <p className="mt-2 text-slate-400 text-xs sm:text-sm font-light max-w-lg mx-auto">
            Scroll with mouse wheel or drag to rotate through tech stacks.
          </p>
        </div>

        {/* Category Selector Pills & Grid Toggle */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
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
                  className={`px-3 py-1 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-200 ${
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

          <button
            onClick={() => setViewMode((prev) => (prev === 'ring' ? 'grid' : 'ring'))}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-300 hover:text-cyan-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all ml-1"
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
            3D CYLINDRICAL RING VIEW (Sleek, Compact & Mouse-Scrollable)
            ═══════════════════════════════════════════════════════════ */}
        {viewMode === 'ring' ? (
          <div 
            className="relative w-full flex flex-col items-center select-none"
            onWheel={handleWheel}
          >
            {/* 3D Stage */}
            <div 
              className="relative w-full h-[330px] sm:h-[350px] flex items-center justify-center cursor-grab active:cursor-grabbing"
              style={{ perspective: '1000px' }}
              onMouseDown={(e) => handleDragStart(e.clientX)}
              onMouseMove={(e) => handleDragMove(e.clientX)}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
              onTouchEnd={handleDragEnd}
            >
              {/* Rotating Container */}
              <div
                className="relative w-[320px] sm:w-[400px] md:w-[440px] h-[270px] sm:h-[280px]"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${baseRotation}deg)`,
                  transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {categories.map((cat, idx) => {
                  const cardAngle = idx * angleStep;

                  let diffAngle = ((cardAngle + baseRotation) % 360 + 360) % 360;
                  if (diffAngle > 180) diffAngle -= 360;
                  const absAngle = Math.abs(diffAngle);
                  const isCurrent = absAngle < 28;
                  const isSide = absAngle >= 28 && absAngle <= 95;

                  const opacity = isCurrent ? 1 : isSide ? 0.6 : 0.15;
                  const scale = isCurrent ? 1 : isSide ? 0.88 : 0.72;
                  const pointerEvents = isCurrent || isSide ? 'auto' : 'none';

                  return (
                    <div
                      key={cat.categoryKey}
                      onClick={() => {
                        if (!isCurrent) setActiveIndex(idx);
                      }}
                      className="absolute inset-0 rounded-2xl p-5 border flex flex-col justify-between transition-opacity duration-300"
                      style={{
                        transform: `rotateY(${cardAngle}deg) translateZ(${radius}px) scale(${scale})`,
                        opacity,
                        pointerEvents,
                        backfaceVisibility: 'hidden',
                        borderColor: isCurrent 
                          ? 'rgba(0, 240, 255, 0.5)' 
                          : 'rgba(255, 255, 255, 0.08)',
                        boxShadow: isCurrent 
                          ? '0 10px 40px -10px rgba(0, 240, 255, 0.25), inset 0 0 15px rgba(0, 240, 255, 0.04)' 
                          : 'none',
                        background: isCurrent 
                          ? 'rgba(5, 11, 24, 0.75)' 
                          : 'rgba(5, 11, 24, 0.45)',
                        backdropFilter: 'blur(12px)',
                      }}
                    >
                      {/* Top: Icon + Title */}
                      <div>
                        <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-white/[0.08]">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                              {categoryIcons[cat.categoryKey] || <Code2 className="w-4 h-4 text-cyan-400" />}
                            </div>
                            <h3 className="text-sm sm:text-base font-display font-bold text-white tracking-tight">
                              {cat.title}
                            </h3>
                          </div>

                          {isCurrent && (
                            <span className="flex h-2 w-2 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                            </span>
                          )}
                        </div>

                        <p className="text-[11px] text-slate-400 font-light mb-3 line-clamp-1">
                          {cat.description}
                        </p>

                        {/* Clean 2-column Skill Pills — All visible at once */}
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                          {cat.skills.map((skill) => (
                            <div
                              key={skill.name}
                              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-cyan-950/40 border border-white/[0.05] hover:border-cyan-400/40 transition-all"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                              <span className="font-mono text-[11px] sm:text-xs font-medium text-slate-200 truncate">
                                {skill.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span>{idx + 1} / {totalCards}</span>
                        <span className="text-cyan-400/80">MOUSE SCROLL OR DRAG</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Navigation Arrows & Dots */}
            <div className="flex items-center gap-4 mt-3">
              <button
                onClick={goToPrev}
                aria-label="Previous Category"
                className="p-2 rounded-full bg-white/[0.04] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/[0.08] hover:border-cyan-500/40 transition-all shadow-md active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {categories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to category ${idx + 1}`}
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
                aria-label="Next Category"
                className="p-2 rounded-full bg-white/[0.04] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/[0.08] hover:border-cyan-500/40 transition-all shadow-md active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ) : (
          /* Grid View Mode */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-h-[460px] overflow-y-auto pr-1">
            {categories.map((cat) => (
              <div
                key={cat.categoryKey}
                className="rounded-xl p-4 border border-white/[0.08] bg-[#050b18]/60 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-white/[0.06]">
                    <div className="p-1.5 rounded-lg bg-white/[0.03]">
                      {categoryIcons[cat.categoryKey] || <Code2 className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <h4 className="text-xs font-display font-bold text-white">
                      {cat.title}
                    </h4>
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