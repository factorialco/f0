import type { PersonGoalRow } from "./useGoalTreeSource"

function formatK(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(0)}k` : String(n)
}

export const goalColumns = [
  {
    id: "employee",
    label: "Person",
    frozen: true,
    sorting: "employeeName",
    render: (item: PersonGoalRow) => ({
      type: "person" as const,
      value: {
        firstName: item.employeeName.split(" ")[0] ?? "",
        lastName: item.employeeName.split(" ")[1] ?? "",
        src: item.employeeAvatar,
      },
    }),
  },
  {
    id: "role",
    label: "Role",
    render: (item: PersonGoalRow) => item.role,
  },
  {
    id: "goalTitle",
    label: "Goal",
    sorting: "goalTitle",
    render: (item: PersonGoalRow) => item.goalTitle,
  },
  {
    id: "level",
    label: "Level",
    render: (item: PersonGoalRow) => ({
      type: "tag" as const,
      value: { label: item.levelLabel },
    }),
  },
  {
    id: "status",
    label: "Status",
    render: (item: PersonGoalRow) => ({
      type: "status" as const,
      value: {
        label: item.statusLabel,
        status: item.statusVariant,
      },
    }),
  },
  {
    id: "progress",
    label: "Progress",
    render: (item: PersonGoalRow) => ({
      type: "progressBar" as const,
      value: {
        value: Math.max(0, item.measureCurrent - item.measureStart),
        max: Math.max(1, item.measureTarget - item.measureStart),
        label: `${item.progress}%`,
        color: "feedback-positive",
      },
    }),
  },
  {
    id: "measure",
    label: "Measure",
    render: (item: PersonGoalRow) =>
      `${formatK(item.measureCurrent)} / ${formatK(item.measureTarget)}`,
  },
  {
    id: "dueDate",
    label: "Due date",
    sorting: "dueDate",
    render: (item: PersonGoalRow) => item.dueDate,
  },
  {
    id: "incentivePlan",
    label: "Incentive plan",
    render: (item: PersonGoalRow) =>
      item.incentivePlanName === "None"
        ? "-"
        : {
            type: "tag" as const,
            value: { label: item.incentivePlanName },
          },
  },
]
