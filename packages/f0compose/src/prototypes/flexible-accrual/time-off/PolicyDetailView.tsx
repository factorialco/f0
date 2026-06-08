import { F0Button, F0Heading, F0Icon, F0Select, F0Text } from "@factorialco/f0-react"
import type { IconType } from "@factorialco/f0-react"
import {
  Calendar,
  ChevronRight,
  Plus,
  Settings,
} from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { accrualSummary, type Allowance, type Policy } from "./policiesData"
import type { E5AllowanceData, E5AllowanceType } from "./E5AllowanceCreationModal"

export function PolicyDetailView({
  policy,
  activeTab,
  onOpenAllowance,
  onAddAllowance,
}: {
  policy: Policy
  activeTab: "basic" | "employees"
  onOpenAllowance: (id: string) => void
  onAddAllowance?: (data: E5AllowanceData) => void
}) {
  return (
    <div className="flex w-full flex-col gap-6">
      {activeTab === "basic" ? (
        <BasicInformation
          policy={policy}
          onOpenAllowance={onOpenAllowance}
          onAddAllowance={onAddAllowance}
        />
      ) : (
        <EmployeesPlaceholder policy={policy} />
      )}
    </div>
  )
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

function InlineAllowanceForm({
  onSubmit,
  onCancel,
}: {
  onSubmit: (data: E5AllowanceData) => void
  onCancel: () => void
}) {
  const [name, setName] = useState("")
  const [type, setType] = useState<{ id: E5AllowanceType; label: string } | undefined>(undefined)
  const [absenceTypes, setAbsenceTypes] = useState<string[]>([])

  const toggleAbsence = (t: string) =>
    setAbsenceTypes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))

  const canCreate = name.trim().length > 0 && type !== undefined && absenceTypes.length > 0

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary p-4">
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-f1-foreground">Name</span>
        <input
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Vacation, Free time, WFH…"
          className="h-9 rounded-lg border border-solid border-f1-border bg-f1-background px-3 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-hover focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-f1-foreground">Type</span>
        <F0Select
          label="Type"
          hideLabel
          options={ALLOWANCE_TYPE_OPTIONS}
          selectedOption={type}
          onChangeSelectedOption={(opt: { id: E5AllowanceType; label: string } | undefined) => setType(opt)}
          placeholder="Select type"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-f1-foreground">Absence types</span>
        <div className="flex flex-col gap-0.5">
          {ABSENCE_TYPE_OPTIONS.map((opt) => {
            const isSelected = absenceTypes.includes(opt)
            return (
              <div
                key={opt}
                role="checkbox"
                aria-checked={isSelected}
                tabIndex={0}
                className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-f1-background-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-f1-border-hover"
                onClick={() => toggleAbsence(opt)}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") {
                    e.preventDefault()
                    toggleAbsence(opt)
                  }
                }}
              >
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
                <span className="text-sm text-f1-foreground">{opt}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex items-center justify-end gap-2">
        <F0Button label="Cancel" variant="outline" onClick={onCancel} />
        <F0Button
          label="Create allowance"
          disabled={!canCreate}
          onClick={() => {
            if (!canCreate || !type) return
            onSubmit({ name: name.trim(), type: type.id, absenceTypes })
          }}
        />
      </div>
    </div>
  )
}

function BasicInformation({
  policy,
  onOpenAllowance,
  onAddAllowance,
}: {
  policy: Policy
  onOpenAllowance: (id: string) => void
  onAddAllowance?: (data: E5AllowanceData) => void
}) {
  const [showInlineForm, setShowInlineForm] = useState(false)

  return (
    <div className="flex flex-col gap-10">
      {/* Policy basics */}
      <SectionRow
        icon={Settings}
        title="Policy basics"
        description="Add the name and, if necessary, a short description for this time off policy."
      >
        <div className="rounded-xl bg-f1-background-secondary p-5">
          <div className="flex flex-col gap-4">
            <Field label="Policy name" value={policy.name} />
            <Field
              label="Policy description (optional)"
              value={policy.description ?? ""}
              placeholder="Add a description"
            />
          </div>
        </div>
      </SectionRow>

      {/* Allowance */}
      <SectionRow
        icon={Calendar}
        title="Allowance"
        description="Set the number of days off each employee will be entitled to and how many days can be accumulated over the next cycle."
      >
        <div className="flex flex-col gap-3">
          <div className="flex justify-end">
            <F0Button
              label="Add time off allowance"
              icon={Plus}
              variant="outline"
              onClick={() => setShowInlineForm(true)}
            />
          </div>
          {policy.allowances.map((a) => (
            <AllowanceRow
              key={a.id}
              allowance={a}
              onOpen={() => onOpenAllowance(a.id)}
            />
          ))}
          {showInlineForm && (
            <InlineAllowanceForm
              onSubmit={(data) => {
                setShowInlineForm(false)
                onAddAllowance?.(data)
              }}
              onCancel={() => setShowInlineForm(false)}
            />
          )}
        </div>
      </SectionRow>
    </div>
  )
}

function SectionRow({
  icon,
  title,
  description,
  action,
  children,
}: {
  icon: IconType
  title: string
  description: string
  action?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.4fr] md:gap-10">
      <div className="flex flex-col gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-f1-background-critical/10 text-f1-foreground-critical">
          <F0Icon icon={icon} size="sm" />
        </div>
        <F0Heading content={title} variant="heading" as="h3" />
        <F0Text content={description} variant="body" />
        {action}
      </div>
      <div>{children}</div>
    </div>
  )
}

function Field({
  label,
  value,
  placeholder,
}: {
  label: string
  value: string
  placeholder?: string
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-f1-foreground">{label}</span>
      <input
        type="text"
        defaultValue={value}
        placeholder={placeholder}
        className="h-10 rounded-md border border-solid border-f1-border bg-f1-background px-3 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-hover focus:outline-none"
      />
    </label>
  )
}

function AllowanceRow({
  allowance,
  onOpen,
}: {
  allowance: Allowance
  onOpen: () => void
}) {
  // Summary reflects the accrual configuration so the page is scannable
  // without opening each allowance (spec §4). The whole row is the target;
  // the gear stays as a visual affordance for a larger hit area (spec §3).
  const { primary, descriptor } = accrualSummary(allowance)

  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex items-center justify-between rounded-lg border border-solid border-f1-border-secondary bg-f1-background px-4 py-3 text-left transition-colors hover:border-f1-border-hover hover:bg-f1-background-hover"
    >
      <div className="flex flex-col gap-0.5">
        <F0Heading content={allowance.name} variant="heading" as="h4" />
        <div className="flex flex-wrap items-baseline gap-1.5">
          <F0Text content={primary} variant="description" />
          {descriptor ? (
            <span className="text-xs text-f1-foreground-secondary">
              · {descriptor}
            </span>
          ) : null}
        </div>
      </div>
      <div className="flex items-center gap-2 text-f1-foreground-secondary">
        <F0Icon icon={ChevronRight} size="sm" />
      </div>
    </button>
  )
}

function EmployeesPlaceholder({ policy }: { policy: Policy }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-dashed border-f1-border-secondary p-12 text-center">
      <F0Heading
        content={`${policy.employees} employees assigned`}
        variant="heading"
        as="h3"
      />
      <F0Text
        content="Employee assignment is out of scope for this prototype."
        variant="description"
      />
    </div>
  )
}
