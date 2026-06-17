import { F0Dialog } from "@factorialco/f0-react"
import {
  OneDataCollection,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import { Add, Delete, LayersFront, Pencil } from "@factorialco/f0-react/icons/app"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

import type { Training, TrainingClass } from "@/fixtures"
import { applySort } from "@/lib/applySort"

import { NewClassWizard } from "../trainings/detail/NewClassWizard"

type Props = { training: Training }

type ConfirmKind = "duplicate" | "delete"

export function EditableClassesTab({ training }: Props) {
  const [showNewClass, setShowNewClass] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()
  const [confirm, setConfirm] = useState<{
    kind: ConfirmKind
    klass: TrainingClass
  } | null>(null)

  const openClass = (klass: TrainingClass) => {
    const next = new URLSearchParams(searchParams)
    next.set("training", training.id)
    next.set("dtab", "groups")
    next.set("class", klass.id)
    setSearchParams(next)
  }

  const startDateOptions = Array.from(
    new Set(training.classes.map((klass) => klass.startDate).filter(Boolean))
  ).map((date) => ({ label: String(date), value: String(date) }))
  const endDateOptions = Array.from(
    new Set(training.classes.map((klass) => klass.endDate).filter(Boolean))
  ).map((date) => ({ label: String(date), value: String(date) }))

  const source = useDataCollectionSource<TrainingClass>(
    {
      search: { enabled: true, sync: true },
      sortings: {
        startDate: { label: "Start date" },
        endDate: { label: "End date" },
      },
      defaultSortings: { field: "startDate", order: "asc" },
      filters: {
        startDate: {
          type: "in",
          label: "Start date",
          options: { options: startDateOptions },
        },
        endDate: {
          type: "in",
          label: "End date",
          options: { options: endDateOptions },
        },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, sortings, filters, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const wantedStart = Array.isArray(filters?.startDate)
            ? (filters.startDate as string[])
            : []
          const wantedEnd = Array.isArray(filters?.endDate)
            ? (filters.endDate as string[])
            : []

          const filtered = training.classes.filter((klass) => {
            if (term !== "" && !klass.name.toLowerCase().includes(term)) return false
            if (wantedStart.length > 0 && !wantedStart.includes(klass.startDate ?? "")) {
              return false
            }
            if (wantedEnd.length > 0 && !wantedEnd.includes(klass.endDate ?? "")) {
              return false
            }
            return true
          })

          const sorted = applySort(filtered, sortings, (klass, field) => {
            if (field === "startDate") return klass.startDate ?? ""
            if (field === "endDate") return klass.endDate ?? ""
            return null
          })

          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage

          return {
            type: "pages" as const,
            records: sorted.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "New group",
        icon: Add,
        onClick: () => setShowNewClass(true),
      }),
      itemOnClick: (klass) => () => openClass(klass),
      itemActions: (klass) => [
        { label: "Edit", icon: Pencil, onClick: () => openClass(klass) },
        {
          label: "Duplicate group",
          icon: LayersFront,
          onClick: () => setConfirm({ kind: "duplicate", klass }),
        },
        {
          label: "Delete group",
          icon: Delete,
          onClick: () => setConfirm({ kind: "delete", klass }),
          critical: true,
        },
      ],
    },
    [training.id, refreshKey]
  )

  return (
    <>
      <OneDataCollection
        id={`training-access/groups-${training.id}/v1`}
        source={source}
        emptyStates={{
          "no-data": {
            emoji: "👥",
            title: "No groups yet",
            description:
              "Groups will appear here once this training has assigned employees, sessions or costs.",
            actions: [
              {
                label: "New group",
                icon: Add,
                onClick: () => setShowNewClass(true),
                variant: "outline",
              },
            ],
          },
        }}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Group",
                  render: (klass) => ({ type: "text", value: klass.name }),
                },
                {
                  label: "Start date",
                  sorting: "startDate",
                  render: (klass) => ({ type: "text", value: klass.startDate ?? "-" }),
                },
                {
                  label: "End date",
                  sorting: "endDate",
                  render: (klass) => ({ type: "text", value: klass.endDate ?? "-" }),
                },
                {
                  label: "Sessions",
                  render: (klass) => ({ type: "text", value: String(klass.sessionCount) }),
                },
                {
                  label: "Participants",
                  render: (klass) => ({
                    type: "avatarList",
                    value: {
                      avatarList: klass.participants.map((participant) => ({
                        firstName: participant.firstName,
                        lastName: participant.lastName,
                        type: "person" as const,
                        src: participant.src,
                      })),
                      max: 5,
                    },
                  }),
                },
                {
                  label: "Participation rate",
                  render: (klass) => {
                    const completed = klass.completedAttendancesCount
                    const total = klass.totalAttendancesCount
                    const percentage =
                      total > 0 ? Number(((completed / total) * 100).toFixed(1)) : 0
                    return {
                      type: "percentage",
                      value: { label: `${percentage}%`, percentage },
                    }
                  },
                },
              ],
            },
          },
        ]}
      />

      <NewClassWizard
        trainingId={training.id}
        isOpen={showNewClass}
        onClose={() => setShowNewClass(false)}
        onCreated={(klass) => {
          setShowNewClass(false)
          setRefreshKey((current) => current + 1)
          openClass(klass)
        }}
      />

      {confirm && (
        <F0Dialog
          isOpen
          onClose={() => setConfirm(null)}
          position="center"
          width="md"
          title={
            confirm.kind === "duplicate"
              ? `Duplicate "${confirm.klass.name}"?`
              : `Delete "${confirm.klass.name}"?`
          }
          description={
            confirm.kind === "duplicate"
              ? "A copy of this group will be created with the same sessions and participants."
              : "This will permanently delete the group along with its sessions, participants and attendance records."
          }
          primaryAction={{
            label: confirm.kind === "duplicate" ? "Duplicate" : "Delete",
            variant: confirm.kind === "delete" ? "critical" : "default",
            onClick: () => {
              setConfirm(null)
              setRefreshKey((current) => current + 1)
            },
          }}
          secondaryAction={{ label: "Cancel", onClick: () => setConfirm(null) }}
        />
      )}
    </>
  )
}
