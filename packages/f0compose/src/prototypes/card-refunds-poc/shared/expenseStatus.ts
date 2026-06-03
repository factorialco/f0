import type { ExpenseAlert, ExpenseStatus } from "@/fixtures"

/**
 * Status-, alert-, and locale-related helpers for the My Spending prototype.
 * Kept JSX-free so column/source files stay JSX-free too.
 *
 * Two label tracks per status:
 *   - `presetLabel` is what the filter chip shows (e.g. "Paid").
 *   - `cellLabel` is what the table cell shows (e.g. "In payroll" for paid) —
 *     mirrors how the production screen surfaces post-approval state.
 */

export const presetLabel: Record<ExpenseStatus, string> = {
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

export const cellLabel: Record<ExpenseStatus, string> = {
  draft: "Draft",
  "changes-requested": "Changes requested",
  pending: "Pending",
  approved: "Approved",
  controlled: "Controlled",
  "in-payroll": "In payroll",
  paid: "Paid",
  refunded: "Refunded",
  "partially-refunded": "Partially refunded",
}

/** Dot-tag colors. NewColor palette is `viridian|malibu|yellow|...|smoke`. */
export const statusDotColor = {
  draft: "smoke",
  "changes-requested": "yellow",
  pending: "yellow",
  approved: "viridian",
  controlled: "malibu",
  "in-payroll": "malibu",
  paid: "viridian",
  refunded: "malibu",
  "partially-refunded": "malibu",
} as const

/**
 * Alert label + AlertTag level mapping. Levels per F0TagAlert types.ts:
 * `"info" | "warning" | "critical" | "positive"`.
 */
export const alertCopy: Record<
  ExpenseAlert,
  { label: string; level: "info" | "warning" | "critical" }
> = {
  "late-submission": {
    label: "Late expense submission",
    level: "warning",
  },
  "receipt-after-timeframe": {
    label: "Receipt submitted after required timeframe",
    level: "warning",
  },
  "receipt-mismatch": {
    label: "Receipt amount does not match the expense",
    level: "critical",
  },
  // The following alerts were added to ExpenseAlert by the
  // controlling-step-poc Alerts work. They aren't visualised in this
  // older prototype, but the Record needs to be exhaustive to satisfy
  // TS, so we provide reasonable warning-level copy.
  "meal-over-limit": {
    label: "Meal expense over the per-person limit",
    level: "warning",
  },
  "alcohol-detected": {
    label: "Alcohol detected on the receipt",
    level: "warning",
  },
  "receipt-invalid": {
    label: "Receipt is unreadable or invalid",
    level: "warning",
  },
  "missing-merchant": {
    label: "Merchant name missing on the receipt",
    level: "warning",
  },
  "weekend-charge": {
    label: "Charge fell on a weekend",
    level: "warning",
  },
  "declared-split": {
    label: "Shared expense",
    level: "info",
  },
}

/** "€89.44" — en-GB currency formatter. */
const eurFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "EUR",
})
export function formatEUR(amount: number): string {
  return eurFormatter.format(amount)
}

/** ISO YYYY-MM-DD → "14 Apr 2026" (en-GB medium). */
const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "short",
  day: "numeric",
})
export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(iso + "T00:00:00Z"))
}
