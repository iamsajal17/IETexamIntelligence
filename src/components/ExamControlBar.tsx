import React, { useState } from 'react';
import { AcademicYear, BranchCode, Subject, SyllabusUnit, MstType } from '../types';
import { BRANCHES, SUBJECTS } from '../data/syllabusData';
import {
  Sparkles,
  SlidersHorizontal,
  ChevronDown,
  Check,
  RotateCcw,
  Camera,
  X
} from 'lucide-react';

interface ExamControlBarProps {
  selectedYear: AcademicYear;
  setSelectedYear: (y: AcademicYear) => void;
  selectedBranch: BranchCode;
  setSelectedBranch: (b: BranchCode) => void;
  selectedSubject: Subject;
  setSelectedSubject: (s: Subject) => void;
  selectedMstType: MstType;
  setSelectedMstType: (t: MstType) => void;
  selectedUnits: number[];
  setSelectedUnits: (units: number[]) => void;
  selectedChapters: string[];
  setSelectedChapters: (chapters: string[]) => void;
  onRegenerate: () => void;
  onOpenUploadModal?: () => void;
  isRegenerating: boolean;
}

export const ExamControlBar: React.FC<ExamControlBarProps> = ({
  selectedYear,
  setSelectedYear,
  selectedBranch,
  setSelectedBranch,
  selectedSubject,
  setSelectedSubject,
  selectedMstType,
  setSelectedMstType,
  selectedUnits,
  setSelectedUnits,
  selectedChapters,
  setSelectedChapters,
  onRegenerate,
  onOpenUploadModal,
  isRegenerating
}) => {
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);

  // Available subjects for selected year & branch
  const availableSubjects = SUBJECTS.filter(
    s => s.year === selectedYear && s.branches.includes(selectedBranch)
  );

  const handleYearSelect = (yr: AcademicYear) => {
    setSelectedYear(yr);
    const sub = SUBJECTS.find(s => s.year === yr && s.branches.includes(selectedBranch)) || SUBJECTS[0];
    setSelectedSubject(sub);
    resetUnits(sub, selectedMstType);
  };

  const handleBranchSelect = (br: BranchCode) => {
    setSelectedBranch(br);
    const sub = SUBJECTS.find(s => s.year === selectedYear && s.branches.includes(br)) || SUBJECTS[0];
    setSelectedSubject(sub);
    resetUnits(sub, selectedMstType);
  };

  const handleSubjectSelect = (sub: Subject) => {
    setSelectedSubject(sub);
    resetUnits(sub, selectedMstType);
  };

  const handleMstTypeSelect = (type: MstType) => {
    setSelectedMstType(type);
    resetUnits(selectedSubject, type);
  };

  const resetUnits = (sub: Subject, type: MstType) => {
    let target = [1, 2];
    if (type === 'MST-2') target = [3, 4];
    if (type === 'MST-3') target = [4, 5];
    let avail = sub.units.filter(u => target.includes(u.unitNumber));
    if (avail.length === 0) {
      avail = type === 'MST-3' ? sub.units.slice(-2) : sub.units.slice(0, 2);
    }
    const nums = avail.map(u => u.unitNumber);
    const chaps = avail.flatMap(u => u.topics.map(t => t.name));
    setSelectedUnits(nums.length > 0 ? nums : [sub.units[0]?.unitNumber || 1]);
    setSelectedChapters(chaps.length > 0 ? chaps : sub.units[0]?.topics.map(t => t.name) || []);
  };

  const toggleUnit = (u: SyllabusUnit) => {
    if (selectedUnits.includes(u.unitNumber)) {
      if (selectedUnits.length === 1) return;
      setSelectedUnits(selectedUnits.filter(num => num !== u.unitNumber));
      const topicNames = u.topics.map(t => t.name);
      setSelectedChapters(selectedChapters.filter(c => !topicNames.includes(c)));
    } else {
      setSelectedUnits([...selectedUnits, u.unitNumber].sort());
      const newTopics = u.topics.map(t => t.name);
      setSelectedChapters(Array.from(new Set([...selectedChapters, ...newTopics])));
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 pt-4 pb-1 print:hidden">
      <div className="bg-[#0b121f] border border-white/10 rounded-2xl p-3 sm:p-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Controls Cluster */}
          <div className="flex flex-wrap items-center gap-2 flex-1">
            {/* Year Selector */}
            <div className="flex items-center bg-[#070b14] border border-white/10 rounded-xl p-0.5 text-xs font-semibold">
              {(['1st Year', '2nd Year', '3rd Year', '4th Year'] as AcademicYear[]).map(yr => (
                <button
                  key={yr}
                  onClick={() => handleYearSelect(yr)}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    selectedYear === yr
                      ? 'bg-emerald-500 text-slate-950 font-black shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {yr.replace(' Year', 'Y')}
                </button>
              ))}
            </div>

            {/* Branch Selector */}
            <div className="flex items-center bg-[#070b14] border border-white/10 rounded-xl p-0.5 text-xs font-semibold">
              {BRANCHES.map(b => (
                <button
                  key={b.code}
                  onClick={() => handleBranchSelect(b.code)}
                  className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                    selectedBranch === b.code
                      ? 'bg-emerald-500 text-slate-950 font-black shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title={b.name}
                >
                  {b.code}
                </button>
              ))}
            </div>

            {/* Subject Dropdown */}
            <div className="relative">
              <select
                value={selectedSubject.code}
                onChange={e => {
                  const sub = availableSubjects.find(s => s.code === e.target.value);
                  if (sub) handleSubjectSelect(sub);
                }}
                className="appearance-none bg-[#070b14] border border-white/10 text-white rounded-xl py-1.5 pl-3 pr-8 text-xs font-bold focus:outline-hidden focus:border-emerald-400 cursor-pointer"
              >
                {availableSubjects.map(s => (
                  <option key={s.code} value={s.code} className="bg-[#0b121f] text-white">
                    {s.code}: {s.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>

            {/* MST-1 / MST-2 / MST-3 Switch */}
            <div className="flex items-center bg-[#070b14] border border-white/10 rounded-xl p-0.5 text-xs font-semibold">
              {(['MST-1', 'MST-2', 'MST-3'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => handleMstTypeSelect(type)}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    selectedMstType === type
                      ? 'bg-amber-400 text-slate-950 font-black shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {onOpenUploadModal && (
              <button
                onClick={onOpenUploadModal}
                className="px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Upload photo of physical PYQ paper to extract and reframe questions"
              >
                <Camera className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Upload Photo</span>
              </button>
            )}

            <button
              onClick={() => setShowSyllabusModal(true)}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="w-3 h-3 text-amber-400" />
              <span>Syllabus Scope</span>
            </button>

            <button
              onClick={onRegenerate}
              disabled={isRegenerating}
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs inline-flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(5,223,114,0.3)] hover:scale-102 cursor-pointer disabled:opacity-50"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isRegenerating ? 'Generating...' : 'Predict'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Syllabus Scope Modal */}
      {showSyllabusModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0b121f] border border-emerald-500/30 rounded-2xl max-w-lg w-full p-5 shadow-2xl text-slate-100 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="text-sm font-extrabold text-white">Syllabus Scope for {selectedMstType}</h3>
                <p className="text-[11px] text-slate-400">Select units included in your test</p>
              </div>
              <button
                onClick={() => setShowSyllabusModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1 no-scrollbar">
              {selectedSubject.units.map(unit => {
                const isSelected = selectedUnits.includes(unit.unitNumber);
                return (
                  <button
                    key={unit.unitNumber}
                    onClick={() => toggleUnit(unit)}
                    className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-[#0f1b2b] border-emerald-500/50 text-white'
                        : 'bg-white/5 border-white/5 text-slate-400 opacity-60'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-white">
                        Unit {unit.unitNumber}: {unit.title}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {unit.topics.length} chapters
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                        isSelected
                          ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                          : 'border-slate-600 bg-transparent'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
              <button
                onClick={() => resetUnits(selectedSubject, selectedMstType)}
                className="text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset to Standard {selectedMstType}</span>
              </button>
              <button
                onClick={() => {
                  setShowSyllabusModal(false);
                  onRegenerate();
                }}
                className="px-4 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 cursor-pointer"
              >
                Apply & Update Papers
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
