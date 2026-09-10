/**
 * Recruitment widget data, kept React/F0-free (no component/icon imports) so the
 * phase-label spelling is unit-testable without dragging the F0 component library
 * into the runner — the same split as `projects.ts` / `documents.ts` /
 * `expenses.ts`.
 *
 * These are external CANDIDATES in the hiring pipeline, so they are deliberately
 * NOT the shared `@/mocks` employees (who are already hired). A candidate is just
 * a name, the pipeline phase they sit in, and the status of that phase. The phase
 * drives the leading avatar glyph (mapped to an icon in the widget); its
 * spelled-out label (`phaseLabel`) is the row's description; the status is the
 * trailing `F0TagStatus`.
 */

/** The status-tag variants F0's `F0TagStatus` accepts (the full `statuses` set). */
export type RecruitmentStatusVariant = "neutral" | "info" | "positive" | "warning" | "critical"

/**
 * A stage of the hiring pipeline, declared earliest → latest. The key drives the
 * leading avatar icon (mapped in the widget); `phaseLabel` spells it out for the
 * row's description line.
 */
export type RecruitmentPhase = "applied" | "screening" | "interview" | "assessment" | "offer"

/**
 * The phase spelled out — the row's description. Deterministic (same phase → same
 * words), so it lives in code and is unit-tested rather than hardcoded per row.
 * Keyed by every `RecruitmentPhase`, so the map can never drift from the union.
 */
export const PHASE_LABELS: Record<RecruitmentPhase, string> = {
  applied: "Application review",
  screening: "Phone screening",
  interview: "Technical interview",
  assessment: "Take-home assessment",
  offer: "Offer sent",
}

/** The spelled-out label for a phase (the row's description). */
export function phaseLabel(phase: RecruitmentPhase): string {
  return PHASE_LABELS[phase]
}

export interface CandidateRecord {
  id: string
  /** Candidate's full name — the row's title. */
  name: string
  /** Where they sit in the pipeline — drives the avatar glyph and the description. */
  phase: RecruitmentPhase
  /** The state of the current phase — the trailing `F0TagStatus`. */
  status: { text: string; variant: RecruitmentStatusVariant }
}

/**
 * The open pipeline — one candidate per phase so every stage's avatar reads
 * distinctly, and a spread across all five status variants (info / neutral /
 * warning / critical / positive) so the trailing tags show their full range.
 */
export const candidateRecords: CandidateRecord[] = [
  { id: "c1", name: "Nadia Rahman", phase: "applied", status: { text: "New", variant: "info" } },
  { id: "c2", name: "Tomás Rivera", phase: "screening", status: { text: "Scheduled", variant: "neutral" } },
  { id: "c3", name: "Wei Zhang", phase: "interview", status: { text: "In progress", variant: "warning" } },
  { id: "c4", name: "Fatima El-Amin", phase: "assessment", status: { text: "Action needed", variant: "critical" } },
  { id: "c5", name: "Jonas Weber", phase: "offer", status: { text: "Offer accepted", variant: "positive" } },
]

/** The candidates the widget renders, in row order. */
export const candidates: CandidateRecord[] = candidateRecords
