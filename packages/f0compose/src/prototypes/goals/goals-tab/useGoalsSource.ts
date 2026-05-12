import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add, Delete, Download, Pencil } from "@factorialco/f0-react/icons/app"

import { applySort } from "@/lib/applySort"

import type { CompanyId } from "../shared/companies"
import {
  getGoalCounts,
  getGoalChildren,
  getGoalsByScope,
} from "../shared/fixtures"
import type { GoalRecord, GoalStatus } from "../shared/types"

/** The logged-in user id used for "My goals" and "Created by me". */
const CURRENT_USER = "emp-001"

/**
 * Goals that need attention: cancelled, or not-started/on-track but
 * past their due date (simulated "today" = 2026-04-01).
 */
function needsAttention(g: GoalRecord): boolean {
  if (g.status === "cancelled" || g.status === "off-track") return true
  const today = new Date("2026-04-01")
  const due = new Date(g.dueDate)
  return (
    (g.status === "not-started" || g.status === "on-track") &&
    due < today &&
    g.progress < 100
  )
}

export function useGoalsSource(
  onCreateGoal: () => void,
  onSelectGoal: (id: string) => void,
  onEditGoal: (id: string) => void,
  extraGoals: GoalRecord[],
  companyId: CompanyId
) {
  const counts = getGoalCounts(companyId)

  // Extra preset counts (top-level goals only, before extraGoals)
  const allTopLevel = getGoalsByScope("all", companyId)
  const createdByMeCount = allTopLevel.filter(
    (g) => g.ownerId === CURRENT_USER
  ).length
  const needsAttentionCount = allTopLevel.filter(needsAttention).length

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
              { value: "created-by-me", label: "Created by me" },
              { value: "needs-attention", label: "Needs attention" },
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
              { value: "off-track", label: "Off track" },
              { value: "achieved", label: "Achieved" },
              { value: "cancelled", label: "Cancelled" },
            ],
          },
        },
        dueDate: {
          type: "date",
          label: "Due date",
          options: { mode: "single", view: "day" },
        },
      },
      currentFilters: { scope: ["team"] },
      presets: [
        {
          label: "Team goals",
          filter: { scope: ["team"] },
          itemsCount: () => counts.team,
        },
        {
          label: "All goals",
          filter: { scope: ["all"] },
          itemsCount: () => counts.all,
        },
        {
          label: "My goals",
          filter: { scope: ["mine"] },
          itemsCount: () => counts.mine,
        },
        {
          label: "Created by me",
          filter: { scope: ["created-by-me"] },
          itemsCount: () => createdByMeCount,
        },
        {
          label: "Needs attention",
          filter: { scope: ["needs-attention"] },
          itemsCount: () => needsAttentionCount,
        },
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
          const activeScope = scopeFilter[0] as
            | "team"
            | "all"
            | "mine"
            | "created-by-me"
            | "needs-attention"
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as GoalStatus[])
            : []
          const dueDateFilter = filters?.dueDate as string | undefined

          let goals: GoalRecord[]
          if (activeScope === "created-by-me") {
            goals = [
              ...getGoalsByScope("all", companyId).filter(
                (g) => g.ownerId === CURRENT_USER
              ),
              ...extraGoals.filter((g) => g.ownerId === CURRENT_USER),
            ]
          } else if (activeScope === "needs-attention") {
            goals = [
              ...getGoalsByScope("all", companyId).filter(needsAttention),
              ...extraGoals.filter(needsAttention),
            ]
          } else {
            goals = [
              ...getGoalsByScope(activeScope, companyId),
              ...extraGoals,
            ]
          }

          // Apply status filter
          if (statusFilter.length > 0) {
            goals = goals.filter((g) => statusFilter.includes(g.status))
          }

          // Apply due date filter (goals due on or before selected date)
          if (dueDateFilter) {
            goals = goals.filter((g) => g.dueDate <= dueDateFilter)
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
    [onCreateGoal, onSelectGoal, onEditGoal, extraGoals, companyId]
  )
}
