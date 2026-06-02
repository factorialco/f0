import { employees, type TrainingRequest } from "@/fixtures"

import {
  requestStatusLabel,
  requestStatusVariant,
} from "../shared/status"

export const requestsColumns = [
  {
    id: "trainingName",
    label: "Training",
    sorting: "trainingName",
    render: (r: TrainingRequest) => r.trainingName,
  },
  {
    id: "requestedAt",
    label: "Request date",
    sorting: "requestedAt",
    render: (r: TrainingRequest) => ({
      type: "date" as const,
      value: r.requestedAt,
    }),
  },
  {
    id: "requestedBy",
    label: "Requested by",
    render: (r: TrainingRequest) => {
      const emp = employees.find((e) => e.id === r.authorId)
      if (!emp) return r.authorId
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
    id: "participants",
    label: "Participants",
    render: (r: TrainingRequest) => {
      const avatars = r.participantIds
        .map((id) => employees.find((e) => e.id === id))
        .filter(Boolean)
        .map((e) => ({
          firstName: e!.fullName.split(" ")[0],
          lastName: e!.fullName.split(" ").slice(1).join(" "),
          src: e!.avatarUrl,
        }))
      return {
        type: "avatarList" as const,
        value: { type: "person" as const, avatarList: avatars, max: 3 },
      }
    },
  },
  {
    id: "status",
    label: "Status",
    sorting: "status",
    render: (r: TrainingRequest) => ({
      type: "status" as const,
      value: {
        status: requestStatusVariant[r.status],
        label: requestStatusLabel[r.status],
      },
    }),
  },
]
