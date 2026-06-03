import { F0Dialog } from "@factorialco/f0-react"

import type { PolicyData } from "../data/usePolicyData"

import { SubcategoriesView } from "./SubcategoriesView"

/**
 * Subcategories management modal.
 *
 * Reached directly from the "Subcategory" row in each Expense form
 * table. The modal hosts `SubcategoriesView` and supports scoping
 * to a subset of categories via `scopeCategoryIds`:
 *
 *  - Regular form: passes all categories except `cat-per-diems`
 *    and `cat-fuel` (those subcategories belong to the other two
 *    forms).
 *  - Per diem form: passes `["cat-per-diems"]` only.
 *  - Mileage form: passes `["cat-fuel"]` only.
 *  - No scope (`scopeCategoryIds` undefined): the full list, used
 *    by any future call site that wants global management.
 *
 * The title + description shift to match the scope so admins
 * understand which slice they're editing — the modal still reads
 * from the shared `policyData` source, so edits are global (a
 * subcategory renamed under Mileage's modal is also renamed in the
 * Regular modal's view if its parent were ever exposed there). The
 * scope controls visibility, not ownership.
 *
 * No primary/secondary action beyond Save changes: edits commit
 * inline (visual-only, BR-008).
 *
 * Height: capped at 560px (shared ceiling with PaymentMethodsModal)
 * so the two settings modals have the same footprint.
 */
export function SubcategoriesModal(props: {
  isOpen: boolean
  onClose: () => void
  policyData: PolicyData
  /**
   * If provided, the modal renders only the listed categories.
   * Title + description shift to a scoped variant.
   */
  scopeCategoryIds?: readonly string[]
  /**
   * Optional label inserted into the scoped title — e.g. "Mileage"
   * → "Mileage subcategories". Falls back to a generic title when
   * absent, even if `scopeCategoryIds` is set.
   */
  scopeLabel?: string
}) {
  const isScoped =
    props.scopeCategoryIds !== undefined && props.scopeCategoryIds.length > 0
  const title =
    isScoped && props.scopeLabel
      ? `${props.scopeLabel} subcategories`
      : "Subcategories"
  const description = isScoped
    ? "Subcategories appear under their parent category in this form. They are shared across all expense forms that include the same category."
    : "Subcategories appear under their parent category in the expense form. They are shared across all expense forms."

  return (
    <F0Dialog
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={title}
      description={description}
      width="lg"
      primaryAction={{
        // Visual-only (BR-008): edits already commit inline through
        // SubcategoriesView; the button just confirms intent and
        // closes the dialog. Matches the "Save changes" affordance
        // designers expected from a real Factorial settings modal.
        label: "Save changes",
        onClick: props.onClose,
      }}
    >
      {/* `hideHeader` because F0Dialog already renders the title +
          description; the inner view's heading would duplicate it.

          Inline `style` (not a `className`) because f0compose does
          NOT run its own Tailwind compiler — it imports f0-react's
          pre-compiled CSS, so arbitrary utilities like
          `max-h-[560px]` produce no CSS rule and silently no-op.
          The dialog's own `F0DialogContent` provides the scroll
          container; we cap height so the dialog grows up to 560px
          then scrolls. Shared ceiling with PaymentMethodsModal so
          both settings modals have the same footprint. */}
      <div style={{ maxHeight: "min(560px, 70vh)" }}>
        <SubcategoriesView
          policyData={props.policyData}
          categoryIds={props.scopeCategoryIds}
          hideHeader
        />
      </div>
    </F0Dialog>
  )
}
