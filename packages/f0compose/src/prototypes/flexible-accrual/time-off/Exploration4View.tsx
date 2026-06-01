import { F0Button, F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import { ArrowUp, Delete, Pencil, Plus } from "@factorialco/f0-react/icons/app"
import { useRef, useState } from "react"

import { NumberInput, RuleSelect, ToggleSwitch } from "./accrualControls"
import { OneRuleModal, type OneRuleKind } from "./OneRuleModal"
import { type Allowance } from "./policiesData"

type OneRule = { id: string; text: string }

// ─────────────────────────────────────────────────────────────────────────────
// Exploration 4 — plain-language inline-edit
//
// Base allowance and Accrual rules are written as English sentences; every
// configurable value is an inline-editable token (bold + dotted underline) that
// opens a dark anchored popover with suggestion chips + a manual input. Basic
// info, Deduction and Carryover stay as conventional labelled fields — the
// contrast between the two styles is intentional.
// ─────────────────────────────────────────────────────────────────────────────

type ChipOpt = { label: string; value: string }
type TokenSpec = {
  title: string
  chips: ChipOpt[]
  manual?: "number" | "text"
}

const chips = (...vals: string[]): ChipOpt[] => vals.map((v) => ({ label: v, value: v }))

const TOKENS: Record<string, TokenSpec> = {
  baseAmount: { title: "How many days?", chips: chips("15", "22", "25"), manual: "number" },
  baseUnit: { title: "Days or hours?", chips: [{ label: "Days", value: "days" }, { label: "Hours", value: "hours" }] },
  baseCount: {
    title: "Counted against which days?",
    chips: [{ label: "Working", value: "working" }, { label: "Calendar", value: "calendar" }],
  },
  cycleMonth: { title: "When does the cycle begin?", chips: chips("January", "April"), manual: "text" },
  cycleDuration: { title: "How long does the cycle run?", chips: chips("12 months", "6 months"), manual: "text" },
  prorated: {
    title: "Prorated for mid-cycle joiners?",
    chips: [{ label: "Prorated", value: "prorated" }, { label: "Not prorated", value: "not prorated" }],
  },
  maxDays: { title: "Maximum allowance days?", chips: chips("Unlimited"), manual: "number" },
  howAccrued: {
    title: "How are days accrued?",
    chips: [
      { label: "All at once — first day of cycle", value: "all at once on the first day of the cycle" },
      { label: "Monthly", value: "monthly" },
      { label: "Per pay period", value: "per pay period" },
    ],
  },
  whenUsed: {
    title: "When can they be used?",
    chips: [
      { label: "Same cycle acquired", value: "in the same cycle acquired" },
      { label: "Carried to next cycle", value: "carried to the next cycle" },
    ],
  },
  tenureNum: { title: "Required tenure?", chips: chips("1", "3", "5"), manual: "number" },
  tenureUnit: {
    title: "Tenure unit?",
    chips: [{ label: "Months", value: "months" }, { label: "Years", value: "years" }],
  },
  tenureTiming: {
    title: "When does the change take effect?",
    chips: [{ label: "Immediately", value: "immediately" }, { label: "Next cycle", value: "at the next cycle" }],
  },
  additionalDays: { title: "How many extra days?", chips: chips("1", "2", "5"), manual: "number" },
  tenureMax: { title: "Tenure maximum days?", chips: chips("Unlimited"), manual: "number" },
}

const DEFAULTS: Record<string, string> = {
  baseAmount: "0",
  baseUnit: "days",
  baseCount: "working",
  cycleMonth: "January",
  cycleDuration: "12 months",
  prorated: "prorated",
  maxDays: "Unlimited",
  howAccrued: "all at once on the first day of the cycle",
  whenUsed: "in the same cycle acquired",
  tenureNum: "",
  tenureUnit: "months",
  tenureTiming: "immediately",
  additionalDays: "",
  tenureMax: "Unlimited",
}

const ALLOWANCE_TYPE_OPTS = [
  { value: "paid", label: "Paid time off" },
  { value: "unpaid", label: "Unpaid leave" },
]
const ABSENCE_TYPE_OPTS = [
  { value: "vacation", label: "Vacation" },
  { value: "sick", label: "Sick leave" },
  { value: "personal", label: "Personal day" },
]
const BANK_HOLIDAY_OPTS = [
  { value: "exclude", label: "Don't count it as an absence day" },
  { value: "count", label: "Count it as an absence day" },
]
const YES_NO_OPTS = [
  { value: "no", label: "No" },
  { value: "yes", label: "Yes" },
]
const RESTRICT_OPTS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
]
const DISPLAY_OPTS = [
  { value: "days-half", label: "Days & half days" },
  { value: "days", label: "Days only" },
  { value: "hours", label: "Hours" },
  { value: "decimals", label: "Decimals" },
]
const EXPIRE_OPTS = [
  { value: "12m", label: "12 months after cycle ends" },
  { value: "none", label: "No expiration" },
  { value: "custom", label: "Custom" },
]

export function Exploration4View({ allowance }: { allowance: Allowance }) {
  const [name, setName] = useState(allowance.name)
  const [allowanceType, setAllowanceType] = useState("paid")
  const [absenceType, setAbsenceType] = useState("vacation")

  const [values, setValues] = useState<Record<string, string>>(DEFAULTS)
  const [openId, setOpenId] = useState<string | null>(null)
  const setValue = (id: string, v: string) => setValues((s) => ({ ...s, [id]: v }))

  // Deduction
  const [bankHoliday, setBankHoliday] = useState("exclude")
  const [negative, setNegative] = useState("no")
  const [restrict, setRestrict] = useState("yes")
  const [display, setDisplay] = useState("days-half")

  // Carryover
  const [carryUnlimited, setCarryUnlimited] = useState(false)
  const [carryDays, setCarryDays] = useState(0)
  const [expire, setExpire] = useState("12m")

  // Optional blocks — collapsed until the user adds them (no empty-token sentences)
  const [tenureOn, setTenureOn] = useState(false)
  const [carryOn, setCarryOn] = useState(false)
  const addTenure = () => {
    setValues((s) => ({
      ...s,
      tenureNum: s.tenureNum || "1",
      additionalDays: s.additionalDays || "1",
    }))
    setTenureOn(true)
  }

  // One-authored rules per section
  const [baseRules, setBaseRules] = useState<OneRule[]>([])
  const [accrualRules, setAccrualRules] = useState<OneRule[]>([])
  const [oneModal, setOneModal] = useState<{ kind: OneRuleKind; editingId: string | null } | null>(
    null
  )
  const ruleIdRef = useRef(0)

  const rulesFor = (kind: OneRuleKind) => (kind === "base" ? baseRules : accrualRules)
  const setRulesFor = (kind: OneRuleKind) =>
    kind === "base" ? setBaseRules : setAccrualRules
  const removeRule = (kind: OneRuleKind, id: string) =>
    setRulesFor(kind)((rs) => rs.filter((r) => r.id !== id))
  const saveOne = (text: string) => {
    if (!oneModal || text === "") return
    const { kind, editingId } = oneModal
    if (editingId) {
      setRulesFor(kind)((rs) => rs.map((r) => (r.id === editingId ? { ...r, text } : r)))
    } else {
      setRulesFor(kind)((rs) => [...rs, { id: `r-${ruleIdRef.current++}`, text }])
    }
    setOneModal(null)
  }
  const deleteOne = () => {
    if (!oneModal) return
    if (oneModal.editingId) removeRule(oneModal.kind, oneModal.editingId)
    setOneModal(null)
  }

  const addRuleButton = (kind: OneRuleKind) => (
    <F0Button
      label="Add condition"
      variant="outline"
      icon={Plus}
      onClick={() => setOneModal({ kind, editingId: null })}
    />
  )

  const editingRule = oneModal?.editingId
    ? rulesFor(oneModal.kind).find((r) => r.id === oneModal.editingId)
    : undefined

  const token = (id: string) => (
    <InlineToken
      spec={TOKENS[id]}
      value={values[id]}
      isOpen={openId === id}
      onOpen={() => setOpenId(id)}
      onClose={() => setOpenId(null)}
      onChange={(v) => setValue(id, v)}
    />
  )

  return (
    // -mt-5 cancels StandardLayout's top padding (py-5) per the "no top padding" spec.
    <div className="-mt-5 flex w-full flex-col gap-10">
      {/* 1. Basic information — labelled fields */}
      <section className="flex flex-col gap-6">
        <SectionHeader title="Basic information" subtitle="Set the core details of this allowance" />
        <div className="divide-y divide-f1-border-secondary rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
          <FieldRow label="Allowance name">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Vacaciones"
              className="h-10 w-64 rounded-md border border-solid border-f1-border bg-f1-background px-3 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-hover focus:outline-none"
            />
          </FieldRow>
          <FieldRow label="Type of allowance">
            <RuleSelect value={allowanceType} onChange={setAllowanceType} options={ALLOWANCE_TYPE_OPTS} />
          </FieldRow>
          <FieldRow label="Absence types">
            <RuleSelect value={absenceType} onChange={setAbsenceType} options={ABSENCE_TYPE_OPTS} />
          </FieldRow>
        </div>
      </section>

      {/* 2. Base entitlement — plain language */}
      <section className="flex flex-col gap-4">
        <SectionHeader title="Base entitlement" action={addRuleButton("base")} />
        <Sentence>
          This allowance gives {token("baseAmount")} {token("baseUnit")}, counted against{" "}
          {token("baseCount")} days. The cycle begins in {token("cycleMonth")} and runs for{" "}
          {token("cycleDuration")}.
        </Sentence>
        <SavedRules
          rules={baseRules}
          onEdit={(id) => setOneModal({ kind: "base", editingId: id })}
          onDelete={(id) => removeRule("base", id)}
        />
      </section>

      {/* 3. Accrual rules — plain language */}
      <section className="flex flex-col gap-4">
        <SectionHeader
          title="Accrual rules"
          subtitle="How the allowance is generated and grows over time"
          action={addRuleButton("accrual")}
        />
        <Sentence>
          Base days are {token("prorated")} for mid-cycle joiners, up to a maximum of{" "}
          {token("maxDays")}. Days are accrued {token("howAccrued")} and can be used{" "}
          {token("whenUsed")}.
        </Sentence>

        {tenureOn ? (
          <div className="flex flex-col gap-2">
            <Sentence>
              By tenure, after {token("tenureNum")} {token("tenureUnit")} of service, the allowance
              changes {token("tenureTiming")}, granting {token("additionalDays")} extra days, up to a
              maximum of {token("tenureMax")}.
            </Sentence>
            <button
              type="button"
              onClick={() => setTenureOn(false)}
              className="self-start text-xs font-medium text-f1-foreground-secondary hover:text-f1-foreground-critical"
            >
              Remove tenure rule
            </button>
          </div>
        ) : (
          <CollapsedLine
            text="No tenure period defined."
            actionLabel="Add tenure rule"
            onAdd={addTenure}
          />
        )}
        <SavedRules
          rules={accrualRules}
          onEdit={(id) => setOneModal({ kind: "accrual", editingId: id })}
          onDelete={(id) => removeRule("accrual", id)}
        />
      </section>

      {/* 4. Deduction rules — labelled fields */}
      <section className="flex flex-col gap-6">
        <SectionHeader title="Deduction rules" subtitle="How absences are counted against the balance" />
        <div className="divide-y divide-f1-border-secondary rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
          <FieldRow label="If a bank holiday falls on the absence">
            <RuleSelect value={bankHoliday} onChange={setBankHoliday} options={BANK_HOLIDAY_OPTS} width="w-80" />
          </FieldRow>
          <FieldRow label="Can the counter be negative?">
            <RuleSelect value={negative} onChange={setNegative} options={YES_NO_OPTS} />
          </FieldRow>
          <FieldRow label="Restrict leave to available days?">
            <RuleSelect value={restrict} onChange={setRestrict} options={RESTRICT_OPTS} />
          </FieldRow>
          <FieldRow label="How should we display?">
            <RuleSelect value={display} onChange={setDisplay} options={DISPLAY_OPTS} />
          </FieldRow>
        </div>
      </section>

      {/* 5. Carryover — labelled fields, collapsed until configured */}
      <section className="flex flex-col gap-6">
        <SectionHeader title="Carryover" subtitle="What happens to unused balance at the end of a cycle" />
        {carryOn ? (
          <div className="flex flex-col gap-3">
            <div className="divide-y divide-f1-border-secondary rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
              <FieldRow label="How many days carry over?">
                <div className="inline-flex items-center gap-3">
                  {carryUnlimited ? (
                    <span className="text-sm font-medium text-f1-foreground">Unlimited</span>
                  ) : (
                    <NumberInput value={carryDays} onChange={setCarryDays} unit="days" />
                  )}
                  <span className="inline-flex items-center gap-1.5">
                    <ToggleSwitch on={carryUnlimited} onChange={setCarryUnlimited} />
                    <span className="text-xs text-f1-foreground-secondary">Unlimited</span>
                  </span>
                </div>
              </FieldRow>
              <FieldRow label="When do carryover days expire?">
                <RuleSelect value={expire} onChange={setExpire} options={EXPIRE_OPTS} />
              </FieldRow>
            </div>
            <button
              type="button"
              onClick={() => setCarryOn(false)}
              className="self-start text-xs font-medium text-f1-foreground-secondary hover:text-f1-foreground-critical"
            >
              Remove carryover
            </button>
          </div>
        ) : (
          <CollapsedLine
            text="No carryover defined."
            actionLabel="Add carryover"
            onAdd={() => setCarryOn(true)}
          />
        )}
      </section>

      {oneModal ? (
        <OneRuleModal
          kind={oneModal.kind}
          initialText={editingRule?.text}
          onCancel={() => setOneModal(null)}
          onSave={saveOne}
          onDelete={deleteOne}
        />
      ) : null}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Building blocks
// ─────────────────────────────────────────────────────────────────────────────

function SectionHeader({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-1">
        <F0Heading content={title} variant="heading" as="h2" />
        {subtitle ? <F0Text content={subtitle} variant="description" /> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

function SavedRules({
  rules,
  onEdit,
  onDelete,
}: {
  rules: OneRule[]
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}) {
  if (rules.length === 0) return null
  return (
    <div className="divide-y divide-f1-border-secondary rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
      {rules.map((r) => (
        <div key={r.id} className="flex items-center gap-3 px-4 py-2.5">
          <span className="flex-1 text-sm text-f1-foreground">{r.text}</span>
          <button
            type="button"
            onClick={() => onEdit(r.id)}
            aria-label="Edit rule"
            className="flex h-8 w-8 items-center justify-center rounded-md text-f1-foreground-secondary hover:bg-f1-background-hover hover:text-f1-foreground"
          >
            <F0Icon icon={Pencil} size="sm" />
          </button>
          <button
            type="button"
            onClick={() => onDelete(r.id)}
            aria-label="Delete rule"
            className="flex h-8 w-8 items-center justify-center rounded-md text-f1-foreground-secondary hover:bg-f1-background-hover hover:text-f1-foreground-critical"
          >
            <F0Icon icon={Delete} size="sm" />
          </button>
        </div>
      ))}
    </div>
  )
}

function FieldRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <span className="text-sm font-semibold text-f1-foreground">{label}</span>
      <div className="shrink-0">{children}</div>
    </div>
  )
}

function CollapsedLine({
  text,
  actionLabel,
  onAdd,
}: {
  text: string
  actionLabel: string
  onAdd: () => void
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-dashed border-f1-border-secondary bg-f1-background px-5 py-4">
      <span className="text-base text-f1-foreground-secondary">{text}</span>
      <F0Button label={actionLabel} variant="outline" icon={Plus} onClick={onAdd} />
    </div>
  )
}

function Sentence({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-base leading-[2.2] text-f1-foreground">{children}</div>
  )
}

function InlineToken({
  spec,
  value,
  isOpen,
  onOpen,
  onClose,
  onChange,
}: {
  spec: TokenSpec
  value: string
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onChange: (v: string) => void
}) {
  const [manual, setManual] = useState("")
  const isEmpty = value === undefined || value === ""
  const display = isEmpty ? "set a value" : value

  const submitManual = () => {
    const t = manual.trim()
    if (t === "") return
    onChange(t)
    setManual("")
    onClose()
  }

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={isOpen ? onClose : onOpen}
        aria-label={spec.title}
        className={`border-b-2 border-dotted border-f1-border-hover font-semibold transition-colors hover:border-f1-foreground hover:bg-f1-background-hover ${
          isEmpty ? "text-f1-foreground-secondary" : "text-f1-foreground"
        }`}
      >
        {display}
      </button>

      {isOpen ? (
        <>
          <span className="fixed inset-0 z-40 block" onClick={onClose} aria-hidden />
          <span className="absolute left-0 top-full z-50 mt-2 flex w-72 flex-col gap-3 rounded-xl bg-f1-background-inverse p-3 shadow-lg">
            <span className="text-sm font-medium text-f1-foreground-inverse">{spec.title}</span>
            <span className="flex flex-wrap gap-2">
              {spec.chips.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => {
                    onChange(c.value)
                    onClose()
                  }}
                  className={`rounded-full border border-solid px-3 py-1 text-xs font-medium transition-colors ${
                    value === c.value
                      ? "border-f1-border-inverse bg-f1-background-inverse-secondary text-f1-foreground-inverse"
                      : "border-f1-border-inverse text-f1-foreground-inverse hover:bg-f1-background-inverse-secondary"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </span>
            {spec.manual ? (
              <span className="flex items-center gap-2 rounded-lg bg-f1-background-inverse-secondary px-2 py-1">
                <input
                  type={spec.manual}
                  value={manual}
                  onChange={(e) => setManual(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") submitManual()
                  }}
                  placeholder="Type your own answer…"
                  className="h-7 flex-1 bg-transparent text-sm text-f1-foreground-inverse placeholder:text-f1-foreground-inverse-secondary focus:outline-none"
                />
                <button
                  type="button"
                  aria-label="Confirm"
                  onClick={submitManual}
                  disabled={manual.trim() === ""}
                  className="flex h-7 w-7 items-center justify-center rounded-md bg-f1-background-accent-bold text-f1-foreground-inverse disabled:opacity-40"
                >
                  <F0Icon icon={ArrowUp} size="sm" />
                </button>
              </span>
            ) : null}
          </span>
        </>
      ) : null}
    </span>
  )
}
