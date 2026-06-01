import { Calendar, Clock, Minus, Money } from "@factorialco/f0-react/icons/app"
import type { IconType } from "@factorialco/f0-react"

import {
  ConfigRow,
  NumberInput,
  type QuickAction,
  RadioGroup,
  RuleSelect,
  Segmented,
  ToggleSwitch,
} from "./accrualControls"
import {
  type AllowanceType,
  type AmountCycleRule,
  type AvailabilityRule,
  type Cycle,
  type CycleStart,
  type DeductionRule,
  EXPIRY_LABELS,
  type Expiry,
  FREQUENCY_LABELS,
  GENERATION_START_OPTIONS,
  type GenerationRule,
  type Granularity,
  type PeriodUnit,
  type Rounding,
  ROUNDING_LABELS,
  type RuleKey,
  type UsableWindow,
} from "./accrualRules"

// ─────────────────────────────────────────────────────────────────────────────
// Reusable modal metadata, option lists and bodies for the four accrual rule
// types. Shared by Exploration 1 (four fixed question-rows) and Exploration 3
// (Add-rule flow), so the modal UIs never drift apart.
// ─────────────────────────────────────────────────────────────────────────────

export const RULE_META: Record<RuleKey, { icon: IconType; title: string }> = {
  amountCycle: { icon: Money, title: "How many days or hours, and what cycle?" },
  generation: { icon: Clock, title: "How are they generated?" },
  availability: { icon: Calendar, title: "When can they be used?" },
  deduction: { icon: Minus, title: "How do they deduct?" },
}

// ── option helpers ───────────────────────────────────────────────────────────

function opts<T extends string>(map: Record<T, string>): { value: T; label: string }[] {
  return (Object.keys(map) as T[]).map((value) => ({ value, label: map[value] }))
}

const CYCLE_OPTS = opts<Cycle>({
  yearly: "Yearly",
  monthly: "Monthly",
  "per-pay-period": "Per pay period",
  "one-time": "One-time",
})
const CYCLE_START_OPTS = opts<CycleStart>({
  calendar: "Calendar year (Jan 1)",
  employee: "Employee start date",
  custom: "Custom date",
})
const PERIOD_UNIT_OPTS = opts<PeriodUnit>({ days: "days", months: "months" })
const USABLE_OPTS: { value: UsableWindow; label: string }[] = [
  { value: "same", label: "Within the same cycle they're acquired" },
  { value: "next", label: "Only in the next cycle" },
]
const FREQUENCY_OPTS = opts(FREQUENCY_LABELS)
const ROUNDING_OPTS = opts<Rounding>(ROUNDING_LABELS)
const EXPIRY_OPTS = opts<Expiry>(EXPIRY_LABELS)
const START_OPTS = GENERATION_START_OPTIONS.map((m) => ({ value: m, label: m }))

const COUNT_IN_OPTS = [
  { value: "working" as const, label: "Working days" },
  { value: "calendar" as const, label: "Calendar days" },
]
const ORDER_OPTS = [
  { value: "oldest" as const, label: "From oldest accrued first" },
  { value: "newest" as const, label: "From newest first" },
]
const BANK_OPTS = [
  { value: "exclude" as const, label: "Don't count it as an absence day" },
  { value: "count" as const, label: "Count it as an absence day" },
]
const REST_OPTS = [
  { value: "exclude" as const, label: "Do not count that rest day" },
  { value: "count" as const, label: "Count that rest day" },
]
const NEGATIVE_OPTS = [
  {
    value: "no" as const,
    label: "No, it is not possible to request more days than maximum available",
  },
  { value: "yes" as const, label: "Yes, allow the counter to go negative" },
]

function granularityOpts(type: AllowanceType): { value: Granularity; label: string }[] {
  const base: { value: Granularity; label: string }[] = [
    { value: "full", label: "Full days only" },
    { value: "half", label: "Allow half days" },
    { value: "decimals", label: "Allow decimals" },
  ]
  if (type === "hours") base.push({ value: "hours", label: "Hours" })
  return base
}

// ── bodies ───────────────────────────────────────────────────────────────────

export function AmountCycleBody({
  r,
  patch,
}: {
  r: AmountCycleRule
  patch: (p: Partial<AmountCycleRule>) => void
}) {
  return (
    <>
      <ConfigRow
        label="Allowance type"
        help="Sets the unit used everywhere downstream"
        control={
          <Segmented<AllowanceType>
            value={r.type}
            onChange={(type) => patch({ type })}
            options={[
              { value: "days", label: "Per days" },
              { value: "hours", label: "Per hours" },
            ]}
          />
        }
      />
      <ConfigRow
        label="Amount"
        control={
          <NumberInput value={r.amount} onChange={(amount) => patch({ amount })} unit={r.type} />
        }
      />
      <ConfigRow
        label="Cycle"
        control={
          <RuleSelect value={r.cycle} onChange={(cycle) => patch({ cycle })} options={CYCLE_OPTS} />
        }
      />
      <ConfigRow
        label="Cycle start"
        control={
          <RuleSelect
            value={r.cycleStart}
            onChange={(cycleStart) => patch({ cycleStart })}
            options={CYCLE_START_OPTS}
          />
        }
      />
      {r.cycleStart === "custom" ? (
        <ConfigRow
          label="Custom start date"
          control={
            <input
              type="date"
              value={r.customDate}
              onChange={(e) => patch({ customDate: e.target.value })}
              className="h-10 w-64 rounded-md border border-solid border-f1-border bg-f1-background px-3 text-sm text-f1-foreground focus:border-f1-border-hover focus:outline-none"
            />
          }
        />
      ) : null}
    </>
  )
}

export function GenerationBody({
  r,
  patch,
}: {
  r: GenerationRule
  patch: (p: Partial<GenerationRule>) => void
}) {
  return (
    <>
      <ConfigRow
        label="How are they generated?"
        stack
        control={
          <RadioGroup
            value={r.mode}
            onChange={(mode) => patch({ mode })}
            options={[
              { value: "upfront", label: "All upfront at cycle start" },
              { value: "progressive", label: "Accrued progressively" },
            ]}
          />
        }
      />
      <ConfigRow
        label="Generation start"
        help="When generation begins"
        control={
          <RuleSelect value={r.start} onChange={(start) => patch({ start })} options={START_OPTS} />
        }
      />
      <ConfigRow
        label="Duration"
        help="Over how long the allowance generates"
        control={
          <div className="inline-flex items-center gap-2">
            <NumberInput value={r.duration} onChange={(duration) => patch({ duration })} />
            <RuleSelect
              value={r.durationUnit}
              onChange={(durationUnit) => patch({ durationUnit })}
              options={PERIOD_UNIT_OPTS}
              width="w-28"
            />
          </div>
        }
      />
      {r.mode === "progressive" ? (
        <>
          <ConfigRow
            label="Accrual frequency"
            control={
              <RuleSelect
                value={r.frequency}
                onChange={(frequency) => patch({ frequency })}
                options={FREQUENCY_OPTS}
              />
            }
          />
          <ConfigRow
            label="Rounding"
            control={
              <RuleSelect
                value={r.rounding}
                onChange={(rounding) => patch({ rounding })}
                options={ROUNDING_OPTS}
              />
            }
          />
        </>
      ) : null}
    </>
  )
}

export function AvailabilityBody({
  r,
  patch,
}: {
  r: AvailabilityRule
  patch: (p: Partial<AvailabilityRule>) => void
}) {
  return (
    <>
      <ConfigRow
        label="Usable in the cycle"
        stack
        control={
          <RadioGroup value={r.usable} onChange={(usable) => patch({ usable })} options={USABLE_OPTS} />
        }
      />
      <ConfigRow
        label="Available immediately"
        help="Acquired time can be used as soon as it's granted"
        control={<ToggleSwitch on={r.immediate} onChange={(immediate) => patch({ immediate })} />}
      />
      {!r.immediate ? (
        <ConfigRow
          label="Waiting period"
          help="After start date"
          control={
            <div className="inline-flex items-center gap-2">
              <NumberInput value={r.waitingValue} onChange={(waitingValue) => patch({ waitingValue })} />
              <RuleSelect
                value={r.waitingUnit}
                onChange={(waitingUnit) => patch({ waitingUnit })}
                options={PERIOD_UNIT_OPTS}
                width="w-28"
              />
            </div>
          }
        />
      ) : null}
      <ConfigRow
        label="Tenure period"
        help="Service required before this allowance applies"
        control={
          <div className="inline-flex items-center gap-2">
            <NumberInput value={r.tenureValue} onChange={(tenureValue) => patch({ tenureValue })} />
            <RuleSelect
              value={r.tenureUnit}
              onChange={(tenureUnit) => patch({ tenureUnit })}
              options={PERIOD_UNIT_OPTS}
              width="w-28"
            />
          </div>
        }
      />
    </>
  )
}

export function DeductionBody({
  r,
  type,
  patch,
}: {
  r: DeductionRule
  type: AllowanceType
  patch: (p: Partial<DeductionRule>) => void
}) {
  return (
    <>
      <ConfigRow
        label="Count absences in"
        control={
          <RuleSelect value={r.countIn} onChange={(countIn) => patch({ countIn })} options={COUNT_IN_OPTS} />
        }
      />
      <ConfigRow
        label="Deduction granularity"
        control={
          <RuleSelect
            value={r.granularity}
            onChange={(granularity) => patch({ granularity })}
            options={granularityOpts(type)}
          />
        }
      />
      <ConfigRow
        label="Deduction order"
        control={
          <RuleSelect value={r.order} onChange={(order) => patch({ order })} options={ORDER_OPTS} />
        }
      />
      <ConfigRow
        label="If a bank holiday falls on the absence"
        tooltip="Choose whether bank holidays inside an absence are deducted from the balance."
        stack
        control={
          <RuleSelect
            value={r.bankHoliday}
            onChange={(bankHoliday) => patch({ bankHoliday })}
            options={BANK_OPTS}
            width="w-full"
          />
        }
      />
      <ConfigRow
        label="If the vacation ends before a rest day"
        tooltip="Whether a trailing rest day (e.g. weekend) is counted when the absence ends right before it."
        stack
        control={
          <RuleSelect
            value={r.restDay}
            onChange={(restDay) => patch({ restDay })}
            options={REST_OPTS}
            width="w-full"
          />
        }
      />
      <ConfigRow
        label="Can the counter be negative?"
        stack
        control={
          <RuleSelect
            value={r.negative}
            onChange={(negative) => patch({ negative })}
            options={NEGATIVE_OPTS}
            width="w-full"
          />
        }
      />
      <ConfigRow
        label="Carry over unused balance"
        help="Roll remaining balance into the next cycle"
        control={<ToggleSwitch on={r.carryOver} onChange={(carryOver) => patch({ carryOver })} />}
      />
      {r.carryOver ? (
        <>
          <ConfigRow
            label="Carry-over cap"
            control={
              <NumberInput
                value={r.carryCap}
                onChange={(carryCap) => patch({ carryCap })}
                unit={r.carryCapUnit}
              />
            }
          />
          <ConfigRow
            label="Expires after"
            control={
              <RuleSelect value={r.expires} onChange={(expires) => patch({ expires })} options={EXPIRY_OPTS} />
            }
          />
        </>
      ) : null}
    </>
  )
}

// ── per-rule quick-action chips ────────────────────────────────────────────────

export function amountCycleChips(
  patch: (p: Partial<AmountCycleRule>) => void,
  onReset: () => void
): QuickAction[] {
  return [
    { label: "Make it monthly", onClick: () => patch({ cycle: "monthly" }) },
    { label: "Switch to hours", onClick: () => patch({ type: "hours" }) },
    { label: "Reset to default", onClick: onReset },
  ]
}

export function generationChips(
  patch: (p: Partial<GenerationRule>) => void,
  onReset: () => void
): QuickAction[] {
  return [
    { label: "All upfront", onClick: () => patch({ mode: "upfront" }) },
    {
      label: "Accrue monthly",
      onClick: () => patch({ mode: "progressive", frequency: "monthly" }),
    },
    { label: "Reset to default", onClick: onReset },
  ]
}

export function availabilityChips(
  patch: (p: Partial<AvailabilityRule>) => void,
  onReset: () => void
): QuickAction[] {
  return [
    { label: "Available immediately", onClick: () => patch({ immediate: true }) },
    {
      label: "3-month waiting period",
      onClick: () =>
        patch({ immediate: false, waitingValue: 3, waitingUnit: "months" }),
    },
    { label: "Reset to default", onClick: onReset },
  ]
}

export function deductionChips(
  patch: (p: Partial<DeductionRule>) => void,
  _onReset: () => void
): QuickAction[] {
  return [
    { label: "Count working days", onClick: () => patch({ countIn: "working" }) },
    { label: "Allow half days", onClick: () => patch({ granularity: "half" }) },
    { label: "Exclude bank holidays", onClick: () => patch({ bankHoliday: "exclude" }) },
  ]
}
