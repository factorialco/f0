import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add, Delete, Swap } from "@factorialco/f0-react/icons/app"

import { type Policy, policies } from "@/fixtures"
import { applySort } from "@/lib/applySort"

/**
 * Static source (uses fixture data directly).
 */
export function usePoliciesSource() {
  return useDataCollectionSource<Policy>(
    {
      filters: {
        folder: {
          type: "in",
          label: "Location",
          options: {
            options: [
              ...new Set(
                policies
                  .filter((p) => p.visibility !== "private")
                  .map((p) => p.folder)
              ),
            ].map((f) => ({ value: f, label: f })),
          },
        },
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "published", label: "Published" },
              { value: "draft", label: "Draft" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Public", filter: { status: ["published"] } },
        { label: "Draft", filter: { status: ["draft"] } },
      ],
      sortings: {
        title: { label: "Title" },
        updatedAt: { label: "Updated at" },
      },
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const folderFilter = Array.isArray(filters?.folder)
            ? (filters.folder as string[])
            : []
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = policies
            .filter((p) =>
              folderFilter.length === 0
                ? true
                : folderFilter.includes(p.folder)
            )
            .filter((p) => {
              if (statusFilter.length === 0) return true
              const isDraft = p.visibility === "private"
              if (statusFilter.includes("draft") && isDraft) return true
              if (statusFilter.includes("published") && !isDraft) return true
              return false
            })
            .filter((p) =>
              term === ""
                ? true
                : p.title.toLowerCase().includes(term) ||
                  p.ownerName.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (p, field) => {
            switch (field) {
              case "title":
                return p.title.toLowerCase()
              case "updatedAt":
                return Date.parse(p.updatedAt)
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination &&
            "currentPage" in pagination &&
            pagination.currentPage
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
        label: "New page",
        icon: Add,
        onClick: () => {},
      }),
      itemActions: () => [
        { label: "View page", onClick: () => {} },
        { label: "Move page", onClick: () => {} },
        { type: "separator" },
        { label: "Delete", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}

/**
 * Mutable source — re-derives when `data` changes.
 */
export function usePoliciesSourceWithState(
  data: Policy[],
  onPageClick: (id: string) => void,
  onDeletePage: (id: string) => void,
  onMovePage: (id: string) => void,
  onCreatePage: () => void
) {
  return useDataCollectionSource<Policy>(
    {
      filters: {
        folder: {
          type: "in",
          label: "Location",
          options: {
            options: [
              ...new Set(
                data
                  .filter((p) => p.visibility !== "private")
                  .map((p) => p.folder)
              ),
            ].map((f) => ({ value: f, label: f })),
          },
        },
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "published", label: "Published" },
              { value: "draft", label: "Draft" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Public", filter: { status: ["published"] } },
        { label: "Draft", filter: { status: ["draft"] } },
      ],
      sortings: {
        title: { label: "Title" },
        updatedAt: { label: "Updated at" },
      },
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const folderFilter = Array.isArray(filters?.folder)
            ? (filters.folder as string[])
            : []
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = data
            .filter((p) =>
              folderFilter.length === 0
                ? true
                : folderFilter.includes(p.folder)
            )
            .filter((p) => {
              if (statusFilter.length === 0) return true
              const isDraft = p.visibility === "private"
              if (statusFilter.includes("draft") && isDraft) return true
              if (statusFilter.includes("published") && !isDraft) return true
              return false
            })
            .filter((p) =>
              term === ""
                ? true
                : p.title.toLowerCase().includes(term) ||
                  p.ownerName.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (p, field) => {
            switch (field) {
              case "title":
                return p.title.toLowerCase()
              case "updatedAt":
                return Date.parse(p.updatedAt)
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination &&
            "currentPage" in pagination &&
            pagination.currentPage
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
        label: "New page",
        icon: Add,
        onClick: onCreatePage,
      }),
      itemActions: (item: Policy) => [
        { label: "View page", onClick: () => onPageClick(item.id) },
        {
          label: "Move page",
          icon: Swap,
          onClick: () => onMovePage(item.id),
        },
        { type: "separator" },
        {
          label: "Delete",
          icon: Delete,
          onClick: () => onDeletePage(item.id),
          critical: true,
        },
      ],
    },
    [data]
  )
}
