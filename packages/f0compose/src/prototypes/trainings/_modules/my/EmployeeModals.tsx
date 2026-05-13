import { useEffect, useState } from "react"
import {
  F0Checkbox,
  F0Dialog,
  F0Heading,
  F0Link,
  F0Text,
} from "@factorialco/f0-react"
import { Textarea } from "@factorialco/f0-react/dist/experimental"

import type { TrainingFile, TrainingSession } from "@/fixtures"

export type EmployeeAction =
  | "start-training"
  | "request-training"
  | "upload-certificate"
  | "view-file"
  | "download-file"
  | "mark-attendance"
  | "session-detail"
  | null

type Props = {
  action: EmployeeAction
  trainingName?: string
  file?: TrainingFile | null
  session?: TrainingSession | null
  onClose: () => void
}

const TITLES: Record<Exclude<EmployeeAction, null>, string> = {
  "start-training": "Start training",
  "request-training": "Request this training",
  "upload-certificate": "Upload certificate",
  "view-file": "Material",
  "download-file": "Download",
  "mark-attendance": "Mark attendance",
  "session-detail": "Session details",
}

const CONFIRM_LABEL: Record<Exclude<EmployeeAction, null>, string | null> = {
  "start-training": "Start",
  "request-training": "Send request",
  "upload-certificate": "Upload",
  "view-file": null,
  "download-file": null,
  "mark-attendance": "Confirm",
  "session-detail": null,
}

export function EmployeeModals({
  action,
  trainingName = "",
  file = null,
  session = null,
  onClose,
}: Props) {
  const [comment, setComment] = useState("")
  const [attended, setAttended] = useState(true)

  useEffect(() => {
    if (action) {
      setComment("")
      setAttended(true)
    }
  }, [action])

  if (!action) return null

  const confirmLabel = CONFIRM_LABEL[action]
  const subtitle = file?.name ?? trainingName ?? ""
  const isWide = action === "view-file" || action === "session-detail"

  return (
    <F0Dialog
      isOpen={action !== null}
      onClose={onClose}
      position="center"
      width={isWide ? "lg" : "md"}
      title={TITLES[action]}
      description={subtitle || undefined}
      primaryAction={
        confirmLabel
          ? { label: confirmLabel, onClick: onClose }
          : { label: "Close", onClick: onClose }
      }
      secondaryAction={
        confirmLabel ? { label: "Cancel", onClick: onClose } : undefined
      }
    >
      <div className="flex flex-col gap-4">
        {action === "start-training" && (
          <F0Text
            variant="body"
            content="Starting marks your progress as in-progress and unlocks the content. You can pause at any time and resume later."
          />
        )}

        {action === "request-training" && (
          <>
            <F0Text
              variant="body"
              content="Your manager will review your request. You'll be notified when it's approved or rejected."
            />
            <Textarea
              label="Why do you want to take this training?"
              value={comment}
              onChange={(v) => setComment(v ?? "")}
              rows={4}
              placeholder="Briefly explain how this training helps you."
            />
          </>
        )}

        {action === "upload-certificate" && (
          <>
            <div className="flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-f1-border-secondary bg-f1-background-secondary p-6 text-center">
              <F0Heading
                content="Drop a PDF here or click to browse"
                variant="heading"
                as="h3"
              />
              <F0Text
                variant="description"
                content="Accepts PDF, PNG or JPG up to 10 MB"
              />
            </div>
            <Textarea
              label="Notes (optional)"
              value={comment}
              onChange={(v) => setComment(v ?? "")}
              rows={3}
            />
          </>
        )}

        {action === "view-file" && file && (
          <div className="flex min-h-[360px] flex-1 flex-col items-center justify-center gap-2 rounded-md bg-f1-background-secondary p-6 text-center">
            <F0Heading content={file.name} variant="heading" as="h3" />
            <F0Text
              variant="small"
              content={`${file.type.toUpperCase()} · ${file.size ?? "—"}`}
            />
            <F0Text
              variant="description"
              content="In-prototype viewer — a real preview would render here."
            />
          </div>
        )}

        {action === "download-file" && (
          <F0Text
            variant="body"
            content="The download will start automatically. The file is also available in your personal documents."
          />
        )}

        {action === "mark-attendance" && (
          <>
            <F0Text
              variant="body"
              content="Confirm that you attended this session. Your manager will see the update in real time."
            />
            <F0Checkbox
              checked={attended}
              onCheckedChange={(c) => setAttended(c === true)}
              title="I confirm I attended the full session"
            />
          </>
        )}

        {action === "session-detail" && session && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <F0Heading content={session.title} variant="heading" as="h3" />
              <F0Text
                variant="small"
                content={`${session.startsAt.slice(0, 16).replace("T", " ")} → ${session.endsAt.slice(11, 16)}`}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <DetailRow label="Mode" value={session.mode} />
              <DetailRow label="Status" value={session.status} />
              <DetailRow
                label="Location"
                value={session.location ?? "Online"}
              />
              <DetailRow
                label="Trainer"
                value={
                  session.instructorIds.length > 0
                    ? `${session.instructorIds.length} assigned`
                    : "TBD"
                }
              />
            </div>
            {session.onlineLink && (
              <div className="flex flex-col gap-1">
                <F0Text variant="label" content="Meeting link" />
                <F0Link href={session.onlineLink}>{session.onlineLink}</F0Link>
              </div>
            )}
            {session.notes && (
              <div className="flex flex-col gap-1">
                <F0Text variant="label" content="Notes" />
                <F0Text variant="body" content={session.notes} />
              </div>
            )}
          </div>
        )}
      </div>
    </F0Dialog>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <F0Text variant="label" content={label} />
      <F0Text variant="body" content={value} />
    </div>
  )
}
