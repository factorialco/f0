import { F0Dialog, F0Icon, F0Text } from "@factorialco/f0-react"
import { ChevronLeft, Sparkles } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

// E5 — One-led allowance creation modal.
// Uses F0Dialog as the shell and simulates the ClarifyingQuestionPanel
// visual language (RadioIndicator for single-select, checkbox for multi-select).

const ONE_GRADIENT = "linear-gradient(135deg, #FF7A59 0%, #F0629A 55%, #9B6DD6 100%)"

export type E5AllowanceType = "fixed" | "overtime" | "time-worked"

export type E5AllowanceData = {
  name: string
  type: E5AllowanceType
  absenceTypes: string[]
}

const ALLOWANCE_TYPE_OPTIONS: { id: E5AllowanceType; label: string }[] = [
  { id: "fixed", label: "Fixed balance" },
  { id: "overtime", label: "Overtime" },
  { id: "time-worked", label: "Based on time worked" },
]

const ABSENCE_TYPE_OPTIONS = [
  "Vacation",
  "Sick leave",
  "Personal day",
  "Unpaid leave",
  "Maternity / Paternity",
]

type Step = 1 | 2 | 3

// ── One step header ───────────────────────────────────────────────────────────

function OneQuestion({ text, step, total }: { text: string; step: number; total: number }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
          style={{ background: ONE_GRADIENT }}
        >
          <F0Icon icon={Sparkles} size="xs" />
        </div>
        <span className="text-xs font-semibold text-f1-foreground-secondary">
          Step {step} of {total}
        </span>
      </div>
      <p className="text-lg font-semibold leading-snug text-f1-foreground">{text}</p>
    </div>
  )
}

// ── RadioIndicator — mirrors ClarifyingQuestionPanel/RadioIndicator ───────────

function RadioIndicator({ isSelected }: { isSelected: boolean }) {
  return (
    <div
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors ${
        isSelected
          ? "bg-f1-background-selected-bold"
          : "border-2 border-solid border-f1-border bg-f1-background"
      }`}
    >
      {isSelected && <div className="h-2 w-2 rounded-full bg-f1-background" />}
    </div>
  )
}

// ── CheckboxIndicator — mirrors ClarifyingQuestionPanel checkbox style ────────

function CheckboxIndicator({ isSelected }: { isSelected: boolean }) {
  return (
    <div
      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded transition-colors ${
        isSelected
          ? "bg-f1-background-selected-bold"
          : "border border-solid border-f1-border bg-f1-background"
      }`}
    >
      {isSelected && (
        <svg viewBox="0 0 10 8" className="h-2.5 w-2.5 fill-none stroke-f1-background stroke-2">
          <polyline points="1 4 3.5 6.5 9 1" />
        </svg>
      )}
    </div>
  )
}

// ── Step 1 — Name ─────────────────────────────────────────────────────────────

function Step1({ name, onChange }: { name: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-5">
      <OneQuestion text="What should we call this allowance?" step={1} total={3} />
      <input
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        type="text"
        value={name}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. Vacation, Free time, WFH…"
        className="h-11 w-full rounded-xl border border-solid border-f1-border bg-f1-background px-4 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-hover focus:outline-none"
      />
      <F0Text
        content="This is the name employees and managers will see in their Time Off page."
        variant="description"
      />
    </div>
  )
}

// ── Step 2 — Type (single-select, ClarifyingPanel radio style) ────────────────

function Step2({
  selected,
  onSelect,
}: {
  selected: E5AllowanceType | null
  onSelect: (t: E5AllowanceType) => void
}) {
  return (
    <div className="flex flex-col gap-5">
      <OneQuestion text="What type of allowance is this?" step={2} total={3} />
      <F0Text
        content="Choose an allowance type with a constant balance or with a balance that will depend on the employee's worked hours."
        variant="description"
      />
      <div className="flex flex-col gap-0.5" role="radiogroup" aria-label="Allowance type">
        {ALLOWANCE_TYPE_OPTIONS.map((opt) => {
          const isSelected = selected === opt.id
          return (
            <div
              key={opt.id}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-f1-background-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-f1-border-hover"
              onClick={() => onSelect(opt.id)}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault()
                  onSelect(opt.id)
                }
              }}
            >
              <RadioIndicator isSelected={isSelected} />
              <span className="text-base font-medium text-f1-foreground">{opt.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Step 3 — Absence types (multi-select, ClarifyingPanel checkbox style) ─────

function Step3({
  selected,
  onToggle,
}: {
  selected: string[]
  onToggle: (t: string) => void
}) {
  return (
    <div className="flex flex-col gap-5">
      <OneQuestion
        text="Which absence types should count against this allowance?"
        step={3}
        total={3}
      />
      <div className="flex flex-col gap-0.5">
        {ABSENCE_TYPE_OPTIONS.map((opt) => {
          const isSelected = selected.includes(opt)
          return (
            <div
              key={opt}
              role="checkbox"
              aria-checked={isSelected}
              tabIndex={0}
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-2 transition-colors hover:bg-f1-background-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-f1-border-hover"
              onClick={() => onToggle(opt)}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault()
                  onToggle(opt)
                }
              }}
            >
              <CheckboxIndicator isSelected={isSelected} />
              <span className="text-base font-medium text-f1-foreground">{opt}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Modal ─────────────────────────────────────────────────────────────────────

export function E5AllowanceCreationModal({
  isOpen,
  onClose,
  onComplete,
}: {
  isOpen: boolean
  onClose: () => void
  onComplete: (data: E5AllowanceData) => void
}) {
  const [step, setStep] = useState<Step>(1)
  const [name, setName] = useState("")
  const [type, setType] = useState<E5AllowanceType | null>(null)
  const [absenceTypes, setAbsenceTypes] = useState<string[]>([])

  const reset = () => {
    setStep(1)
    setName("")
    setType(null)
    setAbsenceTypes([])
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  const handleToggleAbsence = (t: string) => {
    setAbsenceTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    )
  }

  const handleComplete = () => {
    if (!name.trim() || !type || absenceTypes.length === 0) return
    onComplete({ name: name.trim(), type, absenceTypes })
    reset()
  }

  const canContinue =
    step === 1
      ? name.trim().length > 0
      : step === 2
        ? type !== null
        : absenceTypes.length > 0

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={handleClose}
      title="New allowance"
      width="sm"
      primaryAction={{
        label: step < 3 ? "Continue" : "Create allowance",
        disabled: !canContinue,
        onClick: step < 3 ? () => setStep((s) => (s + 1) as Step) : handleComplete,
      }}
      secondaryAction={
        step > 1
          ? {
              label: "Back",
              icon: ChevronLeft,
              onClick: () => setStep((s) => (s - 1) as Step),
            }
          : undefined
      }
    >
      <div className="flex flex-col gap-2 pb-2">
        {step === 1 && <Step1 name={name} onChange={setName} />}
        {step === 2 && <Step2 selected={type} onSelect={setType} />}
        {step === 3 && <Step3 selected={absenceTypes} onToggle={handleToggleAbsence} />}
      </div>
    </F0Dialog>
  )
}
