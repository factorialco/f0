import { F0Box } from "@factorialco/f0-react"

import type { PolicyRulesHandle } from "../usePolicyRulesData"

import { PolicyRuleList } from "../shared/PolicyRuleList"
import { HeroBlock } from "./HeroBlock"

/** Receipts & evidence — open, co-created rule list (thresholds, formats, retention). */
export function ReceiptsView(props: { rules: PolicyRulesHandle }) {
  const { rules } = props
  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <HeroBlock
        title="Receipts & evidence"
        description="When receipts are required, which formats are accepted, and how long they're retained."
      />
      <PolicyRuleList
        policy={rules.receiptsPolicy}
        onChange={rules.applyReceiptsPolicy}
        sectionLabel="Receipts & evidence"
      />
    </F0Box>
  )
}
