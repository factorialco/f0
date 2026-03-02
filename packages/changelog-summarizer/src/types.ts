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
}
