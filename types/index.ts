export interface BookIdea {
  id: string;
  title: string[];
  genre: string;
  concept: string;
  mainCharacter: string;
  setting: string;
  conflict: string;
  targetAudience: string;
  openingLine: string;
  themes: string[];
  generatedAt: Date;
}

export interface GeneratorOptions {
  bookType: 'fiction' | 'non-fiction';
  genre: string;
  length: 'short-story' | 'novella' | 'novel';
  targetAge: 'children' | 'young-adult' | 'adult';
  tone: 'light' | 'serious' | 'humorous' | 'dark';
}

export interface FictionTemplate {
  genres: string[];
  concepts: string[];
  characters: string[];
  settings: string[];
  conflicts: string[];
  themes: string[];
  openingLines: string[];
}

export interface NonFictionTemplate {
  categories: string[];
  topics: string[];
  approaches: string[];
  targetAudiences: string[];
  formats: string[];
}

export interface WritingTip {
  id: string;
  category: string;
  title: string;
  content: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}