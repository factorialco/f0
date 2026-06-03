import { F0Box, F0Card, F0Text } from "@factorialco/f0-react"

import { InlineProseValue } from "../../shared/InlineProse"

/**
 * Receipt thresholds — at what value is a receipt required, and
 * at what (higher) value must it be itemized. Two inline-prose
 * currency edits in one sentence.
 */
export function ThresholdsCard(props: {
  requiredAbove: number
  itemizedAbove: number
  setReceiptsRequiredAbove: (amount: number) => void
  setReceiptsItemizedAbove: (amount: number) => void
}) {
  return (
    <F0Card title="When receipts are required">
      <F0Box display="flex" flexDirection="column" gap="sm">
        <p className="text-f1-foreground text-base leading-relaxed">
          A receipt is required for any expense at or above{" "}
          <InlineProseValue
            value={props.requiredAbove}
            onChange={(v) => props.setReceiptsRequiredAbove(v as number)}
            format="currency"
            ariaLabel="Receipt-required threshold"
            suggestions={["€10", "€25", "€50", "€75"]}
          />
          . An itemized receipt is required at or above{" "}
          <InlineProseValue
            value={props.itemizedAbove}
            onChange={(v) => props.setReceiptsItemizedAbove(v as number)}
            format="currency"
            ariaLabel="Itemized receipt threshold"
            suggestions={["€50", "€75", "€100", "€150"]}
          />
          .
        </p>
        <F0Text
          content="Below the required threshold a brief description on the expense is enough."
          variant="description"
        />
      </F0Box>
    </F0Card>
  )
}
