import { F0Box } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { competenciesColumns } from "./competenciesColumns"
import { useCompetenciesSource } from "./useCompetenciesSource"

/** Competencies tab — table of org competencies. */
export function CompetenciesTab() {
  const source = useCompetenciesSource()

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <OneDataCollection
        source={source}
        visualizations={[
          { type: "table", options: { columns: competenciesColumns } },
        ]}
      />
    </F0Box>
  )
}
