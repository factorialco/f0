import { F0Box } from "@factorialco/f0-react"

import type { PolicyRulesHandle } from "../usePolicyRulesData"

import { PolicyRuleList } from "../shared/PolicyRuleList"
import { HeroBlock } from "./HeroBlock"

/**
 * Meals & hospitality — an OPEN, co-created rule list (Direction A). Describe
 * any policy to One and it generates grouped statements here; each section has
 * an Edit button and each value is inline-editable.
 */
export function MealsView(props: { rules: PolicyRulesHandle }) {
  const { rules } = props
  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <HeroBlock
        title="Meals & hospitality"
        description="How much employees can spend on meals, when alcohol is allowed, and when attendees need to be logged."
      />
      <PolicyRuleList
        policy={rules.mealsPolicy}
        onChange={rules.applyMealsPolicy}
        sectionLabel="Meals & hospitality"
      />
    </F0Box>
  )
}
