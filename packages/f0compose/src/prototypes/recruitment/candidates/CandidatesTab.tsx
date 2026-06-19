import { F0Box } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { candidatesColumns } from "./candidatesColumns"
import { useCandidatesSource } from "./useCandidatesSource"

/** "Candidates" tab body — single OneDataCollection, no sub-tabs. */
export function CandidatesTab() {
  const source = useCandidatesSource()

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <OneDataCollection
        source={source}
        visualizations={[
          { type: "table", options: { columns: candidatesColumns } },
        ]}
      />
    </F0Box>
  )
}
