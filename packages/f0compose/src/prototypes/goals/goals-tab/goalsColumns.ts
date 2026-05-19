import { renderAssigneeCell } from "../shared/assigneeCell"
import type { GoalStatus } from "../shared/types"
import type { GoalRow } from "./useGoalsSource"

function statusLabel(status: GoalStatus): string {
  switch (status) {
    case "on-track":
      return "On track"
    case "off-track":
      return "Off track"
    case "at-risk":
      return "At Risk"
    case "partial":
      return "Partial"
    case "achieved":
      return "Achieved"
    case "missed":
      return "Missed"
    case "cancelled":
      return "Canceled"
  }
}

function statusVariant(
  status: GoalStatus
): "neutral" | "info" | "positive" | "critical" {
  switch (status) {
    case "on-track":
      return "info"
    case "off-track":
      return "critical"
    case "at-risk":
      return "critical"
    case "partial":
      return "neutral"
    case "achieved":
      return "positive"
    case "missed":
      return "critical"
    case "cancelled":
      return "neutral"
  }
}

const DOT_COLORS = [
  "viridian",
  "malibu",
  "purple",
  "lilac",
  "barbie",
  "indigo",
] as const

export const goalsColumns = [
  {
    id: "title",
    label: "Goal",
    sorting: "title",
    render: (item: GoalRow) => {
      if (item._rowType === "employee") {
        return {
          type: "person" as const,
          value: {
            firstName: item.firstName,
            lastName: item.lastName,
            src: item.avatarUrl,
          },
        }
      }
      if (item._rowType === "team") {
        return {
          type: "team" as const,
          value: { name: item.name },
        }
      }
      return item.title
    },
  },
  {
    id: "assignee",
    label: "Assignee",
    render: (item: GoalRow) => {
      if (item._rowType !== "goal") return ""
      return renderAssigneeCell(item.assignee)
    },
  },
  {
    id: "status",
    label: "Status",
    render: (item: GoalRow) => {
      if (item._rowType !== "goal") return ""
      return {
        type: "status" as const,
        value: {
          label: statusLabel(item.status),
          status: statusVariant(item.status),
        },
      }
    },
  },
  {
    id: "target",
    label: "Target",
    render: (item: GoalRow) => {
      if (item._rowType !== "goal") return ""
      const parts = item.measure.split("→")
      return parts.length > 1 ? parts[parts.length - 1].trim() : item.measure
    },
  },
  {
    id: "progress",
    label: "Progress",
    sorting: "progress",
    render: (item: GoalRow) => {
      const progress =
        item._rowType === "goal" ? item.progress : item.progress
      return {
        type: "progressBar" as const,
        value: {
          value: progress,
          max: Math.max(100, progress),
          label: `${progress}%`,
          color: progress > 100 ? "categorical-4" : "categorical-1",
        },
      }
    },
  },
  {
    id: "dueDate",
    label: "Due date",
    sorting: "dueDate",
    render: (item: GoalRow) => {
      if (item._rowType !== "goal") return ""
      return item.dueDate
    },
  },
  {
    id: "incentivePlans",
    label: "Incentive plans",
    render: (item: GoalRow) => {
      if (item._rowType !== "goal") return ""
      const plans = item.incentivePlans
      if (!plans || plans.length === 0) return "-"
      return {
        type: "tagList" as const,
        value: {
          type: "dot" as const,
          tags: plans.map((p, i) => ({
            text: p,
            color: DOT_COLORS[i % DOT_COLORS.length],
          })),
          max: 2,
        },
      }
    },
  },
  {
    id: "actionPlans",
    label: "Action plan",
    render: (item: GoalRow) => {
      if (item._rowType !== "goal") return ""
      const plans = item.actionPlans
      if (!plans || plans.length === 0) return "-"
      return {
        type: "tagList" as const,
        value: {
          type: "dot" as const,
          tags: plans.map((p, i) => ({
            text: p,
            color: DOT_COLORS[(i + 2) % DOT_COLORS.length],
          })),
          max: 2,
        },
      }
    },
  },
]
