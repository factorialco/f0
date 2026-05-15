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
 * No primary/secondary action: edits commit inline (visual-only,
 * BR-008).
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
    >
      <PaymentMethodsView policyData={props.policyData} hideHeader />
    </F0Dialog>
  )
}
