import type { ExpenseStatus } from "@/fixtures"

/**
 * Maps the existing fixture statuses (`draft`, `pending`, `approved`,
 * `in-payroll`, `refunded`, `partially-refunded`) into the labels and
 * F0TagStatus variants used across the unified Spending page.
 */
export type StatusVariant =
  | "neutral"
  | "info"
  | "positive"
  | "warning"
  | "critical"

export const STATUS_LABEL: Record<ExpenseStatus, string> = {
  draft: "Draft",
  "changes-requested": "Changes requested",
  pending: "Pending",
  approved: "Approved",
  controlled: "Controlled",
  "in-payroll": "Sent to Pay",
  paid: "Paid",
  refunded: "Refunded",
  "partially-refunded": "Partially refunded",
}

export const STATUS_VARIANT: Record<ExpenseStatus, StatusVariant> = {
  draft: "neutral",
  // Approver returned the expense to the submitter for fixes — orange
  // warning so it sits visually next to Pending in the table.
  "changes-requested": "warning",
  pending: "warning",
  approved: "positive",
  // Controlled is a "ready for accounting" milestone. Originally green
  // for visual progression, recolored to info (blue) so green is
  // reserved for the terminal `paid` state — otherwise the Pay tab is
  // a sea of green and finance can't tell mid-flight rows from
  // confirmed reimbursements.
  controlled: "info",
  // In-flight: transmitted to payroll/SEPA, not yet confirmed paid.
  "in-payroll": "info",
  // Terminal state — payment confirmed. The only green status.
  paid: "positive",
  refunded: "info",
  "partially-refunded": "info",
}
