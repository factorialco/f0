import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"

import { employees, teams, findEmployee, findTeam } from "@/fixtures"

import type { CompanyId } from "../shared/companies"
import { getGoalsByScope } from "../shared/fixtures"
import type { GoalRecord } from "../shared/types"

// ─── Employee grouped source ─────────────────────────────────────────

type EmployeeRow = {
  id: string
  fullName: string
  firstName: string
  lastName: string
  avatarUrl?: string
  goalCount: number
  progress: number
}

function buildEmployeeRows(
  companyId: CompanyId,
  extraGoals: GoalRecord[]
): EmployeeRow[] {
  const allGoals = [...getGoalsByScope("all", companyId), ...extraGoals]

  return employees.map((emp) => {
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
      id: emp.id,
      fullName: emp.fullName,
      firstName: emp.preferredName ?? emp.fullName.split(" ")[0],
      lastName: emp.fullName.split(" ").slice(-1).join(" "),
      avatarUrl: emp.avatarUrl,
      goalCount: empGoals.length,
      progress,
    }
  }).filter((r) => r.goalCount > 0)
}

export function useEmployeeGoalsSource(
  onSelectGoal: (id: string) => void,
  extraGoals: GoalRecord[],
  companyId: CompanyId
) {
  return useDataCollectionSource<EmployeeRow>(
    {
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          let rows = buildEmployeeRows(companyId, extraGoals)

          if (term) {
            rows = rows.filter((r) =>
              r.fullName.toLowerCase().includes(term)
            )
          }

          // Sort by progress descending
          rows.sort((a, b) => b.progress - a.progress)

          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
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
        },
      },
      itemsWithChildren: () => true,
      childrenCount: ({ item }: { item: EmployeeRow }) => item.goalCount,
      fetchChildren: async ({ item }: { item: EmployeeRow }) => {
        const allGoals = [
          ...getGoalsByScope("all", companyId),
          ...extraGoals,
        ]
        const empGoals = allGoals.filter((g) => {
          const a = g.assignee
          if (a.type === "individual" && a.employeeId === item.id) return true
          if (a.type === "group" && a.employeeIds.includes(item.id)) return true
          return false
        })
        return {
          records: empGoals as unknown as EmployeeRow[],
          type: "basic" as const,
        }
      },
      selectable: (item: EmployeeRow) => item.id,
      itemOnClick: (item: EmployeeRow | GoalRecord) => () => {
        if ("title" in item) onSelectGoal(item.id)
      },
    },
    [onSelectGoal, extraGoals, companyId]
  )
}

// ─── Team grouped source ─────────────────────────────────────────────

type TeamRow = {
  id: string
  name: string
  goalCount: number
  progress: number
}

function buildTeamRows(
  companyId: CompanyId,
  extraGoals: GoalRecord[]
): TeamRow[] {
  const allGoals = [...getGoalsByScope("all", companyId), ...extraGoals]

  return teams.map((team) => {
    const teamGoals = allGoals.filter((g) => {
      const a = g.assignee
      if (a.type === "team" && a.teamId === team.id) return true
      return false
    })
    const progress =
      teamGoals.length > 0
        ? Math.round(
            teamGoals.reduce((sum, g) => sum + g.progress, 0) /
              teamGoals.length
          )
        : 0
    return {
      id: team.id,
      name: team.name,
      goalCount: teamGoals.length,
      progress,
    }
  }).filter((r) => r.goalCount > 0)
}

export function useTeamGoalsSource(
  onSelectGoal: (id: string) => void,
  extraGoals: GoalRecord[],
  companyId: CompanyId
) {
  return useDataCollectionSource<TeamRow>(
    {
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          let rows = buildTeamRows(companyId, extraGoals)

          if (term) {
            rows = rows.filter((r) =>
              r.name.toLowerCase().includes(term)
            )
          }

          rows.sort((a, b) => b.progress - a.progress)

          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
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
        },
      },
      itemsWithChildren: () => true,
      childrenCount: ({ item }: { item: TeamRow }) => item.goalCount,
      fetchChildren: async ({ item }: { item: TeamRow }) => {
        const allGoals = [
          ...getGoalsByScope("all", companyId),
          ...extraGoals,
        ]
        const teamGoals = allGoals.filter((g) => {
          const a = g.assignee
          return a.type === "team" && a.teamId === item.id
        })
        return {
          records: teamGoals as unknown as TeamRow[],
          type: "basic" as const,
        }
      },
      selectable: (item: TeamRow) => item.id,
      itemOnClick: (item: TeamRow | GoalRecord) => () => {
        if ("title" in item) onSelectGoal(item.id)
      },
    },
    [onSelectGoal, extraGoals, companyId]
  )
}

// ─── Columns ─────────────────────────────────────────────────────────

export const employeeGroupedColumns = [
  {
    id: "employee",
    label: "Employee",
    render: (item: EmployeeRow) => {
      if ("fullName" in item) {
        return {
          type: "person" as const,
          value: {
            firstName: item.firstName,
            lastName: item.lastName,
            src: item.avatarUrl,
          },
        }
      }
      return (item as unknown as GoalRecord).title
    },
  },
  {
    id: "goalCount",
    label: "Goals",
    render: (item: EmployeeRow) => {
      if ("goalCount" in item) return `${item.goalCount}`
      return ""
    },
  },
  {
    id: "progress",
    label: "Progress",
    render: (item: EmployeeRow) => {
      const progress = "goalCount" in item ? item.progress : (item as unknown as GoalRecord).progress
      return {
        type: "progressBar" as const,
        value: {
          value: progress,
          max: 100,
          label: `${progress}%`,
          color: "categorical-1" as const,
        },
      }
    },
  },
  {
    id: "assignee",
    label: "Assignee",
    render: (item: EmployeeRow) => {
      if ("assignee" in item) {
        const g = item as unknown as GoalRecord
        const a = g.assignee
        if (a.type === "team") {
          const team = findTeam(a.teamId)
          return team?.name ?? "Team"
        }
        if (a.type === "individual") {
          const emp = findEmployee(a.employeeId)
          return emp?.fullName ?? "Employee"
        }
        if (a.type === "company") return a.name
        if (a.type === "area") return a.name
        if (a.type === "department") return "Department"
        if (a.type === "group") return "Group"
      }
      return ""
    },
  },
]

export const teamGroupedColumns = [
  {
    id: "team",
    label: "Team",
    render: (item: TeamRow) => {
      if ("name" in item && !("title" in item)) {
        return {
          type: "team" as const,
          value: { name: item.name },
        }
      }
      if ("title" in item) return (item as unknown as GoalRecord).title
      return ""
    },
  },
  {
    id: "goalCount",
    label: "Goals",
    render: (item: TeamRow) => {
      if ("goalCount" in item) return `${item.goalCount}`
      return ""
    },
  },
  {
    id: "progress",
    label: "Progress",
    render: (item: TeamRow) => {
      const progress = "goalCount" in item ? item.progress : (item as unknown as GoalRecord).progress
      return {
        type: "progressBar" as const,
        value: {
          value: progress,
          max: 100,
          label: `${progress}%`,
          color: "categorical-1" as const,
        },
      }
    },
  },
  {
    id: "assignee",
    label: "Assignee",
    render: (item: TeamRow) => {
      if ("assignee" in item) {
        const g = item as unknown as GoalRecord
        const a = g.assignee
        if (a.type === "team") {
          const team = findTeam(a.teamId)
          return team?.name ?? "Team"
        }
        if (a.type === "individual") {
          const emp = findEmployee(a.employeeId)
          return emp?.fullName ?? "Employee"
        }
        if (a.type === "company") return a.name
        if (a.type === "area") return a.name
        return ""
      }
      return ""
    },
  },
]
