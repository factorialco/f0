import { findEmployee, employees } from "@/fixtures"

import type { GoalRecord, GoalStatus } from "../shared/types"

function statusLabel(status: GoalStatus): string {
  switch (status) {
    case "not-started":
      return "Not started"
    case "on-track":
      return "On track"
    case "achieved":
      return "Achieved"
    case "cancelled":
      return "Cancelled"
  }
}

function statusVariant(
  status: GoalStatus
): "neutral" | "info" | "positive" | "critical" {
  switch (status) {
    case "not-started":
      return "neutral"
    case "on-track":
      return "info"
    case "achieved":
      return "positive"
    case "cancelled":
      return "critical"
  }
}

export const goalsColumns = [
  {
    id: "title",
    label: "Goal",
    sorting: "title",
    render: (item: GoalRecord) => item.title,
  },
  {
    id: "assignee",
    label: "Assignee",
    render: (item: GoalRecord) => {
      const emp = findEmployee(item.assigneeId) ?? employees[0]
      return {
        type: "avatarList" as const,
        value: {
          type: "person" as const,
          avatarList: [
            {
              firstName: emp.preferredName ?? emp.fullName.split(" ")[0],
              lastName: emp.fullName.split(" ").slice(-1).join(" "),
              src: emp.avatarUrl,
            },
          ],
          max: 1,
        },
      }
    },
  },
  {
    id: "status",
    label: "Status",
    render: (item: GoalRecord) => ({
      type: "status" as const,
      value: {
        label: statusLabel(item.status),
        status: statusVariant(item.status),
      },
    }),
  },
  {
    id: "measure",
    label: "Measure",
    render: (item: GoalRecord) => item.measure,
  },
  {
    id: "progress",
    label: "Progress",
    sorting: "progress",
    render: (item: GoalRecord) => `${item.progress}%`,
  },
  {
    id: "dueDate",
    label: "Due date",
    sorting: "dueDate",
    render: (item: GoalRecord) => item.dueDate,
  },
]
