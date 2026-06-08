import { F0Box, F0Button, F0Card, F0Select, F0Text } from "@factorialco/f0-react"
import { Ai } from "@factorialco/f0-react/icons/app"
import { useState } from "react"


import { useAiChat } from "@/copilot"

import { type E5AllowanceData } from "./E5AllowanceCreationModal"
import { type Allowance } from "./policiesData"

// E5 allowance detail page — post-modal hand-off.
// ResourceHeader is rendered in FlexibleAccrual's sticky header slot.
// This component owns the three F0Card sections.

// ── One hand-off banner ───────────────────────────────────────────────────────


// ── Field wrapper — label above + child control ───────────────────────────────

function FieldLabel({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-f1-foreground">{label}</span>
      {children}
    </div>
  )
}

function NumberInput({
  label,
  placeholder,
  defaultValue,
}: {
  label: string
  placeholder?: string
  defaultValue?: string
}) {
  return (
    <FieldLabel label={label}>
      <input
        type="number"
        placeholder={placeholder ?? ""}
        defaultValue={defaultValue ?? ""}
        min={0}
        className="h-9 rounded-lg border border-solid border-f1-border bg-f1-background px-3 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-hover focus:outline-none"
      />
    </FieldLabel>
  )
}

type SelectOpt = { id: string; label: string }

function SelectField({
  label,
  options,
  defaultId,
}: {
  label: string
  options: SelectOpt[]
  defaultId?: string
}) {
  const [selected, setSelected] = useState<SelectOpt | undefined>(
    defaultId ? options.find((o) => o.id === defaultId) : undefined
  )
  return (
    <FieldLabel label={label}>
      <F0Select
        label={label}
        hideLabel
        options={options}
        selectedOption={selected}
        onChangeSelectedOption={(opt: SelectOpt | undefined) => setSelected(opt)}
        placeholder={`Select ${label.toLowerCase()}`}
      />
    </FieldLabel>
  )
}

// ── Main view ─────────────────────────────────────────────────────────────────

export function AllowanceDetailViewE5({
  allowance,
  e5Data,
}: {
  allowance: Allowance
  e5Data?: E5AllowanceData
}) {
  const { setOpen: setChatOpen } = useAiChat()
  void e5Data
  void allowance

  return (
    <>
      <F0Box display="flex" flexDirection="column" gap="lg">
        {/* Box 1 — Accrual rules */}
        <F0Card title="Accrual rules">
          <F0Box display="flex" flexDirection="column" alignItems="center" gap="md" padding="2xl">
              <F0Text content="Create your accrual rules" variant="description" />
              <F0Button
                label="Co-create with One"
                variant="outline"
                icon={Ai}
                onClick={() => setChatOpen(true)}
              />
            </F0Box>
        </F0Card>

        {/* Box 2 — Deduction rules */}
        <F0Card title="Deduction rules">
          <F0Box display="grid" columns="1" gap="md" sm={{ columns: "2" }}>
            <SelectField
              label="Count in"
              options={[
                { id: "working-days", label: "Working days" },
                { id: "calendar-days", label: "Calendar days" },
                { id: "hours", label: "Hours" },
              ]}
              defaultId="working-days"
            />
            <SelectField
              label="Granularity"
              options={[
                { id: "full-days", label: "Full days" },
                { id: "half-days", label: "Half days" },
                { id: "hours", label: "Hours" },
              ]}
              defaultId="full-days"
            />
            <SelectField
              label="Part-time deduction"
              options={[
                { id: "proportional", label: "Proportional to contract" },
                { id: "same", label: "Same as full-time" },
                { id: "none", label: "None" },
              ]}
              defaultId="proportional"
            />
            <SelectField
              label="Bank holidays"
              options={[
                { id: "excluded", label: "Excluded" },
                { id: "included", label: "Included" },
              ]}
              defaultId="excluded"
            />
          </F0Box>
        </F0Card>

        {/* Box 3 — Carryover */}
        <F0Card title="Carryover">
          <F0Box display="grid" columns="1" gap="md" sm={{ columns: "2" }}>
            <SelectField
              label="Carryover"
              options={[
                { id: "allowed", label: "Allowed" },
                { id: "not-allowed", label: "Not allowed" },
              ]}
              defaultId="not-allowed"
            />
            <NumberInput label="Cap (days)" placeholder="e.g. 5 — leave blank for unlimited" />
            <SelectField
              label="Expiry"
              options={[
                { id: "no-expiry", label: "No expiry" },
                { id: "end-of-year", label: "End of year" },
                { id: "3-months", label: "3 months after start of cycle" },
                { id: "6-months", label: "6 months after start of cycle" },
              ]}
              defaultId="no-expiry"
            />
            <SelectField
              label="Rolling window"
              options={[
                { id: "none", label: "None" },
                { id: "12-months", label: "12 months" },
                { id: "24-months", label: "24 months" },
              ]}
              defaultId="none"
            />
          </F0Box>
        </F0Card>

      </F0Box>
    </>
  )
}
