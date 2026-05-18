import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import {
  CheckCircle,
  Circle,
  Flag,
  DottedCircle,
  Pencil,
  Delete,
  LayersFront,
  Money,
  Link,
} from "@factorialco/f0-react/icons/app"
import { useMemo } from "react"

import { employees, teams } from "@/fixtures"
import { applySort } from "@/lib/applySort"
import { strategyGoals } from "../shared/strategyGoals"
import { incentivePlans } from "../compensation/compensationFixtures"
import type { GoalStatus } from "../shared/types"
import { statusToLabel, statusToVariant, levelToLabel } from "../shared/helpers"

const employeeMap = new Map(employees.map((e) => [e.id, e]))
const teamMap = new Map(teams.map((t) => [t.id, t]))
const incentivePlanMap = new Map(incentivePlans.map((p) => [p.id, p]))

/** Map goal IDs to incentive plan IDs (some goals are linked). */
const goalToIncentivePlan: Record<string, string> = {
  "sg-014": "ip-001", // Sales target → Sales Commission Q2
  "sg-016": "ip-001", // Upsell 2M Q1 → Sales Commission Q2
  "sg-017": "ip-001", // Upsell 3M Q2 → Sales Commission Q2
  "sg-001": "ip-002", // Product target → Engineering Bonus H1
  "sg-002": "ip-002", // Talent Domain → Engineering Bonus H1
  "sg-003": "ip-002", // Finance Domain → Engineering Bonus H1
  "sg-000": "ip-003", // Factorial ARR → MBO Leadership
  "sg-004": "ip-002", // Operations Domain → Engineering Bonus H1
}

/**
 * Person-centric goal row: each row is one employee + one of their goals.
 */
export type PersonGoalRow = {
  id: string
  employeeId: string
  employeeName: string
  employeeAvatar: string
  role: string
  teamId: string
  teamName: string
  managerId: string | null
  managerName: string
  goalId: string
  goalTitle: string
  level: string
  status: string
  statusLabel: string
  statusVariant: string
  levelLabel: string
  progress: number
  measureStart: number
  measureTarget: number
  measureCurrent: number
  dueDate: string
  assignation: string
  incentivePlanId: string | null
  incentivePlanName: string
}

/** Build flat person+goal rows from strategy goals. */
function buildPersonGoalRows(): PersonGoalRow[] {
  const rows: PersonGoalRow[] = []

  for (const goal of strategyGoals) {
    const personIds = new Set<string>()
    personIds.add(goal.ownerId)
    for (const cid of goal.contributorIds) {
      personIds.add(cid)
    }

    const planId = goalToIncentivePlan[goal.id] ?? null
    const plan = planId ? incentivePlanMap.get(planId) : undefined

    for (const empId of personIds) {
      const emp = employeeMap.get(empId)
      if (!emp) continue
      const team = teamMap.get(emp.teamId)
      const manager = emp.managerId ? employeeMap.get(emp.managerId) : undefined

      const max = goal.measureTarget - goal.measureStart
      const value = Math.max(0, goal.measureCurrent - goal.measureStart)
      const percent = max > 0 ? Math.round((value / max) * 100) : 0

      rows.push({
        id: `${empId}-${goal.id}`,
        employeeId: empId,
        employeeName: emp.fullName,
        employeeAvatar: emp.avatarUrl,
        role: emp.role,
        teamId: emp.teamId,
        teamName: team?.name ?? "No team",
        managerId: emp.managerId,
        managerName: manager?.fullName ?? "No manager",
        goalId: goal.id,
        goalTitle: goal.title,
        level: goal.level,
        status: goal.status,
        statusLabel: statusToLabel(goal.status),
        statusVariant: statusToVariant(goal.status),
        levelLabel: levelToLabel(goal.level),
        progress: percent,
        measureStart: goal.measureStart,
        measureTarget: goal.measureTarget,
        measureCurrent: goal.measureCurrent,
        dueDate: goal.dueDate,
        assignation: goal.assignation,
        incentivePlanId: planId,
        incentivePlanName: plan?.name ?? "None",
      })
    }
  }

  return rows
}

const allRows = buildPersonGoalRows()

/** Unique teams for grouping labels. */
const uniqueTeams = [...new Set(allRows.map((r) => r.teamName))].sort()

/** Unique roles for grouping labels. */
const uniqueRoles = [...new Set(allRows.map((r) => r.role))].sort()

/** Unique statuses for grouping labels. */
const uniqueStatuses = [...new Set(allRows.map((r) => r.status))]

/** Unique incentive plan names for filtering. */
const uniquePlans = [...new Set(allRows.map((r) => r.incentivePlanName))].sort()

const CURRENT_USER_ID = "emp-001" // Ada Lovelace

/** Employee IDs of people who report to the current user. */
const directReportIds = employees
  .filter((e) => e.managerId === CURRENT_USER_ID)
  .map((e) => e.id)

/** Names of direct reports for the filter. */
const directReportNames = directReportIds
  .map((id) => employeeMap.get(id)?.fullName ?? "")
  .filter(Boolean)

export function useGoalTreeSource() {
  const source = useMemo(() => allRows, [])

  const dataSource = useDataCollectionSource<PersonGoalRow>(
    {
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: uniqueStatuses.map((s) => ({
              value: s,
              label: statusToLabel(s as GoalStatus),
            })),
          },
        },
        teamName: {
          type: "in",
          label: "Team",
          options: {
            options: uniqueTeams.map((t) => ({ value: t, label: t })),
          },
        },
        role: {
          type: "in",
          label: "Role",
          options: {
            options: uniqueRoles.map((r) => ({ value: r, label: r })),
          },
        },
        employeeName: {
          type: "in",
          label: "Person",
          options: {
            options: [...new Set(allRows.map((r) => r.employeeName))].sort().map((n) => ({
              value: n,
              label: n,
            })),
          },
        },
        incentivePlanName: {
          type: "in",
          label: "Incentive plan",
          options: {
            options: uniquePlans.map((p) => ({ value: p, label: p })),
          },
        },
      },
      currentFilters: {},
      currentGrouping: { field: "teamName", order: "asc" },
      grouping: {
        mandatory: false,
        collapsible: true,
        defaultOpenGroups: true,
        groupBy: {
          teamName: {
            name: "Team",
            label: (groupId) => String(groupId),
            itemCount: (groupId) =>
              source.filter((r) => r.teamName === groupId).length,
          },
          role: {
            name: "Role",
            label: (groupId) => String(groupId),
            itemCount: (groupId) =>
              source.filter((r) => r.role === groupId).length,
          },
          status: {
            name: "Status",
            label: (groupId) => statusToLabel(String(groupId) as GoalStatus),
            itemCount: (groupId) =>
              source.filter((r) => r.status === groupId).length,
          },
          managerName: {
            name: "Direct reports",
            label: (groupId) => String(groupId),
            itemCount: (groupId) =>
              source.filter((r) => r.managerName === groupId).length,
          },
          incentivePlanName: {
            name: "Incentive plan",
            label: (groupId) => String(groupId),
            itemCount: (groupId) =>
              source.filter((r) => r.incentivePlanName === groupId).length,
          },
        },
      },
      presets: [
        { label: "All Goals", filter: {} },
        { label: "Direct reports", filter: { employeeName: directReportNames } },
        { label: "On track", filter: { status: ["on-track"] } },
        { label: "At risk", filter: { status: ["at-risk"] } },
        { label: "In progress", filter: { status: ["in-progress"] } },
      ],
      sortings: {
        employeeName: { label: "Person" },
        goalTitle: { label: "Goal" },
        dueDate: { label: "Due date" },
      },
      search: { enabled: true, sync: true },
      selectable: (item: PersonGoalRow) => item.id,
      bulkActions: () => ({
        primary: [
          {
            label: "Create incentive plan",
            icon: Money,
            id: "create-incentive-plan",
          },
          {
            label: "Link to incentive plan",
            icon: Link,
            id: "link-incentive-plan",
          },
        ],
        secondary: [
          {
            label: "Delete selected",
            icon: Delete,
            id: "delete-selected",
            critical: true,
          },
        ],
      }),
      dataAdapter: {
        paginationType: "pages",
        perPage: 25,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const teamFilter = Array.isArray(filters?.teamName)
            ? (filters.teamName as string[])
            : []
          const roleFilter = Array.isArray(filters?.role)
            ? (filters.role as string[])
            : []
          const nameFilter = Array.isArray(filters?.employeeName)
            ? (filters.employeeName as string[])
            : []
          const planFilter = Array.isArray(filters?.incentivePlanName)
            ? (filters.incentivePlanName as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = source
            .filter((r) =>
              statusFilter.length === 0 ? true : statusFilter.includes(r.status)
            )
            .filter((r) =>
              teamFilter.length === 0 ? true : teamFilter.includes(r.teamName)
            )
            .filter((r) =>
              roleFilter.length === 0 ? true : roleFilter.includes(r.role)
            )
            .filter((r) =>
              nameFilter.length === 0 ? true : nameFilter.includes(r.employeeName)
            )
            .filter((r) =>
              planFilter.length === 0 ? true : planFilter.includes(r.incentivePlanName)
            )
            .filter((r) =>
              term === ""
                ? true
                : r.employeeName.toLowerCase().includes(term) ||
                  r.goalTitle.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (r, field) => {
            switch (field) {
              case "employeeName":
                return r.employeeName.toLowerCase()
              case "goalTitle":
                return r.goalTitle.toLowerCase()
              case "dueDate":
                return r.dueDate
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 25
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
      itemActions: (item: PersonGoalRow) => [
        { label: "Update", icon: Pencil, onClick: () => { alert(`Edit: ${item.goalTitle}`) } },
        { label: "Link to incentive plan", icon: Link, onClick: () => {} },
        { label: "Duplicate", icon: LayersFront, onClick: () => {} },
        { label: "Delete", icon: Delete, onClick: () => {}, critical: true },
        { label: "Set status", type: "separator" },
        { label: "On track", icon: CheckCircle, onClick: () => {} },
        { label: "In progress", icon: Circle, onClick: () => {} },
        { label: "At risk", icon: Flag, onClick: () => {} },
        { label: "Not started", icon: DottedCircle, onClick: () => {} },
        { label: "Overachieved", icon: CheckCircle, onClick: () => {} },
      ],
    },
    [source]
  )

  const addGoal = (_goal: PersonGoalRow) => {
    // Prototype — no persistence
  }

  return { ...dataSource, addGoal }
}
