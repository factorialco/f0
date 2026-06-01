import { F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import type { IconType } from "@factorialco/f0-react"
import {
  Calendar,
  ChevronRight,
  Settings,
} from "@factorialco/f0-react/icons/app"

import { accrualSummary, type Allowance, type Policy } from "./policiesData"

export function PolicyDetailView({
  policy,
  activeTab,
  onOpenAllowance,
}: {
  policy: Policy
  activeTab: "basic" | "employees"
  onOpenAllowance: (id: string) => void
}) {
  return (
    <div className="flex w-full flex-col gap-6">
      {activeTab === "basic" ? (
        <BasicInformation policy={policy} onOpenAllowance={onOpenAllowance} />
      ) : (
        <EmployeesPlaceholder policy={policy} />
      )}
    </div>
  )
}

function BasicInformation({
  policy,
  onOpenAllowance,
}: {
  policy: Policy
  onOpenAllowance: (id: string) => void
}) {
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
          {policy.allowances.map((a) => (
            <AllowanceRow
              key={a.id}
              allowance={a}
              onOpen={() => onOpenAllowance(a.id)}
            />
          ))}
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
        <F0Icon icon={Settings} size="sm" />
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
