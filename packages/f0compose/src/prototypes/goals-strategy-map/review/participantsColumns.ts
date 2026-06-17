import type { ParticipantRow } from "./reviewDetailData"

type StatusVariant = "positive" | "warning" | "neutral" | "info" | "critical"

function statusCell(label: string, status: StatusVariant) {
  return { type: "status" as const, value: { label, status } }
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

/**
 * Columns for the participants table inside a review detail (Insights tab):
 * Employee, Manager, Score, Alignment, Manager review, Self-review, Status,
 * Action plan — mirroring the production review detail screenshot.
 */
export const participantsColumns = [
  {
    id: "employee",
    label: "Employee",
    sorting: "employee",
    frozen: true,
    render: (item: ParticipantRow) => ({
      type: "person" as const,
      value: {
        firstName: item.firstName,
        lastName: item.lastName,
        src: item.avatarUrl,
      },
    }),
  },
  {
    id: "manager",
    label: "Manager",
    render: (item: ParticipantRow) => item.managerName,
  },
  {
    id: "score",
    label: "Score",
    sorting: "score",
    render: (item: ParticipantRow) => {
      if (item.score == null) return statusCell("No data", "neutral")
      const variant: StatusVariant =
        item.score >= 4 ? "positive" : item.score >= 3 ? "info" : "warning"
      return statusCell(`${item.score} / 5`, variant)
    },
  },
  {
    id: "alignment",
    label: "Alignment",
    render: (item: ParticipantRow) => {
      if (item.alignment == null) return "-"
      const variant: StatusVariant =
        item.alignment === "high"
          ? "positive"
          : item.alignment === "mid"
            ? "neutral"
            : "critical"
      return statusCell(capitalize(item.alignment), variant)
    },
  },
  {
    id: "managerReview",
    label: "Manager review",
    render: (item: ParticipantRow) =>
      item.managerReview === "done"
        ? "View"
        : statusCell("Pending", "warning"),
  },
  {
    id: "selfReview",
    label: "Self-review",
    render: (item: ParticipantRow) =>
      item.selfReview === "done" ? "View" : statusCell("Pending", "warning"),
  },
  {
    id: "status",
    label: "Status",
    sorting: "status",
    render: (item: ParticipantRow) =>
      item.status === "published"
        ? statusCell("Published", "positive")
        : statusCell("Pending", "neutral"),
  },
  {
    id: "actionPlan",
    label: "Action plan",
    render: (item: ParticipantRow) => {
      if (item.actionPlan === "done") return statusCell("Completed", "positive")
      if (item.actionPlan === "in-progress")
        return statusCell("In progress", "info")
      return statusCell("Not started", "neutral")
    },
  },
]
