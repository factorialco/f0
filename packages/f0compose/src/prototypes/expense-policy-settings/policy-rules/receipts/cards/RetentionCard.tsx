import { F0Box, F0Card, F0Text } from "@factorialco/f0-react"

import { InlineProseSelect, InlineProseValue } from "../../shared/InlineProse"

/**
 * Retention duration + missing-receipt affidavit. Combines a
 * numeric inline-prose value with a yes/no select in a short
 * two-clause paragraph.
 */

type Affidavit = "allowed" | "blocked"

const AFFIDAVIT_OPTIONS: { value: Affidavit; label: string }[] = [
  { value: "allowed", label: "an affidavit can substitute" },
  { value: "blocked", label: "no exception is allowed" },
]

export function RetentionCard(props: {
  retentionYears: number
  affidavitAllowed: boolean
  setReceiptsRetentionYears: (years: number) => void
  setAffidavitAllowed: (next: boolean) => void
}) {
  return (
    <F0Card title="Retention & exceptions">
      <F0Box display="flex" flexDirection="column" gap="sm">
        <p className="text-f1-foreground text-base leading-relaxed">
          Receipts are retained for{" "}
          <InlineProseValue
            value={props.retentionYears}
            onChange={(v) => props.setReceiptsRetentionYears(v as number)}
            format="number"
            ariaLabel="Retention period in years"
            suggestions={["3", "5", "7", "10"]}
          />{" "}
          years. When a receipt is genuinely missing,{" "}
          <InlineProseSelect<Affidavit>
            value={props.affidavitAllowed ? "allowed" : "blocked"}
            options={AFFIDAVIT_OPTIONS}
            onChange={(v) => props.setAffidavitAllowed(v === "allowed")}
            ariaLabel="Missing receipt policy"
          />
          .
        </p>
        <F0Text
          content="Retention duration should match local tax-record requirements (typically 5–10 years)."
          variant="description"
        />
      </F0Box>
    </F0Card>
  )
}
