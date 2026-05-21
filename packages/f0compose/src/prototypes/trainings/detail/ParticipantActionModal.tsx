import { useEffect, useState } from "react"
import { F0Dialog, F0Text, F0DatePicker } from "@factorialco/f0-react"
import { Input } from "@factorialco/f0-react/dist/experimental"

export type ParticipantAction =
  | "add"
  | "due-date"
  | "knowledge-test"
  | "certificate"
  | "delete"

type Props = {
  open: boolean
  action: ParticipantAction
  participantName: string | null
  count: number
  onClose: () => void
  onConfirm?: () => void
}

const TITLE: Record<ParticipantAction, string> = {
  add: "Add participants",
  "due-date": "Set due date",
  "knowledge-test": "Update knowledge test",
  certificate: "Issue certificate",
  delete: "Remove participant",
}

const DESCRIPTION: Record<ParticipantAction, string> = {
  add: "Add employees, groups or filters to this training.",
  "due-date": "Pick a deadline by which participants must finish.",
  "knowledge-test": "Toggle the knowledge-test result for this participant.",
  certificate: "Issue and attach a certificate to the participant.",
  delete: "Remove this participant from the group. Their progress will be lost.",
}

const toDpValue = (iso: string) =>
  iso
    ? {
        value: { from: new Date(iso), to: new Date(iso) },
        granularity: "day" as const,
      }
    : undefined

const fromDpString = (s: string | undefined) => {
  if (!s) return ""
  const d = new Date(s)
  return Number.isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10)
}

export function ParticipantActionModal({
  open,
  action,
  participantName,
  count,
  onClose,
  onConfirm,
}: Props) {
  const [dueDate, setDueDate] = useState("")
  const [employeeQuery, setEmployeeQuery] = useState("")

  useEffect(() => {
    if (open) {
      setDueDate("")
      setEmployeeQuery("")
    }
  }, [open])

  const subject = participantName
    ? `${participantName}${
        count > 1 ? ` and ${count - 1} other${count > 2 ? "s" : ""}` : ""
      }`
    : null

  return (
    <F0Dialog
      isOpen={open}
      onClose={onClose}
      position="center"
      width="md"
      title={TITLE[action]}
      description={DESCRIPTION[action]}
      primaryAction={{
        label: action === "delete" ? "Remove" : "Confirm",
        onClick: onConfirm ?? onClose,
        variant: action === "delete" ? "critical" : "default",
      }}
      secondaryAction={{ label: "Cancel", onClick: onClose }}
    >
      <div className="flex flex-col gap-4">
        {subject && (
          <F0Text variant="description" content={subject} />
        )}

        {action === "add" && (
          <>
            <Input
              label="Search employees, groups or filters"
              value={employeeQuery}
              onChange={(v) => setEmployeeQuery(v ?? "")}
              placeholder="e.g. Marketing team, manager, Madrid…"
            />
            <F0Text
              variant="description"
              content="Participants will receive an email and an in-app notification."
            />
          </>
        )}

        {action === "due-date" && (
          <>
            <F0DatePicker
              label="Due date"
              value={toDpValue(dueDate)}
              onChange={(_v, s) => setDueDate(fromDpString(s))}
            />
            <F0Text
              variant="description"
              content="The participant will be notified when 30 / 14 / 7 days remain and once the date is overdue."
            />
          </>
        )}

        {action === "knowledge-test" && (
          <F0Text
            variant="body"
            content="Toggle the knowledge-test result for this participant. The change is logged in the participant's history and visible in reports."
          />
        )}

        {action === "certificate" && (
          <F0Text
            variant="body"
            content="Generate a certificate using the current training template and attach it to the participant's profile and personal documents."
          />
        )}

        {action === "delete" && (
          <F0Text
            variant="body"
            content="This action cannot be undone. The participant will be unenrolled and any in-progress activity will be discarded."
          />
        )}
      </div>
    </F0Dialog>
  )
}
