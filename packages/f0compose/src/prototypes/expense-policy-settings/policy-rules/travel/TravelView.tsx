import { F0Box } from "@factorialco/f0-react"

import type { PolicyRulesHandle } from "../usePolicyRulesData"

import { PolicyRuleList } from "../shared/PolicyRuleList"
import { HeroBlock } from "./HeroBlock"

/** Travel — open, co-created rule list (per-diems, booking, mileage). */
export function TravelView(props: { rules: PolicyRulesHandle }) {
  const { rules } = props
  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <HeroBlock
        title="Travel"
        description="Per-diem ceilings, booking windows, flight class, and mileage."
      />
      <PolicyRuleList
        policy={rules.travelPolicy}
        onChange={rules.applyTravelPolicy}
        sectionLabel="Travel"
      />
    </F0Box>
  )
}
