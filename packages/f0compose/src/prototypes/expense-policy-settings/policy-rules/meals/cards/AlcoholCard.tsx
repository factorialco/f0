import { F0Box, F0Card, F0Text } from "@factorialco/f0-react"

import { InlineProseSelect, InlineProseValue } from "../../shared/InlineProse"
import type { AlcoholAllowance, AlcoholRules } from "../../types"

/**
 * Alcohol section \u2014 its own F0Card again, matching the visual
 * rhythm of the meal-caps grid and the attendees card above.
 * The dotted-underline inline edits keep the "policy reads like
 * a sentence" voice; the card chrome restores the page's
 * consistent containment.
 */

const ALLOWANCE_OPTIONS: {
  value: AlcoholAllowance
  label: string
}[] = [
  { value: "client-only", label: "on client meals only" },
  { value: "any-meal", label: "on any meal" },
  { value: "never", label: "never" },
]

export function AlcoholCard(props: {
  alcohol: AlcoholRules
  setAlcoholAllowance: (next: AlcoholAllowance) => void
  setAlcoholCapPercent: (percent: number) => void
}) {
  const { alcohol } = props
  const isNever = alcohol.allowance === "never"

  return (
    <F0Card title="Alcohol">
      <F0Box display="flex" flexDirection="column" gap="sm">
        <p className="text-f1-foreground text-base leading-relaxed">
          Alcohol is reimbursable{" "}
          <InlineProseSelect<AlcoholAllowance>
            value={alcohol.allowance}
            options={ALLOWANCE_OPTIONS}
            onChange={props.setAlcoholAllowance}
            ariaLabel="When alcohol is reimbursable"
          />
          {!isNever && (
            <>
              {", capped at "}
              <InlineProseValue
                value={alcohol.capPercent}
                onChange={(v) => props.setAlcoholCapPercent(v as number)}
                format="percent"
                ariaLabel="Alcohol cap as percent of meal total"
                suggestions={["10%", "15%", "20%", "30%"]}
              />
              {" of the total meal cost"}
            </>
          )}
          {"."}
        </p>
        {!isNever && (
          <F0Text
            content="The portion above the cap is automatically excluded from the reimbursement."
            variant="description"
          />
        )}
      </F0Box>
    </F0Card>
  )
}
