import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import type { IncentivePlan } from "../compensationFixtures"
import { incentivePlans } from "../compensationFixtures"
import { applySort } from "@/lib/applySort"

export function useIncentivePlansSource() {
  return useDataCollectionSource<IncentivePlan>(
    {
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "active", label: "Active" },
              { value: "draft", label: "Draft" },
              { value: "pending-approval", label: "Pending approval" },
              { value: "archived", label: "Archived" },
            ],
          },
        },
        type: {
          type: "in",
          label: "Type",
          options: {
            options: [
              { value: "commission", label: "Commission" },
              { value: "bonus", label: "Bonus" },
              { value: "mbo", label: "MBO" },
              { value: "spiff", label: "SPIFF" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Active", filter: { status: ["active"] } },
        { label: "Draft", filter: { status: ["draft"] } },
        { label: "Pending", filter: { status: ["pending-approval"] } },
      ],
      sortings: {
        name: { label: "Plan name" },
        budget: { label: "Budget" },
        participants: { label: "Participants" },
      },
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const typeFilter = Array.isArray(filters?.type)
            ? (filters.type as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = incentivePlans
            .filter((p) =>
              statusFilter.length === 0 ? true : statusFilter.includes(p.status)
            )
            .filter((p) =>
              typeFilter.length === 0 ? true : typeFilter.includes(p.type)
            )
            .filter((p) =>
              term === "" ? true : p.name.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (p, field) => {
            switch (field) {
              case "name":
                return p.name.toLowerCase()
              case "budget":
                return p.budget
              case "participants":
                return p.participantCount
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
        label: "New plan",
        icon: Add,
        onClick: () => {},
      }),
      itemActions: () => [
        { label: "View details", onClick: () => {} },
        { label: "Edit", onClick: () => {} },
        { label: "Duplicate", onClick: () => {} },
        { type: "separator" },
        { label: "Archive", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
