import React from 'react';
import { AnalysisResult } from '../types';
import { Bookmark, Clock, Trash2, ArrowRight, X } from 'lucide-react';

interface SavedSessionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedSessions: AnalysisResult[];
  onLoadSession: (session: AnalysisResult) => void;
  onDeleteSession: (sessionId: string) => void;
}

export const SavedSessionsModal: React.FC<SavedSessionsModalProps> = ({
  isOpen,
  onClose,
  savedSessions,
  onLoadSession,
  onDeleteSession
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0f172a] border border-emerald-500/30 rounded-2xl max-w-xl w-full shadow-2xl p-6 text-slate-100">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">
              Saved MST Analyses & Generated Papers
            </h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-400 mb-4">
          Quickly switch back to previous course predictions or syllabus configurations saved on this device.
        </p>

        <div className="space-y-3 max-h-80 overflow-y-auto pr-1 no-scrollbar">
          {savedSessions.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs">
              No saved analyses found yet. Run an analysis to automatically save here.
            </div>
          ) : (
            savedSessions.map((session) => (
              <div
                key={session.id}
                className="p-3.5 bg-[#0b121f] border border-white/10 rounded-xl flex items-center justify-between gap-3 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-emerald-400">
                      {session.subjectCode}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.2 bg-amber-500/20 text-amber-300 rounded-md font-bold">
                      {session.mstType} (20M)
                    </span>
                    <span className="text-xs text-slate-400 truncate">
                      {session.branch} · {session.year}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-white truncate mt-0.5">
                    {session.subjectName}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{new Date(session.createdAt).toLocaleDateString()}</span>
                    <span>·</span>
                    <span>{session.selectedUnits.length} Units selected</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => {
                      onLoadSession(session);
                      onClose();
                    }}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Load</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onDeleteSession(session.id)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                    title="Delete session"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
