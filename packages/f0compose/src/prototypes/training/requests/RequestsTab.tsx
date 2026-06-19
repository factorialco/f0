import { F0Box } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { requestsColumns } from "./requestsColumns"
import { useRequestsSource } from "./useRequestsSource"

/** "Requests" tab body. */
export function RequestsTab() {
  const source = useRequestsSource()

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <OneDataCollection
        source={source}
        visualizations={[
          { type: "table", options: { columns: requestsColumns } },
        ]}
      />
    </F0Box>
  )
}
