export type SeverityLevel = 'high' | 'medium' | 'low';

export interface SecurityVulnerability {
  severity: SeverityLevel;
  issue: string;
  lineNumber: number;
  description: string;
  fix: string;
}

export interface PerformanceIssue {
  type: string;
  location: string;
  impact: string;
  suggestion: string;
}

export interface CodeSmell {
  smell: string;
  explanation: string;
  refactoringPattern: string;
}

export interface RefactoringSuggestion {
  before: string;
  after: string;
  explanation: string;
  benefit: string;
}

export interface LearningResource {
  title: string;
  url: string;
  type: string;
}

export interface QualityMetrics {
  security: number;
  performance: number;
  maintainability: number;
}

export interface CodeQualityScore {
  score: number;
  metrics: QualityMetrics;
}

export type ComponentType = 
  | 'SecurityVulnerabilityCard'
  | 'PerformanceIssuePanel'
  | 'CodeSmellAlert'
  | 'RefactoringSuggestion'
  | 'LearningResourcesList'
  | 'CodeQualityScore';

export interface ComponentData {
  type: ComponentType;
  props: any;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  components?: ComponentData[];
}

export type LanguageType = 'javascript' | 'python' | 'java' | 'typescript';
