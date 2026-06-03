import { F0Box, F0Card, F0Text } from "@factorialco/f0-react"
import { Group, Star } from "@factorialco/f0-react/icons/app"

import { InlineProseValue } from "../../shared/InlineProse"
import { OneEditCard } from "../../shared/OneEditCard"
import type { MealCaps } from "../../types"

/**
 * Meal-cap grid \u2014 TWO cards, grouped by who's at the table.
 *
 *   Internal meals: Solo (in office / travelling) + Team.
 *   External meals: Client + Hospitality.
 *
 * Earlier the page had four sparse mini-cards; each held one
 * cap and read as wasted space. Grouping by audience halves the
 * card count, gives each card a real reason to exist, and lets
 * the values sit closer together so the eye can compare them.
 *
 * Each card uses F0Card properly:
 *   - `avatar={{ type: "icon", icon }}` for the leading tile
 *   - `title` / `description` for the card header
 *   - children: a 2- or 3-row list of editable rows, where each
 *     row pairs a small label with a headline number.
 *
 * The section header that used to sit above the grid (a label +
 * subtitle) is gone \u2014 the page hero already says what the
 * page is. The two card titles + descriptions carry their own
 * weight.
 */

export type MealCapsGridProps = {
  caps: MealCaps
  setSoloInOffice: (amount: number) => void
  setSoloTravelling: (amount: number) => void
  setTeam: (amount: number) => void
  setClient: (amount: number) => void
  setHospitality: (amount: number) => void
}

export function MealCapsGrid(props: MealCapsGridProps) {
  return (
    <F0Box display="grid" columns="2" gap="md">
      <OneEditCard label="internal meal caps in Meals & hospitality" fill>
        <F0Card
          avatar={{ type: "icon", icon: Group }}
          title="Internal meals"
          description="Eating alone or with colleagues, no external guests."
          fullHeight
        >
          <F0Box display="flex" flexDirection="column" gap="md">
            <CapRow
              label="Solo — in office"
              value={props.caps.solo.inOffice}
              onChange={props.setSoloInOffice}
              ariaLabel="Solo in-office meal cap"
              suggestions={["€15", "€20", "€25", "€30"]}
            />
            <CapRow
              label="Solo — travelling"
              value={props.caps.solo.travelling}
              onChange={props.setSoloTravelling}
              ariaLabel="Solo travelling meal cap"
              suggestions={["€30", "€40", "€50", "€60"]}
            />
            <CapRow
              label="Team meal"
              value={props.caps.team}
              onChange={props.setTeam}
              ariaLabel="Team meal cap"
              suggestions={["€30", "€50", "€75", "€100"]}
            />
          </F0Box>
        </F0Card>
      </OneEditCard>

      <OneEditCard label="external meal caps in Meals & hospitality" fill>
        <F0Card
          avatar={{ type: "icon", icon: Star }}
          title="External meals"
          description="Hosting clients, partners, or running broader hospitality."
          fullHeight
        >
          <F0Box display="flex" flexDirection="column" gap="md">
            <CapRow
              label="Client meal"
              value={props.caps.client}
              onChange={props.setClient}
              ariaLabel="Client meal cap"
              suggestions={["€50", "€75", "€100", "€150"]}
            />
            <CapRow
              label="Hospitality / events"
              value={props.caps.hospitality}
              onChange={props.setHospitality}
              ariaLabel="Hospitality cap"
              suggestions={["€50", "€100", "€150", "€200"]}
            />
          </F0Box>
        </F0Card>
      </OneEditCard>
    </F0Box>
  )
}

/**
 * A single editable cap row inside a card. Small muted label on
 * the left, headline-sized inline-prose number on the right.
 * Built as a flex row so the cap aligns visually with sibling
 * rows in the same card.
 */
function CapRow(props: {
  label: string
  value: number
  onChange: (next: number) => void
  ariaLabel: string
  suggestions: string[]
}) {
  return (
    <F0Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="between"
      gap="md"
    >
      <F0Text content={props.label} variant="body" />
      <InlineProseValue
        value={props.value}
        onChange={(v) => props.onChange(v as number)}
        format="currency"
        size="headline"
        ariaLabel={props.ariaLabel}
        suggestions={props.suggestions}
      />
    </F0Box>
  )
}
