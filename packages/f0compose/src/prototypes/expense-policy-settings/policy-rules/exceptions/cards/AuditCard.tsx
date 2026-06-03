import { F0Box, F0Card, F0Text } from "@factorialco/f0-react"

import { InlineProseSelect, InlineProseValue } from "../../shared/InlineProse"
import type { ExceptionsAudit, OverrideRole } from "../../types"

/**
 * Audit & visibility — how long the override log is kept and
 * who can read it.
 */

const ROLE_OPTIONS: { value: OverrideRole; label: string }[] = [
  { value: "manager", label: "managers" },
  { value: "finance", label: "the finance team" },
  { value: "admin", label: "workspace admins" },
]

export function AuditCard(props: {
  audit: ExceptionsAudit
  setLogRetentionDays: (days: number) => void
  setAuditVisibleTo: (role: OverrideRole) => void
}) {
  const { audit } = props
  return (
    <F0Card title="Audit log">
      <F0Box display="flex" flexDirection="column" gap="sm">
        <p className="text-f1-foreground text-base leading-relaxed">
          Every override is logged. The log is retained for{" "}
          <InlineProseValue
            value={audit.logRetentionDays}
            onChange={(v) => props.setLogRetentionDays(v as number)}
            format="duration-days"
            ariaLabel="Audit log retention in days"
            suggestions={["90 days", "180 days", "365 days", "730 days"]}
          />{" "}
          and is visible to{" "}
          <InlineProseSelect<OverrideRole>
            value={audit.visibleTo}
            options={ROLE_OPTIONS}
            onChange={props.setAuditVisibleTo}
            ariaLabel="Audit log visibility"
          />
          .
        </p>
        <F0Text
          content="Logs can be exported as CSV from the Audit page for compliance review."
          variant="description"
        />
      </F0Box>
    </F0Card>
  )
}
