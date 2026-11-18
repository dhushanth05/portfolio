import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles, Code2 } from 'lucide-react';

export const DeveloperTerminalCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const developer: DeveloperProfile = {
  name: "Dhushanth Srinivasa",
  role: "Software Developer",
  focus: ["AI/ML", "Full-Stack", "Cloud & MLOps"],
  internship: "Data Science & MLOps @ Krosum Labs",
  education: "B.E. CS & Design @ DSATM (2027)",
  cgpa: "8.54 / 10",
  status: "Available for opportunities",
  contact: "sdhushanth123@gmail.com"
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Gentle ambient background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/15 via-violet-500/10 to-blue-500/15 rounded-2xl blur-xl opacity-75 pointer-events-none" />

      {/* Main Terminal Window */}
      <div className="relative glass-panel rounded-2xl border border-cyan-500/25 bg-[#050b18]/85 backdrop-blur-xl shadow-[0_15px_40px_-15px_rgba(0,240,255,0.15)] overflow-hidden font-mono">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/[0.08] select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <div className="ml-2 flex items-center gap-1.5 text-xs text-slate-400">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-300 font-medium">developer.config.ts</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-[10px] text-cyan-400/80 uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/30">
              TypeScript
            </span>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-md hover:bg-white/[0.06] text-slate-400 hover:text-cyan-300 transition-colors"
              title="Copy snippet"
              aria-label="Copy snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Terminal Code Body */}
        <div className="p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300 select-text">
          <div className="space-y-1">
            <div className="text-slate-500 text-[11px] mb-2">
              // Identity & Architectural Configuration
            </div>

            <div>
              <span className="text-violet-400">const</span>{' '}
              <span className="text-cyan-300">developer</span>:{' '}
              <span className="text-sky-300">DeveloperProfile</span> = &#123;
            </div>

            <div className="pl-4 sm:pl-5">
              <span className="text-slate-400">name</span>:{' '}
              <span className="text-emerald-300">"Dhushanth Srinivasa"</span>,
            </div>

            <div className="pl-4 sm:pl-5">
              <span className="text-slate-400">role</span>:{' '}
              <span className="text-emerald-300">"Software Developer"</span>,
            </div>

            <div className="pl-4 sm:pl-5">
              <span className="text-slate-400">focus</span>: [
              <span className="text-cyan-200">"AI/ML"</span>,{' '}
              <span className="text-cyan-200">"Full-Stack"</span>,{' '}
              <span className="text-cyan-200">"Cloud"</span>
              ],
            </div>

            <div className="pl-4 sm:pl-5">
              <span className="text-slate-400">internship</span>:{' '}
              <span className="text-emerald-300">"Data Science & MLOps @ Krosum Labs"</span>,
            </div>

            <div className="pl-4 sm:pl-5">
              <span className="text-slate-400">education</span>:{' '}
              <span className="text-emerald-300">"B.E. CS & Design @ DSATM (2027)"</span>,
            </div>

            <div className="pl-4 sm:pl-5">
              <span className="text-slate-400">status</span>:{' '}
              <span className="text-amber-300">"Available for opportunities"</span>,
            </div>

            <div className="pl-4 sm:pl-5">
              <span className="text-slate-400">verified</span>:{' '}
              <span className="text-violet-300">true</span>
            </div>

            <div>&#125;;</div>
          </div>

          {/* Realistic CLI Output Line */}
          <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">❯</span>
              <span className="text-slate-300">ready for deployment</span>
              <span className="w-1.5 h-3.5 bg-cyan-400 inline-block animate-pulse ml-0.5" />
            </div>
            <span className="text-slate-500 hidden sm:inline">UTF-8</span>
          </div>
        </div>

      </div>
    </div>
  );
};
