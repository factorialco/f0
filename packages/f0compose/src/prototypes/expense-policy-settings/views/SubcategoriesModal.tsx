import { F0Dialog } from "@factorialco/f0-react"

import type { PolicyData } from "../data/usePolicyData"

import { SubcategoriesView } from "./SubcategoriesView"

/**
 * Subcategories management modal.
 *
 * Iterated UX (slice 1): subcategories are reached directly from the
 * "Subcategory" row in the Expense forms table — clicking the row
 * opens this modal. The modal hosts the existing `SubcategoriesView`
 * in unscoped mode (flat list of all subcategories across every
 * category, with a Category column showing the parent).
 *
 * No primary/secondary action: edits commit inline (visual-only,
 * BR-008). Closing the modal is enough.
 */
export function SubcategoriesModal(props: {
  isOpen: boolean
  onClose: () => void
  policyData: PolicyData
}) {
  return (
    <F0Dialog
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Subcategories"
      description="Subcategories appear under their parent category in the expense form. They are shared across all expense forms."
      width="lg"
    >
      {/* `hideHeader` because F0Dialog already renders the title +
          description; the inner view's heading would duplicate it. */}
      <SubcategoriesView policyData={props.policyData} hideHeader />
    </F0Dialog>
  )
}
