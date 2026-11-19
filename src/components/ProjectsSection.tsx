import React from 'react';
import { 
  Github, 
  ExternalLink, 
  FolderGit2, 
  BrainCircuit,
  Dna,
  FileCheck2,
  Users,
  User
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'plantmind':
        return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
      case 'cynthera':
        return <Dna className="w-5 h-5 text-violet-400" />;
      case 'resumepilot':
        return <FileCheck2 className="w-5 h-5 text-sky-400" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-cyan-400 text-xs sm:text-sm tracking-widest uppercase">
              // PROJECTS
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Engineering Work</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl font-normal">
            End-to-end systems covering multi-agent biomedical graphs, RAG industrial knowledge copilot, and full-stack semantic analysis.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col justify-between group h-full"
            >
              {/* Compact Visual Header */}
              <div className="relative bg-gradient-to-br from-[#060c1c] via-[#091328] to-[#040814] border-b border-white/[0.06] p-4 sm:p-5 flex items-center justify-between overflow-hidden">
                <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

                {/* Left: Category + Team/Solo Tag */}
                <div className="relative z-10 flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/[0.06] text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>
                  {project.teamTag && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-violet-500/15 text-violet-300 border border-violet-500/30">
                      {project.teamTag.includes('Team') ? <Users className="w-3 h-3" /> : <User className="w-3 h-3" />}
                      <span>{project.teamTag}</span>
                    </span>
                  )}
                </div>

                {/* Right: Icon */}
                <div className="relative z-10 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400/50 transition-all shrink-0">
                  {getProjectIcon(project.id)}
                </div>
              </div>

              {/* Project Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-violet-300 mt-1 mb-2.5">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-3.5">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="space-y-1.5 mb-3">
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                          <span className="text-cyan-400 mt-0.5 shrink-0">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Compact Role badge for CYNTHERA */}
                  {project.id === 'cynthera' && project.roleDescription && (
                    <div className="p-2 px-2.5 rounded-lg bg-cyan-950/35 border border-cyan-500/20 text-[11px] sm:text-xs font-mono text-cyan-200/90 leading-snug mb-3">
                      <strong className="text-cyan-400 font-semibold">My Role: </strong>
                      {project.roleDescription}
                    </div>
                  )}
                </div>

                <div className="mt-auto">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-white/[0.06]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06] group-hover:border-cyan-500/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: Open Source badge + GitHub / Live Demo */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <span className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/[0.08]">
                      <Github className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Open Source</span>
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-mono font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.1] hover:border-cyan-400/40 transition-all"
                      >
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
                      </a>

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-mono font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_12px_rgba(0,240,255,0.3)]"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.demoVideoUrl && (
                        <a
                          href={project.demoVideoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-mono font-medium text-violet-300 bg-violet-950/40 hover:bg-violet-900/60 border border-violet-500/30 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo Video</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* More Projects Row / Grid */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.06]">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                More Noteworthy Projects
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1">
                Computer vision pipelines, augmented reality learning systems, and interactive applications.
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-400 hidden sm:inline">
              {PORTFOLIO_DATA.moreProjects.length} Repositories
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {PORTFOLIO_DATA.moreProjects.map((p) => (
              <div
                key={p.id}
                className="glass-panel glass-panel-hover rounded-xl p-4 sm:p-5 border border-white/[0.08] flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/30">
                      {p.category}
                    </span>
                    <FolderGit2 className="w-4 h-4 text-slate-400" />
                  </div>

                  <h4 className="text-base font-display font-semibold text-white mb-2 leading-snug">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-normal mb-4 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.05]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-mono text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.08] hover:border-cyan-400/40 transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
