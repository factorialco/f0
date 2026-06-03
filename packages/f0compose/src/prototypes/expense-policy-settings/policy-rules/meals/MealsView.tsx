import { F0Box } from "@factorialco/f0-react"

import type { PolicyRulesHandle } from "../usePolicyRulesData"

import { OneEditCard } from "../shared/OneEditCard"
import { HeroBlock } from "./HeroBlock"
import { AlcoholCard } from "./cards/AlcoholCard"
import { AttendeesCard } from "./cards/AttendeesCard"
import { MealCapsGrid } from "./cards/MealCapsGrid"

/**
 * Meals & hospitality \u2014 v4.
 *
 * Three sections, three visual treatments:
 *
 *   1. HeroBlock          \u2014 tinted icon tile + H1 + lead.
 *                            No card.
 *   2. MealCapsGrid       \u2014 four mini-cards in a CSS grid,
 *                            headline numbers, NO outer card.
 *   3. AlcoholCard        \u2014 single F0Card, body is a real
 *                            paragraph with two inline-prose
 *                            edits embedded in it.
 *   4. AttendeesCard      \u2014 single F0Card, body is a 3-line
 *                            rule list (icon + sentence per
 *                            meal context).
 *
 * The page deliberately mixes shapes so it doesn't read as a
 * uniform settings stack. Sections 1\u20132 are bare composition;
 * 3\u20134 use the F0Card chrome to mark them as "rule blocks".
 */
export function MealsView(props: { rules: PolicyRulesHandle }) {
  const { rules } = props
  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <HeroBlock
        title="Meals & hospitality"
        description="How much employees can spend on meals, when alcohol is allowed, and when attendees need to be logged."
      />

      <MealCapsGrid
        caps={rules.meals.caps}
        setSoloInOffice={rules.setSoloInOfficeCap}
        setSoloTravelling={rules.setSoloTravellingCap}
        setTeam={(v) => rules.setMealCap("team", v)}
        setClient={(v) => rules.setMealCap("client", v)}
        setHospitality={(v) => rules.setMealCap("hospitality", v)}
      />

      <OneEditCard label="attendee-logging rule in Meals & hospitality">
        <AttendeesCard
          attendees={rules.meals.attendees}
          setAttendeeRequirement={rules.setAttendeeRequirement}
          setTeamMealThreshold={rules.setTeamMealThreshold}
        />
      </OneEditCard>

      <OneEditCard label="alcohol rule in Meals & hospitality">
        <AlcoholCard
          alcohol={rules.meals.alcohol}
          setAlcoholAllowance={rules.setAlcoholAllowance}
          setAlcoholCapPercent={rules.setAlcoholCapPercent}
        />
      </OneEditCard>
    </F0Box>
  )
}
