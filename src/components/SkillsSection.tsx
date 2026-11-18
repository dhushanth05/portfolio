import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BrainCircuit, 
  Terminal, 
  Search, 
  Filter, 
  Sparkles,
  Layers
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    aiml: <BrainCircuit className="w-5 h-5 text-purple-400" />,
    datascience: <Database className="w-5 h-5 text-sky-400" />,
    languages: <Code2 className="w-5 h-5 text-cyan-400" />,
    backend: <Server className="w-5 h-5 text-violet-400" />,
    frontend: <Layout className="w-5 h-5 text-blue-400" />,
    databases: <Database className="w-5 h-5 text-indigo-400" />,
    tools: <Terminal className="w-5 h-5 text-emerald-400" />,
  };

  const categories = [
    { key: 'all', label: 'All Domains' },
    { key: 'aiml', label: 'AI/ML & GenAI' },
    { key: 'datascience', label: 'Data Science & Big Data' },
    { key: 'languages', label: 'Languages' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'frontend', label: 'Web & Frontend' },
    { key: 'databases', label: 'Databases' },
    { key: 'tools', label: 'Tools & DevOps' },
  ];

  // Filter skills based on selected category & search query
  const filteredCategories = useMemo(() => {
    return PORTFOLIO_DATA.skills
      .filter((cat) => (selectedCategory === 'all' ? true : cat.categoryKey === selectedCategory))
      .map((cat) => {
        const matchingSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        return { ...cat, skills: matchingSkills };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [selectedCategory, searchQuery]);

  const totalSkillsCount = PORTFOLIO_DATA.skills.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">
                // TECHNICAL MATRIX
              </span>
              <div className="h-[1px] w-12 bg-cyan-500/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Engineered for <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Scale & Precision</span>
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-2xl font-light">
              Structured across software engineering, distributed backends, AI models, and cloud persistence.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-2 glass-pill px-4 py-2 rounded-xl border border-white/[0.08] text-xs font-mono">
            <span className="text-slate-400">Total Stack:</span>
            <span className="text-cyan-400 font-bold">{totalSkillsCount} Technologies</span>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.06]">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.key
                    ? 'text-cyan-300 bg-white/[0.08] border border-cyan-500/40 shadow-[0_0_15px_-3px_rgba(0,240,255,0.25)]'
                    : 'text-slate-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] border border-transparent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Interactive Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack (e.g. Python, Docker)..."
              className="w-full bg-[#050b18] border border-white/[0.08] focus:border-cyan-500/50 rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-white placeholder:text-slate-500 outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Categories and Skill Cards */}
        {filteredCategories.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center text-slate-400 font-mono text-sm border border-white/[0.06]">
            No technology matches <span className="text-cyan-300">"{searchQuery}"</span>. Try another query or clear the filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <div
                key={category.categoryKey}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                        {categoryIcons[category.categoryKey] || <Code2 className="w-5 h-5 text-cyan-400" />}
                      </div>
                      <div>
                        <h3 className="text-base font-display font-semibold text-white">
                          {category.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-500">
                          {category.skills.length} core items
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 font-light mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.02] hover:bg-cyan-950/20 border border-white/[0.04] hover:border-cyan-500/30 transition-all duration-200"
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

                <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>PRODUCTION READY</span>
                  <span className="text-cyan-400/80">VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
