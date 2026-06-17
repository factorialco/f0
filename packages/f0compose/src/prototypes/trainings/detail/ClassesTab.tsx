import { useState } from "react"
import { useDataCollectionSource, OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { F0Dialog } from "@factorialco/f0-react"
import { Add, Delete, LayersFront, Pencil } from "@factorialco/f0-react/icons/app"
import { useSearchParams } from "react-router-dom"

import type { Training, TrainingClass } from "@/fixtures"
import { applySort } from "@/lib/applySort"
import { NewClassWizard } from "./NewClassWizard"

type Props = { training: Training; baseHref?: string }

type ConfirmKind = "duplicate" | "delete"

export function ClassesTab({ training, baseHref = "/p/trainings" }: Props) {
  const [showNewClass, setShowNewClass] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()
  const [confirm, setConfirm] = useState<{
    kind: ConfirmKind
    klass: TrainingClass
  } | null>(null)

  const openClass = (c: TrainingClass) => {
    const next = new URLSearchParams(searchParams)
    if (baseHref !== "/p/trainings") {
      next.set("training", training.id)
    }
    next.set("class", c.id)
    setSearchParams(next)
  }

  const startDateOptions = Array.from(
    new Set(training.classes.map((c) => c.startDate).filter((d): d is string => !!d))
  ).map((d) => ({ label: d, value: d }))
  const endDateOptions = Array.from(
    new Set(training.classes.map((c) => c.endDate).filter((d): d is string => !!d))
  ).map((d) => ({ label: d, value: d }))

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

          const filtered = training.classes.filter((c) => {
            if (term !== "" && !c.name.toLowerCase().includes(term)) return false
            if (wantedStart.length > 0 && !wantedStart.includes(c.startDate ?? ""))
              return false
            if (wantedEnd.length > 0 && !wantedEnd.includes(c.endDate ?? ""))
              return false
            return true
          })

          const sorted = applySort(filtered, sortings, (c, field) => {
            if (field === "startDate") return c.startDate ?? ""
            if (field === "endDate") return c.endDate ?? ""
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
          const records = sorted.slice(start, start + perPage)
          return { type: "pages" as const, records, total, perPage, currentPage, pagesCount }
        },
      },
      primaryActions: () => ({
        label: "New training group",
        icon: Add,
        onClick: () => setShowNewClass(true),
      }),
      itemOnClick: (c) => () => openClass(c),
      itemActions: (c) => [
        { label: "Edit", icon: Pencil, onClick: () => openClass(c) },
        {
          label: "Duplicate training group",
          icon: LayersFront,
          onClick: () => setConfirm({ kind: "duplicate", klass: c }),
        },
        {
          label: "Delete training group",
          icon: Delete,
          onClick: () => setConfirm({ kind: "delete", klass: c }),
          critical: true,
        },
      ],
    },
    [training.id, refreshKey]
  )

  return (
    <>
    <OneDataCollection
      id={`trainings/groups-${training.id}/v1`}
      source={source}
      emptyStates={{
        "no-data": {
          emoji: "👥",
          title: "No training groups yet",
          description:
            "Training groups bring employees together to manage attendance, sessions and costs.",
          actions: [
            {
              label: "New training group",
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
                label: "Training group",
                render: (c) => ({ type: "text", value: c.name }),
              },
              {
                label: "Start date",
                sorting: "startDate",
                render: (c) => ({ type: "text", value: c.startDate ?? "-" }),
              },
              {
                label: "End date",
                sorting: "endDate",
                render: (c) => ({ type: "text", value: c.endDate ?? "-" }),
              },
              {
                label: "Sessions",
                render: (c) => ({ type: "text", value: String(c.sessionCount) }),
              },
              {
                label: "Participants",
                render: (c) => ({
                  type: "avatarList",
                  value: {
                    avatarList: c.participants.map((p) => ({
                      firstName: p.firstName,
                      lastName: p.lastName,
                      type: "person" as const,
                      src: p.src,
                    })),
                    max: 5,
                  },
                }),
              },
              {
                label: "Participation rate",
                render: (c) => {
                  const completed = c.completedAttendancesCount
                  const total = c.totalAttendancesCount
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
        setRefreshKey((k) => k + 1)
        openClass(klass)
      }}
    />

    {confirm && (
      <F0Dialog
        isOpen={true}
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
            setRefreshKey((k) => k + 1)
          },
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setConfirm(null),
        }}
      />
    )}
    </>
  )
}
