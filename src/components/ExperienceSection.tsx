import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2, Sparkles, Edit3 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">
              // 03. CAREER TRAJECTORY
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Industry Experience & <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Engineering Roles</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl font-light">
            Hands-on work developing data science workflows, APIs, and operational machine learning services.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/[0.1] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Node Orb */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#030712] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.6)]">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300">
                
                {/* Editable Badge Notice */}
                {exp.isEditablePlaceholder && (
                  <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-amber-300">
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Editable Section: Update bullet points in src/data/portfolioData.ts with your exact accomplishments.</span>
                  </div>
                )}

                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase font-semibold">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm font-mono text-violet-300">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.2)]">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    {exp.status === 'Current' && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        Active
                      </span>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                  {exp.summary}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Workflows & Contributions:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light">
                        <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Tech Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] text-cyan-300 border border-white/[0.07]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
