import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Palette, 
  Database, 
  Terminal, 
  CheckCircle2, 
  Building, 
  GraduationCap, 
  Compass, 
  Sparkles, 
  BrainCircuit, 
  Award,
  MapPin
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [terminalCmd, setTerminalCmd] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'DEV//SPACE OS v2.5.0-release [Dhushanth Srinivasa]',
    'Type "help" or click quick commands below to query background & stats.',
    'System status: Ready.'
  ]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newOutput = [...terminalOutput, `$ ${cmd}`];

    switch (trimmed) {
      case 'help':
        newOutput.push('Available commands: about, projects, experience, education, cgpa, contact, clear');
        break;
      case 'about':
        newOutput.push('Dhushanth Srinivasa: Aspiring AI/ML Engineer with strong foundation in Python, Java, SQL, DSA & Full-Stack Development.');
        break;
      case 'projects':
        newOutput.push('1. PlantMind (ET AI Hackathon 2.0 - Industrial RAG Platform) | 2. CYNTHERA (Multi-Agent Drug Repurposing) | 3. ResumePilot AI (Full-Stack AI Analyzer)');
        break;
      case 'experience':
        newOutput.push('Data Science & MLOps Intern @ Krosum Labs (Aug 2026 - Present): Supervised ML on banking data, feature engineering, PySpark, Airflow & Grafana.');
        break;
      case 'education':
        newOutput.push('B.E. Computer Science and Design @ Dayananda Sagar Academy of Technology and Management (DSATM), Bangalore (Expected Aug 2027) | CGPA: 8.54');
        break;
      case 'cgpa':
        newOutput.push('Current B.E. CGPA: 8.54/10 | PUC (PCMB): 92.17% | 10th CBSE: 91.33%');
        break;
      case 'contact':
        newOutput.push(`Email: ${PORTFOLIO_DATA.personal.email} | Phone: ${PORTFOLIO_DATA.personal.phone} | GitHub: dhushanth05`);
        break;
      case 'clear':
        setTerminalOutput(['Terminal output cleared.']);
        setTerminalCmd('');
        return;
      default:
        newOutput.push(`Command not recognized: "${cmd}". Type "help" for options.`);
    }

    setTerminalOutput(newOutput);
    setTerminalCmd('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && terminalCmd) {
      executeCommand(terminalCmd);
    }
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">
              // ARCHITECTURE & ORIGIN
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Engineering Systems with <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">Design Precision</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl font-light">
            Merging computer science rigor, distributed data pipelines, and intelligent multi-agent AI frameworks.
          </p>
        </div>

        {/* Editorial Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Primary Story Card (7 Cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-cyan-400 px-3 py-1 rounded-full glass-pill border border-cyan-500/30">
                  DEVELOPER BIOGRAPHY
                </span>
                <span className="font-mono text-xs text-slate-500">DSATM // CGPA 8.54</span>
              </div>

              {/* Mini Bio Header with Photo */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6 pb-6 border-b border-white/[0.06]">
                <div className="relative group shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
                  <img
                    src={PORTFOLIO_DATA.personal.profileImage}
                    alt="Dhushanth Srinivasa"
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-cyan-400/60 shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {PORTFOLIO_DATA.personal.name}
                  </h3>
                  <p className="text-sm font-mono text-cyan-300 mb-1">
                    Aspiring AI/ML Engineer & Full-Stack Developer
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Bangalore, Karnataka, India</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {PORTFOLIO_DATA.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/[0.06]">
              {PORTFOLIO_DATA.about.pillars.map((pillar, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="text-cyan-400">
                      {idx === 0 && <Cpu className="w-4 h-4" />}
                      {idx === 1 && <Layers className="w-4 h-4" />}
                      {idx === 2 && <Database className="w-4 h-4" />}
                      {idx === 3 && <BrainCircuit className="w-4 h-4" />}
                    </span>
                    <h4 className="text-xs font-mono font-semibold text-white tracking-wide">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal font-light">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Bento Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Current Experience Spotlight Card */}
            <div className="glass-panel rounded-2xl p-6 border border-violet-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all" />
              
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

              <div className="flex flex-wrap gap-1.5">
                {["Python", "scikit-learn", "NumPy", "Pandas", "PySpark", "Airflow", "Grafana"].map((tech) => (
                  <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Highlight Card with CGPA */}
            <div className="glass-panel rounded-2xl p-6 border border-cyan-500/20 relative overflow-hidden">
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
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                  Expected August 2027
                </span>
                <span>Bangalore, India</span>
              </div>
            </div>

            {/* Interactive Developer CLI Widget */}
            <div className="glass-panel rounded-2xl p-5 border border-white/[0.08] bg-[#02050f]/80 flex flex-col font-mono">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>interactive_profile.sh</span>
                </div>
                <span className="text-[10px] text-cyan-400/80">SHELL EMULATOR</span>
              </div>

              {/* Terminal Logs */}
              <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1 text-xs text-slate-300 mb-3 select-text">
                {terminalOutput.map((out, idx) => (
                  <div
                    key={idx}
                    className={out.startsWith('$') ? 'text-cyan-400' : 'text-slate-400'}
                  >
                    {out}
                  </div>
                ))}
              </div>

              {/* Quick Prompt Pills */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {['about', 'projects', 'experience', 'cgpa', 'contact', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/[0.08] transition-colors"
                  >
                    ${cmd}
                  </button>
                ))}
              </div>

              {/* Terminal Input */}
              <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06] text-xs">
                <span className="text-cyan-400">$</span>
                <input
                  type="text"
                  value={terminalCmd}
                  onChange={(e) => setTerminalCmd(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command and press Enter..."
                  className="bg-transparent border-none outline-none text-white w-full placeholder:text-slate-600 font-mono text-xs"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
