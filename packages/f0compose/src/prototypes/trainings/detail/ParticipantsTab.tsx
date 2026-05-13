import { useState } from "react"
import { useDataCollectionSource, OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { Add, Calendar, Check, File } from "@factorialco/f0-react/icons/app"

import {
  type Training,
  type TrainingParticipant,
  participantsForTraining,
} from "@/fixtures"

import { ParticipantActionModal, type ParticipantAction } from "./ParticipantActionModal"

const STATUS_LABEL: Record<string, string> = {
  completed: "Completed",
  in_progress: "In progress",
  not_started: "Not started",
  expired: "Expired",
}
const STATUS_VARIANT: Record<string, "positive" | "warning" | "neutral" | "critical"> = {
  completed: "positive",
  in_progress: "warning",
  not_started: "neutral",
  expired: "critical",
}

type Props = { training: Training }

export function ParticipantsTab({ training }: Props) {
  const rows: TrainingParticipant[] = participantsForTraining(training.id)
  const [modal, setModal] = useState<{
    action: ParticipantAction
    participant: TrainingParticipant | null
    count: number
  } | null>(null)

  const source = useDataCollectionSource<TrainingParticipant>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "completed", label: "Completed" },
              { value: "in_progress", label: "In progress" },
              { value: "not_started", label: "Not started" },
              { value: "expired", label: "Expired" },
            ],
          },
        },
      },
      sortings: {
        fullName: { label: "Employee" },
        status: { label: "Status" },
        trainingCompletedAt: { label: "Completion date" },
        trainingDueDate: { label: "Due date" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, pagination }) => {
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = rows
            .filter((r) =>
              statusFilter.length === 0 ? true : statusFilter.includes(r.status)
            )
            .filter((r) =>
              term === "" ? true : r.employeeName.toLowerCase().includes(term)
            )

          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = filtered.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          const records = filtered.slice(start, start + perPage)

          return { type: "pages" as const, records, total, perPage, currentPage, pagesCount }
        },
      },
      primaryActions: () => ({
        label: "Add participants",
        icon: Add,
        onClick: () =>
          setModal({ action: "add", participant: null, count: 0 }),
      }),
      itemActions: (p: TrainingParticipant) => [
        {
          label: "Set due date",
          icon: Calendar,
          onClick: () =>
            setModal({ action: "due-date", participant: p, count: 1 }),
        },
        {
          label: p.knowledgeTestPassed
            ? "Mark knowledge test as not passed"
            : "Mark knowledge test as passed",
          icon: Check,
          onClick: () =>
            setModal({ action: "knowledge-test", participant: p, count: 1 }),
        },
        {
          label: "Issue certificate",
          icon: File,
          onClick: () =>
            setModal({ action: "certificate", participant: p, count: 1 }),
        },
      ],
    },
    [training.id]
  )

  const columns = [
    {
      label: "Employee",
      sorting: "fullName" as const,
      render: (r: TrainingParticipant) => ({
        type: "person" as const,
        value: {
          firstName: r.employeeName.split(" ")[0] ?? "",
          lastName: r.employeeName.split(" ").slice(1).join(" "),
          src: r.employeeAvatar,
        },
      }),
    },
    {
      label: "Status",
      sorting: "status" as const,
      render: (r: TrainingParticipant) => ({
        type: "status" as const,
        value: {
          status: STATUS_VARIANT[r.status] ?? "neutral",
          label: STATUS_LABEL[r.status] ?? r.status,
        },
      }),
    },
    {
      label: "Certificate",
      render: (r: TrainingParticipant) => ({
        type: "text" as const,
        value:
          r.certificateCount === 0
            ? "-"
            : r.certificateCount === 1
              ? "1 file"
              : `${r.certificateCount} files`,
      }),
    },
    {
      label: "Completion date",
      sorting: "trainingCompletedAt" as const,
      render: (r: TrainingParticipant) => ({
        type: "text" as const,
        value: r.completionDate ?? "-",
      }),
    },
    ...(training.courseValidityEnabled
      ? [
          {
            label: "Course validity date",
            sorting: "trainingDueDate" as const,
            render: (r: TrainingParticipant) => {
              if (!r.dueDate) return { type: "text" as const, value: "-" }
              const today = new Date("2026-05-05")
              const due = new Date(r.dueDate)
              const isExpired = due < today
              const isSoon =
                !isExpired &&
                (due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) <= 30
              if (isExpired) {
                return {
                  type: "status" as const,
                  value: { status: "critical", label: r.dueDate },
                }
              }
              if (isSoon) {
                return {
                  type: "status" as const,
                  value: { status: "warning", label: r.dueDate },
                }
              }
              return { type: "text" as const, value: r.dueDate }
            },
          },
        ]
      : []),
    ...(training.isSessionsRequired
      ? [
          {
            label: "Session attendance",
            render: (r: TrainingParticipant) => ({
              type: "percentage" as const,
              value: {
                percentage: r.attendancePercentage,
                label: `${r.sessionsAttended}/${r.sessionsTotal}`,
              },
            }),
          },
        ]
      : []),
    ...(training.knowledgeTestRequired
      ? [
          {
            label: "Knowledge test",
            render: (r: TrainingParticipant) => {
              if (r.knowledgeTestPassed === null || r.knowledgeTestPassed === undefined) {
                return {
                  type: "status" as const,
                  value: { status: "warning", label: "Pending" },
                }
              }
              if (r.knowledgeTestPassed) {
                return {
                  type: "status" as const,
                  value: { status: "positive", label: "Passed" },
                }
              }
              return {
                type: "status" as const,
                value: { status: "critical", label: "Failed" },
              }
            },
          },
        ]
      : []),
    ...(training.isModulesRequired
      ? [
          {
            label: "Module progress",
            render: (r: TrainingParticipant) => {
              const completed = r.completedModules ?? 0
              const total = r.totalModules ?? 0
              const percentage =
                total > 0 ? Number(((completed / total) * 100).toFixed(1)) : 0
              return {
                type: "percentage" as const,
                value: {
                  percentage,
                  label: `${completed}/${total}`,
                },
              }
            },
          },
        ]
      : []),
  ]

  return (
    <>
    <OneDataCollection
      id={`trainings/participants-${training.id}/v1`}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            frozenColumns: 1,
            allowColumnHiding: true,
            columns,
          },
        },
      ]}
    />

    <ParticipantActionModal
      open={modal !== null}
      action={modal?.action ?? "add"}
      participantName={modal?.participant?.employeeName ?? null}
      count={modal?.count ?? 0}
      onClose={() => setModal(null)}
    />
    </>
  )
}
