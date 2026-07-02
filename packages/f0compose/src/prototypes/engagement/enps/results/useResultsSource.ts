import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { applySort } from "@/lib/applySort"
import { enpsResponses, type EnpsResponse } from "../enpsFixtures"

export function useResultsSource() {
  return useDataCollectionSource<EnpsResponse>(
    {
      search: { enabled: true, sync: true },
      sortings: {
        feedback: { label: "Feedback" },
        score: { label: "Score" },
      },
      filters: {
        type: {
          type: "in",
          label: "Type",
          options: {
            options: [
              { label: "Promoter", value: "promoter" },
              { label: "Passive", value: "passive" },
              { label: "Detractor", value: "detractor" },
              { label: "No score", value: "no-score" },
            ],
          },
        },
        date: {
          type: "date",
          label: "Date",
        },
      },
      currentFilters: {},
      dataAdapter: {
        paginationType: "pages",
        perPage: 10,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wantedTypes = Array.isArray(filters?.type)
            ? (filters.type as string[])
            : []
          const dateRange = filters?.date as
            | { from?: string; to?: string }
            | undefined
          const term = (search ?? "").toLowerCase().trim()

          const filtered = enpsResponses
            .filter((r) => {
              if (wantedTypes.length === 0) return true
              return wantedTypes.includes(r.type)
            })
            .filter((r) => {
              if (!dateRange) return true
              const d = Date.parse(r.submittedAt)
              if (dateRange.from && d < Date.parse(dateRange.from)) return false
              if (dateRange.to && d > Date.parse(dateRange.to)) return false
              return true
            })
            .filter((r) =>
              term === ""
                ? true
                : r.feedback.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (r, field) => {
            switch (field) {
              case "feedback":
                return r.feedback.toLowerCase()
              case "score":
                return r.score ?? -1
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
    []
  )
}
