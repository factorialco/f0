import type { CompensationReview } from "../compensationFixtures"
import { employees } from "@/fixtures"

const employeeMap = new Map(employees.map((e) => [e.id, e]))

function formatEur(n: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n)
}

function statusToVariant(
  status: CompensationReview["status"]
): "positive" | "warning" | "info" | "neutral" {
  switch (status) {
    case "approved":
      return "positive"
    case "in-progress":
      return "info"
    case "completed":
      return "positive"
    case "draft":
      return "neutral"
  }
}

function statusToLabel(status: CompensationReview["status"]): string {
  switch (status) {
    case "approved":
      return "Approved"
    case "in-progress":
      return "In progress"
    case "completed":
      return "Completed"
    case "draft":
      return "Draft"
  }
}

export const compensationReviewsColumns = [
  {
    id: "employee",
    label: "Employee",
    frozen: true,
    render: (item: CompensationReview) => {
      const emp = employeeMap.get(item.employeeId)
      if (!emp) return "-"
      return {
        type: "person" as const,
        value: {
          firstName: emp.fullName.split(" ")[0] ?? "",
          lastName: emp.fullName.split(" ")[1] ?? "",
          src: emp.avatarUrl,
        },
      }
    },
  },
  {
    id: "cycle",
    label: "Review cycle",
    render: (item: CompensationReview) => item.reviewCycle,
  },
  {
    id: "current",
    label: "Current salary",
    sorting: "current",
    align: "right" as const,
    render: (item: CompensationReview) => formatEur(item.currentSalary),
  },
  {
    id: "proposed",
    label: "Proposed salary",
    sorting: "proposed",
    align: "right" as const,
    render: (item: CompensationReview) => formatEur(item.proposedSalary),
  },
  {
    id: "increase",
    label: "Increase",
    align: "right" as const,
    render: (item: CompensationReview) =>
      item.increase > 0
        ? `+${formatEur(item.increase)} (${item.increasePercent.toFixed(1)}%)`
        : "—",
  },
  {
    id: "status",
    label: "Status",
    render: (item: CompensationReview) => ({
      type: "status" as const,
      value: {
        label: statusToLabel(item.status),
        status: statusToVariant(item.status),
      },
    }),
  },
  {
    id: "effectiveDate",
    label: "Effective date",
    sorting: "effectiveDate",
    render: (item: CompensationReview) => item.effectiveDate,
  },
  {
    id: "reason",
    label: "Reason",
    render: (item: CompensationReview) => item.reason,
  },
  {
    id: "manager",
    label: "Manager",
    render: (item: CompensationReview) => {
      const mgr = employeeMap.get(item.managerId)
      if (!mgr) return "-"
      return {
        type: "person" as const,
        value: {
          firstName: mgr.fullName.split(" ")[0] ?? "",
          lastName: mgr.fullName.split(" ")[1] ?? "",
          src: mgr.avatarUrl,
        },
      }
    },
  },
]
