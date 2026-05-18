import { F0Box } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { trainingsColumns } from "./trainingsColumns"
import { useTrainingsSource } from "./useTrainingsSource"

/** "Trainings list" tab body — single OneDataCollection. */
export function TrainingsListTab() {
  const source = useTrainingsSource()

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <OneDataCollection
        source={source}
        visualizations={[
          { type: "table", options: { columns: trainingsColumns } },
        ]}
      />
    </F0Box>
  )
}
