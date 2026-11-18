import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const edu = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">
              // 05. ACADEMIC FOUNDATION
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Education & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Core Foundations</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl font-light">
            Comprehensive undergraduate degree combining algorithmic engineering with interface design systems.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/[0.08] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 6 cols: Degree & College Info */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-cyan-300">
                      UNDERGRADUATE DEGREE
                    </span>
                    <span className="font-mono text-xs text-slate-500">
                      {edu.period}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                  {edu.degree}
                </h3>
                <h4 className="text-lg font-mono text-cyan-400 mb-4">
                  {edu.field}
                </h4>

                <p className="text-base text-slate-200 font-medium mb-1">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{edu.location}</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-6">
                  <span className="text-xs font-mono text-violet-300 font-semibold uppercase block mb-1">
                    Graduation Status
                  </span>
                  <p className="text-sm text-slate-300 font-light">
                    Expected Graduation in <span className="text-white font-mono font-bold">{edu.graduationYear}</span>. Actively building technical and software engineering capabilities.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                {edu.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 6 cols: Core Coursework Matrix */}
            <div className="lg:col-span-6 glass-panel rounded-xl p-6 border border-white/[0.06] bg-[#02050f]/60">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-mono font-semibold text-white tracking-wide">
                  Core Engineering Coursework
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {edu.coreSubjects.map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] hover:border-cyan-500/20 transition-colors"
                  >
                    <span className="text-xs font-mono text-slate-300 block">
                      {sub}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>CURRICULUM FOCUS</span>
                <span className="text-cyan-400">ALGORITHMS + HCI</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
