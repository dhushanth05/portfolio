import React from 'react';
import { Award, Trophy, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">
              // 06. HONORS, AWARDS & CERTIFICATIONS
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Hackathons, Recognitions & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl font-light">
            Competitive hackathon shortlists, industry credentials, and verified software engineering achievements.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/[0.08] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Trophy className="w-5 h-5" />
                  </div>
                  {item.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-violet-500/10 border border-violet-500/30 text-violet-300">
                      {item.badge}
                    </span>
                  )}
                </div>

                <span className="text-[11px] font-mono text-slate-500 block mb-1">
                  {item.period}
                </span>

                <h3 className="text-base font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-cyan-400/90 mb-3">
                  {item.organization}
                </p>

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>VERIFIED RECORD</span>
                <span className="text-cyan-400/80">CREDENTIAL</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
