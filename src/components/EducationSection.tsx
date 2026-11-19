import React from 'react';
import { GraduationCap, MapPin, BookOpen, TrendingUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const edu = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-cyan-400 text-xs sm:text-sm tracking-widest uppercase">
              // EDUCATION
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Academic Background & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Foundations</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl font-normal">
            Formal education in Computer Science & Design, Mathematics, and the Physical Sciences.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          
          {/* LEFT COLUMN: Undergraduate Degree */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] relative overflow-hidden flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header row: Icon + Level + Period, CGPA Badge on right */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-cyan-300 uppercase tracking-wider">
                      Undergraduate Degree
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      {edu.period}
                    </span>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 font-mono text-xs sm:text-sm text-cyan-300 flex items-center gap-1.5 shrink-0">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="font-bold">CGPA: {edu.cgpa}</span>
                </div>
              </div>

              {/* Degree & Field */}
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {edu.degree}
              </h3>
              <h4 className="text-base sm:text-lg font-mono text-cyan-300 mb-2">
                {edu.field}
              </h4>

              {/* Institution & Location */}
              <p className="text-sm sm:text-base text-slate-200 font-medium mb-1">
                {edu.institution}
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 mb-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{edu.location}</span>
              </div>
            </div>

            {/* Key Coursework (Wrapping Pills/Chips) */}
            <div className="mt-4 pt-5 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <h4 className="text-xs sm:text-sm font-mono font-semibold text-white tracking-wide uppercase">
                  Key Coursework
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {edu.keyCoursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-200 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Two Stacked Schooling Cards */}
          <div className="flex flex-col gap-6 justify-center w-full">
            {edu.schooling.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/[0.08] flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

                <div>
                  {/* Top row: Label + Year, Score Badge on right */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                        <GraduationCap className="w-5 h-5" />
                      </span>
                      <div className="flex flex-col">
                        <span className="font-mono text-xs text-cyan-300 uppercase tracking-wider">
                          {item.level}
                        </span>
                        <span className="font-mono text-xs text-slate-400">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    <div className="px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 font-mono text-xs sm:text-sm text-cyan-300 flex items-center gap-1.5 shrink-0">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span className="font-bold">{item.score}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-display font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>

                  {/* Subjects */}
                  {item.subjects && (
                    <p className="text-xs sm:text-sm font-mono text-cyan-300/80 mb-2.5 leading-relaxed">
                      {item.subjects}
                    </p>
                  )}

                  {/* Institution with Location Pin */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-300 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item.institution}</span>
                  </div>
                </div>

                {/* Board footer (duplicate year removed) */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    {item.board}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
