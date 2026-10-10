import React, { useState, useEffect } from 'react';
import {
  DifficultyLevel,
  HistoricalQuestion,
  QuestionType,
  Subject
} from '../../types';
import {
  Search,
  UploadCloud,
  ExternalLink,
  FileText,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  X,
  HelpCircle,
  BookOpen,
  Filter
} from 'lucide-react';

interface QuestionBankViewProps {
  subject: Subject;
  historicalQuestions: HistoricalQuestion[];
  onAddExtractedQuestions: (questions: HistoricalQuestion[]) => void;
  selectedUnits: number[];
  selectedChapters: string[];
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({
  subject,
  historicalQuestions,
  onAddExtractedQuestions
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<number | 'all'>('all');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<QuestionType | 'all'>('all');
  const [selectedDiffFilter, setSelectedDiffFilter] = useState<DifficultyLevel | 'all'>('all');

  const [inspectQuestion, setInspectQuestion] = useState<HistoricalQuestion | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadText, setUploadText] = useState('');
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [isProcessingUpload, setIsProcessingUpload] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState<string | null>(null);

  // Filter questions
  const filteredQuestions = historicalQuestions.filter(q => {
    if (selectedUnitFilter !== 'all' && q.unitNumber !== selectedUnitFilter) return false;
    if (selectedTypeFilter !== 'all' && q.type !== selectedTypeFilter) return false;
    if (selectedDiffFilter !== 'all' && q.difficulty !== selectedDiffFilter) return false;
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      const inText = q.text.toLowerCase().includes(term);
      const inChapter = q.chapterTopic.toLowerCase().includes(term);
      const inNotes = q.recurrenceNotes?.toLowerCase().includes(term);
      if (!inText && !inChapter && !inNotes) return false;
    }
    return true;
  });

  // Group by chapter
  const groupedByChapter: Record<string, HistoricalQuestion[]> = {};
  filteredQuestions.forEach(q => {
    if (!groupedByChapter[q.chapterTopic]) {
      groupedByChapter[q.chapterTopic] = [];
    }
    groupedByChapter[q.chapterTopic].push(q);
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadFile(file);
    setUploadError(null);

    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setUploadPreview(null);
    }
  };

  const handleProcessUpload = async () => {
    setIsProcessingUpload(true);
    setUploadError(null);
    setUploadSuccessMessage(null);

    try {
      let imageBase64: string | undefined;
      let mimeType: string | undefined;

      if (uploadFile && uploadFile.type.startsWith('image/')) {
        const base64String = uploadPreview?.split(',')[1];
        imageBase64 = base64String;
        mimeType = uploadFile.type;
      }

      const res = await fetch('/api/analyze-paper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subjectCode: subject.code,
          subjectName: subject.name,
          rawText: uploadText,
          imageBase64,
          mimeType,
          year: new Date().getFullYear(),
          mstType: 'MST-1'
        })
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Extraction failed');

      if (json.data && Array.isArray(json.data.questions) && json.data.questions.length > 0) {
        const extracted: HistoricalQuestion[] = json.data.questions.map((q: any, i: number) => ({
          id: `extracted-${Date.now()}-${i}`,
          paperId: `student-upload-${Date.now()}`,
          paperName: json.data.paperTitle || 'Student Uploaded Paper',
          year: new Date().getFullYear(),
          mstType: 'MST-1',
          qNum: q.questionNumber || `Q.${i + 1}`,
          text: q.text,
          unitNumber: q.unitNumber || 1,
          chapterTopic: q.chapterTopic || 'Uploaded Topic',
          marks: q.marks || 5,
          type: (q.type?.toLowerCase() as QuestionType) || 'numerical',
          difficulty: (q.difficulty?.toLowerCase() as DifficultyLevel) || 'medium',
          recurrenceNotes: q.recurrenceNotes || 'OCR Extracted from Student Upload'
        }));

        onAddExtractedQuestions(extracted);
        setUploadSuccessMessage(`Successfully extracted and categorized ${extracted.length} questions.`);
        setTimeout(() => {
          setShowUploadModal(false);
          setUploadText('');
          setUploadFile(null);
          setUploadPreview(null);
          setUploadSuccessMessage(null);
        }, 1200);
      } else {
        throw new Error('Could not identify discrete questions. Check image clarity.');
      }
    } catch (err: any) {
      setUploadError(err.message || 'Error occurred during extraction.');
    } finally {
      setIsProcessingUpload(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-8 px-4 sm:px-6 space-y-6">
      {/* Header Strip */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
            {subject.code} · Historical Archive
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Previous Year MST Question Bank
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Genuine past examination questions extracted from IET DAVV archives (2020–2024).
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <a
            href="https://iet-study-hub-2.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2 border border-white/10 bg-[#0f172a] hover:bg-white/5 text-slate-200 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
          >
            <span>IET Study Hub</span>
            <ExternalLink className="w-3 h-3 text-amber-400" />
          </a>

          <button
            onClick={() => setShowUploadModal(true)}
            className="px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-500 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
          >
            <UploadCloud className="w-3.5 h-3.5 text-amber-300" />
            <span>Upload Paper (OCR)</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#0f172a]/95 border border-white/10 p-4 rounded-xl shadow-lg space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search numericals, theorems, formulas, or concepts (e.g. 'Leibnitz', 'Asymptotes', 'Zener', 'Lagrange')..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs bg-[#0b121f] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-hidden focus:border-emerald-500"
          />
        </div>

        {/* Quick Filter Buttons */}
        <div className="flex items-center gap-2 flex-wrap text-xs pt-1 border-t border-white/5">
          <span className="text-[10px] font-mono uppercase text-amber-400 font-bold mr-1">
            Type:
          </span>
          {(['all', 'numerical', 'derivation', 'proof', 'conceptual'] as (QuestionType | 'all')[]).map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTypeFilter(t)}
              className={`px-2.5 py-1 rounded-lg font-mono capitalize transition-all cursor-pointer ${
                selectedTypeFilter === t
                  ? 'bg-emerald-600 text-white font-bold'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}

          <span className="text-[10px] font-mono uppercase text-amber-400 font-bold ml-3 mr-1">
            Difficulty:
          </span>
          {(['all', 'easy', 'medium', 'hard'] as (DifficultyLevel | 'all')[]).map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDiffFilter(d)}
              className={`px-2.5 py-1 rounded-lg font-mono capitalize transition-all cursor-pointer ${
                selectedDiffFilter === d
                  ? 'bg-emerald-600 text-white font-bold'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Questions Grouped Chapter-wise */}
      <div className="space-y-6">
        {Object.keys(groupedByChapter).length === 0 ? (
          <div className="p-12 text-center bg-[#0f172a] border border-white/10 rounded-2xl">
            <BookOpen className="w-8 h-8 text-slate-500 mx-auto mb-2" />
            <p className="text-slate-300 font-semibold text-sm">No questions found matching your filter criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTypeFilter('all');
                setSelectedDiffFilter('all');
                setSelectedUnitFilter('all');
              }}
              className="mt-3 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          Object.entries(groupedByChapter).map(([chapter, questions]) => (
            <div key={chapter} className="bg-[#0f172a]/90 border border-white/10 rounded-2xl p-5 shadow-lg space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <h3 className="font-bold text-white text-sm">
                    {chapter}
                  </h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/20">
                  {questions.length} Questions
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {questions.map((q) => (
                  <div
                    key={q.id}
                    onClick={() => setInspectQuestion(q)}
                    className="p-4 rounded-xl bg-[#0b121f] border border-white/5 hover:border-emerald-500/40 transition-all cursor-pointer space-y-2 group"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-amber-400 font-bold">
                        {q.qNum} · Unit {q.unitNumber}
                      </span>
                      <span className="font-mono text-emerald-300 font-bold px-2 py-0.5 rounded bg-emerald-500/15">
                        {q.marks} Marks
                      </span>
                    </div>

                    <p className="text-xs text-slate-200 line-clamp-3 group-hover:text-white transition-colors leading-relaxed">
                      {q.text}
                    </p>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
                      <span className="uppercase font-mono text-slate-400">{q.type}</span>
                      <span className="text-slate-500">{q.paperName || 'IET Archive'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Inspect Modal */}
      {inspectQuestion && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0f172a] border border-emerald-500/40 rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-amber-400 font-bold">{inspectQuestion.qNum}</span>
                <span className="text-xs text-slate-400">· {inspectQuestion.chapterTopic}</span>
              </div>
              <button
                onClick={() => setInspectQuestion(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold text-white leading-relaxed">
                {inspectQuestion.text}
              </div>

              {inspectQuestion.solution && (
                <div className="p-3.5 rounded-xl bg-[#070d18] border border-white/10 space-y-2">
                  <div className="text-xs font-mono font-bold text-amber-400">Worked Solution:</div>
                  <pre className="text-xs font-mono text-emerald-200 whitespace-pre-wrap leading-relaxed overflow-x-auto">
                    {inspectQuestion.solution}
                  </pre>
                </div>
              )}

              <div className="text-xs text-slate-400 flex items-center justify-between pt-2 border-t border-white/10">
                <span>Source: {inspectQuestion.paperName}</span>
                <span className="font-mono text-emerald-400 font-bold">{inspectQuestion.marks} Marks</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload Paper Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0f172a] border border-emerald-500/40 rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <UploadCloud className="w-4 h-4 text-emerald-400" />
                Upload Paper for AI OCR Extraction
              </h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Upload Paper Image (JPG/PNG) or Paste Text:
                </label>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                  className="w-full text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-emerald-600 file:text-white file:font-bold hover:file:bg-emerald-500"
                />
              </div>

              {uploadPreview && (
                <div className="mt-2 p-2 bg-[#0b121f] rounded-lg border border-white/10 max-h-40 overflow-hidden">
                  <img src={uploadPreview} alt="Preview" className="max-h-36 object-contain mx-auto" />
                </div>
              )}

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Or paste questions text directly:
                </label>
                <textarea
                  rows={4}
                  value={uploadText}
                  onChange={(e) => setUploadText(e.target.value)}
                  placeholder="Paste question paper text here..."
                  className="w-full p-2.5 rounded-lg bg-[#0b121f] border border-white/10 text-white placeholder-slate-500 focus:outline-hidden focus:border-emerald-500 text-xs"
                />
              </div>

              {uploadError && (
                <div className="p-2.5 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs">
                  {uploadError}
                </div>
              )}

              {uploadSuccessMessage && (
                <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs">
                  {uploadSuccessMessage}
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/10">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-3.5 py-1.5 rounded-lg bg-white/5 text-slate-300 text-xs hover:bg-white/10"
              >
                Cancel
              </button>
              <button
                onClick={handleProcessUpload}
                disabled={isProcessingUpload || (!uploadFile && !uploadText.trim())}
                className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold disabled:opacity-50 cursor-pointer"
              >
                {isProcessingUpload ? 'Extracting with AI...' : 'Extract & Categorize'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
