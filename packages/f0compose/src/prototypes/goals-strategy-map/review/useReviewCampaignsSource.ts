import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add, Files } from "@factorialco/f0-react/icons/app"

import { reviewCampaigns, type ReviewCampaign } from "@/fixtures/performance"
import { applySort } from "@/lib/applySort"

/**
 * Source for the Review campaigns table:
 * - Status filter + presets (Active / Draft / Finished / Archived)
 * - Search by name
 * - Sort by name / status / createdOn
 * - Page-based pagination
 */
export function useReviewCampaignsSource(onOpen: (id: string) => void) {
  return useDataCollectionSource<ReviewCampaign>(
    {
      itemOnClick: (item) => () => onOpen(item.id),
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "active", label: "Active" },
              { value: "draft", label: "Draft" },
              { value: "finished", label: "Finished" },
              { value: "archived", label: "Archived" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Active", filter: { status: ["active"] } },
        { label: "Draft", filter: { status: ["draft"] } },
        { label: "Finished", filter: { status: ["finished"] } },
        { label: "Archived", filter: { status: ["archived"] } },
      ],
      sortings: {
        name: { label: "Name" },
        status: { label: "Status" },
        createdOn: { label: "Created on" },
      },
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = reviewCampaigns
            .filter((c) =>
              statusFilter.length === 0 ? true : statusFilter.includes(c.status)
            )
            .filter((c) =>
              term === "" ? true : c.name.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (c, field) => {
            switch (field) {
              case "name":
                return c.name.toLowerCase()
              case "status":
                return c.status
              case "createdOn":
                return c.createdOn
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
        label: "New review",
        icon: Add,
        onClick: () => {},
      }),
      secondaryActions: () => [
        { label: "Templates", icon: Files, onClick: () => {} },
      ],
      itemActions: (item) => [
        { label: "View details", onClick: () => onOpen(item.id) },
        { label: "Duplicate", onClick: () => {} },
        { type: "separator" },
        { label: "Archive", onClick: () => {}, critical: true },
      ],
    },
    [onOpen]
  )
}
