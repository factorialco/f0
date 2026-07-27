/**
 * Local types for the Participants + Split Payment feature.
 *
 * The canonical data types live in `@/fixtures` (`Participant`,
 * `ExpenseSplit`, `SplitMode`). This file re-exports them and adds
 * a couple of small UI-only types used by the form, breakdown, and
 * approval components.
 */
import type {
  ExpenseCategory,
  Participant,
  ExpenseSplit,
  SplitMode,
} from "@/fixtures"

export type { Participant, ExpenseSplit, SplitMode }

/**
 * Categories that surface the Participants field in the submitter
 * form. Meals is the only one per PSPEC v1; the gating is a single
 * config lookup so adding more (Taxis for shared rides, Events,
 * etc.) is a one-line change later.
 */
export const PARTICIPANT_BEARING_CATEGORIES: ReadonlyArray<ExpenseCategory> = [
  "Meals",
]

export function isParticipantBearingCategory(
  category: ExpenseCategory | undefined
): boolean {
  if (!category) return false
  return PARTICIPANT_BEARING_CATEGORIES.includes(category)
}

/**
 * Per-row reconciliation result used by SplitBreakdown's footer.
 * `delta` is `sumOfShares - receiptTotal` (signed, EUR, 2dp); a
 * tolerance of 1 cent is applied because float arithmetic can drift.
 */
export type Reconciliation = {
  receiptTotal: number
  sumOfShares: number
  delta: number
  isReconciled: boolean
}

/**
 * Row in the SplitBreakdown UI. Owner is rendered first, then each
 * internal participant in the order they were added, then the
 * external aggregate row (if any externals exist).
 */
export type BreakdownRow =
  | {
      kind: "owner"
      employeeId: string
      amount: number
    }
  | {
      kind: "internal"
      employeeId: string
      amount: number
    }
  | {
      kind: "external"
      count: number
      amount: number
    }
