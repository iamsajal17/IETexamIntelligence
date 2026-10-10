import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  Sparkles,
  FileText,
  X,
  Camera,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Layers,
  Zap,
  RotateCcw,
  Image as ImageIcon
} from 'lucide-react';
import { Subject, MstType } from '../../types';
import { getSampleIetDavvPaperBase64 } from '../../utils/samplePaperImage';

interface GenerationOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSubject: Subject;
  selectedMstType: MstType;
  selectedUnits: number[];
  selectedChapters: string[];
  onGenerateFromAI: () => void;
  onGenerateFromImage: (imageBase64: string, mimeType: string) => Promise<void>;
  isGenerating: boolean;
  generationProgress: number;
}

export const GenerationOptionsModal: React.FC<GenerationOptionsModalProps> = ({
  isOpen,
  onClose,
  selectedSubject,
  selectedMstType,
  selectedUnits,
  selectedChapters,
  onGenerateFromAI,
  onGenerateFromImage,
  isGenerating,
  generationProgress
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [expandedOption, setExpandedOption] = useState<'upload' | 'ai'>('upload');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please select an image file (JPG, PNG, WEBP).');
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setErrorMessage('Image size must be under 20MB.');
      return;
    }

    setErrorMessage(null);
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleLoadSampleImage = () => {
    const sampleDataUrl = getSampleIetDavvPaperBase64();
    setImagePreviewUrl(sampleDataUrl);
    setSelectedFile(null); // Marked as sample
    setErrorMessage(null);
  };

  const handleStartImageGeneration = async () => {
    if (!imagePreviewUrl) {
      setErrorMessage('Please upload or select an exam paper image first.');
      return;
    }

    try {
      await onGenerateFromImage(imagePreviewUrl, 'image/jpeg');
      onClose();
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to process paper image. Falling back to knowledge base.');
    }
  };

  const handleStartAiGeneration = () => {
    onGenerateFromAI();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0a0f1d] border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.2)] overflow-hidden text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Glow effects */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-56 h-56 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="relative z-10 px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                IET DAVV Question Paper Engine
              </span>
              <span className="text-amber-400 font-mono text-xs font-semibold">20 Marks · 1 Hour</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
              Choose Question Paper Generation Mode
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Subject: <span className="text-emerald-400 font-medium">{selectedSubject.name}</span> ({selectedSubject.code}) · <span className="text-white font-medium">{selectedMstType}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            disabled={isGenerating}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="relative z-10 p-6 space-y-5 max-h-[78vh] overflow-y-auto no-scrollbar">
          
          {/* OPTION 1: Upload Image (Highest Accuracy Mode) */}
          <div className={`rounded-2xl border transition-all ${
            expandedOption === 'upload'
              ? 'bg-gradient-to-br from-[#0e1a2d] to-[#0c1424] border-emerald-500/50 shadow-lg ring-1 ring-emerald-500/30'
              : 'bg-white/5 border-white/10 hover:border-emerald-500/30'
          }`}>
            <div
              onClick={() => setExpandedOption('upload')}
              className="p-4 sm:p-5 cursor-pointer flex items-start justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/30 to-teal-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-extrabold text-sm sm:text-base text-white">
                      1. Upload PYQ Paper Image(s)
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold">
                      ★ Most Accurate
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Upload photos of real IET DAVV test papers. The system extracts questions, reframes them with altered digits &amp; wordings while keeping the core concept identical, and predicts 4 high-yield 20-mark practice papers.
                  </p>
                </div>
              </div>
            </div>

            {/* Expanded Upload Dropbox Menu */}
            {expandedOption === 'upload' && (
              <div className="px-4 sm:px-5 pb-5 pt-1 space-y-4 border-t border-white/5">
                {/* Drag and Drop Box */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative p-5 rounded-xl border-2 border-dashed transition-all cursor-pointer text-center ${
                    isDragging
                      ? 'border-emerald-400 bg-emerald-500/10'
                      : imagePreviewUrl
                      ? 'border-emerald-500/40 bg-emerald-950/20'
                      : 'border-slate-700 hover:border-emerald-500/50 bg-black/20 hover:bg-white/5'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
                    className="hidden"
                  />

                  {imagePreviewUrl ? (
                    <div className="space-y-3">
                      <div className="relative inline-block max-h-48 rounded-lg overflow-hidden border border-white/20 shadow-md">
                        <img
                          src={imagePreviewUrl}
                          alt="Paper Preview"
                          className="max-h-44 w-auto object-contain bg-white/5"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setImagePreviewUrl(null);
                            setSelectedFile(null);
                          }}
                          className="absolute top-2 right-2 p-1.5 rounded-full bg-black/80 hover:bg-red-900 text-white transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-xs font-semibold text-emerald-300 flex items-center justify-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>{selectedFile ? selectedFile.name : 'Sample IET DAVV MST Paper Loaded'}</span>
                        <span className="text-slate-400 text-[10px]">(Click to replace)</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 py-2">
                      <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <UploadCloud className="w-6 h-6" />
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        Click to browse or drop physical paper photo here
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Supports PNG, JPG, JPEG, WEBP or mobile camera snapshot
                      </div>
                    </div>
                  )}
                </div>

                {/* Instant Sample Button & Error Alert */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={handleLoadSampleImage}
                    className="text-xs px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 transition-all font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Try with Sample IET DAVV MST Paper</span>
                  </button>

                  <span className="text-[11px] text-slate-400">
                    Max size: 20MB · Multimodal Extraction
                  </span>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Launch Image Generation Button */}
                <button
                  type="button"
                  onClick={handleStartImageGeneration}
                  disabled={!imagePreviewUrl || isGenerating}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Analyzing &amp; Reframing Paper ({generationProgress}%)...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 text-slate-950" />
                      <span>Extract &amp; Predict Reframed 20-Mark Paper</span>
                      <ArrowRight className="w-4 h-4 text-slate-950" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* OPTION 2: Generate Through AI & Knowledge Base */}
          <div className={`rounded-2xl border transition-all ${
            expandedOption === 'ai'
              ? 'bg-gradient-to-br from-[#121c30] to-[#0c1424] border-cyan-500/50 shadow-lg ring-1 ring-cyan-500/30'
              : 'bg-white/5 border-white/10 hover:border-cyan-500/30'
          }`}>
            <div
              onClick={() => setExpandedOption('ai')}
              className="p-4 sm:p-5 cursor-pointer flex items-start justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm sm:text-base text-white">
                      2. Generate via AI &amp; IET Knowledge Base
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono">
                      Fast AI Mode
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Uses the IET Study Hub past question bank and syllabus rules. Questions are <span className="text-amber-300 font-semibold">evenly distributed across all {selectedChapters.length} selected chapters</span> (never restricted to one chapter).
                  </p>
                </div>
              </div>
            </div>

            {/* Expanded AI Option */}
            {expandedOption === 'ai' && (
              <div className="px-4 sm:px-5 pb-5 pt-1 space-y-4 border-t border-white/5">
                <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-center justify-between text-white font-semibold">
                    <span>Syllabus Scope Check:</span>
                    <span className="text-emerald-400 font-mono">{selectedChapters.length} Chapters Active</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Each predicted paper will contain 4 questions of 5 marks each (20 Marks total) balanced across selected units ({selectedUnits.join(', ')}).
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleStartAiGeneration}
                  disabled={isGenerating}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Generating Balanced Papers ({generationProgress}%)...</span>
                    </>
                  ) : (
                    <>
                      <Layers className="w-4 h-4" />
                      <span>Generate 4 Sets from Knowledge Base</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-black/40 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <span>IET DAVV Indore Mid-Semester Standards</span>
          <span className="font-mono text-emerald-400">Strictly 20 Marks · 4 Questions</span>
        </div>
      </div>
    </div>
  );
};
