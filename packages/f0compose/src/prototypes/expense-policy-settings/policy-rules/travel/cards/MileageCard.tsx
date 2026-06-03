import { F0Box, F0Card, F0Text } from "@factorialco/f0-react"

import { InlineProseValue } from "../../shared/InlineProse"
import type { MileageRules } from "../../types"

/**
 * Mileage rule — single-line policy clause for personal-vehicle
 * reimbursement. Stored as EUR per km.
 *
 * The inline-prose value uses `format="number"` with a manual
 * unit suffix in the surrounding sentence because we don't ship
 * a "currency-per-km" format and inventing one for a single
 * field would be premature.
 */
export function MileageCard(props: {
  mileage: MileageRules
  setMileageRate: (rate: number) => void
}) {
  return (
    <F0Card title="Mileage">
      <F0Box display="flex" flexDirection="column" gap="sm">
        <p className="text-f1-foreground text-base leading-relaxed">
          Personal-vehicle mileage is reimbursed at €
          <InlineProseValue
            value={props.mileage.rate}
            onChange={(v) => props.setMileageRate(v as number)}
            format="number"
            ariaLabel="Mileage rate in euros per kilometre"
            suggestions={["0.25", "0.30", "0.32", "0.40"]}
          />{" "}
          per kilometre.
        </p>
        <F0Text
          content="Applies to one-way distance between the employee's home or office and the business destination."
          variant="description"
        />
      </F0Box>
    </F0Card>
  )
}
