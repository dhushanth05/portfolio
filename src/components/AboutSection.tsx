import React from 'react';
import { 
  Building, 
  GraduationCap, 
  MapPin,
  Sparkles,
  BrainCircuit,
  ArrowUpRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-cyan-400 text-xs sm:text-sm tracking-widest uppercase">
              // ABOUT ME
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Background & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Engineering Focus</span>
          </h2>
        </div>

        {/* Concise About Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/[0.08] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Avatar & Quick Info */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative group mb-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <img
                  src={PORTFOLIO_DATA.personal.profileImage}
                  alt="Dhushanth Srinivasa — AI/ML Engineer & Software Developer"
                  loading="eager"
                  decoding="async"
                  width={128}
                  height={128}
                  className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover object-top border-2 border-cyan-400/50 shadow-xl"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                {PORTFOLIO_DATA.personal.name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-cyan-300 mt-1 mb-2">
                AI/ML Engineer & Software Developer
              </p>
              <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-1.5 font-mono">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </p>
            </div>

            {/* Right: 3-4 Line Focused About Story */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  I am a final-year B.E. student in <span className="text-white font-medium">Computer Science and Design</span> at <span className="text-cyan-300 font-medium">Dayananda Sagar Academy of Technology and Management (DSATM)</span>, Bengaluru, graduating in 2027.
                </p>
                <p>
                  My technical focus centers on <span className="text-white font-bold">applied AI/ML</span>, <span className="text-cyan-300 font-medium">full-stack development</span>, <span className="text-cyan-300 font-medium">data analyst</span>, and <span className="text-violet-300 font-medium">agentic AI systems</span>.
                </p>
                <p>
                  Currently, I am interning at <span className="text-white font-medium">Krosum Labs</span> as a <span className="text-cyan-300 font-medium">Data Science & MLOps Intern</span>, gaining hands-on industry experience building and evaluating supervised machine learning models on banking datasets.
                </p>
              </div>

              {/* Highlight Badges */}
              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/[0.08]">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>DSATM Bengaluru · 2027</span>
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-violet-500/10 text-violet-300 border border-violet-500/30">
                  <Building className="w-3.5 h-3.5" />
                  <span>Intern @ Krosum Labs</span>
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/[0.08]">
                  <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Applied AI & Full-Stack</span>
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
