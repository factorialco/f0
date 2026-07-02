// ─────────────────────────────────────────────────────────────────────────────
// Allowance rule model — the two default rules of an allowance, plus user rules.
//
// Card summaries are *derived* from these settings (never stored as prose), so
// an edit applied through One re-renders the sentence automatically.
// ─────────────────────────────────────────────────────────────────────────────

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const

export type Proration = "prorated" | "not prorated"

/** Card 1 — base allocation. */
export type BaseAllocation = {
  amount: number
  startMonth: string
  cycleMonths: number
}

/**
 * Card 2 — accrual & proration. Each field stores the exact phrase fragment the
 * summary uses, so derivation is a trivial join and One can set them directly.
 */
export type AccrualProration = {
  proration: Proration
  /** "unlimited" or a number-as-string. */
  maxDays: string
  /** e.g. "all at once on the first day of the cycle" | "monthly". */
  accrualTiming: string
  /** e.g. "within the same cycle" | "in the next cycle". */
  usabilityWindow: string
}

/** User-added rule (no "Default" badge, deletable). */
export type CustomRule = { id: string; title: string; summary: string }

export function baseSummary(b: BaseAllocation): string {
  return `Employees receive ${b.amount} working days of allowance per cycle, starting in ${b.startMonth} for ${b.cycleMonths} months`
}

export function accrualSummary(a: AccrualProration): string {
  return `Base allowance is ${a.proration}, with ${a.maxDays} maximum days, accrued ${a.accrualTiming}, and usable ${a.usabilityWindow}`
}
