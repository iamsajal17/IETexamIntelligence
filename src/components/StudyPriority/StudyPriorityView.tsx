import React, { useState } from 'react';
import { StudyPriority, Subject, MstType } from '../../types';
import {
  CheckCircle2,
  Clock,
  Sparkles,
  Award
} from 'lucide-react';

interface StudyPriorityViewProps {
  priorities: StudyPriority[];
  subject: Subject;
  selectedMstType: MstType;
  selectedUnits: number[];
}

export const StudyPriorityView: React.FC<StudyPriorityViewProps> = ({
  priorities,
  subject,
  selectedMstType
}) => {
  const [onlySelectedMstScope, setOnlySelectedMstScope] = useState<boolean>(true);

  const displayedPriorities = onlySelectedMstScope
    ? priorities.filter(p => p.isSelectedInMST)
    : priorities;

  const totalRecommendedHours = displayedPriorities.reduce(
    (sum, p) => sum + p.recommendedHours,
    0
  );

  return (
    <div className="max-w-5xl mx-auto py-6 sm:py-8 px-4 sm:px-6">
      {/* Title & Advisory Banner */}
      <div className="mb-6 border-b border-white/10 pb-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
              <span>{subject.code}</span>
              <span>·</span>
              <span>Curriculum Strategy Engine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Study Priority & Revision Time Guide
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Ranked chapter checklist optimized for your upcoming {selectedMstType} (20 Marks).
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#0f172a] p-1 border border-white/10 rounded-xl text-xs self-start md:self-auto">
            <button
              onClick={() => setOnlySelectedMstScope(true)}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                onlySelectedMstScope
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Selected Scope Only
            </button>
            <button
              onClick={() => setOnlySelectedMstScope(false)}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                !onlySelectedMstScope
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Chapters
            </button>
          </div>
        </div>

        {/* Quick Summary Strip */}
        <div className="mt-4 p-3.5 bg-gradient-to-r from-emerald-950/60 via-[#0d1e29] to-emerald-950/60 border border-emerald-500/20 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-300 font-semibold">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Recommended Preparation Time: {totalRecommendedHours} Hours</span>
          </div>
          <div className="text-slate-400 text-[11px] font-mono">
            {displayedPriorities.length} Chapters ranked by past examination frequency
          </div>
        </div>
      </div>

      {/* Ranked Chapters List */}
      <div className="space-y-3">
        {displayedPriorities.map((item, index) => {
          const isHigh = item.priority === 'High';
          const isMedium = item.priority === 'Medium';

          return (
            <div
              key={index}
              className={`p-4 rounded-xl border transition-all ${
                isHigh
                  ? 'bg-[#0f172a] border-emerald-500/40 shadow-md ring-1 ring-emerald-500/20'
                  : isMedium
                  ? 'bg-[#0f172a]/80 border-amber-500/30'
                  : 'bg-[#0b121f] border-white/5 opacity-80'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-black shrink-0 ${
                      isHigh
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : isMedium
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    #{item.rank}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-white text-sm">{item.chapterName}</span>
                      <span className="text-[11px] font-mono text-slate-400">
                        (Unit {item.unitNumber})
                      </span>
                      {item.isSelectedInMST && (
                        <span className="text-[10px] px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                          In MST Scope
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.reason}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <div className="text-right">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                        isHigh
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : isMedium
                          ? 'bg-amber-500/20 text-amber-300'
                          : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {item.priority} Priority
                    </span>
                    <div className="text-[10px] text-slate-400 font-mono mt-1">
                      {item.recommendedHours} hrs revision
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
