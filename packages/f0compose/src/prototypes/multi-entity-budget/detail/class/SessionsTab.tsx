import { OneDataCollection, useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import {
  DottedCircle,
  Laptop,
  Office,
  Pencil,
  LayersFront,
  Delete,
  Add,
} from "@factorialco/f0-react/icons/app"

import type { Training, TrainingClass, TrainingSession } from "@/fixtures"
import { sessionsForClass } from "@/fixtures"
import { applySort } from "@/lib/applySort"

import type { ClassAction } from "../ClassModals"

type Modality = "onsite" | "virtual" | "hybrid"

const MODE_TO_MODALITY: Record<TrainingSession["mode"], Modality> = {
  in_person: "onsite",
  online: "virtual",
  hybrid: "hybrid",
}

const MODALITY_LABEL: Record<Modality, string> = {
  onsite: "Onsite",
  virtual: "Virtual",
  hybrid: "Hybrid",
}

const MODALITY_ICON: Record<Modality, typeof Office> = {
  onsite: Office,
  virtual: Laptop,
  hybrid: DottedCircle,
}

// Mirrors upstream `formatSessionDate`: "27th Mar, 10:00 - 11:00 (1h 0m)"
function formatSessionDate(s: TrainingSession): string {
  const start = new Date(s.startsAt)
  const end = new Date(s.endsAt)
  const day = start.getDate()
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
          ? "rd"
          : "th"
  const month = start.toLocaleString("en-GB", { month: "short" })
  const startTime = start.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
  const endTime = end.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
  const hours = Math.floor(s.durationMinutes / 60)
  const minutes = s.durationMinutes % 60
  return `${day}${suffix} ${month}, ${startTime} - ${endTime} (${hours}h ${minutes}m)`
}

type Props = {
  training: Training
  klass: TrainingClass
  onAction: (action: ClassAction, session?: TrainingSession | null) => void
}

export function SessionsTab({ training, klass, onAction }: Props) {
  const source = useDataCollectionSource<TrainingSession>(
    {
      search: { enabled: true, sync: false },
      sortings: {
        name: { label: "Session" },
        startsAt: { label: "Date" },
      },
      filters: {
        modality: {
          type: "in",
          label: "Modality",
          options: {
            options: [
              { value: "onsite", label: "Onsite" },
              { value: "virtual", label: "Virtual" },
              { value: "hybrid", label: "Hybrid" },
            ],
          },
        },
      },
      dataAdapter: {
        fetchData: ({ filters, search, sortings }) => {
          const modalityFilter = Array.isArray(filters?.modality)
            ? (filters.modality as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const all = sessionsForClass(klass.id)
          const filtered = all
            .filter((s) => {
              if (modalityFilter.length === 0) return true
              return modalityFilter.includes(MODE_TO_MODALITY[s.mode])
            })
            .filter((s) =>
              term === "" ? true : s.title.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (s, field) => {
            if (field === "name") return s.title.toLowerCase()
            if (field === "startsAt") return s.startsAt
            return null
          })

          return { records: sorted, totalCount: sorted.length }
        },
      },
      itemUrl: (item: TrainingSession) =>
        `/p/trainings?training=${training.id}&class=${klass.id}&session=${item.id}`,
      primaryActions: () => ({
        label: "New session",
        icon: Add,
        onClick: () => onAction("new-session"),
      }),
      itemActions: (item: TrainingSession) => [
        {
          label: "Edit",
          icon: Pencil,
          onClick: () => onAction("edit-session", item),
        },
        {
          label: "Duplicate",
          icon: LayersFront,
          onClick: () => onAction("new-session", item),
        },
        {
          label: "Delete",
          icon: Delete,
          critical: true,
          onClick: () => onAction("cancel-session", item),
        },
      ],
    },
    [training.id, klass.id, onAction]
  )

  return (
    <OneDataCollection
      id={`trainings/sessions/${klass.id}/v1`}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            frozenColumns: 1,
            columns: [
              {
                label: "Session",
                sorting: "name",
                render: (item: TrainingSession) => ({
                  type: "text",
                  value: item.title,
                }),
              },
              {
                label: "Date",
                sorting: "startsAt",
                render: (item: TrainingSession) => ({
                  type: "text",
                  value: formatSessionDate(item),
                }),
              },
              {
                label: "Type",
                render: () => ({
                  type: "dotTag",
                  value: {
                    label: "Scheduled",
                    color: "barbie",
                  },
                }),
              },
              {
                label: "Modality",
                render: (item: TrainingSession) => {
                  const m = MODE_TO_MODALITY[item.mode]
                  return {
                    type: "tag",
                    value: {
                      label: MODALITY_LABEL[m],
                      icon: MODALITY_ICON[m],
                    },
                  }
                },
              },
            ],
          },
        },
      ]}
    />
  )
}
