import { F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import { ChevronDown } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { AccrualRulesSection } from "./AccrualRulesSection"
import { AccrualRulesSectionE2 } from "./AccrualRulesSectionE2"
import { BaseEntitlementSection } from "./BaseEntitlementSection"
import { Exploration4View } from "./Exploration4View"
import { type Allowance, type Policy } from "./policiesData"

export type ExpTabId = "e1" | "e2" | "e3" | "e4"

export function AllowanceDetailView({
  allowance,
  expTab,
}: {
  policy: Policy
  allowance: Allowance
  expTab: ExpTabId
}) {
  // Exploration 4 owns its full page (its own Basic information, written in a
  // distinct plain-language style), so it isn't paired with the shared sections.
  if (expTab === "e4") {
    return <Exploration4View key={`e4-${allowance.id}`} allowance={allowance} />
  }

  return (
    <div className="flex w-full flex-col gap-10">
      <BasicInformationSection key={allowance.id} allowance={allowance} />
      {expTab === "e1" ? (
        <AccrualRulesSection key={`accrual-${allowance.id}`} allowance={allowance} />
      ) : expTab === "e2" ? (
        <AccrualRulesSectionE2
          key={`accrual-e2-${allowance.id}`}
          allowance={allowance}
        />
      ) : (
        <BaseEntitlementSection
          key={`base-${allowance.id}`}
          allowance={allowance}
        />
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Basic information section
// ─────────────────────────────────────────────────────────────────────────────

const ABSENCE_TYPES = ["Vacation", "Sick leave", "Personal day"] as const

function BasicInformationSection({ allowance }: { allowance: Allowance }) {
  const [name, setName] = useState(allowance.name)
  const [absenceType, setAbsenceType] = useState<string>(ABSENCE_TYPES[0])

  const nameInvalid = name.trim() === ""

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <F0Heading content="Basic information" variant="heading" as="h2" />
        <F0Text
          content="Set the core details of this allowance"
          variant="description"
        />
      </div>

      <div className="divide-y divide-f1-border-secondary rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
        <FieldRow
          label="Allowance name"
          helper="The name employees and managers will see"
        >
          <div className="flex flex-col items-end gap-1">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={nameInvalid}
              placeholder="e.g. Vacaciones"
              className={`h-10 w-72 rounded-md border border-solid bg-f1-background px-3 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:outline-none ${
                nameInvalid
                  ? "border-f1-border-critical-bold"
                  : "border-f1-border focus:border-f1-border-hover"
              }`}
            />
            {nameInvalid ? (
              <span className="text-xs text-f1-foreground-critical">
                Name can't be empty
              </span>
            ) : null}
          </div>
        </FieldRow>

        <FieldRow
          label="Absence type"
          helper="The absence this allowance applies to"
        >
          <SelectField
            value={absenceType}
            onChange={setAbsenceType}
            options={ABSENCE_TYPES}
          />
        </FieldRow>
      </div>
    </section>
  )
}

function FieldRow({
  label,
  helper,
  children,
}: {
  label: string
  helper: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-semibold text-f1-foreground">{label}</span>
        <span className="text-xs text-f1-foreground-secondary">{helper}</span>
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  )
}

function SelectField({
  value,
  onChange,
  options,
}: {
  value: string
  onChange: (value: string) => void
  options: readonly string[]
}) {
  return (
    <div className="relative w-72">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full appearance-none rounded-md border border-solid border-f1-border bg-f1-background pl-3 pr-12 text-sm text-f1-foreground focus:border-f1-border-hover focus:outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-f1-background-secondary text-f1-foreground-secondary">
        <F0Icon icon={ChevronDown} size="xs" />
      </span>
    </div>
  )
}
