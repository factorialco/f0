import {
  EyeVisible,
} from "@factorialco/f0-react/icons/app"

import {
  findCategoryName,
  findCompetencyName,
  type Training,
} from "@/fixtures"

import {
  trainingStatusLabel,
  trainingStatusVariant,
} from "../shared/status"

// EyeVisible is used as a visual indicator — rendered as a string label since
// ODC render must return string | number | { type, value }, not JSX.
void EyeVisible // imported for reference; actual icon rendering uses dotTag

export const trainingsListColumns = [
  {
    id: "name",
    label: "Name",
    sorting: "name",
    render: (t: Training) => t.name,
  },
  {
    id: "code",
    label: "Code",
    render: (t: Training) => t.code,
  },
  {
    id: "participants",
    label: "Participants",
    sorting: "participants",
    render: (t: Training) => t.participantCount,
  },
  {
    id: "expiredParticipants",
    label: "Expired participants",
    render: (t: Training) => ({
      type: "status" as const,
      value: {
        status: t.expiredParticipantCount > 0 ? ("warning" as const) : ("positive" as const),
        label: String(t.expiredParticipantCount),
      },
    }),
  },
  {
    id: "catalog",
    label: "Catalog",
    render: (t: Training) =>
      t.catalog
        ? { type: "tag" as const, value: { label: "Visible" } }
        : "—",
  },
  {
    id: "status",
    label: "Status",
    render: (t: Training) => ({
      type: "status" as const,
      value: {
        status: trainingStatusVariant[t.status],
        label: trainingStatusLabel[t.status],
      },
    }),
  },
  {
    id: "type",
    label: "Type",
    render: (t: Training) => ({
      type: "tag" as const,
      value: { label: t.isMandatory ? "Mandatory" : "Non-mandatory" },
    }),
  },
  {
    id: "tags",
    label: "Tags",
    render: (t: Training) => {
      if (t.categoryIds.length === 0) return "—"
      return {
        type: "tagList" as const,
        value: {
          type: "dot" as const,
          tags: t.categoryIds.slice(0, 3).map((id) => ({
            text: findCategoryName(id),
            color: "indigo" as const,
          })),
          max: 3,
        },
      }
    },
  },
  {
    id: "competencies",
    label: "Competencies",
    render: (t: Training) => {
      if (t.competencyIds.length === 0) return "—"
      return {
        type: "tagList" as const,
        value: {
          type: "dot" as const,
          tags: t.competencyIds.slice(0, 3).map((id) => ({
            text: findCompetencyName(id),
            color: "viridian" as const,
          })),
          max: 3,
        },
      }
    },
  },
]
