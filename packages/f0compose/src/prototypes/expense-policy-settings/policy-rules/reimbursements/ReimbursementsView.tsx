import { F0Box } from "@factorialco/f0-react"

import type { PolicyRulesHandle } from "../usePolicyRulesData"

import { PolicyRuleList } from "../shared/PolicyRuleList"
import { HeroBlock } from "./HeroBlock"

/** Reimbursements — open, co-created rule list (timing, currency, payment methods). */
export function ReimbursementsView(props: { rules: PolicyRulesHandle }) {
  const { rules } = props
  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <HeroBlock
        title="Reimbursements"
        description="Submission windows, approval SLAs, currency conversion, and payment-method handling."
      />
      <PolicyRuleList
        policy={rules.reimbursementsPolicy}
        onChange={rules.applyReimbursementsPolicy}
        sectionLabel="Reimbursements"
      />
    </F0Box>
  )
}
