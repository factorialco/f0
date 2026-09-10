import {
  Receipt,
  PersonPlus,
  FileSigned,
  Calendar,
  Clock,
} from "@factorialco/f0-react/icons/app"

import type { ActivityRecord } from "./model"

const taskIcons = {
  expenses: Receipt,
  onboarding: PersonPlus,
  documents: FileSigned,
  "time-off": Calendar,
  timesheet: Clock,
}

// Uses the InboxList presentation from Factorial's inbox_tasks module.
export const activityListOptions = {
  itemDefinition: (row: ActivityRecord) => ({
    title: row.title,
    description: [row.detail, row.owner],
    avatar: row.person
      ? {
          type: "person" as const,
          ...row.person,
          "aria-label": `${row.person.firstName} ${row.person.lastName}`,
        }
      : {
          type: "icon" as const,
          icon: taskIcons[row.kind ?? "onboarding"],
          "aria-label": row.kind ?? row.owner,
        },
  }),
  fields: [
    {
      label: "Status",
      render: (row: ActivityRecord) => ({
        type: "alertTag" as const,
        value: {
          label:
            row.status === "needs-you"
              ? "Review needed"
              : row.status === "in-progress"
                ? "In progress"
                : "Completed",
          level:
            row.status === "needs-you"
              ? ("warning" as const)
              : row.status === "in-progress"
                ? ("info" as const)
                : ("positive" as const),
        },
      }),
    },
    {
      label: "When",
      render: (row: ActivityRecord) => ({
        type: "tag" as const,
        value: { label: row.when },
      }),
    },
  ],
}
