export type AcademicYear = '1st Year' | '2nd Year' | '3rd Year' | '4th Year';

export type BranchCode = 'CSE' | 'IT' | 'ETC' | 'EI' | 'MECH' | 'CIVIL';

export interface BranchInfo {
  code: BranchCode;
  name: string;
  shortName: string;
  description: string;
}

export type QuestionType = 'numerical' | 'derivation' | 'conceptual' | 'theoretical' | 'proof';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface ChapterTopic {
  id: string;
  name: string;
  historicalFrequency?: number;
  weightagePct?: number;
}

export interface SyllabusUnit {
  unitNumber: number;
  title: string;
  topics: ChapterTopic[];
}

export interface Subject {
  code: string;
  name: string;
  year: AcademicYear;
  branches: BranchCode[];
  semester: number;
  credits: number | string;
  theoryHours: number;
  defaultMstMarks: number;
  defaultMstDuration: string;
  units: SyllabusUnit[];
  recommendedBooks?: string[];
}

export type MstType = 'MST-1' | 'MST-2' | 'MST-3';

export interface HistoricalQuestion {
  id: string;
  paperId: string;
  paperName: string;
  year: number;
  mstType: 'MST-1' | 'MST-2' | 'MST-3' | 'End-Sem';
  qNum: string;
  text: string;
  unitNumber: number;
  chapterTopic: string;
  marks: number;
  type: QuestionType;
  difficulty: DifficultyLevel;
  sourceUrl?: string;
  recurrenceNotes?: string;
  solution?: string;
  subjectCode?: string;
}

export interface HistoricalPaper {
  id: string;
  subjectCode: string;
  subjectName: string;
  year: number;
  mstType: 'MST-1' | 'MST-2' | 'MST-3';
  totalMarks: number;
  duration: string;
  source: 'IET Study Hub' | 'DAVV Archive' | 'Student Upload';
  verified: boolean;
  questions: HistoricalQuestion[];
}

export interface PredictedSubQuestion {
  part: string;
  text: string;
  marks: number;
  solutionOutline?: string;
}

export interface PredictedQuestion {
  qNum: string;
  text: string;
  subQuestions?: PredictedSubQuestion[];
  unit: number;
  chapter: string;
  marks: number;
  type: QuestionType;
  difficulty: DifficultyLevel;
  selectionRationale: string;
  solution: string;
}

export interface PredictedPaper {
  id: string;
  title: string;
  subtitle: string;
  focus: string;
  confidenceScore: number;
  confidenceNote: string;
  instructions: string[];
  totalMarks: number;
  duration: string;
  questions: PredictedQuestion[];
  generatedFromImage?: boolean;
}

export interface StudyPriority {
  rank: number;
  unitNumber: number;
  chapterName: string;
  priority: 'High' | 'Medium' | 'Low';
  weightagePct: number;
  frequencyCount: number;
  recommendedHours: number;
  reason: string;
  confidencePct: number;
  isSelectedInMST: boolean;
}

export interface AnalysisResult {
  id: string;
  createdAt: string;
  subjectCode: string;
  subjectName: string;
  branch: BranchCode;
  year: AcademicYear;
  mstType: 'MST-1' | 'MST-2' | 'MST-3';
  selectedUnits: number[];
  selectedChapters: string[];
  totalHistoricalPapers: number;
  totalHistoricalQuestions: number;
  predictedPapers: PredictedPaper[];
  priorities: StudyPriority[];
  generationSource?: 'knowledge-base' | 'uploaded-image';
}
