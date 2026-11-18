import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Terminal, 
  User, 
  Layers, 
  Briefcase, 
  FolderGit2, 
  GraduationCap, 
  Mail, 
  FileDown, 
  ExternalLink, 
  Copy, 
  Check, 
  X 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open triggered by parent or handled here
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'sec-about',
      title: 'Navigate to About',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-cyan-400" />,
      perform: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-skills',
      title: 'Navigate to Technical Skills',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-sky-400" />,
      perform: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-exp',
      title: 'Navigate to Experience (Krosum Labs)',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-violet-400" />,
      perform: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-projects',
      title: 'Navigate to Featured Projects',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4 text-indigo-400" />,
      perform: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-edu',
      title: 'Navigate to Education (DSATM)',
      category: 'Navigation',
      icon: <GraduationCap className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-contact',
      title: 'Navigate to Contact',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-purple-400" />,
      perform: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'act-resume',
      title: 'Download Resume (PDF)',
      category: 'Actions',
      icon: <FileDown className="w-4 h-4 text-cyan-400" />,
      perform: () => {
        const link = document.createElement('a');
        link.href = PORTFOLIO_DATA.personal.resumePath;
        link.download = 'Dhushanth_Srinivasa_Resume.pdf';
        link.click();
        onClose();
      }
    },
    {
      id: 'act-email',
      title: `Copy Email (${PORTFOLIO_DATA.personal.email})`,
      category: 'Actions',
      icon: copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />,
      perform: () => {
        navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
        setCopiedEmail(true);
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
        setTimeout(() => {
          setCopiedEmail(false);
          onClose();
        }, 1200);
      }
    },
    {
      id: 'act-github',
      title: 'Open GitHub Profile',
      category: 'External',
      icon: <ExternalLink className="w-4 h-4 text-cyan-400" />,
      perform: () => {
        window.open(PORTFOLIO_DATA.personal.github, '_blank');
        onClose();
      }
    },
    {
      id: 'act-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'External',
      icon: <ExternalLink className="w-4 h-4 text-violet-400" />,
      perform: () => {
        window.open(PORTFOLIO_DATA.personal.linkedin, '_blank');
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 px-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-xl glass-panel rounded-2xl border border-cyan-500/30 bg-[#040817] shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08]">
          <Terminal className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm font-mono text-white placeholder:text-slate-500 outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-500 hover:text-white hover:bg-white/[0.06]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action list */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-slate-500">
              No matching commands for "{query}"
            </div>
          ) : (
            filteredActions.map((act) => (
              <button
                key={act.id}
                onClick={act.perform}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left hover:bg-white/[0.06] hover:border-cyan-500/30 border border-transparent transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-white/[0.04] text-slate-300">
                    {act.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-200 group-hover:text-cyan-300 transition-colors block">
                      {act.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {act.category}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-600 group-hover:text-slate-400">
                  Select ↵
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-white/[0.06] bg-black/40 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Use ⌘K or Ctrl+K anytime</span>
          <span>ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
