import type { IncentivePlan } from "../compensationFixtures"
import { employees } from "@/fixtures"
import { strategyGoals } from "../../shared/strategyGoals"

const employeeMap = new Map(employees.map((e) => [e.id, e]))

/** Map goal IDs to incentive plan IDs — same mapping as in useGoalTreeSource. */
const goalToIncentivePlan: Record<string, string> = {
  "sg-014": "ip-001",
  "sg-016": "ip-001",
  "sg-017": "ip-001",
  "sg-001": "ip-002",
  "sg-002": "ip-002",
  "sg-003": "ip-002",
  "sg-000": "ip-003",
  "sg-004": "ip-002",
}

/** Count linked goals per plan. */
const linkedGoalsByPlan = new Map<string, string[]>()
for (const [goalId, planId] of Object.entries(goalToIncentivePlan)) {
  const goal = strategyGoals.find((g) => g.id === goalId)
  if (!goal) continue
  const existing = linkedGoalsByPlan.get(planId) ?? []
  existing.push(goal.title)
  linkedGoalsByPlan.set(planId, existing)
}

function formatEur(n: number): string {
  return new Intl.NumberFormat("en-EU", { notation: "compact" }).format(n)
}

function statusToVariant(
  status: IncentivePlan["status"]
): "positive" | "warning" | "info" | "neutral" {
  switch (status) {
    case "active":
      return "positive"
    case "draft":
      return "neutral"
    case "pending-approval":
      return "warning"
    case "archived":
      return "info"
  }
}

function statusToLabel(status: IncentivePlan["status"]): string {
  switch (status) {
    case "active":
      return "Active"
    case "draft":
      return "Draft"
    case "pending-approval":
      return "Pending approval"
    case "archived":
      return "Archived"
  }
}

function typeToLabel(type: IncentivePlan["type"]): string {
  switch (type) {
    case "commission":
      return "Commission"
    case "bonus":
      return "Bonus"
    case "mbo":
      return "MBO"
    case "spiff":
      return "SPIFF"
  }
}

export const incentivePlansColumns = [
  {
    id: "name",
    label: "Plan name",
    sorting: "name",
    frozen: true,
    render: (item: IncentivePlan) => item.name,
  },
  {
    id: "type",
    label: "Type",
    render: (item: IncentivePlan) => ({
      type: "tag" as const,
      value: { label: typeToLabel(item.type) },
    }),
  },
  {
    id: "status",
    label: "Status",
    render: (item: IncentivePlan) => ({
      type: "status" as const,
      value: {
        label: statusToLabel(item.status),
        status: statusToVariant(item.status),
      },
    }),
  },
  {
    id: "frequency",
    label: "Frequency",
    render: (item: IncentivePlan) =>
      item.frequency.charAt(0).toUpperCase() + item.frequency.slice(1),
  },
  {
    id: "budget",
    label: "Budget",
    sorting: "budget",
    align: "right" as const,
    render: (item: IncentivePlan) => `€${formatEur(item.budget)}`,
  },
  {
    id: "spent",
    label: "Spent",
    align: "right" as const,
    render: (item: IncentivePlan) => ({
      type: "progressBar" as const,
      value: {
        value: item.spent,
        max: item.budget,
        label: `€${formatEur(item.spent)}`,
      },
    }),
  },
  {
    id: "participants",
    label: "Participants",
    sorting: "participants",
    align: "right" as const,
    render: (item: IncentivePlan) => item.participantCount,
  },
  {
    id: "linkedGoals",
    label: "Linked goals",
    render: (item: IncentivePlan) => {
      const goals = linkedGoalsByPlan.get(item.id) ?? []
      if (goals.length === 0) return "-"
      return `${goals.length} goal${goals.length > 1 ? "s" : ""}`
    },
  },
  {
    id: "owner",
    label: "Owner",
    render: (item: IncentivePlan) => {
      const owner = employeeMap.get(item.ownerId)
      if (!owner) return "-"
      return {
        type: "person" as const,
        value: {
          firstName: owner.fullName.split(" ")[0] ?? "",
          lastName: owner.fullName.split(" ")[1] ?? "",
          src: owner.avatarUrl,
        },
      }
    },
  },
  {
    id: "period",
    label: "Period",
    render: (item: IncentivePlan) => `${item.startDate} → ${item.endDate}`,
  },
]
