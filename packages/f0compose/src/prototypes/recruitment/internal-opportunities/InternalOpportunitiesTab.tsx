import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { opportunityCardProperties } from "./opportunityCardProperties"
import { useInternalOpportunitiesSource } from "./useInternalOpportunitiesSource"

/**
 * "Internal opportunities" tab — employee-facing card grid of currently
 * published jobs, grouped by location. Composes the source hook + the card
 * properties module per the f0-prototype canonical layout.
 */
export function InternalOpportunitiesTab() {
  const source = useInternalOpportunitiesSource()
  return (
    <OneDataCollection
      source={source}
      visualizations={[
        {
          type: "card",
          options: {
            cardProperties: opportunityCardProperties,
            title: (job) => job.title,
          },
        },
      ]}
    />
  )
}
