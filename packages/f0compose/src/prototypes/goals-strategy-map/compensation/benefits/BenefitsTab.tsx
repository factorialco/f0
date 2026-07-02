import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { benefitsColumns } from "./benefitsColumns"
import { useBenefitsSource } from "./useBenefitsSource"

export function BenefitsTab() {
  const source = useBenefitsSource()

  return (
    <OneDataCollection
      source={source}
      visualizations={[
        { type: "table", options: { columns: benefitsColumns } },
      ]}
    />
  )
}
