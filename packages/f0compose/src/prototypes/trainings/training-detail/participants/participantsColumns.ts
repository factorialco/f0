import {
  employees,
  membershipsByTraining,
  type TrainingMembership,
} from "@/fixtures"

import {
  membershipStatusLabel,
  membershipStatusVariant,
} from "../../shared/status"

export function getParticipantsColumns(trainingId: string) {
  const memberships = membershipsByTraining(trainingId)

  return {
    memberships,
    columns: [
      {
        id: "employee",
        label: "Employee",
        sorting: "employee",
        render: (m: TrainingMembership) => {
          const emp = employees.find((e) => e.id === m.employeeId)
          if (!emp) return m.employeeId
          return {
            type: "person" as const,
            value: {
              firstName: emp.fullName.split(" ")[0],
              lastName: emp.fullName.split(" ").slice(1).join(" "),
              src: emp.avatarUrl,
            },
          }
        },
      },
      {
        id: "enrolledAt",
        label: "Enrolled",
        sorting: "enrolledAt",
        render: (m: TrainingMembership) => ({
          type: "date" as const,
          value: m.enrolledAt,
        }),
      },
      {
        id: "progress",
        label: "Progress",
        render: (m: TrainingMembership) => ({
          type: "progressBar" as const,
          value: {
            value: m.progressPercent,
            max: 100,
            label: `${m.progressPercent}%`,
          },
        }),
      },
      {
        id: "sessions",
        label: "Sessions",
        render: (m: TrainingMembership) =>
          `${m.sessionsCompleted}/${m.sessionsTotal}`,
      },
      {
        id: "status",
        label: "Status",
        sorting: "status",
        render: (m: TrainingMembership) => ({
          type: "status" as const,
          value: {
            status: membershipStatusVariant[m.status],
            label: membershipStatusLabel[m.status],
          },
        }),
      },
      {
        id: "completionDate",
        label: "Completed on",
        render: (m: TrainingMembership) =>
          m.completionDate
            ? { type: "date" as const, value: m.completionDate }
            : "—",
      },
    ],
  }
}
