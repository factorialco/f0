import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { applySort } from "@/lib/applySort"

import {
  type BudgetPace,
  type TeamBudget,
  computePace,
  consumptionPct,
  projectedYearEnd,
  teamBudgets,
} from "./budgetsData"

export function useBudgetsSource() {
  return useDataCollectionSource<TeamBudget>(
    {
      search: { enabled: true },
      filters: {
        pace: {
          type: "in" as const,
          label: "Pace",
          options: {
            options: [
              { value: "over",     label: "Over pace" },
              { value: "watch",    label: "Watch" },
              { value: "on-track", label: "On track" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "All teams", filter: {} },
        { label: "Over pace", filter: { pace: ["over"] } },
        { label: "Watch",     filter: { pace: ["watch"] } },
        { label: "On track",  filter: { pace: ["on-track"] } },
      ],
      sortings: {
        team:         { label: "Team" },
        pace:         { label: "Pace" },
        annualBudget: { label: "Annual budget" },
        projected:    { label: "Projected year-end" },
        consumption:  { label: "Budget used" },
        apps:         { label: "Applications" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wanted = Array.isArray(filters?.pace)
            ? (filters.pace as BudgetPace[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = teamBudgets
            .filter((r) => (wanted.length === 0 ? true : wanted.includes(computePace(r))))
            .filter((r) =>
              term === ""
                ? true
                : `${r.ownerFirstName} ${r.ownerLastName} ${r.team}`
                    .toLowerCase()
                    .includes(term)
            )

          const paceOrder: Record<BudgetPace, number> = {
            over: 0,
            watch: 1,
            "on-track": 2,
          }

          const sorted = applySort(filtered, sortings, (r, field) => {
            switch (field) {
              case "team":         return r.team.toLowerCase()
              case "apps":         return r.apps
              case "annualBudget": return r.annualBudget
              case "projected":    return projectedYearEnd(r)
              case "consumption":  return consumptionPct(r)
              case "pace":         return paceOrder[computePace(r)]
              default:             return null
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
    },
    []
  )
}
