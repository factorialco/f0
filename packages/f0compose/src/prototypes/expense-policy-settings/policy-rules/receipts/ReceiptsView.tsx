import { F0Box } from "@factorialco/f0-react"

import type { PolicyRulesHandle } from "../usePolicyRulesData"

import { OneEditCard } from "../shared/OneEditCard"
import { HeroBlock } from "./HeroBlock"
import { FormatsCard } from "./cards/FormatsCard"
import { RetentionCard } from "./cards/RetentionCard"
import { ThresholdsCard } from "./cards/ThresholdsCard"

/** Hero → Thresholds → Formats (3-tile grid) → Retention. */
export function ReceiptsView(props: { rules: PolicyRulesHandle }) {
  const { rules } = props
  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <HeroBlock
        title="Receipts & evidence"
        description="When receipts are required, which formats are accepted, and how long they're retained."
      />
      <OneEditCard label="receipt thresholds rule (when receipts are required)">
        <ThresholdsCard
          requiredAbove={rules.receipts.requiredAbove}
          itemizedAbove={rules.receipts.itemizedAbove}
          setReceiptsRequiredAbove={rules.setReceiptsRequiredAbove}
          setReceiptsItemizedAbove={rules.setReceiptsItemizedAbove}
        />
      </OneEditCard>
      <OneEditCard label="accepted receipt formats rule">
        <FormatsCard
          formats={rules.receipts.formats}
          setReceiptFormat={rules.setReceiptFormat}
        />
      </OneEditCard>
      <OneEditCard label="receipt retention rule">
        <RetentionCard
          retentionYears={rules.receipts.retentionYears}
          affidavitAllowed={rules.receipts.affidavitAllowed}
          setReceiptsRetentionYears={rules.setReceiptsRetentionYears}
          setAffidavitAllowed={rules.setAffidavitAllowed}
        />
      </OneEditCard>
    </F0Box>
  )
}
