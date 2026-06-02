import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import {
  Check,
  Cross,
} from "@factorialco/f0-react/icons/app"

import {
  trainingRequests,
  type TrainingRequest,
  type TrainingRequestStatus,
} from "@/fixtures"
import { applySort } from "@/lib/applySort"

export function useRequestsSource() {
  return useDataCollectionSource<TrainingRequest>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "review", label: "Pending" },
              { value: "approved", label: "Approved" },
              { value: "rejected", label: "Rejected" },
            ],
          },
        },
      },
      presets: [
        { label: "All", filter: {} },
        { label: "Pending", filter: { status: ["review"] } },
        { label: "Approved", filter: { status: ["approved"] } },
        { label: "Rejected", filter: { status: ["rejected"] } },
      ],
      sortings: {
        trainingName: { label: "Training" },
        requestedAt: { label: "Request date" },
        status: { label: "Status" },
      },
      secondaryActions: () => [
        { label: "Export requests", onClick: () => {} },
      ],
      itemActions: (r: TrainingRequest) => [
        ...(r.status === "review"
          ? [
              {
                label: "Approve",
                icon: Check,
                onClick: () => {},
              },
              {
                label: "Reject",
                icon: Cross,
                onClick: () => {},
                critical: true,
              },
            ]
          : [
              {
                label: "View details",
                onClick: () => {},
              },
            ]),
      ],
      dataAdapter: {
        paginationType: "pages",
        perPage: 25,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wantedStatus = Array.isArray(filters?.status)
            ? (filters.status as TrainingRequestStatus[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = trainingRequests
            .filter((r) =>
              wantedStatus.length === 0 ? true : wantedStatus.includes(r.status)
            )
            .filter((r) =>
              term === "" ? true : r.trainingName.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (r, field) => {
            switch (field) {
              case "trainingName":
                return r.trainingName.toLowerCase()
              case "requestedAt":
                return Date.parse(r.requestedAt)
              case "status":
                return r.status
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
    },
    []
  )
}
