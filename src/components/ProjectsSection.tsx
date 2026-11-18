import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  FolderGit2, 
  Sparkles, 
  Layers, 
  Code2, 
  CheckCircle2,
  BrainCircuit,
  Dna,
  FileCheck2
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterTabs = ['All', 'AI / GenAI', 'BioAI & Multi-Agent', 'Full-Stack'];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) =>
    selectedFilter === 'All' ? true : project.category === selectedFilter
  );

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'plantmind':
        return <BrainCircuit className="w-6 h-6 text-cyan-400" />;
      case 'cynthera':
        return <Dna className="w-6 h-6 text-violet-400" />;
      case 'resumepilot':
        return <FileCheck2 className="w-6 h-6 text-sky-400" />;
      default:
        return <FolderGit2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Engineering Projects</span>
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-2xl font-light">
              Production-grade systems covering multi-agent biomedical graphs, RAG industrial knowledge copilot, and full-stack semantic analysis.
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col justify-between group"
            >
              {/* Project Card Graphic / Blueprint Header */}
              <div className="relative h-44 bg-gradient-to-br from-[#050b18] via-[#091124] to-[#040813] border-b border-white/[0.06] p-6 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-cyber-grid opacity-30" />
                
                {/* Ambient glow in corner */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />

                {/* Top badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/[0.06] text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>
                  
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>VERIFIED REPO</span>
                  </span>
                </div>

                {/* Blueprint Graphic Abstract */}
                <div className="relative z-10 flex items-end justify-between">
                  <div className="font-mono text-xs text-slate-500">
                    <span className="text-cyan-400/70 block">SYSTEM_ID</span>
                    <span className="text-slate-300 font-bold tracking-wider">{project.id.toUpperCase()}</span>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/50 transition-all">
                    {getProjectIcon(project.id)}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-violet-300 mt-1 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400 font-light leading-relaxed">
                        <span className="text-cyan-400 mt-0.5 shrink-0">•</span>
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
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06] group-hover:border-cyan-500/20 transition-colors"
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
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.1] hover:border-cyan-400/40 transition-all"
                    >
                      <Github className="w-4 h-4 text-cyan-400" />
                      <span>github.com/dhushanth05/{project.id}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-1" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* GitHub Organization Profile Bar */}
        <div className="mt-12 glass-panel rounded-2xl p-6 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-mono font-bold text-white">
                Explore More on GitHub @dhushanth05
              </h4>
              <p className="text-xs text-slate-400 font-light">
                Inspect complete source code, Docker configs, and commit history across all repositories.
              </p>
            </div>
          </div>
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-mono font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 whitespace-nowrap transition-all shadow-[0_0_20px_-3px_rgba(0,240,255,0.3)]"
          >
            Visit GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
};
