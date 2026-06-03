import { F0Box } from "@factorialco/f0-react"

import type { PolicyRulesHandle } from "../usePolicyRulesData"

import { OneEditCard } from "../shared/OneEditCard"
import { HeroBlock } from "./HeroBlock"
import { BookingCard } from "./cards/BookingCard"
import { MileageCard } from "./cards/MileageCard"
import { PerDiemsGrid } from "./cards/PerDiemsGrid"

/**
 * Travel — Hero → PerDiemsGrid (2 cards) → BookingCard
 * → MileageCard. Same composition rhythm as Meals: a tinted
 * hero, a 2-card grid for the structured numeric block, then
 * two inline-prose cards for the narrative rules.
 */
export function TravelView(props: { rules: PolicyRulesHandle }) {
  const { rules } = props
  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <HeroBlock
        title="Travel"
        description="Per-diem ceilings, booking windows, flight class, and mileage."
      />
      <PerDiemsGrid
        perDiems={rules.travel.perDiems}
        setPerDiem={rules.setPerDiem}
      />
      <OneEditCard label="travel booking rule (flights & hotels)">
        <BookingCard
          booking={rules.travel.booking}
          setFlightAdvanceDays={rules.setFlightAdvanceDays}
          setFlightClass={rules.setFlightClass}
          setHotelMaxStars={rules.setHotelMaxStars}
        />
      </OneEditCard>
      <OneEditCard label="mileage rule in Travel">
        <MileageCard
          mileage={rules.travel.mileage}
          setMileageRate={rules.setMileageRate}
        />
      </OneEditCard>
    </F0Box>
  )
}
