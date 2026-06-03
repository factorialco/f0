import { F0Dialog } from "@factorialco/f0-react"

import type { RateFormType } from "../data/types"
import type { PolicyData } from "../data/usePolicyData"

import { RatesView } from "./RatesView"

/**
 * Rates management modal.
 *
 * Reached from:
 *  - Per diem form → `per-diem-rates` row → modalTarget="rates"
 *  - Mileage form → `fixed-value-per-kilometer` row → modalTarget="rates"
 *
 * The modal is `formType`-scoped: each invocation lists only the
 * rates whose `formType` matches, and `+ Add rate` inside the view
 * always creates rows for the same scope. There is no global
 * "all rates" view — rates are inherently tied to a single form
 * (per diem amounts can't be reused as mileage amounts).
 *
 * Title / description mirror SubcategoriesModal so the two
 * "list-management" modals feel symmetric. Height capped at the
 * shared 560px ceiling.
 *
 * Visual-only (BR-008): rows commit inline through `RatesView`;
 * the "Save changes" button just confirms intent and closes.
 */
export function RatesModal(props: {
  isOpen: boolean
  onClose: () => void
  formType: RateFormType
  policyData: PolicyData
}) {
  const isPerDiem = props.formType === "per-diem"
  const title = isPerDiem ? "Per diem rates" : "Mileage rates"
  const description = isPerDiem
    ? "Rates define the daily allowance employees can claim for per diem expenses. Each rate has an amount, currency, and scope."
    : "Rates define the amount reimbursed per kilometer. Each rate has an amount, currency, and scope."

  return (
    <F0Dialog
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={title}
      description={description}
      width="lg"
      primaryAction={{
        // Visual-only (BR-008): edits already commit inline; the
        // button just confirms intent. Matches SubcategoriesModal.
        label: "Save changes",
        onClick: props.onClose,
      }}
    >
      {/* See SubcategoriesModal for the rationale behind the inline
          `style` (f0compose ships f0-react's pre-compiled CSS — no
          arbitrary Tailwind utilities). Shared 560px ceiling. */}
      <div style={{ maxHeight: "min(560px, 70vh)" }}>
        <RatesView
          formType={props.formType}
          policyData={props.policyData}
          hideHeader
        />
      </div>
    </F0Dialog>
  )
}
