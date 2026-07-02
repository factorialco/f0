import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { equityColumns } from "./equityColumns"
import { useEquitySource } from "./useEquitySource"

export function EquityTab() {
  const source = useEquitySource()

  return (
    <OneDataCollection
      source={source}
      visualizations={[
        { type: "table", options: { columns: equityColumns } },
      ]}
    />
  )
}
