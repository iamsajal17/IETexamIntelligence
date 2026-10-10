import React, { useState } from 'react';
import {
  AcademicYear,
  BranchCode,
  Subject,
  SyllabusUnit,
  MstType
} from '../../types';
import { BRANCHES, SUBJECTS } from '../../data/syllabusData';
import { GenerationOptionsModal } from './GenerationOptionsModal';
import {
  GraduationCap,
  Layers,
  BookMarked,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Check,
  Calendar,
  Zap,
  Clock,
  Camera,
  ShieldCheck
} from 'lucide-react';

interface SetupWizardProps {
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
  onStartAnalysis: () => void;
  onGenerateFromImage?: (imageBase64: string, mimeType: string) => Promise<void>;
  isAnalyzing: boolean;
  analysisProgress: number;
}

export const SetupWizard: React.FC<SetupWizardProps> = ({
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
  onStartAnalysis,
  onGenerateFromImage,
  isAnalyzing,
  analysisProgress
}) => {
  const [showOptionsModal, setShowOptionsModal] = useState<boolean>(false);

  // Available subjects for the selected year & branch
  const availableSubjects = SUBJECTS.filter(
    s => s.year === selectedYear && s.branches.includes(selectedBranch)
  );

  // Switch year
  const handleYearChange = (year: AcademicYear) => {
    setSelectedYear(year);
    const firstSub = SUBJECTS.find(s => s.year === year && s.branches.includes(selectedBranch)) || SUBJECTS[0];
    setSelectedSubject(firstSub);
    resetToDefaultUnits(firstSub, selectedMstType);
  };

  // Switch branch
  const handleBranchChange = (branch: BranchCode) => {
    setSelectedBranch(branch);
    const firstSub = SUBJECTS.find(s => s.year === selectedYear && s.branches.includes(branch)) || SUBJECTS[0];
    setSelectedSubject(firstSub);
    resetToDefaultUnits(firstSub, selectedMstType);
  };

  // Switch subject
  const handleSubjectChange = (subject: Subject) => {
    setSelectedSubject(subject);
    resetToDefaultUnits(subject, selectedMstType);
  };

  // Default syllabus scope: MST-1 covers Units 1 & 2; MST-2 covers Units 3 & 4; MST-3 covers Units 4 & 5 / Unit 5
  const resetToDefaultUnits = (sub: Subject, type: MstType) => {
    let targetUnits = [1, 2];
    if (type === 'MST-2') targetUnits = [3, 4];
    if (type === 'MST-3') targetUnits = [4, 5];

    let availableUnits = sub.units.filter(u => targetUnits.includes(u.unitNumber));
    if (availableUnits.length === 0) {
      availableUnits = type === 'MST-3' ? sub.units.slice(-2) : sub.units.slice(0, 2);
    }

    const unitNums = availableUnits.map(u => u.unitNumber);
    const chaps = availableUnits.flatMap(u => u.topics.map(t => t.name));
    setSelectedUnits(unitNums.length > 0 ? unitNums : [sub.units[0]?.unitNumber || 1]);
    setSelectedChapters(chaps.length > 0 ? chaps : sub.units[0]?.topics.map(t => t.name) || []);
  };

  // Toggle single unit
  const toggleUnit = (unit: SyllabusUnit) => {
    const isSelected = selectedUnits.includes(unit.unitNumber);
    if (isSelected) {
      if (selectedUnits.length === 1) return; // Keep at least one unit
      setSelectedUnits(selectedUnits.filter(u => u !== unit.unitNumber));
      const topicNames = unit.topics.map(t => t.name);
      setSelectedChapters(selectedChapters.filter(c => !topicNames.includes(c)));
    } else {
      setSelectedUnits([...selectedUnits, unit.unitNumber].sort());
      const newTopics = unit.topics.map(t => t.name);
      setSelectedChapters(Array.from(new Set([...selectedChapters, ...newTopics])));
    }
  };

  // Toggle single chapter topic
  const toggleChapter = (chapterName: string) => {
    if (selectedChapters.includes(chapterName)) {
      if (selectedChapters.length === 1) return;
      setSelectedChapters(selectedChapters.filter(c => c !== chapterName));
    } else {
      setSelectedChapters([...selectedChapters, chapterName]);
    }
  };

  // Select all units
  const handleSelectAll = () => {
    const allUnitNums = selectedSubject.units.map(u => u.unitNumber);
    const allTopics = selectedSubject.units.flatMap(u => u.topics.map(t => t.name));
    setSelectedUnits(allUnitNums);
    setSelectedChapters(allTopics);
  };

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-10 px-4 sm:px-6 space-y-8">
      {/* Sleek Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c1322] via-[#0e1c2e] to-[#0a1520] border border-emerald-500/20 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>IET DAVV Indore · Mid-Semester Test Intelligence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Predict 20-Mark Practice Papers from Authentic PYQs
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              In IET DAVV, <span className="text-amber-300 font-semibold">80–85% of exam questions</span> are direct repeats of past papers. Select your academic year, branch, and syllabus to generate 4 balanced 20-mark practice papers with full LaTeX solutions.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">20</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Max Marks</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400">1 Hr</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Duration</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">4 Sets</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Predicted</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Step Interactive Configuration Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Step 1 & 2: Year & Branch */}
        <div className="lg:col-span-5 space-y-6">
          {/* Year Selection */}
          <div className="p-5 rounded-2xl bg-[#0f172a]/90 border border-white/10 shadow-lg space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-2 text-white">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                1. Academic Year
              </span>
              <span className="text-emerald-400 font-mono">{selectedYear}</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {(['1st Year', '2nd Year', '3rd Year', '4th Year'] as AcademicYear[]).map((yr) => {
                const isSelected = selectedYear === yr;
                return (
                  <button
                    key={yr}
                    onClick={() => handleYearChange(yr)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {yr}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Branch Selection */}
          <div className="p-5 rounded-2xl bg-[#0f172a]/90 border border-white/10 shadow-lg space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-2 text-white">
                <Layers className="w-4 h-4 text-emerald-400" />
                2. Branch of Engineering
              </span>
              <span className="text-emerald-400 font-mono">{selectedBranch}</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {BRANCHES.map((b) => {
                const isSelected = selectedBranch === b.code;
                return (
                  <button
                    key={b.code}
                    onClick={() => handleBranchChange(b.code)}
                    className={`p-2.5 rounded-xl text-xs font-bold transition-all text-center border flex flex-col items-center justify-center gap-1 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span className="font-mono text-sm">{b.code}</span>
                    <span className="text-[10px] opacity-80 truncate max-w-full font-normal">
                      {b.shortName}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Target MST Selection (MST-1, MST-2, MST-3) */}
          <div className="p-5 rounded-2xl bg-[#0f172a]/90 border border-white/10 shadow-lg space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-2 text-white">
                <Calendar className="w-4 h-4 text-amber-400" />
                Target Mid-Semester Exam
              </span>
              <span className="text-amber-400 font-mono font-bold">20 Marks · 1 Hour</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(['MST-1', 'MST-2', 'MST-3'] as const).map((type) => {
                const isSelected = selectedMstType === type;
                return (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedMstType(type);
                      resetToDefaultUnits(selectedSubject, type);
                    }}
                    className={`py-2 px-1.5 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.3)] font-extrabold'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div>{type}</div>
                    <div className="text-[9px] opacity-85 mt-0.5 font-normal">
                      {type === 'MST-1' ? 'U1 & U2' : type === 'MST-2' ? 'U3 & U4' : 'U5 / Scope'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Step 3: Subject Selection */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-5 rounded-2xl bg-[#0f172a]/90 border border-white/10 shadow-lg space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-2 text-white">
                <BookMarked className="w-4 h-4 text-emerald-400" />
                3. Select Subject ({availableSubjects.length} Available)
              </span>
              <span className="text-emerald-400 font-mono">{selectedSubject.code}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1 no-scrollbar">
              {availableSubjects.map((sub) => {
                const isSelected = selectedSubject.code === sub.code;
                return (
                  <button
                    key={sub.code}
                    onClick={() => handleSubjectChange(sub)}
                    className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-950/60 border-emerald-400 text-white shadow-md ring-1 ring-emerald-400/50'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-bold text-emerald-300">
                        {sub.code}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                        Sem {sub.semester}
                      </span>
                    </div>
                    <div className="font-bold text-xs leading-snug line-clamp-1">
                      {sub.name}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1.5">
                      <span>{sub.units.length} Units</span>
                      <span>·</span>
                      <span className="text-amber-400 font-medium">MST: 20 Marks</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Syllabus & Units Checklist */}
          <div className="p-5 rounded-2xl bg-[#0f172a]/90 border border-white/10 shadow-lg space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs font-semibold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  4. Select Syllabus Scope for {selectedMstType}
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  {selectedUnits.length} Units &amp; {selectedChapters.length} Chapters in exam scope
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleSelectAll}
                  className="px-2.5 py-1 text-xs rounded-lg bg-white/10 text-slate-300 hover:bg-white/15 transition-colors font-medium cursor-pointer"
                >
                  Select All
                </button>
                <button
                  onClick={() => resetToDefaultUnits(selectedSubject, selectedMstType)}
                  className="px-2.5 py-1 text-xs rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-colors font-medium flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset {selectedMstType} Scope
                </button>
              </div>
            </div>

            {/* Units list */}
            <div className="space-y-3 max-h-72 overflow-y-auto pr-1 no-scrollbar">
              {selectedSubject.units.map((unit) => {
                const isUnitSelected = selectedUnits.includes(unit.unitNumber);
                return (
                  <div
                    key={unit.unitNumber}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isUnitSelected
                        ? 'bg-[#131d2e] border-emerald-500/40 shadow-sm'
                        : 'bg-white/5 border-white/5 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <button
                        onClick={() => toggleUnit(unit)}
                        className="flex items-center gap-2.5 text-left font-semibold text-xs text-white hover:text-emerald-300 cursor-pointer"
                      >
                        <div
                          className={`w-4 h-4 rounded-md flex items-center justify-center border transition-colors ${
                            isUnitSelected
                              ? 'bg-emerald-500 border-emerald-400 text-white'
                              : 'border-slate-500 bg-transparent'
                          }`}
                        >
                          {isUnitSelected && <Check className="w-3 h-3" />}
                        </div>
                        <span className="font-mono text-emerald-400">Unit {unit.unitNumber}:</span>
                        <span>{unit.title}</span>
                      </button>
                      <span className="text-[10px] font-mono text-slate-400">
                        {unit.topics.length} topics
                      </span>
                    </div>

                    {/* Topics badges */}
                    {isUnitSelected && (
                      <div className="pl-6.5 flex flex-wrap gap-1.5 mt-2">
                        {unit.topics.map((t) => {
                          const isChapSelected = selectedChapters.includes(t.name);
                          return (
                            <button
                              key={t.id}
                              onClick={() => toggleChapter(t.name)}
                              className={`text-[10px] px-2 py-0.5 rounded-md font-medium transition-all cursor-pointer ${
                                isChapSelected
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                  : 'bg-white/5 text-slate-400 border border-white/5 hover:text-white'
                              }`}
                            >
                              {t.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Dual Option Action Bar */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950 via-[#0c1c28] to-emerald-950 border border-emerald-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-left">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0">
            <Zap className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span>Ready for {selectedSubject.name}</span>
              <span className="px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">
                20 Marks · {selectedChapters.length} Chapters
              </span>
            </div>
            <div className="text-xs text-slate-300 mt-0.5">
              Choose between Uploading Physical PYQ Paper Photos (Extract &amp; Reframe) or Generating via AI Knowledge Base.
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowOptionsModal(true)}
          disabled={isAnalyzing}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-102 active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
        >
          {isAnalyzing ? (
            <>
              <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              <span>Analyzing ({analysisProgress}%)...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Generate 20-Mark Predicted Papers</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </>
          )}
        </button>
      </div>

      {/* Generation Options Modal (Upload Image vs Knowledge Base) */}
      <GenerationOptionsModal
        isOpen={showOptionsModal}
        onClose={() => setShowOptionsModal(false)}
        selectedSubject={selectedSubject}
        selectedMstType={selectedMstType}
        selectedUnits={selectedUnits}
        selectedChapters={selectedChapters}
        onGenerateFromAI={onStartAnalysis}
        onGenerateFromImage={onGenerateFromImage || (async () => onStartAnalysis())}
        isGenerating={isAnalyzing}
        generationProgress={analysisProgress}
      />
    </div>
  );
};
