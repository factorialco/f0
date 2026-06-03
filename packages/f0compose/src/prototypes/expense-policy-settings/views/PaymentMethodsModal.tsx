import { F0Dialog } from "@factorialco/f0-react"

import type { PolicyData } from "../data/usePolicyData"

import { PaymentMethodsView } from "./PaymentMethodsView"

/**
 * Payment methods management modal.
 *
 * Iterated UX (slice 1): payment methods are reached directly from
 * the "Payment method" row in the Expense forms table — clicking
 * the row opens this modal. The modal hosts the existing
 * `PaymentMethodsView` with its heading hidden (F0Dialog renders
 * the title itself).
 *
 * No primary/secondary action beyond Save changes: edits commit
 * inline (visual-only, BR-008).
 *
 * Height: capped at the same 560px ceiling as SubcategoriesModal so
 * the two settings modals share a max footprint and the page
 * doesn't jump as the user accumulates more payment methods. With
 * a typical 3-5 row payload the content sits well under that
 * ceiling and no scrollbar appears; once the list grows past ~9
 * rows the dialog's built-in F0DialogContent ScrollArea takes over.
 */
export function PaymentMethodsModal(props: {
  isOpen: boolean
  onClose: () => void
  policyData: PolicyData
}) {
  return (
    <F0Dialog
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Payment methods"
      description="Payment methods are shared across all expense forms. Removing one will not affect previously submitted expenses."
      width="lg"
      primaryAction={{
        // Visual-only (BR-008): edits commit inline through
        // PaymentMethodsView; the button just confirms intent and
        // closes the dialog. Mirrors SubcategoriesModal so both
        // settings modals share the same Save-changes affordance.
        label: "Save changes",
        onClick: props.onClose,
      }}
    >
      {/* Inline `style` (not `className`) — f0compose imports
          f0-react's pre-compiled CSS and does not run its own
          Tailwind compiler, so arbitrary utilities like
          `max-h-[560px]` silently no-op. The dialog's
          `F0DialogContent` already provides a ScrollArea, so we
          only need a max-height to enforce the ceiling. */}
      <div style={{ maxHeight: "min(560px, 70vh)" }}>
        <PaymentMethodsView policyData={props.policyData} hideHeader />
      </div>
    </F0Dialog>
  )
}
