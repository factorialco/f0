import { F0Button, F0Heading } from "@factorialco/f0-react"
import { Ai, Pencil } from "@factorialco/f0-react/icons/app"
import { useRef, useState } from "react"

import { useAiChat, useCopilotAction, useCopilotReadable } from "@/copilot"

import {
  type AccrualProration,
  accrualSummary,
  type BaseAllocation,
  baseSummary,
  type CustomRule,
  MONTHS,
  type RuleLevel,
} from "./allowanceRuleModel"
import { RuleSelect } from "./accrualControls"
import { type Allowance } from "./policiesData"
import { RulesTree } from "./RulesTree"

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

// ── One conversation model (driven through the native f0 agent) ───────────────

// Greeting shown on the welcome screen every time the panel opens (D1).
const GREETING =
  "Let's define the allowance and accrual rules! You can edit the existing " +
  "default rule or create new ones right here. If you already know your rule, " +
  "write or paste it and I'll turn it into structured rules. If you'd rather, " +
  "I can walk you through the defaults with a few quick questions."

// Two greeting chips → route to free-text transform or the guided walk-through.
const GREETING_SUGGESTIONS = [
  {
    icon: Pencil,
    message: "Write or paste my rule",
    prompt:
      "I'll write or paste my rule in plain language — turn it into structured rules.",
  },
  {
    icon: Ai,
    message: "Start with guided questions",
    prompt: "Walk me through the accrual defaults with a few quick questions.",
  },
]

// The deterministic guided script One should walk one question at a time.
const GUIDED_SCRIPT = [
  { step: 1, question: "How many days per cycle?", options: ["20", "22", "25 working days", "Something else"], default: "—" },
  { step: 2, question: "When does the cycle start?", options: ["January (calendar year)", "Start date", "Custom month"], default: "January" },
  { step: 3, question: "How long is the cycle?", options: ["12 months", "6 months", "Custom"], default: "12 months" },
  { step: 4, question: "Prorate for mid-cycle joiners?", options: ["Yes, by time", "No, full"], default: "Prorated" },
  { step: 5, question: "Max accrued days?", options: ["Unlimited", "Cap at base", "Custom cap"], default: "Unlimited" },
  { step: 6, question: "When is it accrued?", options: ["All at once", "Monthly", "Per worked period"], default: "All at once, day 1" },
  { step: 7, question: "When usable?", options: ["Same cycle", "Into next cycle"], default: "Same cycle" },
  { step: 8, question: "Defaults are mapped out. Want to add any rules on top of the base?", options: ["Add a tenure rule", "Add another rule", "No, that's all"], default: "—" },
] as const

// The level-tiered placement logic One applies to any free-text rule.
const LEVELING_RULES =
  "Place every rule at the highest level where its scope is fully true: no " +
  "scope → Common (floor rule, applies in every branch); one scope → that " +
  "level (country / contract / role); several scopes → the deepest, nested. " +
  "A rule that spans a dimension (e.g. a tenure bonus for all countries) is a " +
  "cross-cutting tenure-filter / role-filter peer. Flag a narrower rule that " +
  "overrides a broader one as an Exception. Row order = evaluation order. " +
  "After placing, state placement back (e.g. \"added as a Tenure-filter rule, " +
  "before rounding\"), give a one-line simulation for an example employee, " +
  "then ask to confirm before calling addAccrualRule."

const VALID_LEVELS: RuleLevel[] = [
  "common",
  "country",
  "contract",
  "role",
  "tenure-filter",
  "role-filter",
]

export function Exploration4View({ allowance }: { allowance: Allowance }) {
  const {
    setOpen,
    setPlaceholders,
    setInitialMessage,
    setWelcomeScreenSuggestions,
    clear,
  } = useAiChat()

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

  // Rules One confirms on top of the base — the level-tiered write-back (D5).
  const [customRules, setCustomRules] = useState<CustomRule[]>([])
  const ruleIdRef = useRef(0)
  const deleteRule = (id: string) =>
    setCustomRules((rs) => rs.filter((r) => r.id !== id))

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

  // Rules already placed on top of the base (so One doesn't duplicate them).
  useCopilotReadable({
    description:
      "Rules the admin has already confirmed on top of the base, in evaluation order. Each has a level (scope), title, summary and whether it's an exception.",
    value: customRules.map((r) => ({
      level: r.level,
      title: r.title,
      summary: r.summary,
      isException: r.isException ?? false,
    })),
  })

  // The deterministic guided script One walks one question at a time.
  useCopilotReadable({
    description:
      "Guided setup script. When the admin chooses the guided path, ask these questions ONE AT A TIME in order, surfacing the options as predefined answers and the default. Map each answer to applyAccrualRule. After step 8, offer to add rules on top via the free-text transform.",
    value: GUIDED_SCRIPT,
  })

  // The level-tiered placement logic for any free-text rule.
  useCopilotReadable({
    description:
      "Level-tiered placement logic for free-text rules. Apply this before calling addAccrualRule.",
    value: LEVELING_RULES,
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

  // Add a rule on top of the base, placed at a level — the write-back (D5).
  useCopilotAction({
    name: "addAccrualRule",
    description:
      "Add a confirmed rule on top of the base allowance. Only call this after stating placement, simulating, and getting the admin's confirmation. The rule appears on the page as a level-tiered row in evaluation order.",
    parameters: [
      {
        name: "level",
        type: "string",
        description: `Scope/level — one of: ${VALID_LEVELS.join(", ")}. Use the highest level where the scope is fully true; cross-cutting rules use tenure-filter or role-filter.`,
        required: true,
      },
      {
        name: "title",
        type: "string",
        description: "Short rule title (≤ 5 words)",
        required: true,
      },
      {
        name: "summary",
        type: "string",
        description: "One-sentence plain-language description of the rule",
        required: true,
      },
      {
        name: "isException",
        type: "boolean",
        description: "True if this narrower rule overrides a broader one",
        required: false,
      },
      {
        name: "placementNote",
        type: "string",
        description:
          'Where it landed in evaluation order, e.g. "added as a Tenure-filter rule, before rounding"',
        required: false,
      },
    ],
    handler: ({ level, title, summary, isException, placementNote }) => {
      if (!VALID_LEVELS.includes(level as RuleLevel)) return
      setCustomRules((rs) => [
        ...rs,
        {
          id: `rule-${ruleIdRef.current++}`,
          level: level as RuleLevel,
          title,
          summary,
          isException: isException ?? false,
          placementNote,
        },
      ])
    },
  })

  useCopilotAction({
    name: "removeAccrualRule",
    description:
      "Remove a previously added rule by its title (case-insensitive). Does not affect the base.",
    parameters: [
      { name: "title", type: "string", description: "Title of the rule to remove", required: true },
    ],
    handler: ({ title }) => {
      const t = title.trim().toLowerCase()
      setCustomRules((rs) => rs.filter((r) => r.title.trim().toLowerCase() !== t))
    },
  })

  // Open One with context: reset to the greeting (D1), surface the two routing
  // chips, and set the free-text placeholder.
  const customiseAccrual = () => {
    clear()
    setInitialMessage(GREETING)
    setWelcomeScreenSuggestions(GREETING_SUGGESTIONS)
    setPlaceholders(["Write or paste your rule…"])
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
          <div
            className={`pb-4 ${customRules.length === 0 ? "border-b border-solid border-f1-border-secondary" : ""}`}
          >
            <AccrualProse base={base} accrual={accrual} />
          </div>
          {/* Confirmed rules on top of the base — level-tiered projection (D5) */}
          {customRules.length > 0 ? (
            <div className="border-b border-solid border-f1-border-secondary pb-4">
              <RulesTree rules={customRules} onDelete={deleteRule} />
            </div>
          ) : null}
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
