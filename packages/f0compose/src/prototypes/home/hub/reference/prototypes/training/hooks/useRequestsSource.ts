import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import { applySort } from "@/prototypes/home/hub/reference/lib/applySort"

import { CURRENT_USER_ID, type TrainingRequest } from "../mocks/requests"

/** Shape of the args OneDataCollection passes to `fetchData` (the linked F0 PR
 * build ships no types, so we declare just what this adapter reads). */
type FetchParams = {
  filters?: Record<string, unknown>
  search?: string | null
  sortings?:
    | { field: string; order: "asc" | "desc" }
    | { field: string; order: "asc" | "desc" }[]
    | null
  pagination?: { perPage?: number; currentPage?: number } | null
}

/**
 * useDataCollectionSource for the Training requests table.
 *
 * The two in-table views ("All" / "My requests") are modelled as `presets`,
 * which OneDataCollection renders as chip-tabs above the table. "My requests"
 * applies `scope: ["mine"]`, keeping only requests made by the current user.
 * The table defaults to "All". Search filters by course name; per-column
 * sortings mirror the table columns.
 */
export function useRequestsSource(
  requests: TrainingRequest[],
  onCreateRequest: () => void,
  onOpenRequest: (id: string) => void,
  isEmployee = false
) {
  return useDataCollectionSource<TrainingRequest>(
    {
      search: { enabled: true, sync: true },
      // Employees only ever see their own requests, so the scope filter and the
      // All / My requests chip-tabs are dropped (the table is forced to "mine").
      // In their place they get a Status filter to slice that own list.
      filters: isEmployee
        ? {
            status: {
              type: "in",
              label: "Status",
              options: {
                options: [
                  { value: "pending", label: "Pending" },
                  { value: "approved", label: "Approved" },
                  { value: "rejected", label: "Rejected" },
                ],
              },
            },
          }
        : {
            scope: {
              type: "in",
              label: "Scope",
              options: {
                options: [{ value: "mine", label: "My requests" }],
              },
            },
          },
      presets: isEmployee
        ? []
        : [
            { label: "All", filter: {} },
            { label: "My requests", filter: { scope: ["mine"] } },
          ],
      sortings: {
        requester: { label: "Requester" },
        course: { label: "Course" },
        requestedAt: { label: "Requested on" },
        cost: { label: "Estimated cost" },
      },
      itemOnClick: (item: TrainingRequest) => () => onOpenRequest(item.id),
      dataAdapter: {
        paginationType: "pages",
        perPage: 25,
        fetchData: ({ filters, search, sortings, pagination }: FetchParams) => {
          const scope = Array.isArray(filters?.scope)
            ? (filters.scope as string[])
            : []
          const onlyMine = isEmployee || scope.includes("mine")
          const term = (search ?? "").toLowerCase().trim()
          const statusSel = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []

          const filtered = requests
            .filter((r) =>
              onlyMine ? r.requesterId === CURRENT_USER_ID : true
            )
            .filter((r) =>
              term === "" ? true : r.courseName.toLowerCase().includes(term)
            )
            .filter((r) =>
              statusSel.length ? statusSel.includes(r.status) : true
            )

          const sorted = applySort(filtered, sortings, (r, field) => {
            switch (field) {
              case "requester":
                return r.requesterId
              case "course":
                return r.courseName.toLowerCase()
              case "requestedAt":
                return r.requestedAt
              case "cost":
                return r.cost
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 25
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          return {
            type: "pages" as const,
            records: sorted.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "New request",
        icon: Add,
        onClick: onCreateRequest,
      }),
      itemActions: (item: TrainingRequest) => [
        { label: "Review request", onClick: () => onOpenRequest(item.id) },
        { type: "separator" },
        { label: "Approve", onClick: () => {} },
        { label: "Reject", onClick: () => {}, critical: true },
      ],
    },
    [requests, onCreateRequest, onOpenRequest, isEmployee]
  )
}
