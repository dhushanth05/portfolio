import React from 'react';
import { 
  Award, 
  Trophy, 
  ExternalLink, 
  FolderGit2
} from 'lucide-react';
import { PORTFOLIO_DATA, AchievementItem, ALL_CERTIFICATES_URL } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const hackathons = PORTFOLIO_DATA.achievements.filter((a) => a.category === 'hackathon');
  const certifications = PORTFOLIO_DATA.achievements.filter((a) => a.category === 'certification');

  const renderCard = (item: AchievementItem, idx: number, iconType: 'trophy' | 'award') => (
    <div
      key={idx}
      className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 border border-white/[0.08] flex flex-col justify-between group h-full"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
            {iconType === 'trophy' ? <Trophy className="w-5 h-5" /> : <Award className="w-5 h-5 text-violet-400" />}
          </div>
          {item.badge && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-violet-500/10 border border-violet-500/30 text-violet-300">
              {item.badge}
            </span>
          )}
        </div>

        <span className="text-xs font-mono text-slate-400 block mb-1">
          {item.period}
        </span>

        <h4 className="text-base sm:text-lg font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
          {item.title}
        </h4>

        <p className="text-xs sm:text-sm font-mono text-cyan-300/90 mb-3 font-medium">
          {item.organization}
        </p>

        <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Bottom Credential Action */}
      <div className="mt-5 pt-3.5 border-t border-white/[0.05] flex items-center justify-between gap-2">
        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
          {item.footerLabel || item.badge || 'Verified'}
        </span>

        {item.credentialLinks && item.credentialLinks.length > 1 ? (
          <div className="flex items-center gap-1.5">
            {item.credentialLinks.map((link, lIdx) => (
              <a
                key={lIdx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 text-xs font-mono transition-all duration-200 hover:shadow-[0_0_12px_rgba(0,240,255,0.25)] group/btn cursor-pointer"
              >
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>{lIdx === 0 ? 'JPMC' : 'TATA'}</span>
                <ExternalLink className="w-3 h-3 text-cyan-400/70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        ) : (
          <a
            href={item.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 text-xs font-mono transition-all duration-200 hover:shadow-[0_0_12px_rgba(0,240,255,0.25)] group/btn cursor-pointer"
          >
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>CREDENTIAL</span>
            <ExternalLink className="w-3 h-3 text-cyan-400/70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="achievements" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-cyan-400 text-xs sm:text-sm tracking-widest uppercase">
              // AWARDS & CERTIFICATIONS
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Honors, Recognitions & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Certifications</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl font-normal">
            Competitive hackathon shortlists, industry credentials, and verified software achievements.
          </p>
        </div>

        {/* Group 1: Hackathons & Recognitions */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5 pb-2.5 border-b border-white/[0.06]">
            <Trophy className="w-4 h-4 text-cyan-400" />
            <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-wide">
              Hackathons & Recognitions
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {hackathons.map((item, idx) => renderCard(item, idx, 'trophy'))}
          </div>
        </div>

        {/* Group 2: Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-5 pb-2.5 border-b border-white/[0.06]">
            <Award className="w-4 h-4 text-violet-400" />
            <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-wide">
              Certifications & Industry Credentials
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {certifications.map((item, idx) => renderCard(item, idx, 'award'))}
          </div>

          {/* Slim Full-Width Banner: More Certifications */}
          <div className="mt-6 glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-5 group">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                  More Certifications & Course Completions
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1 leading-relaxed">
                  MATLAB (Beginner to Advanced), Infosys Springboard AI/ML track, Agile & Scrum, Cisco Networking Basics, Udemy C & Java, IBM Project Management, DBMS and more.
                </p>
              </div>
            </div>

            <a
              href={ALL_CERTIFICATES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 text-xs sm:text-sm font-mono font-medium transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:scale-[1.02] whitespace-nowrap cursor-pointer shrink-0 self-start sm:self-auto"
            >
              <span>View All Certificates</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
