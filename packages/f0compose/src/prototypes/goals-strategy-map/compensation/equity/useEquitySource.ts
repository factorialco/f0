import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import type { EquityGrant } from "../compensationFixtures"
import { equityGrants } from "../compensationFixtures"
import { applySort } from "@/lib/applySort"

export function useEquitySource() {
  return useDataCollectionSource<EquityGrant>(
    {
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "active", label: "Active" },
              { value: "fully-vested", label: "Fully vested" },
              { value: "pending", label: "Pending" },
              { value: "cancelled", label: "Cancelled" },
            ],
          },
        },
        grantType: {
          type: "in",
          label: "Grant type",
          options: {
            options: [
              { value: "iso", label: "ISO" },
              { value: "nso", label: "NSO" },
              { value: "rsu", label: "RSU" },
              { value: "phantom", label: "Phantom" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Active", filter: { status: ["active"] } },
        { label: "Fully vested", filter: { status: ["fully-vested"] } },
      ],
      sortings: {
        granted: { label: "Shares granted" },
        unrealizedValue: { label: "Unrealized value" },
        grantDate: { label: "Grant date" },
      },
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const typeFilter = Array.isArray(filters?.grantType)
            ? (filters.grantType as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = equityGrants
            .filter((g) =>
              statusFilter.length === 0 ? true : statusFilter.includes(g.status)
            )
            .filter((g) =>
              typeFilter.length === 0 ? true : typeFilter.includes(g.grantType)
            )
            .filter((g) => {
              if (term === "") return true
              return g.employeeId.toLowerCase().includes(term)
            })

          const sorted = applySort(filtered, sortings, (g, field) => {
            switch (field) {
              case "granted":
                return g.sharesGranted
              case "unrealizedValue":
                return g.sharesVested * (g.currentPrice - g.strikePrice)
              case "grantDate":
                return g.grantDate
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
        label: "New grant",
        icon: Add,
        onClick: () => {},
      }),
      itemActions: () => [
        { label: "View details", onClick: () => {} },
        { label: "Edit", onClick: () => {} },
        { type: "separator" },
        { label: "Cancel grant", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
