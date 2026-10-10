import React from 'react';
import {
  Sparkles,
  FileText,
  BarChart3,
  BookOpen,
  Bookmark
} from 'lucide-react';
import { Subject, AcademicYear, BranchCode, MstType } from '../types';

interface HeaderProps {
  activeTab: 'predictions' | 'analytics' | 'questions' | 'saved';
  setActiveTab: (tab: 'predictions' | 'analytics' | 'questions' | 'saved') => void;
  selectedSubject: Subject;
  selectedYear: AcademicYear;
  selectedBranch: BranchCode;
  selectedMstType: MstType;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedSubject,
  selectedYear,
  selectedBranch,
  selectedMstType
}) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#060a14]/90 border-b border-white/10 shadow-2xl print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Institute Branding */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-slate-950 flex items-center justify-center font-black text-base shadow-[0_0_18px_rgba(5,223,114,0.4)]">
              Ψ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-extrabold tracking-tight text-white">
                  IET DAVV Intelligence
                </h1>
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300">
                  20 Marks MST
                </span>
              </div>
              <div className="text-[11px] text-slate-400 hidden sm:flex items-center gap-1.5 font-mono">
                <span className="text-emerald-400 font-semibold">{selectedBranch}</span>
                <span>·</span>
                <span>{selectedSubject.code}</span>
                <span>·</span>
                <span className="text-amber-300 font-medium">{selectedMstType}</span>
              </div>
            </div>
          </div>

          {/* Minimal 3-Tab Nav */}
          <nav className="flex items-center gap-1 p-1 bg-[#0d1424] border border-white/10 rounded-xl">
            <button
              onClick={() => setActiveTab('predictions')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'predictions'
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_12px_rgba(5,223,114,0.35)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Predicted Papers</span>
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_12px_rgba(5,223,114,0.35)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Weightage &</span> Syllabus
            </button>

            <button
              onClick={() => setActiveTab('questions')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'questions'
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_12px_rgba(5,223,114,0.35)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>PYQ Bank</span>
            </button>

            <button
              onClick={() => setActiveTab('saved')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'saved'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Saved Sessions"
            >
              <Bookmark className="w-3.5 h-3.5" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
