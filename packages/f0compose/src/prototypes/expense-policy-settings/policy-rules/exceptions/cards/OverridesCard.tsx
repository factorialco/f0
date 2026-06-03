import { F0Box, F0Card, F0Text } from "@factorialco/f0-react"

import { InlineProseSelect } from "../../shared/InlineProse"
import type { OverrideRole, OverrideRules } from "../../types"

/**
 * Who can override caps + whether justification text is
 * mandatory. Two inline-prose selects in one sentence.
 */

const ROLE_OPTIONS: { value: OverrideRole; label: string }[] = [
  { value: "manager", label: "the employee's manager" },
  { value: "finance", label: "the finance team" },
  { value: "admin", label: "a workspace admin" },
]

type Justification = "required" | "optional"

const JUSTIFICATION_OPTIONS: { value: Justification; label: string }[] = [
  { value: "required", label: "a written justification is required" },
  { value: "optional", label: "no justification is required" },
]

export function OverridesCard(props: {
  overrides: OverrideRules
  setOverrideApproverRole: (role: OverrideRole) => void
  setJustificationRequired: (next: boolean) => void
}) {
  const { overrides } = props
  return (
    <F0Card title="Overrides">
      <F0Box display="flex" flexDirection="column" gap="sm">
        <p className="text-f1-foreground text-base leading-relaxed">
          Cap overrides must be approved by{" "}
          <InlineProseSelect<OverrideRole>
            value={overrides.approverRole}
            options={ROLE_OPTIONS}
            onChange={props.setOverrideApproverRole}
            ariaLabel="Override approver role"
          />
          , and{" "}
          <InlineProseSelect<Justification>
            value={overrides.justificationRequired ? "required" : "optional"}
            options={JUSTIFICATION_OPTIONS}
            onChange={(v) => props.setJustificationRequired(v === "required")}
            ariaLabel="Justification policy"
          />
          .
        </p>
        <F0Text
          content="Overrides stamp the expense with the approver's name and the justification text, if any."
          variant="description"
        />
      </F0Box>
    </F0Card>
  )
}
