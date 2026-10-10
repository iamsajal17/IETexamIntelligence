import React, { useState } from 'react';
import { SubjectAnalytics } from '../../utils/analysisEngine';
import { Subject, AcademicYear, MstType } from '../../types';
import {
  BarChart3,
  PieChart,
  TrendingUp,
  FileSpreadsheet,
  Layers,
  Hash
} from 'lucide-react';

interface StatisticsDashboardProps {
  analytics: SubjectAnalytics;
  subject: Subject;
  selectedYear: AcademicYear;
  selectedMstType: MstType;
}

export const StatisticsDashboard: React.FC<StatisticsDashboardProps> = ({
  analytics,
  subject,
  selectedYear,
  selectedMstType
}) => {
  const [activeTab, setActiveTab] = useState<'frequency' | 'units' | 'types' | 'difficulty' | 'trends'>('frequency');

  // Export statistics as CSV
  const handleExportCSV = () => {
    const rows = [
      ['Chapter Topic', 'Unit', 'Question Count', 'Total Marks', 'Marks Weightage (%)'],
      ...analytics.chapterFrequency.map(c => [
        `"${c.chapter.replace(/"/g, '""')}"`,
        c.unit,
        c.count,
        c.marks,
        `${c.percentage}%`
      ])
    ];

    const csvContent = 'data:text/csv;charset=utf-8,' + rows.map(e => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${subject.code}_MST_Historical_Statistics.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const maxFrequency = Math.max(...analytics.chapterFrequency.map(c => c.count), 1);
  const maxUnitMarks = Math.max(...analytics.unitDistribution.map(u => u.marks), 1);

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-8 px-4 sm:px-6">
      {/* Header & Meta Summary */}
      <div className="mb-6 border-b border-white/10 pb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <span>{subject.code}</span>
              <span>·</span>
              <span>Examination Analytics Engine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Historical MST Statistics & Trends
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Empirical data derived from actual IET DAVV previous MST examination papers.
            </p>
          </div>

          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-[#0f172a] hover:bg-white/5 text-slate-200 rounded-xl text-xs font-semibold transition-colors self-start sm:self-auto cursor-pointer"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-amber-400" />
            <span>Export CSV</span>
          </button>
        </div>

        {/* Dataset Verification Cards */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-4 bg-[#0f172a]/90 border border-white/10 rounded-xl shadow-md">
            <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Papers Analyzed</div>
            <div className="text-xl font-extrabold text-white mt-1">
              {analytics.paperCount} Papers
            </div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">2020 – 2024 sessions</div>
          </div>

          <div className="p-4 bg-[#0f172a]/90 border border-white/10 rounded-xl shadow-md">
            <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Questions Categorized</div>
            <div className="text-xl font-extrabold text-white mt-1">
              {analytics.questionCount} Questions
            </div>
            <div className="text-[11px] text-emerald-400 mt-0.5 font-medium">100% verified IET papers</div>
          </div>

          <div className="p-4 bg-[#0f172a]/90 border border-white/10 rounded-xl shadow-md">
            <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">MST Scope Coverage</div>
            <div className="text-xl font-extrabold text-emerald-400 mt-1">
              {analytics.syllabusCoveragePct}%
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">of selected syllabus mapped</div>
          </div>

          <div className="p-4 bg-[#0f172a]/90 border border-white/10 rounded-xl shadow-md">
            <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Highest Yield Unit</div>
            <div className="text-xl font-extrabold text-amber-400 mt-1">
              Unit {analytics.unitDistribution[0]?.unit || 1}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {analytics.unitDistribution[0]?.percentage || 0}% historical marks
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Sub-tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 mb-6 overflow-x-auto no-scrollbar">
        {[
          { id: 'frequency', label: 'Chapter Frequency', icon: BarChart3 },
          { id: 'units', label: 'Unit Weightage', icon: Layers },
          { id: 'types', label: 'Question Types', icon: PieChart },
          { id: 'difficulty', label: 'Difficulty Distribution', icon: Hash },
          { id: 'trends', label: 'Historical Recurrence', icon: TrendingUp }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-t-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: Chapter-wise Question Frequency */}
      {activeTab === 'frequency' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-[#0f172a]/90 border border-white/10 p-5 rounded-2xl shadow-lg">
            <h3 className="text-sm font-bold text-white mb-1">
              Chapter-Wise Question Frequency
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Number of times questions from each chapter appeared across IET MST archives.
            </p>

            <div className="space-y-4">
              {analytics.chapterFrequency.slice(0, 8).map((ch, idx) => {
                const barWidth = Math.round((ch.count / maxFrequency) * 100);
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-200 truncate max-w-[280px]">
                        {ch.chapter}
                      </span>
                      <span className="text-amber-400 font-mono text-[11px] font-bold">
                        {ch.count} questions ({ch.marks} Marks)
                      </span>
                    </div>
                    <div className="w-full bg-[#0b121f] h-3 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500"
                        style={{ width: `${barWidth}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0f172a]/90 border border-white/10 p-5 rounded-2xl shadow-lg">
            <h3 className="text-sm font-bold text-white mb-1">
              Highest Repeating Questions
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Core questions that examiners routinely select.
            </p>

            <div className="space-y-3">
              {analytics.topRecurringTopics.slice(0, 5).map((top, idx) => (
                <div key={idx} className="p-3 bg-[#0b121f] rounded-xl border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white line-clamp-1">{top.topic}</span>
                    <span className="text-emerald-400 font-mono text-[11px] font-bold">{top.typicalMarks}M</span>
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Appeared in {top.frequency} papers</span>
                    <span className="text-amber-400 font-mono">{top.recurringYears.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Unit Weightage */}
      {activeTab === 'units' && (
        <div className="bg-[#0f172a]/90 border border-white/10 p-5 rounded-2xl shadow-lg space-y-4">
          <h3 className="text-sm font-bold text-white">Unit-Wise Marks Distribution</h3>
          <div className="space-y-3">
            {analytics.unitDistribution.map((u) => (
              <div key={u.unit} className="p-3 bg-[#0b121f] rounded-xl border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Unit {u.unit}: {u.title}</span>
                  <span className="text-emerald-400 font-mono font-bold">{u.percentage}% ({u.marks} Marks)</span>
                </div>
                <div className="w-full bg-[#070d18] h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full rounded-full"
                    style={{ width: `${Math.round((u.marks / maxUnitMarks) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Question Types */}
      {activeTab === 'types' && (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {analytics.typeDistribution.map((t) => (
            <div key={t.type} className="p-4 bg-[#0f172a]/90 border border-white/10 rounded-xl text-center space-y-1">
              <div className="text-xs uppercase font-mono font-bold text-slate-400">{t.type}</div>
              <div className="text-2xl font-black text-white">{t.percentage}%</div>
              <div className="text-[10px] text-slate-400 font-mono">{t.count} questions</div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: Difficulty Distribution */}
      {activeTab === 'difficulty' && (
        <div className="grid grid-cols-3 gap-3">
          {analytics.difficultyDistribution.map((d) => (
            <div key={d.difficulty} className="p-5 bg-[#0f172a]/90 border border-white/10 rounded-xl text-center space-y-2">
              <div className="text-xs uppercase font-mono font-bold text-slate-400">{d.difficulty}</div>
              <div className="text-3xl font-black text-white">{d.percentage}%</div>
              <div className="text-xs text-slate-400">{d.count} questions</div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 5: Historical Trends */}
      {activeTab === 'trends' && (
        <div className="bg-[#0f172a]/90 border border-white/10 p-5 rounded-2xl shadow-lg space-y-3">
          <h3 className="text-sm font-bold text-white">Year-by-Year Question Frequency</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {analytics.yearTrends.map((y) => (
              <div key={y.year} className="p-4 bg-[#0b121f] rounded-xl border border-white/5 text-center">
                <div className="text-xs font-mono text-amber-400 font-bold">{y.year}</div>
                <div className="text-2xl font-extrabold text-white mt-1">{y.count}</div>
                <div className="text-[10px] text-slate-400 uppercase mt-0.5">Questions</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
