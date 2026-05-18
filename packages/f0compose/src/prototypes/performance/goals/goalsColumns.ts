import type { Goal } from "@/fixtures/types"
import { employees } from "@/fixtures/employees"

const employeeMap = new Map(employees.map((e) => [e.id, e]))

export const goalsColumns = [
  {
    id: "title",
    label: "Title",
    sorting: "title",
    frozen: true,
    render: (item: Goal) => item.title,
  },
  {
    id: "employee",
    label: "Employee",
    render: (item: Goal) => employeeMap.get(item.employeeId)?.fullName ?? "-",
  },
  {
    id: "status",
    label: "Status",
    render: (item: Goal) => ({
      type: "status" as const,
      value: {
        label:
          item.status === "on-track"
            ? "On track"
            : item.status === "at-risk"
              ? "At risk"
              : item.status === "completed"
                ? "Completed"
                : "Abandoned",
        status:
          item.status === "on-track"
            ? "positive"
            : item.status === "at-risk"
              ? "warning"
              : item.status === "completed"
                ? "info"
                : "neutral",
      },
    }),
  },
  {
    id: "progress",
    label: "Progress",
    sorting: "progress",
    render: (item: Goal) => `${item.progress}%`,
  },
  {
    id: "dueDate",
    label: "Due date",
    sorting: "dueDate",
    render: (item: Goal) => item.dueDate,
  },
]
