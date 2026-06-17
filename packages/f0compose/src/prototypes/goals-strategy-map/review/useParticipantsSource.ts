import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"

import { applySort } from "@/lib/applySort"

import {
  getReviewParticipants,
  type ParticipantRow,
} from "./reviewDetailData"

/**
 * Source for the participants table inside a review detail:
 * - Filter + presets by participant status (Pending / Published)
 * - Search by employee name
 * - Sort by employee / score / status
 * - Page-based pagination
 */
export function useParticipantsSource(reviewId: string) {
  return useDataCollectionSource<ParticipantRow>(
    {
      filters: {
        status: {
          type: "in",
          label: "Evaluation status",
          options: {
            options: [
              { value: "pending", label: "Pending" },
              { value: "published", label: "Published" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Pending", filter: { status: ["pending"] } },
        { label: "Published", filter: { status: ["published"] } },
      ],
      sortings: {
        employee: { label: "Employee" },
        score: { label: "Score" },
        status: { label: "Status" },
      },
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 10,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const rows = getReviewParticipants(reviewId)
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = rows
            .filter((p) =>
              statusFilter.length === 0 ? true : statusFilter.includes(p.status)
            )
            .filter((p) =>
              term === ""
                ? true
                : `${p.firstName} ${p.lastName}`.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (p, field) => {
            switch (field) {
              case "employee":
                return `${p.firstName} ${p.lastName}`.toLowerCase()
              case "score":
                return p.score ?? -1
              case "status":
                return p.status
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 10
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
    [reviewId]
  )
}
