import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add, Star, StarFilled } from "@factorialco/f0-react/icons/app"

import { type Job, jobs } from "@/fixtures"
import { applySort } from "@/lib/applySort"

/**
 * useDataCollectionSource setup for the Jobs table:
 * - Status filter + presets (Published / Unlisted / Draft / Archived).
 * - Search by job title.
 * - Functional sort by title / location / publishedAt.
 * - Page-based pagination (20 / page).
 * - Pin/Unpin row action branched on `item.pinned`.
 * - Primary action "New job opening".
 */
export function useJobsSource() {
  return useDataCollectionSource<Job>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "published", label: "Published" },
              { value: "unlisted", label: "Unlisted" },
              { value: "draft", label: "Draft" },
              { value: "archived", label: "Archived" },
            ],
          },
        },
      },
      currentFilters: { status: ["published", "draft"] },
      presets: [
        { label: "Published", filter: { status: ["published"] } },
        { label: "Unlisted", filter: { status: ["unlisted"] } },
        { label: "Draft", filter: { status: ["draft"] } },
        { label: "Archived", filter: { status: ["archived"] } },
      ],
      sortings: {
        title: { label: "Job opening" },
        location: { label: "Location" },
        publishedAt: { label: "Published" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wanted = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = jobs
            .filter((j) => (wanted.length === 0 ? true : wanted.includes(j.status)))
            .filter((j) =>
              term === "" ? true : j.title.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (j, field) => {
            switch (field) {
              case "title":
                return j.title.toLowerCase()
              case "location":
                return j.location.toLowerCase()
              case "publishedAt":
                return j.publishedAt ? Date.parse(j.publishedAt) : null
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
        label: "New job opening",
        icon: Add,
        onClick: () => {},
      }),
      itemActions: (item: Job) => [
        item.pinned
          ? { label: "Unpin job", icon: StarFilled, onClick: () => {} }
          : { label: "Pin job", icon: Star, onClick: () => {} },
        { label: "View job opening", onClick: () => {} },
        { label: "Edit", onClick: () => {} },
        { type: "separator" },
        { label: "Archive", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
