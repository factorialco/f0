/**
 * View router for the policy page (spec §3, §10, iterated).
 *
 * Slice 1 (handoff §2.3): "Expense forms" is itself a 3-step inner
 * wizard (Regular → Per diem → Mileage). The landing view is a
 * summary card list, and the existing form-editor screen becomes the
 * detail view for one form type.
 *
 * The Approval flows nav entry follows the same summary→detail
 * pattern (iterated after slice 1 ship): a card grid of all flows
 * is the landing, and clicking a card drills into the vertical
 * timeline for that specific flow. URL state survives reloads so
 * the chat agent can deep-link to a flow.
 *
 * URL contract (iterated):
 *
 *   /p/expense-policy-settings
 *     → forms-summary    (landing under Expense types nav)
 *   /p/expense-policy-settings?view=forms-detail&type=regular
 *     → forms-detail     (the existing ExpenseFormsSection)
 *   /p/expense-policy-settings?view=flow-detail&flow=flow-standard
 *     → flow-detail      (the vertical timeline for one flow)
 *
 * Note: the *active nav* (Expense types / Approval flows /
 * Certified documents) is component state, not URL state — that
 * keeps the URL shape stable across nav entries that share the
 * same summary pattern. The `flow-detail` view only renders when
 * the Approval flows nav is active; if a user lands with
 * `view=flow-detail` while on a different nav the URL is honored
 * once the nav is switched, but the screen shows the active nav's
 * summary in the meantime. Keeps both surfaces independently
 * deep-linkable without crossing wires.
 *
 * Categories no longer has its own URL view: it expands inline
 * inside the forms-detail table. Subcategories and Payment methods
 * no longer have URL views either: they open in F0Dialog modals
 * triggered from the forms-detail rows. The previous drill-in
 * routes were removed in the iteration that moved those surfaces
 * from "screens" to "inline expansion + modal" — co-creation flows
 * shouldn't lose the editor's context to a navigation.
 *
 * Anything unrecognised falls back to forms-summary (defensive).
 */

import { useCallback } from "react"
import { useSearchParams } from "react-router-dom"

import type { FormSubStepId } from "../wizard/useWizardState"

const FORM_TYPES: readonly FormSubStepId[] = ["regular", "per-diem", "mileage"]

function parseFormType(value: string | null): FormSubStepId | null {
  if (!value) return null
  return (FORM_TYPES as readonly string[]).includes(value)
    ? (value as FormSubStepId)
    : null
}

export type PolicyView =
  | { kind: "forms-summary" }
  | { kind: "forms-detail"; formType: FormSubStepId }
  | { kind: "flow-detail"; flowId: string }

export function usePolicyView(): {
  view: PolicyView
  setView: (next: PolicyView) => void
} {
  const [params, setParams] = useSearchParams()
  const v = params.get("view")
  const type = parseFormType(params.get("type"))
  const flowId = params.get("flow")

  let view: PolicyView = { kind: "forms-summary" }
  if (v === "forms-detail" && type) {
    view = { kind: "forms-detail", formType: type }
  } else if (v === "flow-detail" && flowId) {
    // We accept any non-empty flow id here; downstream the view
    // resolves it against the in-memory flow list and falls back
    // to the summary if the id no longer exists. That keeps the
    // router pure (it doesn't need to import data state).
    view = { kind: "flow-detail", flowId }
  }

  const setView = useCallback(
    (next: PolicyView) => {
      switch (next.kind) {
        case "forms-summary":
          setParams({})
          break
        case "forms-detail":
          setParams({ view: "forms-detail", type: next.formType })
          break
        case "flow-detail":
          setParams({ view: "flow-detail", flow: next.flowId })
          break
      }
      // Spec §10: drill-back resets scroll.
      window.scrollTo({ top: 0 })
    },
    [setParams]
  )

  return { view, setView }
}
