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
  pending: "Pending",
  approved: "Approved",
  "in-payroll": "Paid",
}

export const cellLabel: Record<ExpenseStatus, string> = {
  draft: "Draft",
  pending: "Pending",
  approved: "Approved",
  "in-payroll": "In payroll",
}

/** Dot-tag colors. NewColor palette is `viridian|malibu|yellow|...|smoke`. */
export const statusDotColor = {
  draft: "smoke",
  pending: "yellow",
  approved: "viridian",
  "in-payroll": "malibu",
} as const

/**
 * Alert label + AlertTag level mapping. Levels per F0TagAlert types.ts:
 * `"info" | "warning" | "critical" | "positive"`.
 */
export const alertCopy: Record<
  ExpenseAlert,
  { label: string; level: "warning" | "critical" }
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
