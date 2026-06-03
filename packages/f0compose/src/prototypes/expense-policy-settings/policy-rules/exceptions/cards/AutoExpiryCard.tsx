import { F0Box, F0Card, F0Text } from "@factorialco/f0-react"

import { InlineProseValue } from "../../shared/InlineProse"

/**
 * Override auto-expiry — single-clause rule card. A granted
 * override is only valid for this many days before it has to
 * be re-approved. Prevents stale exceptions from becoming
 * permanent shadow policy.
 */
export function AutoExpiryCard(props: {
  autoExpiryDays: number
  setAutoExpiryDays: (days: number) => void
}) {
  return (
    <F0Card title="Auto-expiry">
      <F0Box display="flex" flexDirection="column" gap="sm">
        <p className="text-f1-foreground text-base leading-relaxed">
          A granted override is valid for{" "}
          <InlineProseValue
            value={props.autoExpiryDays}
            onChange={(v) => props.setAutoExpiryDays(v as number)}
            format="duration-days"
            ariaLabel="Override auto-expiry in days"
            suggestions={["30 days", "60 days", "90 days", "180 days"]}
          />{" "}
          before it must be re-approved.
        </p>
        <F0Text
          content="Re-approval re-checks the original justification against current policy."
          variant="description"
        />
      </F0Box>
    </F0Card>
  )
}
