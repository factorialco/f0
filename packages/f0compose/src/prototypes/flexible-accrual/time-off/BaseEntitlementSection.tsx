import { F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import { Delete, Pencil, Plus } from "@factorialco/f0-react/icons/app"
import { useRef, useState } from "react"

import {
  ConfigRow,
  NumberInput,
  type QuickAction,
  RuleModal,
  RuleSelect,
  Segmented,
} from "./accrualControls"
import {
  amountCycleChips,
  AmountCycleBody,
  availabilityChips,
  AvailabilityBody,
  deductionChips,
  DeductionBody,
  generationChips,
  GenerationBody,
  RULE_META,
} from "./accrualModalBodies"
import {
  type AccrualRulesState,
  type AllowanceType,
  amountCycleSummary,
  availabilitySummary,
  type CountIn,
  type CycleStart,
  deductionSummary,
  defaultAccrualState,
  generationSummary,
  type PeriodUnit,
  type RuleKey,
} from "./accrualRules"
import { type Allowance } from "./policiesData"

// ─────────────────────────────────────────────────────────────────────────────
// Exploration 3 — Base entitlement (structured) + Add-rule flow (modal-driven)
// ─────────────────────────────────────────────────────────────────────────────

type BaseEntitlement = {
  amount: number
  countIn: CountIn
  unit: AllowanceType
  cycleStart: CycleStart
  customDate: string
  duration: number
  durationUnit: PeriodUnit
}

type SavedRule = { id: string; kind: RuleKey; config: AccrualRulesState }

const COUNT_IN_OPTS = [
  { value: "working" as const, label: "Working days" },
  { value: "calendar" as const, label: "Calendar days" },
]
const CYCLE_START_OPTS = [
  { value: "calendar" as const, label: "Calendar year (Jan 1)" },
  { value: "employee" as const, label: "Employee start date" },
  { value: "custom" as const, label: "Custom date" },
]
const PERIOD_UNIT_OPTS = [
  { value: "days" as const, label: "days" },
  { value: "months" as const, label: "months" },
]
const RULE_KIND_OPTS: { value: RuleKey; label: string }[] = [
  { value: "amountCycle", label: "Amount & cycle" },
  { value: "generation", label: "Generation" },
  { value: "availability", label: "Availability" },
  { value: "deduction", label: "Deduction" },
]

function ruleSummaryFor(rule: SavedRule): string {
  switch (rule.kind) {
    case "amountCycle":
      return amountCycleSummary(rule.config.amountCycle)
    case "generation":
      return generationSummary(rule.config.generation)
    case "availability":
      return availabilitySummary(rule.config.availability)
    case "deduction":
      return deductionSummary(rule.config.deduction)
  }
}

export function BaseEntitlementSection({ allowance }: { allowance: Allowance }) {
  const [base, setBase] = useState<BaseEntitlement>(() => ({
    amount: allowance.amount || 25,
    countIn: "working",
    unit: allowance.unit === "working hours" ? "hours" : "days",
    cycleStart: "calendar",
    customDate: "",
    duration: 12,
    durationUnit: "months",
  }))
  const patchBase = (p: Partial<BaseEntitlement>) => setBase((b) => ({ ...b, ...p }))

  const [rules, setRules] = useState<SavedRule[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draftKind, setDraftKind] = useState<RuleKey>("amountCycle")
  const [draft, setDraft] = useState<AccrualRulesState>(() =>
    defaultAccrualState(allowance)
  )
  const idRef = useRef(0)

  const freshDraft = (): AccrualRulesState => {
    const d = defaultAccrualState(allowance)
    d.amountCycle.type = base.unit
    d.deduction.carryCapUnit = base.unit
    return d
  }

  const openAdd = () => {
    setEditingId(null)
    setDraftKind("amountCycle")
    setDraft(freshDraft())
    setModalOpen(true)
  }
  const openEdit = (rule: SavedRule) => {
    setEditingId(rule.id)
    setDraftKind(rule.kind)
    setDraft(rule.config)
    setModalOpen(true)
  }
  const cancel = () => {
    setModalOpen(false)
    setEditingId(null)
  }
  const save = () => {
    if (editingId) {
      const id = editingId
      setRules((rs) =>
        rs.map((r) => (r.id === id ? { ...r, kind: draftKind, config: draft } : r))
      )
    } else {
      setRules((rs) => [
        ...rs,
        { id: `rule-${idRef.current++}`, kind: draftKind, config: draft },
      ])
    }
    setModalOpen(false)
    setEditingId(null)
  }
  const deleteRule = (id: string) => setRules((rs) => rs.filter((r) => r.id !== id))
  const resetDraft = () => setDraft(freshDraft())

  return (
    <section className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <F0Heading content="Base entitlement" variant="heading" as="h2" />
        <F0Text
          content="Set the base allowance, then add rules for conditional cases"
          variant="description"
        />
      </div>

      {/* Callout */}
      <div className="flex gap-3 rounded-lg bg-f1-background-secondary p-4">
        <span className="w-1 shrink-0 self-stretch rounded-full bg-f1-background-accent-bold" />
        <div className="flex flex-col gap-1">
          <F0Text
            content="Define the standard allowance everyone gets."
            variant="body"
          />
          <F0Text
            content="Add rules on top to adjust how much is granted or deducted under specific conditions."
            variant="description"
          />
        </div>
      </div>

      {/* Base entitlement card */}
      <div className="flex flex-col gap-3">
        <ConfigRow
          label="Allowance amount"
          control={
            <NumberInput
              value={base.amount}
              onChange={(amount) => patchBase({ amount })}
              unit={base.unit}
            />
          }
        />
        <ConfigRow
          label="Count in"
          control={
            <RuleSelect
              value={base.countIn}
              onChange={(countIn) => patchBase({ countIn })}
              options={COUNT_IN_OPTS}
            />
          }
        />
        <ConfigRow
          label="Unit"
          control={
            <Segmented<AllowanceType>
              value={base.unit}
              onChange={(unit) => patchBase({ unit })}
              options={[
                { value: "days", label: "Days" },
                { value: "hours", label: "Hours" },
              ]}
            />
          }
        />
        <ConfigRow
          label="Cycle start"
          control={
            <RuleSelect
              value={base.cycleStart}
              onChange={(cycleStart) => patchBase({ cycleStart })}
              options={CYCLE_START_OPTS}
            />
          }
        />
        {base.cycleStart === "custom" ? (
          <ConfigRow
            label="Custom start date"
            control={
              <input
                type="date"
                value={base.customDate}
                onChange={(e) => patchBase({ customDate: e.target.value })}
                className="h-10 w-64 rounded-md border border-solid border-f1-border bg-f1-background px-3 text-sm text-f1-foreground focus:border-f1-border-hover focus:outline-none"
              />
            }
          />
        ) : null}
        <ConfigRow
          label="Duration"
          help="How long the cycle lasts"
          control={
            <div className="inline-flex items-center gap-2">
              <NumberInput
                value={base.duration}
                onChange={(duration) => patchBase({ duration })}
              />
              <RuleSelect
                value={base.durationUnit}
                onChange={(durationUnit) => patchBase({ durationUnit })}
                options={PERIOD_UNIT_OPTS}
                width="w-28"
              />
            </div>
          }
        />
      </div>

      {/* Add rule + rules list */}
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={openAdd}
          className="inline-flex items-center justify-center gap-1.5 self-start rounded-xl border border-dashed border-f1-border bg-f1-background px-4 py-2.5 text-sm font-medium text-f1-foreground-accent transition-colors hover:border-f1-border-hover hover:bg-f1-background-hover"
        >
          <F0Icon icon={Plus} size="sm" />
          Add rule
        </button>

        {rules.length > 0 ? (
          <div className="divide-y divide-f1-border-secondary rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
            {rules.map((rule) => (
              <RuleRow
                key={rule.id}
                kindLabel={RULE_META[rule.kind].title}
                summary={ruleSummaryFor(rule)}
                onEdit={() => openEdit(rule)}
                onDelete={() => deleteRule(rule.id)}
              />
            ))}
          </div>
        ) : null}
      </div>

      {/* Rule modal */}
      {modalOpen ? (
        <AddRuleModal
          draftKind={draftKind}
          setDraftKind={setDraftKind}
          draft={draft}
          setDraft={setDraft}
          baseUnit={base.unit}
          onReset={resetDraft}
          onCancel={cancel}
          onSave={save}
        />
      ) : null}
    </section>
  )
}

function RuleRow({
  kindLabel,
  summary,
  onEdit,
  onDelete,
}: {
  kindLabel: string
  summary: string
  onEdit: () => void
  onDelete: () => void
}) {
  return (
    <div className="flex items-center gap-3 p-4">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-f1-background-accent text-f1-foreground-accent">
        <F0Icon icon={RULE_META.amountCycle.icon} size="xs" />
      </span>
      <div className="flex flex-1 flex-col">
        <span className="text-sm font-medium text-f1-foreground">{kindLabel}</span>
        <span className="text-sm text-f1-foreground-secondary">{summary}</span>
      </div>
      <button
        type="button"
        onClick={onEdit}
        aria-label="Edit rule"
        className="flex h-8 w-8 items-center justify-center rounded-md text-f1-foreground-secondary hover:bg-f1-background-hover hover:text-f1-foreground"
      >
        <F0Icon icon={Pencil} size="sm" />
      </button>
      <button
        type="button"
        onClick={onDelete}
        aria-label="Delete rule"
        className="flex h-8 w-8 items-center justify-center rounded-md text-f1-foreground-secondary hover:bg-f1-background-hover hover:text-f1-foreground-critical"
      >
        <F0Icon icon={Delete} size="sm" />
      </button>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Add-rule modal — one RuleModal shell; a rule-type selector swaps the body.
// ─────────────────────────────────────────────────────────────────────────────

function AddRuleModal({
  draftKind,
  setDraftKind,
  draft,
  setDraft,
  baseUnit,
  onReset,
  onCancel,
  onSave,
}: {
  draftKind: RuleKey
  setDraftKind: (k: RuleKey) => void
  draft: AccrualRulesState
  setDraft: React.Dispatch<React.SetStateAction<AccrualRulesState>>
  baseUnit: AllowanceType
  onReset: () => void
  onCancel: () => void
  onSave: () => void
}) {
  const patch = <K extends RuleKey>(
    key: K,
    partial: Partial<AccrualRulesState[K]>
  ) => setDraft((d) => ({ ...d, [key]: { ...d[key], ...partial } }))

  const meta = RULE_META[draftKind]

  let body: React.ReactNode = null
  let chips: QuickAction[] = []
  if (draftKind === "amountCycle") {
    const p = (x: Partial<AccrualRulesState["amountCycle"]>) => patch("amountCycle", x)
    body = <AmountCycleBody r={draft.amountCycle} patch={p} />
    chips = amountCycleChips(p, onReset)
  } else if (draftKind === "generation") {
    const p = (x: Partial<AccrualRulesState["generation"]>) => patch("generation", x)
    body = <GenerationBody r={draft.generation} patch={p} />
    chips = generationChips(p, onReset)
  } else if (draftKind === "availability") {
    const p = (x: Partial<AccrualRulesState["availability"]>) => patch("availability", x)
    body = <AvailabilityBody r={draft.availability} patch={p} />
    chips = availabilityChips(p, onReset)
  } else {
    const p = (x: Partial<AccrualRulesState["deduction"]>) => patch("deduction", x)
    body = <DeductionBody r={draft.deduction} type={baseUnit} patch={p} />
    chips = deductionChips(p, onReset)
  }

  return (
    <RuleModal
      open
      icon={meta.icon}
      title={meta.title}
      chips={chips}
      onReset={onReset}
      onCancel={onCancel}
      onSave={onSave}
    >
      <ConfigRow
        label="Rule type"
        help="What this rule configures"
        control={
          <RuleSelect value={draftKind} onChange={setDraftKind} options={RULE_KIND_OPTS} />
        }
      />
      {body}
    </RuleModal>
  )
}
