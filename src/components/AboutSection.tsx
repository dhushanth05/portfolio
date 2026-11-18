import React from 'react';
import { 
  Building, 
  GraduationCap, 
  MapPin
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-16 lg:py-24 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">
              // ARCHITECTURE & ORIGIN
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Engineering Systems with <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">Design Precision</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            Merging computer science rigor, distributed data pipelines, and intelligent multi-agent AI frameworks.
          </p>
        </div>

        {/* Editorial Bento Grid — One Page View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Primary Story Card (7 Cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-7 border border-white/[0.08] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs text-cyan-400 px-3 py-1 rounded-full glass-pill border border-cyan-500/30">
                  DEVELOPER BIOGRAPHY
                </span>
                <span className="font-mono text-xs text-slate-500">DSATM // CGPA 8.54</span>
              </div>

              {/* Mini Bio Header with Photo */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5 pb-5 border-b border-white/[0.06]">
                <div className="relative group shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
                  <img
                    src={PORTFOLIO_DATA.personal.profileImage}
                    alt="Dhushanth Srinivasa"
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-cyan-400/60 shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {PORTFOLIO_DATA.personal.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-300 mb-1">
                    Aspiring AI/ML Engineer & Full-Stack Developer
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Bangalore, Karnataka, India</span>
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                {PORTFOLIO_DATA.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Bento Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">

            {/* Current Experience Spotlight Card */}
            <div className="glass-panel rounded-2xl p-6 border border-violet-500/20 relative overflow-hidden group flex-1 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all" />
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-violet-400" />
                    <span className="font-mono text-xs text-violet-300 tracking-wider">ACTIVE INTERNSHIP</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    Aug 2026 – Present
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-white mb-1">
                  Data Science & MLOps Intern
                </h4>
                <p className="text-sm font-mono text-cyan-300 mb-3">
                  @ Krosum Labs <span className="text-slate-500 text-xs">• Bengaluru, India</span>
                </p>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                  Building supervised ML models on banking datasets using scikit-learn, learning distributed Spark streaming pipelines, Airflow DAG orchestration, and Grafana telemetry.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.05]">
                {["Python", "scikit-learn", "NumPy", "Pandas", "PySpark", "Airflow", "Grafana"].map((tech) => (
                  <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Highlight Card with CGPA */}
            <div className="glass-panel rounded-2xl p-6 border border-cyan-500/20 relative overflow-hidden flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-xs text-cyan-300 tracking-wider">ACADEMIC FOUNDATION</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/40">
                    CGPA: 8.54
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-white mb-1">
                  B.E. Computer Science and Design
                </h4>
                <p className="text-sm text-slate-300 mb-2">
                  Dayananda Sagar Academy of Technology and Management
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-slate-400 pt-2 border-t border-white/[0.05]">
                <span className="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                  Expected August 2027
                </span>
                <span>Bangalore, India</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
