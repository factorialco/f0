/**
 * View router for the policy page (spec §3, §10, iterated).
 *
 * Slice 1 (handoff §2.3): "Expense forms" is itself a 3-step inner
 * wizard (Regular → Per diem → Mileage). The landing view is a
 * summary card list, and the existing form-editor screen becomes the
 * detail view for one form type.
 *
 * URL contract (iterated):
 *
 *   /p/expense-policy-settings
 *     → forms-summary    (landing: the 3 form-type cards)
 *   /p/expense-policy-settings?view=forms-detail&type=regular
 *     → forms-detail     (the existing ExpenseFormsSection)
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

export function usePolicyView(): {
  view: PolicyView
  setView: (next: PolicyView) => void
} {
  const [params, setParams] = useSearchParams()
  const v = params.get("view")
  const type = parseFormType(params.get("type"))

  let view: PolicyView = { kind: "forms-summary" }
  if (v === "forms-detail" && type) {
    view = { kind: "forms-detail", formType: type }
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
      }
      // Spec §10: drill-back resets scroll.
      window.scrollTo({ top: 0 })
    },
    [setParams]
  )

  return { view, setView }
}
