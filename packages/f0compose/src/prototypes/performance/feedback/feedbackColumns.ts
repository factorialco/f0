import type { Feedback } from "@/fixtures/performance"
import { employees } from "@/fixtures/employees"

const employeeMap = new Map(employees.map((e) => [e.id, e]))

export const feedbackColumns = [
  {
    id: "from",
    label: "From",
    frozen: true,
    render: (item: Feedback) =>
      employeeMap.get(item.fromEmployeeId)?.fullName ?? "-",
  },
  {
    id: "to",
    label: "To",
    render: (item: Feedback) =>
      employeeMap.get(item.toEmployeeId)?.fullName ?? "-",
  },
  {
    id: "type",
    label: "Type",
    render: (item: Feedback) => ({
      type: "status" as const,
      value: {
        label:
          item.type === "praise"
            ? "Praise"
            : item.type === "constructive"
              ? "Constructive"
              : "Request",
        status:
          item.type === "praise"
            ? "positive"
            : item.type === "constructive"
              ? "warning"
              : "info",
      },
    }),
  },
  {
    id: "visibility",
    label: "Visibility",
    render: (item: Feedback) => ({
      type: "status" as const,
      value: {
        label:
          item.visibility === "public"
            ? "Public"
            : item.visibility === "private"
              ? "Private"
              : "Manager only",
        status: item.visibility === "public" ? "positive" : "neutral",
      },
    }),
  },
  {
    id: "content",
    label: "Content",
    render: (item: Feedback) =>
      item.content.length > 80
        ? item.content.slice(0, 80) + "…"
        : item.content,
  },
  {
    id: "createdAt",
    label: "Date",
    sorting: "createdAt",
    render: (item: Feedback) => item.createdAt,
  },
]
