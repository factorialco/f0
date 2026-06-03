import { F0Box, F0Card, F0Text } from "@factorialco/f0-react"
import { Globe, Building } from "@factorialco/f0-react/icons/app"

import { InlineProseValue } from "../../shared/InlineProse"
import { OneEditCard } from "../../shared/OneEditCard"
import type { PerDiems, PerDiemSet } from "../../types"

/**
 * Per-diem caps grid — Domestic vs International, three line
 * items each (meals / lodging / incidentals). Same shape as
 * MealCapsGrid: two F0Cards with icon avatars, body is a list
 * of CapRows (small label + headline inline-prose value).
 */

export type PerDiemsGridProps = {
  perDiems: PerDiems
  setPerDiem: (
    region: "domestic" | "international",
    field: keyof PerDiemSet,
    amount: number
  ) => void
}

export function PerDiemsGrid(props: PerDiemsGridProps) {
  const { perDiems, setPerDiem } = props
  return (
    <F0Box display="grid" columns="2" gap="md">
      <OneEditCard label="domestic per-diem rates in Travel" fill>
        <F0Card
          avatar={{ type: "icon", icon: Building }}
          title="Domestic travel"
          description="Trips within the home country."
          fullHeight
        >
          <F0Box display="flex" flexDirection="column" gap="md">
            <CapRow
              label="Meals per day"
              value={perDiems.domestic.meals}
              onChange={(v) => setPerDiem("domestic", "meals", v)}
              ariaLabel="Domestic meals per diem"
              suggestions={["€40", "€50", "€60", "€75"]}
            />
            <CapRow
              label="Lodging per night"
              value={perDiems.domestic.lodging}
              onChange={(v) => setPerDiem("domestic", "lodging", v)}
              ariaLabel="Domestic lodging cap"
              suggestions={["€100", "€150", "€200", "€250"]}
            />
            <CapRow
              label="Incidentals per day"
              value={perDiems.domestic.incidentals}
              onChange={(v) => setPerDiem("domestic", "incidentals", v)}
              ariaLabel="Domestic incidentals"
              suggestions={["€15", "€20", "€25", "€35"]}
            />
          </F0Box>
        </F0Card>
      </OneEditCard>

      <OneEditCard label="international per-diem rates in Travel" fill>
        <F0Card
          avatar={{ type: "icon", icon: Globe }}
          title="International travel"
          description="Trips that cross borders — same fields, different ceilings."
          fullHeight
        >
          <F0Box display="flex" flexDirection="column" gap="md">
            <CapRow
              label="Meals per day"
              value={perDiems.international.meals}
              onChange={(v) => setPerDiem("international", "meals", v)}
              ariaLabel="International meals per diem"
              suggestions={["€60", "€80", "€100", "€120"]}
            />
            <CapRow
              label="Lodging per night"
              value={perDiems.international.lodging}
              onChange={(v) => setPerDiem("international", "lodging", v)}
              ariaLabel="International lodging cap"
              suggestions={["€200", "€250", "€300", "€400"]}
            />
            <CapRow
              label="Incidentals per day"
              value={perDiems.international.incidentals}
              onChange={(v) => setPerDiem("international", "incidentals", v)}
              ariaLabel="International incidentals"
              suggestions={["€25", "€40", "€50", "€75"]}
            />
          </F0Box>
        </F0Card>
      </OneEditCard>
    </F0Box>
  )
}

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
