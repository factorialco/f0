import { useMemo, useState } from "react"
import { F0Box, F0Heading, F0Text } from "@factorialco/f0-react"
import { OneDataCollection, useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add, Delete } from "@factorialco/f0-react/icons/app"

import type { Training, TrainingClass } from "@/fixtures"
import type { ParticipantStatus } from "@/fixtures"

import {
  ParticipantActionModal,
  type ParticipantAction,
} from "../ParticipantActionModal"

const STATUS_LABEL: Record<ParticipantStatus, string> = {
  completed: "Completed",
  in_progress: "In progress",
  not_started: "Not started",
  expired: "Expired",
}

const STATUS_VARIANT: Record<
  ParticipantStatus,
  "neutral" | "info" | "positive" | "warning" | "critical"
> = {
  completed: "positive",
  in_progress: "warning",
  not_started: "neutral",
  expired: "critical",
}

type Row = {
  id: string
  firstName: string
  lastName: string
  fullName: string
  src?: string
  status: ParticipantStatus
  certificate: string
  completionDate: string
  courseValidity: string
  attendedSessions: number
  totalSessions: number
  knowledgeTestPassed: boolean | null
  completedModules: number
  totalModules: number
}

type Props = { training: Training; klass: TrainingClass }

export function ParticipantsTab({ klass }: Props) {
  const [modal, setModal] = useState<{
    action: ParticipantAction
    name: string | null
    count: number
  } | null>(null)

  // Build rows by intersecting class.participants with class status counts.
  // Distribute statuses proportionally to give a stable demo view.
  const total = klass.totalAttendancesCount || klass.participants.length || 0
  const completed = klass.completedAttendancesCount
  const inProgress = Math.min(
    Math.max(total - completed, 0),
    Math.round((total - completed) * 0.6)
  )
  const notStarted = Math.max(total - completed - inProgress, 0)

  const statuses: ParticipantStatus[] = [
    ...Array(completed).fill("completed" as ParticipantStatus),
    ...Array(inProgress).fill("in_progress" as ParticipantStatus),
    ...Array(notStarted).fill("not_started" as ParticipantStatus),
  ]

  const rows: Row[] = useMemo(
    () =>
      klass.participants.map((p, i) => ({
        id: `${p.firstName}-${p.lastName}-${i}`,
        firstName: p.firstName,
        lastName: p.lastName,
        fullName: `${p.firstName} ${p.lastName}`.trim(),
        src: p.src,
        status: statuses[i] ?? "not_started",
        certificate: i === 0 && completed > 0 ? "1 file" : "-",
        completionDate: statuses[i] === "completed" ? "Not set" : "Not set",
        courseValidity: "No date",
        attendedSessions: statuses[i] === "completed" ? 0 : 0,
        totalSessions: 0,
        knowledgeTestPassed: null,
        completedModules: 0,
        totalModules: 0,
      })),
    [completed, klass.participants, statuses]
  )

  const open = (action: ParticipantAction, name: string | null = null) =>
    setModal({ action, name, count: 1 })
  const closeModal = () => setModal(null)
  const confirmParticipantAction = () => {
    setModal(null)
  }

  const source = useDataCollectionSource<Row>(
    {
      search: { enabled: true, sync: false },
      selectable: (row) => row.id,
      presets: [
        {
          label: "Pending group assignment",
          filter: { status: ["not_started", "in_progress"] },
        },
        { label: "Expired", filter: { status: ["expired"] } },
      ],
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { label: "Enrolled", value: "not_started" },
              { label: "In progress", value: "in_progress" },
              { label: "Completed", value: "completed" },
              { label: "Expired", value: "expired" },
            ],
          },
        },
      },
      dataAdapter: {
        fetchData: ({ filters, search }) => {
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()
          const filtered = rows
            .filter((row) =>
              statusFilter.length === 0 ? true : statusFilter.includes(row.status)
            )
            .filter((row) =>
              term === "" ? true : row.fullName.toLowerCase().includes(term)
            )

          return { records: filtered, totalCount: filtered.length }
        },
      },
      primaryActions: () => ({
        label: "Add participants",
        icon: Add,
        onClick: () => open("add"),
      }),
      secondaryActions: () => [
        {
          label: "Export certificates",
          onClick: () => open("certificate", null),
        },
      ],
      itemActions: (row) => [
        {
          label: "Assign to group",
          onClick: () => open("add", row.fullName),
        },
        {
          label: "Update completion date",
          enabled: row.status === "completed",
          onClick: () => open("due-date", row.fullName),
        },
        {
          label: "View certificate",
          enabled: row.certificate !== "-",
          onClick: () => open("certificate", row.fullName),
        },
        {
          label: "Delete participant",
          icon: Delete,
          critical: true,
          onClick: () => open("delete", row.fullName),
        },
      ],
    },
    [rows]
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading
          as="h3"
          variant="heading-large"
          content={`Participants (${rows.length})`}
        />
        <F0Text
          variant="description"
          content="People enrolled in this group. Use the actions to add, remove, or certify them."
        />
      </F0Box>

      <OneDataCollection
        id={`trainings/group-participants/${klass.id}/v1`}
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Participant",
                  sorting: "fullName",
                  render: (row) => ({
                    type: "person",
                    value: {
                      firstName: row.firstName,
                      lastName: row.lastName,
                      src: row.src,
                    },
                  }),
                },
                {
                  label: "Status",
                  sorting: "status",
                  render: (row) => ({
                    type: "status",
                    value: {
                      status: row.status === "not_started" ? "neutral" : STATUS_VARIANT[row.status],
                      label: row.status === "not_started" ? "Enrolled" : STATUS_LABEL[row.status],
                    },
                  }),
                },
                {
                  label: "Certificate",
                  render: (row) => ({ type: "text", value: row.certificate }),
                },
                {
                  label: "Completion date",
                  render: (row) => ({ type: "text", value: row.completionDate }),
                },
                {
                  label: "Course validity",
                  render: (row) => ({ type: "text", value: row.courseValidity }),
                },
                {
                  label: "Session attendance",
                  render: (row) => ({
                    type: "percentage",
                    value: {
                      percentage:
                        row.totalSessions > 0
                          ? (row.attendedSessions / row.totalSessions) * 100
                          : 0,
                      label: `${row.attendedSessions}/${row.totalSessions}`,
                    },
                  }),
                },
                {
                  label: "Knowledge test results",
                  render: (row) => ({
                    type: "status",
                    value:
                      row.knowledgeTestPassed === null
                        ? { status: "warning", label: "Pending" }
                        : row.knowledgeTestPassed
                          ? { status: "positive", label: "Passed" }
                          : { status: "critical", label: "Failed" },
                  }),
                },
                {
                  label: "Module progress",
                  render: (row) => ({
                    type: "percentage",
                    value: {
                      percentage:
                        row.totalModules > 0
                          ? (row.completedModules / row.totalModules) * 100
                          : 0,
                      label: `${row.completedModules}/${row.totalModules}`,
                    },
                  }),
                },
              ],
            },
          },
        ]}
      />

      {modal && (
        <ParticipantActionModal
          open={true}
          action={modal.action}
          participantName={modal.name}
          count={modal.count}
          onClose={closeModal}
          onConfirm={confirmParticipantAction}
        />
      )}
    </F0Box>
  )
}
