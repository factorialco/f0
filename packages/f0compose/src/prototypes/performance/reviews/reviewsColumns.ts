import type { PerformanceCycle } from "@/fixtures/performance"

/**
 * Column definitions for the Reviews OneDataCollection table.
 * Matches the screenshot: Name, Status, Participation rate, Created on, Start date.
 */
export const reviewsColumns = [
  {
    id: "name",
    label: "Name",
    sorting: "name",
    frozen: true,
    render: (item: PerformanceCycle) => item.name,
  },
  {
    id: "status",
    label: "Status",
    render: (item: PerformanceCycle) => ({
      type: "status" as const,
      value: {
        label: item.status === "active" ? "Active" : item.status === "draft" ? "Draft" : "Finished",
        status:
          item.status === "active"
            ? "positive"
            : item.status === "finished"
              ? "info"
              : "neutral",
      },
    }),
  },
  {
    id: "participation",
    label: "Participation rate",
    render: (item: PerformanceCycle) => {
      if (item.completed == null || item.total == null) return "-"
      return `${item.completed}/${item.total}`
    },
  },
  {
    id: "createdOn",
    label: "Created on",
    sorting: "createdOn",
    render: (item: PerformanceCycle) => item.createdOn,
  },
  {
    id: "startDate",
    label: "Start date",
    sorting: "startDate",
    render: (item: PerformanceCycle) => item.startDate ?? "-",
  },
]
