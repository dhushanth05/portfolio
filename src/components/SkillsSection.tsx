import React from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BrainCircuit, 
  Terminal
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    aiml: <BrainCircuit className="w-4 h-4 text-purple-400" />,
    datascience: <Database className="w-4 h-4 text-sky-400" />,
    languages: <Code2 className="w-4 h-4 text-cyan-400" />,
    backend: <Server className="w-4 h-4 text-violet-400" />,
    frontend: <Layout className="w-4 h-4 text-blue-400" />,
    databases: <Database className="w-4 h-4 text-indigo-400" />,
    tools: <Terminal className="w-4 h-4 text-emerald-400" />,
  };

  const totalSkillsCount = PORTFOLIO_DATA.skills.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="relative py-14 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Engineered for <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Scale & Precision</span>
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl font-light">
              Structured across software engineering, distributed backends, AI models, and cloud persistence.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-2 glass-pill px-3 py-1.5 rounded-lg border border-white/[0.08] text-xs font-mono self-start md:self-auto">
            <span className="text-slate-400">Total Stack:</span>
            <span className="text-cyan-400 font-bold">{totalSkillsCount} Technologies</span>
          </div>
        </div>

        {/* Categories and Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO_DATA.skills.map((category) => (
            <div
              key={category.categoryKey}
              className="glass-panel glass-panel-hover rounded-xl p-4 sm:p-5 border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                      {categoryIcons[category.categoryKey] || <Code2 className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-display font-semibold text-white">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500">
                        {category.skills.length} core items
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-light mb-3 leading-snug">
                  {category.description}
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-1.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/[0.02] hover:bg-cyan-950/20 border border-white/[0.04] hover:border-cyan-500/30 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 group-hover:scale-125 transition-all" />
                        <span className="text-xs font-mono font-medium text-slate-200 group-hover:text-white">
                          {skill.name}
                        </span>
                      </div>
                      {skill.tag && (
                        <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-300 transition-colors">
                          {skill.tag}
                        </span>
                      )}
                    </div>
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
