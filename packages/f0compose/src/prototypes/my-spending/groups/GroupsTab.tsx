import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { groupsColumns } from "./groupsColumns"
import { useGroupsSource } from "./useGroupsSource"

/**
 * "My expenses > Groups" tab body. Mirrors the production screen:
 * preset chips with counts, status / amount / reimbursable / report-date
 * columns, pagination, "Add group" primary CTA + "Settings" secondary action.
 */
export function GroupsTab() {
  const source = useGroupsSource()
  return (
    <OneDataCollection
      source={source}
      visualizations={[
        { type: "table", options: { columns: groupsColumns } },
      ]}
    />
  )
}
