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

/**
 * Level-tiered placement for a rule projected onto the accrual tree.
 * The chain of labels down the indent IS the rule's condition; deeper = narrower
 * scope. `tenure-filter` / `role-filter` are cross-cutting peers (info accent).
 */
export type RuleLevel =
  | "common"
  | "country"
  | "contract"
  | "role"
  | "tenure-filter"
  | "role-filter"

/** Reading depth per level (drives indentation; cross-cutting peers sit shallow). */
export const LEVEL_DEPTH: Record<RuleLevel, number> = {
  common: 0,
  country: 0,
  contract: 1,
  role: 2,
  "tenure-filter": 0,
  "role-filter": 0,
}

/** Human label for the scope pill. */
export const LEVEL_LABEL: Record<RuleLevel, string> = {
  common: "Common",
  country: "Country",
  contract: "Contract",
  role: "Role",
  "tenure-filter": "Tenure filter",
  "role-filter": "Role filter",
}

/** Cross-cutting peers render with an info-colored rail. */
export const IS_CROSS_CUTTING: Record<RuleLevel, boolean> = {
  common: false,
  country: false,
  contract: false,
  role: false,
  "tenure-filter": true,
  "role-filter": true,
}

/**
 * User-added rule (no "Default" badge, deletable). One places it at a level and
 * may flag it as an exception that overrides a broader rule. `placementNote` is
 * One's plain-language statement of where it landed in evaluation order.
 */
export type CustomRule = {
  id: string
  level: RuleLevel
  title: string
  summary: string
  isException?: boolean
  placementNote?: string
}

export function baseSummary(b: BaseAllocation): string {
  return `Employees receive ${b.amount} working days of allowance per cycle, starting in ${b.startMonth} for ${b.cycleMonths} months`
}

export function accrualSummary(a: AccrualProration): string {
  return `Base allowance is ${a.proration}, with ${a.maxDays} maximum days, accrued ${a.accrualTiming}, and usable ${a.usabilityWindow}`
}
