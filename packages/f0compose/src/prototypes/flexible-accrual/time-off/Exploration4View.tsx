import { F0Button, F0Heading } from "@factorialco/f0-react"
import { Pencil } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { useAiChat, useCopilotAction, useCopilotReadable } from "@/copilot"

import {
  type AccrualProration,
  accrualSummary,
  type BaseAllocation,
  baseSummary,
  MONTHS,
} from "./allowanceRuleModel"
import { RuleSelect } from "./accrualControls"
import { type Allowance } from "./policiesData"

// ─────────────────────────────────────────────────────────────────────────────
// Exploration 4 — Allowance page + One panel pattern
//
// A single-column allowance editor with four stacked sections, each a bare
// title over a list of full-width divider rows (no card containers, no section
// descriptions):
//   1. Basic information       — labelled fields
//   2. Allowance & accrual     — a plain-language PROSE summary (base layer)
//                                with the key settings bolded inline, plus a
//                                low-emphasis "Customise accrual rule" button
//   3. Deduction rules         — labelled fields
//   4. Carryover rules         — labelled fields
//
// The accrual section is NOT a form — it's the prose foundation that rules
// modify. "Customise accrual rule" opens the NATIVE f0 One chat (via
// `@/copilot`), loaded with the current rule restated. One can rewrite the
// rule through the `applyAccrualRule` copilot action, and the prose
// re-derives from the underlying settings — no prose is ever stored.
// ─────────────────────────────────────────────────────────────────────────────

// ── Field option lists (Basic info / Deduction / Carryover) ───────────────────

const ALLOWANCE_TYPE_OPTS = [
  { value: "fixed", label: "Fixed balance" },
  { value: "overtime", label: "Overtime" },
  { value: "worked", label: "Based on time worked" },
]
const ABSENCE_TYPE_OPTS = [
  { value: "", label: "Select absences" },
  { value: "vacation", label: "Vacation" },
  { value: "sick", label: "Sick leave" },
  { value: "personal", label: "Personal day" },
]
const DISPLAY_OPTS = [
  { value: "days-half", label: "Days & Half days" },
  { value: "days", label: "Days only" },
  { value: "hours", label: "Hours" },
  { value: "decimals", label: "Decimals" },
]
const BANK_HOLIDAY_OPTS = [
  { value: "exclude", label: "Don't count it as an absence day" },
  { value: "count", label: "Count it as an absence day" },
]
const NEGATIVE_OPTS = [
  { value: "no", label: "No, it is not possible to request more than available" },
  { value: "yes", label: "Yes, the balance can go negative" },
]
const CARRY_DAYS_OPTS = [
  { value: "0", label: "0" },
  { value: "5", label: "5 days" },
  { value: "10", label: "10 days" },
  { value: "15", label: "15 days" },
  { value: "unlimited", label: "Unlimited" },
]
const EXPIRE_OPTS = [
  { value: "12m", label: "12 months after cycle ends" },
  { value: "none", label: "No expiration" },
  { value: "custom", label: "Custom" },
]

const CONTROL_WIDTH = "w-72"

// One's opening turn when the panel is summoned: restate → simulate → confirm.
function openingMessage(base: BaseAllocation, accrual: AccrualProration): string {
  return (
    `Let's customise this accrual rule. Right now: ${baseSummary(base)}. ` +
    `${accrualSummary(accrual)}.\n\n` +
    `So an employee starting on day one of the cycle would see ${base.amount} ` +
    `working days available ${accrual.accrualTiming}.\n\n` +
    `Tell me what to change in plain language — e.g. "give everyone 22 days", ` +
    `"start the cycle in April", "cap it at 25 days", or "accrue monthly" — and ` +
    `I'll restate it and confirm before applying.`
  )
}

export function Exploration4View({ allowance }: { allowance: Allowance }) {
  const { setOpen, setPlaceholders, appendMessages } = useAiChat()

  const [name, setName] = useState(allowance.name)
  const [allowanceType, setAllowanceType] = useState("fixed")
  const [absenceType, setAbsenceType] = useState("")

  // Base allocation + accrual defaults — the prose foundation.
  const [base, setBase] = useState<BaseAllocation>(() => ({
    amount: allowance.amount,
    startMonth: "January",
    cycleMonths: 12,
  }))
  const [accrual, setAccrual] = useState<AccrualProration>(() => ({
    proration: "prorated",
    maxDays: "unlimited",
    accrualTiming: "all at once on the first day of the cycle",
    usabilityWindow: "within the same cycle",
  }))

  // Deduction
  const [display, setDisplay] = useState("days-half")
  const [bankHoliday, setBankHoliday] = useState("exclude")
  const [negative, setNegative] = useState("no")

  // Carryover
  const [carryDays, setCarryDays] = useState("0")
  const [expire, setExpire] = useState("12m")

  // ── Co-create with One (native f0 chat) ─────────────────────────────────────
  // Expose the live rule so One reasons about exactly what the admin sees.
  useCopilotReadable({
    description:
      "The accrual rule currently shown on this allowance page, as a plain-language summary plus its structured settings. The on-screen prose re-derives from these settings.",
    value: {
      allowanceName: name,
      summary: `${baseSummary(base)}. ${accrualSummary(accrual)}.`,
      base,
      accrual,
    },
  })

  // Let One rewrite the rule. Only the provided fields change; the prose
  // re-derives, so the on-screen summary updates the moment One applies.
  useCopilotAction({
    name: "applyAccrualRule",
    description:
      "Apply a change to this allowance's accrual rule. Pass only the fields that change. After restating the change and getting the admin's confirmation, call this to write it back — the on-screen prose summary updates automatically.",
    parameters: [
      {
        name: "amount",
        type: "number",
        description: "Base working days granted per cycle",
        required: false,
      },
      {
        name: "startMonth",
        type: "string",
        description: `Cycle start month (one of: ${MONTHS.join(", ")})`,
        required: false,
      },
      {
        name: "cycleMonths",
        type: "number",
        description: "Cycle length in months",
        required: false,
      },
      {
        name: "proration",
        type: "string",
        description: 'Either "prorated" or "not prorated"',
        required: false,
      },
      {
        name: "maxDays",
        type: "string",
        description: '"unlimited" or a number of days as a string (e.g. "25")',
        required: false,
      },
      {
        name: "accrualTiming",
        type: "string",
        description:
          'When days accrue, e.g. "all at once on the first day of the cycle" or "monthly"',
        required: false,
      },
      {
        name: "usabilityWindow",
        type: "string",
        description:
          'When accrued days can be used, e.g. "within the same cycle" or "in the next cycle"',
        required: false,
      },
    ],
    handler: ({
      amount,
      startMonth,
      cycleMonths,
      proration,
      maxDays,
      accrualTiming,
      usabilityWindow,
    }) => {
      setBase((b) => ({
        ...b,
        ...(amount !== undefined ? { amount } : {}),
        ...(startMonth !== undefined ? { startMonth } : {}),
        ...(cycleMonths !== undefined ? { cycleMonths } : {}),
      }))
      setAccrual((a) => ({
        ...a,
        ...(proration === "prorated" || proration === "not prorated"
          ? { proration }
          : {}),
        ...(maxDays !== undefined ? { maxDays } : {}),
        ...(accrualTiming !== undefined ? { accrualTiming } : {}),
        ...(usabilityWindow !== undefined ? { usabilityWindow } : {}),
      }))
    },
  })

  const customiseAccrual = () => {
    setPlaceholders([
      'e.g. "give everyone 22 days and start the cycle in April"',
      'e.g. "cap it at 25 days and accrue monthly"',
    ])
    appendMessages?.(
      [{ role: "assistant", content: openingMessage(base, accrual) }],
      { persist: false }
    )
    setOpen(true)
  }

  return (
    // Single-column form, centered, ~1080px max width, 40px section gaps.
    <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-10">
      {/* 1. Basic information */}
      <section className="flex flex-col gap-3">
        <SectionHeader title="Basic information" />
        <div className="flex flex-col">
          <FieldRow label="Allowance name">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Vacaciones"
              className={`h-10 ${CONTROL_WIDTH} rounded-md border border-solid border-f1-border bg-f1-background px-3 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-hover focus:outline-none`}
            />
          </FieldRow>
          <FieldRow label="Type of allowance">
            <RuleSelect value={allowanceType} onChange={setAllowanceType} options={ALLOWANCE_TYPE_OPTS} width={CONTROL_WIDTH} />
          </FieldRow>
          <FieldRow label="Absence type">
            <RuleSelect value={absenceType} onChange={setAbsenceType} options={ABSENCE_TYPE_OPTS} width={CONTROL_WIDTH} />
          </FieldRow>
        </div>
      </section>

      {/* 2. Allowance & accrual rules — prose summary, customised via One */}
      <section className="flex flex-col gap-3">
        <SectionHeader title="Allowance & accrual rules" />
        <div className="flex flex-col">
          <div className="border-b border-solid border-f1-border-secondary pb-4">
            <AccrualProse base={base} accrual={accrual} />
          </div>
          <div className="pt-4">
            <F0Button
              label="Customise accrual rule"
              variant="ghost"
              icon={Pencil}
              onClick={customiseAccrual}
            />
          </div>
        </div>
      </section>

      {/* 3. Deduction rules */}
      <section className="flex flex-col gap-3">
        <SectionHeader title="Deduction rules" />
        <div className="flex flex-col">
          <FieldRow label="How should we display?">
            <RuleSelect value={display} onChange={setDisplay} options={DISPLAY_OPTS} width={CONTROL_WIDTH} />
          </FieldRow>
          <FieldRow label="If a bank holiday falls on the absence">
            <RuleSelect value={bankHoliday} onChange={setBankHoliday} options={BANK_HOLIDAY_OPTS} width={CONTROL_WIDTH} />
          </FieldRow>
          <FieldRow label="Can the counter be negative?">
            <RuleSelect value={negative} onChange={setNegative} options={NEGATIVE_OPTS} width={CONTROL_WIDTH} />
          </FieldRow>
        </div>
      </section>

      {/* 4. Carryover rules */}
      <section className="flex flex-col gap-3">
        <SectionHeader title="Carryover rules" />
        <div className="flex flex-col">
          <FieldRow label="How many days carry over?">
            <RuleSelect value={carryDays} onChange={setCarryDays} options={CARRY_DAYS_OPTS} width={CONTROL_WIDTH} />
          </FieldRow>
          <FieldRow label="When do carryover days expire?">
            <RuleSelect value={expire} onChange={setExpire} options={EXPIRE_OPTS} width={CONTROL_WIDTH} />
          </FieldRow>
        </div>
      </section>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Building blocks
// ─────────────────────────────────────────────────────────────────────────────

function SectionHeader({ title }: { title: string }) {
  return <F0Heading content={title} variant="heading" as="h2" />
}

// Full-width divider row: label left, control right. Every row carries its own
// bottom hairline (no surrounding card).
function FieldRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2 border-b border-solid border-f1-border-secondary py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <span className="text-sm font-medium text-f1-foreground">{label}</span>
      <div className="shrink-0">{children}</div>
    </div>
  )
}

// Plain-language base + accrual summary. Connective words stay muted; the key
// settings are dark + bold — the two-tone prose treatment from the spec.
function AccrualProse({
  base,
  accrual,
}: {
  base: BaseAllocation
  accrual: AccrualProration
}) {
  const Key = ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-f1-foreground">{children}</strong>
  )
  return (
    <p className="m-0 text-sm leading-relaxed text-f1-foreground-secondary">
      Employees receive <Key>{base.amount} working days</Key> of allowance per
      cycle, starting on{" "}
      <Key>
        {base.startMonth} for {base.cycleMonths} months
      </Key>
      . Base allowance is <Key>{accrual.proration}</Key>, with{" "}
      <Key>{accrual.maxDays}</Key> maximum days, accrued{" "}
      <Key>{accrual.accrualTiming}</Key>, and usable{" "}
      <Key>{accrual.usabilityWindow}</Key>.
    </p>
  )
}
