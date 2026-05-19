import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add, Delete, Download, Pencil } from "@factorialco/f0-react/icons/app"

import { employees, teams } from "@/fixtures"
import { applySort } from "@/lib/applySort"

import type { CompanyId } from "../shared/companies"
import {
  getGoalCounts,
  getGoalChildren,
  getGoalsByScope,
} from "../shared/fixtures"
import type { GoalRecord, GoalStatus } from "../shared/types"

/**
 * A row can be either a goal or a group header (employee/team).
 * We use a discriminated union so columns can render both.
 */
export type GoalRow =
  | (GoalRecord & { _rowType: "goal" })
  | {
      _rowType: "employee"
      id: string
      firstName: string
      lastName: string
      avatarUrl?: string
      goalCount: number
      progress: number
    }
  | {
      _rowType: "team"
      id: string
      name: string
      goalCount: number
      progress: number
    }

function buildEmployeeRows(
  companyId: CompanyId,
  extraGoals: GoalRecord[]
): GoalRow[] {
  const allGoals = [...getGoalsByScope("all", companyId), ...extraGoals]
  return employees
    .map((emp) => {
      const empGoals = allGoals.filter((g) => {
        const a = g.assignee
        if (a.type === "individual" && a.employeeId === emp.id) return true
        if (a.type === "group" && a.employeeIds.includes(emp.id)) return true
        return false
      })
      const progress =
        empGoals.length > 0
          ? Math.round(
              empGoals.reduce((sum, g) => sum + g.progress, 0) / empGoals.length
            )
          : 0
      return {
        _rowType: "employee" as const,
        id: emp.id,
        firstName: emp.preferredName ?? emp.fullName.split(" ")[0],
        lastName: emp.fullName.split(" ").slice(-1).join(" "),
        avatarUrl: emp.avatarUrl,
        goalCount: empGoals.length,
        progress,
      }
    })
    .filter((r) => r.goalCount > 0)
}

function buildTeamRows(
  companyId: CompanyId,
  extraGoals: GoalRecord[]
): GoalRow[] {
  const allGoals = [...getGoalsByScope("all", companyId), ...extraGoals]
  return teams
    .map((team) => {
      const teamGoals = allGoals.filter((g) => {
        const a = g.assignee
        return a.type === "team" && a.teamId === team.id
      })
      const progress =
        teamGoals.length > 0
          ? Math.round(
              teamGoals.reduce((sum, g) => sum + g.progress, 0) /
                teamGoals.length
            )
          : 0
      return {
        _rowType: "team" as const,
        id: team.id,
        name: team.name,
        goalCount: teamGoals.length,
        progress,
      }
    })
    .filter((r) => r.goalCount > 0)
}

export function useGoalsSource(
  onCreateGoal: () => void,
  onSelectGoal: (id: string) => void,
  onEditGoal: (id: string) => void,
  extraGoals: GoalRecord[],
  companyId: CompanyId
) {
  const counts = getGoalCounts(companyId)
  const employeeCount = employees.filter((emp) => {
    const allGoals = [...getGoalsByScope("all", companyId), ...extraGoals]
    return allGoals.some((g) => {
      const a = g.assignee
      if (a.type === "individual" && a.employeeId === emp.id) return true
      if (a.type === "group" && a.employeeIds.includes(emp.id)) return true
      return false
    })
  }).length
  const teamCount = teams.filter((team) => {
    const allGoals = [...getGoalsByScope("all", companyId), ...extraGoals]
    return allGoals.some((g) => {
      const a = g.assignee
      return a.type === "team" && a.teamId === team.id
    })
  }).length

  return useDataCollectionSource<GoalRow>(
    {
      search: { enabled: true, sync: true },
      navigationFilters: {
        date: {
          type: "date-navigator",
          defaultValue: new Date("2026-01-01"),
          granularity: ["year"],
          defaultGranularity: "year",
        },
      },
      filters: {
        scope: {
          type: "in",
          label: "Scope",
          options: {
            options: [
              { value: "all", label: "All goals" },
              { value: "mine", label: "Employee" },
              { value: "team", label: "Teams" },
            ],
          },
        },
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "on-track", label: "On track" },
              { value: "off-track", label: "Off track" },
              { value: "at-risk", label: "At Risk" },
              { value: "partial", label: "Partial" },
              { value: "achieved", label: "Achieved" },
              { value: "missed", label: "Missed" },
              { value: "cancelled", label: "Canceled" },
            ],
          },
        },
        dueDate: {
          type: "date",
          label: "Due date",
          options: { mode: "single", view: "day" },
        },
        assigneeType: {
          type: "in",
          label: "Assignee",
          options: {
            options: [
              { value: "company", label: "Company" },
              {
                value: "team",
                label: "Team",
                children: {
                  filterKey: "assigneeTeam",
                  options: teams.map((t) => ({
                    value: t.id,
                    label: t.name,
                  })),
                },
              },
              {
                value: "employee",
                label: "Employee",
                children: {
                  filterKey: "assigneeEmployee",
                  options: employees.map((e) => ({
                    value: e.id,
                    label: e.fullName,
                  })),
                },
              },
            ],
          },
        },
        assigneeTeam: {
          type: "in",
          label: "Team",
          hideSelector: true,
          options: {
            options: teams.map((t) => ({ value: t.id, label: t.name })),
          },
        },
        assigneeEmployee: {
          type: "in",
          label: "Employee",
          hideSelector: true,
          options: {
            options: employees.map((e) => ({
              value: e.id,
              label: e.fullName,
            })),
          },
        },
      },
      currentFilters: { scope: ["all"] },
      presets: [
        {
          label: "All goals",
          filter: { scope: ["all"] },
          itemsCount: () => counts.all,
        },
        {
          label: "Employee",
          filter: { scope: ["mine"] },
          itemsCount: () => employeeCount,
        },
        {
          label: "Teams",
          filter: { scope: ["team"] },
          itemsCount: () => teamCount,
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
            : ["all"]
          const activeScope = scopeFilter[0] as "team" | "all" | "mine"

          // ─── Grouped views ───────────────────────────────────────
          if (activeScope === "mine") {
            let rows = buildEmployeeRows(companyId, extraGoals)
            if (term) {
              rows = rows.filter((r) => {
                if (r._rowType !== "employee") return false
                return `${r.firstName} ${r.lastName}`
                  .toLowerCase()
                  .includes(term)
              })
            }
            const perPage = pagination?.perPage ?? 20
            const currentPage =
              pagination &&
              "currentPage" in pagination &&
              pagination.currentPage
                ? pagination.currentPage
                : 1
            const total = rows.length
            const pagesCount = Math.max(1, Math.ceil(total / perPage))
            const start = (currentPage - 1) * perPage
            const records = rows.slice(start, start + perPage)
            return {
              type: "pages" as const,
              records,
              total,
              perPage,
              currentPage,
              pagesCount,
            }
          }

          if (activeScope === "team") {
            let rows = buildTeamRows(companyId, extraGoals)
            if (term) {
              rows = rows.filter((r) => {
                if (r._rowType !== "team") return false
                return r.name.toLowerCase().includes(term)
              })
            }
            const perPage = pagination?.perPage ?? 20
            const currentPage =
              pagination &&
              "currentPage" in pagination &&
              pagination.currentPage
                ? pagination.currentPage
                : 1
            const total = rows.length
            const pagesCount = Math.max(1, Math.ceil(total / perPage))
            const start = (currentPage - 1) * perPage
            const records = rows.slice(start, start + perPage)
            return {
              type: "pages" as const,
              records,
              total,
              perPage,
              currentPage,
              pagesCount,
            }
          }

          // ─── All goals view ──────────────────────────────────────
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as GoalStatus[])
            : []
          const dueDateFilter = filters?.dueDate as string | undefined
          const assigneeTypes = Array.isArray(filters?.assigneeType)
            ? (filters.assigneeType as Array<"company" | "team" | "employee">)
            : []
          const teamIds = Array.isArray(filters?.assigneeTeam)
            ? (filters.assigneeTeam as string[])
            : []
          const employeeIds = Array.isArray(filters?.assigneeEmployee)
            ? (filters.assigneeEmployee as string[])
            : []

          let goals: GoalRecord[] = [
            ...getGoalsByScope("all", companyId),
            ...extraGoals,
          ]

          if (statusFilter.length > 0) {
            goals = goals.filter((g) => statusFilter.includes(g.status))
          }

          if (dueDateFilter) {
            goals = goals.filter((g) => g.dueDate <= dueDateFilter)
          }

          if (assigneeTypes.length > 0) {
            goals = goals.filter((g) => {
              const a = g.assignee
              return assigneeTypes.some((t) => {
                if (t === "company") return a.type === "company"
                if (t === "team") {
                  if (a.type !== "team") return false
                  return teamIds.length === 0 || teamIds.includes(a.teamId)
                }
                if (t === "employee") {
                  if (a.type === "individual") {
                    return (
                      employeeIds.length === 0 ||
                      employeeIds.includes(a.employeeId)
                    )
                  }
                  if (a.type === "group") {
                    return (
                      employeeIds.length === 0 ||
                      a.employeeIds.some((id) => employeeIds.includes(id))
                    )
                  }
                  return false
                }
                return false
              })
            })
          }

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
            pagination &&
            "currentPage" in pagination &&
            pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          const records: GoalRow[] = sorted
            .slice(start, start + perPage)
            .map((g) => ({ ...g, _rowType: "goal" as const }))

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
      itemsWithChildren: (item: GoalRow) => {
        if (item._rowType === "goal") return item.childrenIds.length > 0
        return true
      },
      childrenCount: ({ item }: { item: GoalRow }) => {
        if (item._rowType === "goal") return item.childrenIds.length
        if (item._rowType === "employee") return item.goalCount
        if (item._rowType === "team") return item.goalCount
        return 0
      },
      fetchChildren: async ({ item }: { item: GoalRow }) => {
        if (item._rowType === "goal") {
          const children = getGoalChildren(item.id)
          return {
            records: children.map((g) => ({
              ...g,
              _rowType: "goal" as const,
            })),
            type: "basic" as const,
          }
        }
        if (item._rowType === "employee") {
          const allGoals = [
            ...getGoalsByScope("all", companyId),
            ...extraGoals,
          ]
          const empGoals = allGoals.filter((g) => {
            const a = g.assignee
            if (a.type === "individual" && a.employeeId === item.id) return true
            if (a.type === "group" && a.employeeIds.includes(item.id))
              return true
            return false
          })
          return {
            records: empGoals.map((g) => ({
              ...g,
              _rowType: "goal" as const,
            })),
            type: "basic" as const,
          }
        }
        if (item._rowType === "team") {
          const allGoals = [
            ...getGoalsByScope("all", companyId),
            ...extraGoals,
          ]
          const teamGoals = allGoals.filter((g) => {
            const a = g.assignee
            return a.type === "team" && a.teamId === item.id
          })
          return {
            records: teamGoals.map((g) => ({
              ...g,
              _rowType: "goal" as const,
            })),
            type: "basic" as const,
          }
        }
        return { records: [], type: "basic" as const }
      },
      selectable: (item: GoalRow) => item.id,
      itemOnClick: (item: GoalRow) => () => {
        if (item._rowType === "goal") onSelectGoal(item.id)
      },
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
      itemActions: (item: GoalRow) => {
        if (item._rowType !== "goal") return []
        return [
          {
            label: "Update goal",
            icon: Pencil,
            onClick: () => onEditGoal(item.id),
            type: "primary" as const,
          },
          { label: "View details", onClick: () => onSelectGoal(item.id) },
          { type: "separator" as const },
          { label: "Delete", onClick: () => {}, critical: true },
        ]
      },
    },
    [onCreateGoal, onSelectGoal, onEditGoal, extraGoals, companyId]
  )
}
