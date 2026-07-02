import { F0Box } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { policiesColumns } from "./policiesColumns"
import { usePoliciesSourceWithState } from "./usePoliciesSource"
import type { PoliciesState } from "./usePoliciesState"

type PoliciesTabProps = {
  state: PoliciesState
  onPageClick: (id: string) => void
  onDeletePage: (id: string) => void
  onMovePage: (id: string) => void
  onCreatePage: () => void
}

/** "Policies" list tab body — OneDataCollection tied to mutable state. */
export function PoliciesTab({
  state,
  onPageClick,
  onDeletePage,
  onMovePage,
  onCreatePage,
}: PoliciesTabProps) {
  const source = usePoliciesSourceWithState(
    state.pages,
    onPageClick,
    onDeletePage,
    onMovePage,
    onCreatePage
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <OneDataCollection
        source={source}
        visualizations={[
          { type: "table", options: { columns: policiesColumns } },
        ]}
      />
    </F0Box>
  )
}
