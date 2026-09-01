import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import { type Candidate, candidates } from "@/fixtures"
import { applySort } from "@/lib/applySort"

/**
 * useDataCollectionSource setup for the Candidates table:
 * - State filter + presets (Active / Talent pool / Archived). These are
 *   presets, NOT sub-tabs — keep navigation primary-only.
 * - Search by full name or email.
 * - Functional sort by fullName / appliedOn / rating.
 * - Page-based pagination (20 / page).
 * - Per-row actions: View / Send message / Archive.
 */
export function useCandidatesSource() {
  return useDataCollectionSource<Candidate>(
    {
      filters: {
        state: {
          type: "in",
          label: "State",
          options: {
            options: [
              { value: "active", label: "Active" },
              { value: "talent-pool", label: "Talent pool" },
              { value: "archived", label: "Archived" },
            ],
          },
        },
      },
      currentFilters: { state: ["active"] },
      presets: [
        { label: "Active", filter: { state: ["active"] } },
        { label: "Talent pool", filter: { state: ["talent-pool"] } },
        { label: "Archived", filter: { state: ["archived"] } },
      ],
      sortings: {
        fullName: { label: "Name" },
        appliedOn: { label: "Applied on" },
        rating: { label: "Rating" },
      },
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const raw = filters?.state
          const wanted = Array.isArray(raw) ? (raw as string[]) : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = candidates
            .filter((c) =>
              wanted.length === 0 ? true : wanted.includes(c.state)
            )
            .filter((c) =>
              term === ""
                ? true
                : c.fullName.toLowerCase().includes(term) ||
                  c.email.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (c, field) => {
            switch (field) {
              case "fullName":
                return c.fullName.toLowerCase()
              case "appliedOn":
                return Date.parse(c.appliedOn)
              case "rating":
                return c.rating
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          const records = sorted.slice(start, start + perPage)

          return {
            type: "pages" as const,
            records,
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "New candidate",
        icon: Add,
        onClick: () => {},
      }),
      itemActions: () => [
        { label: "View profile", onClick: () => {} },
        { label: "Send message", onClick: () => {} },
        { type: "separator" },
        { label: "Archive", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
