import type { TrainingRequest } from "@/fixtures"

/**
 * Column definitions for the Training Requests table.
 */
export const requestsColumns = [
  {
    id: "employeeName",
    label: "Employee",
    sorting: "employeeName",
    render: (item: TrainingRequest) => ({
      type: "person" as const,
      value: {
        firstName: item.employeeName.split(" ")[0] ?? "",
        lastName: item.employeeName.split(" ").slice(1).join(" "),
        src: item.employeeAvatarUrl,
      },
    }),
  },
  {
    id: "trainingName",
    label: "Training",
    render: (item: TrainingRequest) => item.trainingName,
  },
  {
    id: "status",
    label: "Status",
    render: (item: TrainingRequest) => {
      const statusMap: Record<
        string,
        "warning" | "positive" | "critical" | "neutral"
      > = {
        pending: "warning",
        approved: "positive",
        rejected: "critical",
        cancelled: "neutral",
      }
      return {
        type: "status" as const,
        value: {
          label: item.status.charAt(0).toUpperCase() + item.status.slice(1),
          status: statusMap[item.status] ?? "neutral",
        },
      }
    },
  },
  {
    id: "estimatedCost",
    label: "Estimated cost",
    sorting: "estimatedCost",
    render: (item: TrainingRequest) =>
      item.estimatedCost > 0
        ? `${item.estimatedCost.toLocaleString()} ${item.currency}`
        : "Free",
  },
  {
    id: "requestedAt",
    label: "Requested on",
    sorting: "requestedAt",
    render: (item: TrainingRequest) => item.requestedAt,
  },
  {
    id: "reason",
    label: "Reason",
    render: (item: TrainingRequest) => item.reason,
  },
]
