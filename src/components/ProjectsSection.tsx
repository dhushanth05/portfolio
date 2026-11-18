import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  FolderGit2, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Code2, 
  Edit3, 
  AlertCircle 
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [placeholderToast, setPlaceholderToast] = useState<string | null>(null);

  const filterTabs = ['All', 'Full-Stack', 'AI / MLOps', 'Systems & APIs'];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) =>
    selectedFilter === 'All' ? true : project.category === selectedFilter
  );

  const handleLinkClick = (e: React.MouseEvent, project: ProjectItem, linkType: 'github' | 'demo') => {
    if (project.isPlaceholder) {
      e.preventDefault();
      setPlaceholderToast(
        `Editable Project Slot: Update ${linkType === 'github' ? 'GitHub' : 'Live Demo'} URL for "${project.title}" in src/data/portfolioData.ts`
      );
      setTimeout(() => setPlaceholderToast(null), 4500);
    }
  };

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">
                // 04. PRODUCTION BUILDS & PROTOTYPES
              </span>
              <div className="h-[1px] w-12 bg-cyan-500/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Software Projects</span>
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-2xl font-light">
              High-impact architectures spanning full-stack web platforms, MLOps orchestration, and semantic retrieval engines.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 glass-pill p-1.5 rounded-xl border border-white/[0.08] overflow-x-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  selectedFilter === tab
                    ? 'text-cyan-300 bg-white/[0.08] shadow-[0_0_12px_rgba(56,189,248,0.25)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Floating Toast Notice when clicking placeholder */}
        {placeholderToast && (
          <div className="mb-6 p-4 rounded-xl glass-panel bg-amber-950/80 border border-amber-500/40 text-amber-200 text-xs font-mono flex items-center gap-3 animate-fade-in shadow-xl">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="flex-1">{placeholderToast}</div>
            <button
              onClick={() => setPlaceholderToast(null)}
              className="px-2 py-1 bg-amber-500/20 hover:bg-amber-500/30 rounded text-amber-300"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col justify-between group"
            >
              {/* Project Card Graphic / Blueprint Header */}
              <div className="relative h-48 bg-gradient-to-br from-[#050b18] via-[#091124] to-[#040813] border-b border-white/[0.06] p-6 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-cyber-grid opacity-30" />
                
                {/* Ambient glow in corner */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />

                {/* Top badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/[0.06] text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>
                  
                  {project.isPlaceholder && (
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      <Edit3 className="w-3 h-3" />
                      <span>EDITABLE PLACEHOLDER</span>
                    </span>
                  )}
                </div>

                {/* Blueprint Graphic Abstract */}
                <div className="relative z-10 flex items-end justify-between">
                  <div className="font-mono text-xs text-slate-500">
                    <span className="text-cyan-400/70 block">// SYSTEM_SCHEMA</span>
                    <span className="text-slate-400 font-bold">{project.id.toUpperCase()}</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-violet-300 mt-1 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400 font-light">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.06]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06] group-hover:border-cyan-500/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleLinkClick(e, project, 'github')}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.1] hover:border-cyan-400/40 transition-all"
                    >
                      <Github className="w-4 h-4 text-cyan-400" />
                      <span>View Code</span>
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleLinkClick(e, project, 'demo')}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/40 hover:border-cyan-400 transition-all shadow-[0_0_15px_-3px_rgba(0,240,255,0.25)]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Project Customization Callout */}
        <div className="mt-12 glass-panel rounded-2xl p-6 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-mono font-bold text-white">
                Have specific projects to showcase?
              </h4>
              <p className="text-xs text-slate-400 font-light">
                Replace or add your exact repository titles, descriptions, and links inside{' '}
                <code className="text-cyan-300 bg-white/[0.05] px-1.5 py-0.5 rounded">src/data/portfolioData.ts</code>.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-mono text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.1] whitespace-nowrap transition-colors"
          >
            Connect With Me
          </a>
        </div>

      </div>
    </section>
  );
};
