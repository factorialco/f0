import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { incentivePlansColumns } from "./incentivePlansColumns"
import { useIncentivePlansSource } from "./useIncentivePlansSource"

export function IncentivePlansTab() {
  const source = useIncentivePlansSource()

  return (
    <OneDataCollection
      source={source}
      visualizations={[
        { type: "table", options: { columns: incentivePlansColumns } },
      ]}
    />
  )
}
