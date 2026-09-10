/**
 * Recent documents widget data, kept React/F0-free (no component/icon imports)
 * so the record→row resolution and the action-label formatting are unit-testable
 * without dragging the F0 component library into the runner — the same split as
 * `shortcuts.ts` / `expenses.ts` / `celebrations.ts`.
 *
 * The PEOPLE who touched each doc are the shared cross-cutting employees from
 * `@/mocks` (never re-invented here); a record only names the file, what happened
 * to it, who did it (a shared employee id, or the sentinel `"you"`), and a
 * human "when" label. The widget passes `{ name, type }` straight to F0's
 * `F0AvatarFile`, which draws the file-type glyph — so no icon mapping is needed.
 */


/**
 * The file types the widget shows — a subset of F0's `FILE_TYPES`, kept as plain
 * string literals here (not imported) so this module stays F0-free. Each maps to
 * a distinct glyph inside `F0AvatarFile`.
 */
export type DocumentFileType = "pdf" | "doc" | "excel" | "ppt" | "image" | "csv"

/** What happened to the document last — becomes the "{Verb} by {who}" subtitle. */
export type DocumentAction = "edited" | "signed" | "shared" | "commented" | "uploaded"

export interface DocumentRecord {
  id: string
  /** Filename incl. extension — the row's title. */
  name: string
  fileType: DocumentFileType
  action: DocumentAction
  /** A shared `@/mocks` employee id, or the sentinel `"you"` (the current user). */
  actorId: string
  /**
   * Explicit relative-time label (e.g. "2h ago", "Yesterday"), shown top-right.
   * Authored as a string rather than derived from a date so it always reads as
   * "recent" and matches the rest of the custom-home widgets' stated today.
   */
  when: string
}

/**
 * The employee's recently touched documents — the sort of files a Factorial home
 * surfaces (contracts, payslips, policies, decks). File types are varied so the
 * `F0AvatarFile` glyphs read distinctly, newest first.
 */
export const documentRecords: DocumentRecord[] = [
  { id: "d1", name: "Q3 Team Objectives.docx", fileType: "doc", action: "edited", actorId: "you", when: "2h ago" },
  { id: "d2", name: "Employment Contract.pdf", fileType: "pdf", action: "signed", actorId: "you", when: "Yesterday" },
  { id: "d3", name: "Expense Report – July.xlsx", fileType: "excel", action: "shared", actorId: "emp-005", when: "2 days ago" },
  { id: "d4", name: "Onboarding Deck.pptx", fileType: "ppt", action: "commented", actorId: "emp-004", when: "4 days ago" },
  { id: "d5", name: "Remote Work Policy.pdf", fileType: "pdf", action: "uploaded", actorId: "emp-002", when: "Last week" },
  { id: "d6", name: "Team Offsite.jpg", fileType: "image", action: "shared", actorId: "emp-009", when: "Last week" },
]

/**
 * The "{Verb} by {who}" subtitle line — e.g. `edited` + `you` → "Edited by you",
 * `shared` + `Lin Chen` → "Shared by Lin Chen". Deterministic (same input → same
 * label), so it lives in code and is unit-tested rather than hardcoded per row.
 */
export function actionLabel(action: DocumentAction, actorName: string): string {
  const verb = action.charAt(0).toUpperCase() + action.slice(1)
  return `${verb} by ${actorName}`
}

/** What a document row actually renders: the file, its subtitle, and the "when". */
export interface Document {
  id: string
  name: string
  fileType: DocumentFileType
  actionLabel: string
  when: string
}

