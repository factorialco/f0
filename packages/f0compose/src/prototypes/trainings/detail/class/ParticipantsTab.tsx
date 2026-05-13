import { useState } from "react"
import {
  F0AvatarPerson,
  F0Button,
  F0Heading,
  F0Text,
} from "@factorialco/f0-react"
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

const STATUS_CLASS: Record<ParticipantStatus, string> = {
  completed: "bg-f1-background-positive text-f1-foreground-positive",
  in_progress: "bg-f1-background-warning text-f1-foreground-warning",
  not_started: "bg-f1-background-neutral text-f1-foreground-neutral",
  expired: "bg-f1-background-critical text-f1-foreground-critical",
}

type Row = {
  fullName: string
  src?: string
  status: ParticipantStatus
}

function Chip({ label, className }: { label: string; className: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium ${className}`}
    >
      {label}
    </span>
  )
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

  const rows: Row[] = klass.participants.map((p, i) => ({
    fullName: `${p.firstName} ${p.lastName}`.trim(),
    src: p.src,
    status: statuses[i] ?? "not_started",
  }))

  const open = (action: ParticipantAction, name: string | null = null) =>
    setModal({ action, name, count: 1 })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <F0Heading
            as="h3"
            variant="heading-large"
            content={`Participants (${rows.length})`}
          />
          <F0Text
            variant="description"
            content="People enrolled in this group. Use the actions to add, remove, or certify them."
          />
        </div>
        <F0Button
          label="Add participants"
          icon={Add}
          onClick={() => open("add")}
        />
      </div>

      {rows.length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-md border border-dashed border-f1-border-secondary p-8 text-center">
          <F0Heading as="h4" variant="heading" content="No participants yet" />
          <F0Text
            variant="description"
            content="Add participants to start tracking their progress."
          />
        </div>
      ) : (
        <div className="flex flex-col rounded-md border border-solid border-f1-border-secondary">
          {rows.map((r, idx) => (
            <div
              key={`${r.fullName}-${idx}`}
              className={`flex items-center justify-between gap-3 p-3 ${
                idx < rows.length - 1
                  ? "border-b border-solid border-f1-border-secondary"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <F0AvatarPerson
                  firstName={r.fullName.split(" ")[0] ?? ""}
                  lastName={r.fullName.split(" ").slice(1).join(" ")}
                  src={r.src}
                  size="small"
                />
                <F0Text variant="body" content={r.fullName} />
              </div>
              <div className="flex items-center gap-2">
                <Chip
                  label={STATUS_LABEL[r.status]}
                  className={STATUS_CLASS[r.status]}
                />
                <F0Button
                  label="Set due date"
                  variant="outline"
                  size="sm"
                  onClick={() => open("due-date", r.fullName)}
                />
                <F0Button
                  label="Issue certificate"
                  variant="outline"
                  size="sm"
                  onClick={() => open("certificate", r.fullName)}
                />
                <F0Button
                  label="Remove"
                  icon={Delete}
                  variant="outline"
                  size="sm"
                  onClick={() => open("delete", r.fullName)}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && (
        <ParticipantActionModal
          open={true}
          action={modal.action}
          participantName={modal.name}
          count={modal.count}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  )
}
