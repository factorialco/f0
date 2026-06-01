import type { Allowance } from "./policiesData"

// ─────────────────────────────────────────────────────────────────────────────
// Accrual Rules — domain types
//
// The allowance lifecycle is split into four rules, each configured from its own
// modal. Modal 1 (amount & cycle) owns the allowance *unit* (days / hours) which
// every downstream rule reads — it replaces the Basic Information counter-type
// inheritance.
// ─────────────────────────────────────────────────────────────────────────────

export type RuleKey = "amountCycle" | "generation" | "availability" | "deduction"

export type AllowanceType = "days" | "hours"
export type Cycle = "yearly" | "monthly" | "per-pay-period" | "one-time"
export type CycleStart = "calendar" | "employee" | "custom"

export type GenerationMode = "upfront" | "progressive"
export type AccrualFrequency = "monthly" | "per-pay-period"
export type Rounding = "none" | "nearest-half" | "round-up"

export type UsableWindow = "same" | "next"
export type PeriodUnit = "days" | "months"

export type CountIn = "working" | "calendar"
export type Granularity = "full" | "half" | "decimals" | "hours"
export type DeductionOrder = "oldest" | "newest"
export type BankHolidayRule = "exclude" | "count"
export type RestDayRule = "exclude" | "count"
export type NegativeRule = "no" | "yes"
export type Expiry = "none" | "1m" | "3m" | "custom"

export type AmountCycleRule = {
  type: AllowanceType
  amount: number
  cycle: Cycle
  cycleStart: CycleStart
  customDate: string
}

export type GenerationRule = {
  mode: GenerationMode
  start: string
  duration: number
  durationUnit: PeriodUnit
  frequency: AccrualFrequency
  rounding: Rounding
}

export type AvailabilityRule = {
  usable: UsableWindow
  immediate: boolean
  waitingValue: number
  waitingUnit: PeriodUnit
  tenureValue: number
  tenureUnit: PeriodUnit
}

export type DeductionRule = {
  countIn: CountIn
  granularity: Granularity
  order: DeductionOrder
  bankHoliday: BankHolidayRule
  restDay: RestDayRule
  negative: NegativeRule
  carryOver: boolean
  carryCap: number
  carryCapUnit: AllowanceType
  expires: Expiry
}

export type AccrualRulesState = {
  amountCycle: AmountCycleRule
  generation: GenerationRule
  availability: AvailabilityRule
  deduction: DeductionRule
  /** Which rules the user has explicitly saved (drives the filled status dot). */
  configured: Record<RuleKey, boolean>
}

// ─────────────────────────────────────────────────────────────────────────────
// Defaults — seeded from the allowance so unconfigured rules show sensible values
// ─────────────────────────────────────────────────────────────────────────────

export function defaultAccrualState(allowance: Allowance): AccrualRulesState {
  const type: AllowanceType =
    allowance.unit === "working hours" ? "hours" : "days"
  return {
    amountCycle: {
      type,
      amount: allowance.amount || 25,
      cycle: "yearly",
      cycleStart: "calendar",
      customDate: "",
    },
    generation: {
      mode: "upfront",
      start: "January",
      duration: 12,
      durationUnit: "months",
      frequency: "monthly",
      rounding: "none",
    },
    availability: {
      usable: "same",
      immediate: true,
      waitingValue: 0,
      waitingUnit: "days",
      tenureValue: 0,
      tenureUnit: "months",
    },
    deduction: {
      countIn: "working",
      granularity: "full",
      order: "oldest",
      bankHoliday: "exclude",
      restDay: "exclude",
      negative: "no",
      carryOver: false,
      carryCap: 0,
      carryCapUnit: type,
      expires: "none",
    },
    configured: {
      amountCycle: false,
      generation: false,
      availability: false,
      deduction: false,
    },
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Label maps
// ─────────────────────────────────────────────────────────────────────────────

export const ALLOWANCE_TYPE_LABELS: Record<AllowanceType, string> = {
  days: "Per days",
  hours: "Per hours",
}

export const CYCLE_LABELS: Record<Cycle, string> = {
  yearly: "Yearly",
  monthly: "Monthly",
  "per-pay-period": "Per pay period",
  "one-time": "One-time",
}

export const CYCLE_START_LABELS: Record<CycleStart, string> = {
  calendar: "Calendar year (Jan 1)",
  employee: "Employee start date",
  custom: "Custom date",
}

export const FREQUENCY_LABELS: Record<AccrualFrequency, string> = {
  monthly: "Monthly",
  "per-pay-period": "Per pay period",
}

export const ROUNDING_LABELS: Record<Rounding, string> = {
  none: "None",
  "nearest-half": "Round to nearest 0.5",
  "round-up": "Round up",
}

export const COUNT_IN_LABELS: Record<CountIn, string> = {
  working: "Working days",
  calendar: "Calendar days",
}

export const GRANULARITY_LABELS: Record<Granularity, string> = {
  full: "Full days only",
  half: "Allow half days",
  decimals: "Allow decimals",
  hours: "Hours",
}

export const ORDER_LABELS: Record<DeductionOrder, string> = {
  oldest: "From oldest accrued first",
  newest: "From newest first",
}

export const EXPIRY_LABELS: Record<Expiry, string> = {
  none: "No expiry",
  "1m": "1 month",
  "3m": "3 months",
  custom: "Custom",
}

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

/** Generation start options — the 12 months plus the employee anchor. */
export const GENERATION_START_OPTIONS: string[] = [
  ...MONTHS,
  "Employee start month",
]

// ─────────────────────────────────────────────────────────────────────────────
// Row summaries (muted right-hand text on each question row)
// ─────────────────────────────────────────────────────────────────────────────

export function amountCycleSummary(r: AmountCycleRule): string {
  return `${ALLOWANCE_TYPE_LABELS[r.type]} · ${r.amount} ${r.type} · ${CYCLE_LABELS[r.cycle]}`
}

export function generationSummary(r: GenerationRule): string {
  if (r.mode === "upfront") return `All upfront · starts ${r.start}`
  return `Starts ${r.start} · over ${r.duration} ${r.durationUnit}`
}

export function availabilitySummary(r: AvailabilityRule): string {
  const base =
    r.usable === "same"
      ? "Within the same cycle they're acquired"
      : "Only in the next cycle"
  if (!r.immediate && r.waitingValue > 0) {
    return `${base} · ${r.waitingValue} ${r.waitingUnit} waiting period`
  }
  if (r.tenureValue > 0) {
    return `${base} · after ${r.tenureValue} ${r.tenureUnit} tenure`
  }
  return base
}

export function deductionSummary(r: DeductionRule): string {
  const bank =
    r.bankHoliday === "exclude"
      ? "Bank holidays excluded"
      : "Bank holidays counted"
  return `${COUNT_IN_LABELS[r.countIn]} · ${GRANULARITY_LABELS[r.granularity]} · ${bank}`
}

export function ruleSummary(state: AccrualRulesState): Record<RuleKey, string> {
  return {
    amountCycle: amountCycleSummary(state.amountCycle),
    generation: generationSummary(state.generation),
    availability: availabilitySummary(state.availability),
    deduction: deductionSummary(state.deduction),
  }
}
