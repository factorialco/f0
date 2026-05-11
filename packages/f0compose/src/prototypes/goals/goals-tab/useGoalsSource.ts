import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add, Delete, Download, Pencil } from "@factorialco/f0-react/icons/app"

import { applySort } from "@/lib/applySort"

import { getGoalChildren, getGoalsByScope } from "../shared/fixtures"
import type { GoalRecord, GoalStatus } from "../shared/types"

/**
 * Source hook for the Goals OneDataCollection with nested records support.
 * Filters goals by scope (team/all/mine) and status, supports bulk actions.
 * "Update goal" renders as a hover button (type: "primary").
 */
export function useGoalsSource(
  onCreateGoal: () => void,
  onSelectGoal: (id: string) => void,
  onEditGoal: (id: string) => void,
  extraGoals: GoalRecord[]
) {
  return useDataCollectionSource<GoalRecord>(
    {
      search: { enabled: true, sync: true },
      filters: {
        scope: {
          type: "in",
          label: "Scope",
          options: {
            options: [
              { value: "team", label: "Team goals" },
              { value: "all", label: "All goals" },
              { value: "mine", label: "My goals" },
            ],
          },
        },
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "not-started", label: "Not started" },
              { value: "on-track", label: "On track" },
              { value: "achieved", label: "Achieved" },
              { value: "cancelled", label: "Cancelled" },
            ],
          },
        },
        dueDate: {
          type: "in",
          label: "Due date",
          options: {
            options: [
              { value: "q1-2026", label: "Q1 2026" },
              { value: "q2-2026", label: "Q2 2026" },
              { value: "q3-2026", label: "Q3 2026" },
              { value: "q4-2026", label: "Q4 2026" },
            ],
          },
        },
      },
      currentFilters: { scope: ["team"] },
      presets: [
        { label: "Team goals", filter: { scope: ["team"] } },
        { label: "All goals", filter: { scope: ["all"] } },
        { label: "My goals", filter: { scope: ["mine"] } },
      ],
      sortings: {
        title: { label: "Goal" },
        startDate: { label: "Start date" },
        dueDate: { label: "Due date" },
        progress: { label: "Progress" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const scopeFilter = Array.isArray(filters?.scope)
            ? (filters.scope as string[])
            : ["team"]
          const activeScope = scopeFilter[0] as "team" | "all" | "mine"
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as GoalStatus[])
            : []
          const dueDateFilter = Array.isArray(filters?.dueDate)
            ? (filters.dueDate as string[])
            : []

          let goals = [...getGoalsByScope(activeScope), ...extraGoals]

          // Apply status filter
          if (statusFilter.length > 0) {
            goals = goals.filter((g) => statusFilter.includes(g.status))
          }

          // Apply due date quarter filter
          if (dueDateFilter.length > 0) {
            goals = goals.filter((g) => {
              const month = parseInt(g.dueDate.split("-")[1], 10)
              const year = g.dueDate.split("-")[0]
              let quarter = ""
              if (month <= 3) quarter = `q1-${year}`
              else if (month <= 6) quarter = `q2-${year}`
              else if (month <= 9) quarter = `q3-${year}`
              else quarter = `q4-${year}`
              return dueDateFilter.includes(quarter)
            })
          }

          // Apply search
          const filtered = goals.filter((g) =>
            term === "" ? true : g.title.toLowerCase().includes(term)
          )

          const sorted = applySort(filtered, sortings, (g, field) => {
            switch (field) {
              case "title":
                return g.title.toLowerCase()
              case "startDate":
                return g.startDate
              case "dueDate":
                return g.dueDate
              case "progress":
                return g.progress
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
      itemsWithChildren: (item: GoalRecord) => item.childrenIds.length > 0,
      childrenCount: ({ item }: { item: GoalRecord }) => item.childrenIds.length,
      fetchChildren: async ({ item }: { item: GoalRecord }) => {
        const children = getGoalChildren(item.id)
        return {
          records: children,
          type: "basic" as const,
        }
      },
      selectable: (item: GoalRecord) => item.id,
      itemOnClick: (item: GoalRecord) => () => onSelectGoal(item.id),
      primaryActions: () => ({
        label: "New goal",
        icon: Add,
        onClick: onCreateGoal,
      }),
      bulkActions: ({ selectedCount }) => ({
        primary: [
          {
            label: `Delete ${selectedCount} goal${selectedCount > 1 ? "s" : ""}`,
            icon: Delete,
            id: "bulk-delete",
            critical: true,
          },
          {
            label: "Import goals",
            icon: Download,
            id: "bulk-import",
          },
        ],
      }),
      itemActions: (item: GoalRecord) => [
        {
          label: "Update goal",
          icon: Pencil,
          onClick: () => onEditGoal(item.id),
          type: "primary" as const,
        },
        { label: "View details", onClick: () => onSelectGoal(item.id) },
        { type: "separator" as const },
        { label: "Delete", onClick: () => {}, critical: true },
      ],
    },
    [onCreateGoal, onSelectGoal, onEditGoal, extraGoals]
  )
}
