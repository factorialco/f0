import type { Training } from "@/fixtures"

/**
 * Column definitions for the Trainings OneDataCollection table.
 */
export const trainingsColumns = [
  {
    id: "name",
    label: "Name",
    sorting: "name",
    frozen: true,
    render: (item: Training) => item.name,
  },
  {
    id: "code",
    label: "Code",
    render: (item: Training) => item.code,
  },
  {
    id: "participants",
    label: "Participants",
    sorting: "participants",
    render: (item: Training) => String(item.participants),
  },
  {
    id: "expiredParticipants",
    label: "Expired participants",
    render: (item: Training) => ({
      type: "status" as const,
      value: {
        label: String(item.expiredParticipants),
        status: item.expiredParticipants > 0 ? "warning" : "positive",
      },
    }),
  },
  {
    id: "status",
    label: "Status",
    render: (item: Training) => ({
      type: "status" as const,
      value: {
        label: item.status === "active" ? "Active" : "Draft",
        status: item.status === "active" ? "positive" : "neutral",
      },
    }),
  },
  {
    id: "type",
    label: "Type",
    render: (item: Training) => ({
      type: "tag" as const,
      value: {
        label: item.type === "mandatory" ? "Mandatory" : "Non-mandatory",
      },
    }),
  },
  {
    id: "categories",
    label: "Categories",
    render: (item: Training) => ({
      type: "tagList" as const,
      value: {
        type: "dot" as const,
        tags: item.categories.map((c) => ({ text: c })),
        max: 3,
      },
    }),
  },
  {
    id: "competencies",
    label: "Competencies",
    render: (item: Training) =>
      item.competencies.length > 0
        ? {
            type: "tagList" as const,
            value: {
              type: "dot" as const,
              tags: item.competencies.map((c) => ({ text: c })),
              max: 3,
            },
          }
        : "—",
  },
]
