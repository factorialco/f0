import { F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import { ChevronRight } from "@factorialco/f0-react/icons/app"
import { useMemo, useState } from "react"

import { type QuickAction, RuleModal } from "./accrualControls"
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
  defaultAccrualState,
  type RuleKey,
  ruleSummary,
} from "./accrualRules"
import { type Allowance } from "./policiesData"

// ─────────────────────────────────────────────────────────────────────────────
// Exploration 1 — Accrual rules as four fixed question-rows, each opening a modal
// ─────────────────────────────────────────────────────────────────────────────

const ROWS: { key: RuleKey; question: string }[] = [
  { key: "amountCycle", question: "How many days or hours, and what cycle?" },
  { key: "generation", question: "How are they generated?" },
  { key: "availability", question: "When can they be used?" },
  { key: "deduction", question: "How do they deduct?" },
]

export function AccrualRulesSection({ allowance }: { allowance: Allowance }) {
  const [state, setState] = useState<AccrualRulesState>(() =>
    defaultAccrualState(allowance)
  )
  const [openKey, setOpenKey] = useState<RuleKey | null>(null)
  const [draft, setDraft] = useState<AccrualRulesState>(state)

  const summaries = useMemo(() => ruleSummary(state), [state])

  const openModal = (key: RuleKey) => {
    setDraft(state)
    setOpenKey(key)
  }
  const cancel = () => setOpenKey(null)
  const save = () => {
    if (!openKey) return
    const key = openKey
    setState({ ...draft, configured: { ...draft.configured, [key]: true } })
    setOpenKey(null)
  }
  const resetRule = (key: RuleKey) =>
    setDraft((d) => ({ ...d, [key]: defaultAccrualState(allowance)[key] }))

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <F0Heading content="Accrual rules" variant="heading" as="h2" />
        <F0Text
          content="Configure how this allowance is generated, used, and deducted"
          variant="description"
        />
      </div>

      <div className="divide-y divide-f1-border-secondary rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
        {ROWS.map((row) => (
          <QuestionRow
            key={row.key}
            configured={state.configured[row.key]}
            question={row.question}
            summary={summaries[row.key]}
            onClick={() => openModal(row.key)}
          />
        ))}
      </div>

      {openKey ? (
        <RuleModalHost
          openKey={openKey}
          draft={draft}
          setDraft={setDraft}
          onCancel={cancel}
          onSave={save}
          onReset={() => resetRule(openKey)}
        />
      ) : null}
    </section>
  )
}

function QuestionRow({
  configured,
  question,
  summary,
  onClick,
}: {
  configured: boolean
  question: string
  summary: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-f1-background-hover"
    >
      <span
        className={`flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-solid ${
          configured
            ? "border-f1-foreground-accent bg-f1-foreground-accent"
            : "border-f1-border bg-f1-background"
        }`}
        aria-label={configured ? "Configured" : "Using default"}
      />
      <span className="flex-1 text-sm font-medium text-f1-foreground">
        {question}
      </span>
      <span className="hidden text-sm text-f1-foreground-secondary sm:block">
        {summary}
      </span>
      <F0Icon icon={ChevronRight} size="sm" />
    </button>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Modal host — selects the body + chrome for the open rule
// ─────────────────────────────────────────────────────────────────────────────

function RuleModalHost({
  openKey,
  draft,
  setDraft,
  onCancel,
  onSave,
  onReset,
}: {
  openKey: RuleKey
  draft: AccrualRulesState
  setDraft: React.Dispatch<React.SetStateAction<AccrualRulesState>>
  onCancel: () => void
  onSave: () => void
  onReset: () => void
}) {
  const patch = <K extends RuleKey>(
    key: K,
    partial: Partial<AccrualRulesState[K]>
  ) => setDraft((d) => ({ ...d, [key]: { ...d[key], ...partial } }))

  const config = RULE_META[openKey]
  let body: React.ReactNode = null
  let chips: QuickAction[] = []

  if (openKey === "amountCycle") {
    const p = (x: Partial<AccrualRulesState["amountCycle"]>) => patch("amountCycle", x)
    body = <AmountCycleBody r={draft.amountCycle} patch={p} />
    chips = amountCycleChips(p, onReset)
  } else if (openKey === "generation") {
    const p = (x: Partial<AccrualRulesState["generation"]>) => patch("generation", x)
    body = <GenerationBody r={draft.generation} patch={p} />
    chips = generationChips(p, onReset)
  } else if (openKey === "availability") {
    const p = (x: Partial<AccrualRulesState["availability"]>) => patch("availability", x)
    body = <AvailabilityBody r={draft.availability} patch={p} />
    chips = availabilityChips(p, onReset)
  } else {
    const p = (x: Partial<AccrualRulesState["deduction"]>) => patch("deduction", x)
    body = <DeductionBody r={draft.deduction} type={draft.amountCycle.type} patch={p} />
    chips = deductionChips(p, onReset)
  }

  return (
    <RuleModal
      open
      icon={config.icon}
      title={config.title}
      chips={chips}
      onReset={onReset}
      onCancel={onCancel}
      onSave={onSave}
    >
      {body}
    </RuleModal>
  )
}
