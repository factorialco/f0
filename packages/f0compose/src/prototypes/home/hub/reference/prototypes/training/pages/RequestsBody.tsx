import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { useCallback, useMemo } from "react"

import { useNavConfig } from "@/prototypes/home/hub/reference/lib/navConfig"
import { useNavigate } from "@/prototypes/home/hub/reference/router"

import { useRequestsSource } from "../hooks/useRequestsSource"
import { requestColumns } from "../lib/requestColumns"
import { trainingRequests } from "../mocks/requests"

/**
 * Body of the Requests tab (the page shell + tabs live in TrainingLayout). The
 * "All" / "My requests" views are the source's presets; the table defaults to
 * "All".
 */
export function RequestsBody() {
  const navigate = useNavigate()
  const onCreateRequest = useCallback(() => {}, [])
  const onOpenRequest = useCallback(
    (id: string) => navigate(`/p/training/requests/${id}`),
    [navigate]
  )
  const isEmployee = useNavConfig().config.role === "employee"
  const source = useRequestsSource(
    trainingRequests,
    onCreateRequest,
    onOpenRequest,
    isEmployee
  )
  const columns = useMemo(() => requestColumns(), [])

  return (
    <OneDataCollection
      source={source}
      visualizations={[{ type: "table", options: { columns } }]}
    />
  )
}
