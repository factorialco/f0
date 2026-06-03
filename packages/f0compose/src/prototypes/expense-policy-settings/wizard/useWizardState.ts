import { useCallback, useEffect, useState } from "react"

/**
 * Wizard state machine for the Expense Policy co-creation flow.
 *
 * Sequencing rule (per handoff §2.1 / §2.2): the admin walks through
 *
 *   1. Expense types  →
 *      a. Regular expense
 *      b. Per diem
 *      c. Mileage
 *   2. Approval flows
 *   3. Certified documents
 *
 * Rates were previously a separate outer step but have been folded
 * into the per-diem and mileage form tables as modal-bound rows
 * ("Per diem rates" / "Fixed value per kilometer"). The wizard now
 * has three top-level steps instead of four.
 *
 * Steps and sub-steps complete in order. A step is `current` once all
 * earlier steps are `done`; everything after `current` is `pending`.
 * The UI uses these three statuses to render summary cards (locked /
 * highlighted / checkmark) and to lock left-nav entries that the admin
 * hasn't reached yet.
 *
 * The wizard is persisted to localStorage under
 * `expense-policy-wizard-state-v1` so a hard refresh resumes where the
 * admin left off (handoff §2.6). The `v1` suffix lets us bump the
 * schema without colliding with old saves; legacy saves that contain
 * the dropped `"rates"` outer-step id are silently filtered out by
 * the `readStorage` validator.
 *
 * Cross-cutting tension flagged in §2.7 (chat-vs-inline edits) lives
 * elsewhere — this hook only tracks "have we completed step X" booleans,
 * not what the admin actually changed on the page.
 */

/** Top-level steps in the policy wizard. Order is significant. */
export const OUTER_STEPS = [
  "expense-forms",
  "approval-flows",
  "certified-documents",
] as const
export type OuterStepId = (typeof OUTER_STEPS)[number]

/** Sub-steps inside the "Expense types" outer step. Order significant. */
export const FORM_SUB_STEPS = ["regular", "per-diem", "mileage"] as const
export type FormSubStepId = (typeof FORM_SUB_STEPS)[number]

/** Visual status of a step / sub-step at a given moment. */
export type StepStatus = "pending" | "current" | "done"

const STORAGE_KEY = "expense-policy-wizard-state-v1"

type Persisted = {
  outerDone: OuterStepId[]
  formSubDone: FormSubStepId[]
}

function readStorage(): Persisted {
  if (typeof window === "undefined") return { outerDone: [], formSubDone: [] }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { outerDone: [], formSubDone: [] }
    const parsed = JSON.parse(raw) as Partial<Persisted>
    return {
      outerDone: Array.isArray(parsed.outerDone)
        ? parsed.outerDone.filter((id): id is OuterStepId =>
            (OUTER_STEPS as readonly string[]).includes(id)
          )
        : [],
      formSubDone: Array.isArray(parsed.formSubDone)
        ? parsed.formSubDone.filter((id): id is FormSubStepId =>
            (FORM_SUB_STEPS as readonly string[]).includes(id)
          )
        : [],
    }
  } catch {
    // Corrupt JSON / quota-exceeded / hostile storage shim. Treat as
    // a clean slate rather than crashing the prototype on load.
    return { outerDone: [], formSubDone: [] }
  }
}

function writeStorage(state: Persisted): void {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // localStorage may be disabled (private mode, quota). Persistence
    // is a nice-to-have, not a correctness requirement — silently skip.
  }
}

export type WizardState = {
  /** Currently active outer step (first not-yet-done in sequence). */
  currentOuterStep: OuterStepId
  /** Currently active inner sub-step within `expense-forms`. */
  currentFormSubStep: FormSubStepId
  /** Status helpers for the summary card UI and locked nav. */
  outerStatus: (id: OuterStepId) => StepStatus
  formSubStatus: (id: FormSubStepId) => StepStatus
  /** Mark a step done. No-op if already done. Idempotent. */
  completeOuterStep: (id: OuterStepId) => void
  completeFormSubStep: (id: FormSubStepId) => void
  /** Full reset to a clean wizard. Wipes localStorage. */
  resetWizard: () => void
  /** Raw done lists for the agent context exposure. */
  outerDone: OuterStepId[]
  formSubDone: FormSubStepId[]
}

/**
 * Drive the entire wizard. Owns the source of truth for "what's
 * completed" and derives `current` from sequence + completion.
 *
 * Why derive `current` instead of storing it: the only way to advance
 * the wizard is to complete the previous step, so `current` is always
 * `first(not-done)`. Storing it separately would let it drift.
 */
export function useWizardState(): WizardState {
  const [persisted, setPersisted] = useState<Persisted>(() => readStorage())

  // Mirror state to localStorage on every change. Writing on commit
  // (not on render) keeps refresh-resume in sync without coupling
  // mutations to storage internals.
  useEffect(() => {
    writeStorage(persisted)
  }, [persisted])

  const completeOuterStep = useCallback((id: OuterStepId) => {
    setPersisted((prev) =>
      prev.outerDone.includes(id)
        ? prev
        : { ...prev, outerDone: [...prev.outerDone, id] }
    )
  }, [])

  const completeFormSubStep = useCallback((id: FormSubStepId) => {
    setPersisted((prev) =>
      prev.formSubDone.includes(id)
        ? prev
        : { ...prev, formSubDone: [...prev.formSubDone, id] }
    )
  }, [])

  const resetWizard = useCallback(() => {
    setPersisted({ outerDone: [], formSubDone: [] })
  }, [])

  // Derive `current` = first outer step not in `outerDone`. If
  // everything is done we keep "certified-documents" as a sane
  // fallback so the UI still has somewhere to point — at that point
  // the wizard is finished and the page is effectively in review mode.
  const currentOuterStep: OuterStepId =
    OUTER_STEPS.find((id) => !persisted.outerDone.includes(id)) ??
    OUTER_STEPS[OUTER_STEPS.length - 1]!

  const currentFormSubStep: FormSubStepId =
    FORM_SUB_STEPS.find((id) => !persisted.formSubDone.includes(id)) ??
    FORM_SUB_STEPS[FORM_SUB_STEPS.length - 1]!

  const outerStatus = useCallback(
    (id: OuterStepId): StepStatus => {
      if (persisted.outerDone.includes(id)) return "done"
      if (id === currentOuterStep) return "current"
      return "pending"
    },
    [persisted.outerDone, currentOuterStep]
  )

  const formSubStatus = useCallback(
    (id: FormSubStepId): StepStatus => {
      if (persisted.formSubDone.includes(id)) return "done"
      if (id === currentFormSubStep) return "current"
      return "pending"
    },
    [persisted.formSubDone, currentFormSubStep]
  )

  return {
    currentOuterStep,
    currentFormSubStep,
    outerStatus,
    formSubStatus,
    completeOuterStep,
    completeFormSubStep,
    resetWizard,
    outerDone: persisted.outerDone,
    formSubDone: persisted.formSubDone,
  }
}
