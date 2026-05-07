import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { rolesColumns } from "./rolesColumns"
import { useRolesSource } from "./useRolesSource"

export function RolesTab() {
  const source = useRolesSource()
  return (
    <OneDataCollection
      source={source}
      visualizations={[
        { type: "table", options: { columns: rolesColumns } },
      ]}
    />
  )
}
