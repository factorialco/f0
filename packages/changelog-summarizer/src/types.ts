import type { PrInfo } from "./collectors/github.js";

export interface ChangelogEntry {
  package: string;
  version: string;
  date: string;
  features: string[];
  bugFixes: string[];
  compareUrl: string;
}

export interface CommitEntry {
  hash: string;
  message: string;
  author: string;
  date: string;
  packages: string[];
}

export interface CollectedContext {
  from: string;
  to: string;
  changelogs: ChangelogEntry[];
  commits: CommitEntry[];
  prBodies?: Map<number, PrInfo>;
}

export type Provider = "openai" | "anthropic" | "google" | "groq";

export interface CliOptions {
  provider: Provider;
  model?: string;
  apiKey?: string;
  from?: string;
  to?: string;
  prompt?: string;
  output?: string;
  repoRoot?: string;
  githubToken?: string;
}

// ---- Product-v2 JSON output schema ----

export interface SummaryNewEntry {
  component: string;
  summary: string;
  detail?: string;
  storybook?: boolean;
  author?: string;
  /** Pre-resolved Storybook link (e.g. a specific story deep-link). When set,
   * the formatter uses it instead of resolving the component docs page. */
  url?: string;
}

export interface SummaryEnhancementEntry {
  component: string;
  summary: string;
  detail?: string;
  storybook?: boolean;
  author?: string;
  url?: string;
}

export interface SummaryStabilizedEntry {
  component: string;
  summary: string;
  detail?: string;
  storybook?: boolean;
  author?: string;
  url?: string;
}

export interface SummaryBreakingChangeEntry {
  component: string;
  summary: string;
  migration: string;
}

export interface SummarySections {
  new?: SummaryNewEntry[];
  stabilized?: SummaryStabilizedEntry[];
  enhancements?: SummaryEnhancementEntry[];
  breaking_changes?: SummaryBreakingChangeEntry[];
}

export interface SummaryJson {
  sections: SummarySections;
  thread_details?: string;
}
