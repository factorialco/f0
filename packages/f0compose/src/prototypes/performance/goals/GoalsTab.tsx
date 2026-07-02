import { F0Box } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { goalsColumns } from "./goalsColumns"
import { useGoalsSource } from "./useGoalsSource"

/** Goals tab — table of employee goals. */
export function GoalsTab() {
  const source = useGoalsSource()

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <OneDataCollection
        source={source}
        visualizations={[
          { type: "table", options: { columns: goalsColumns } },
        ]}
      />
    </F0Box>
  )
}
