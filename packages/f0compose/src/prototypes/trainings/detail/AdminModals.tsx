import {
  F0Avatar,
  F0Box,
  F0Checkbox,
  F0Dialog,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import { Input, Textarea } from "@factorialco/f0-react/dist/experimental"
import { useEffect, useState } from "react"

import type { Training } from "@/fixtures"

export type AdminAction =
  | "publish"
  | "revert-draft"
  | "copy-link"
  | "settings"
  | "edit"
  | "start"
  | "stop"
  | "delete"
  | "select-template"
  | "update-completion-date"
  | "employees-sidepanel"
  | null

type Props = {
  action: AdminAction
  training: Training
  onClose: () => void
}

const TITLES: Record<Exclude<AdminAction, null>, string> = {
  publish: "Publish training",
  "revert-draft": "Revert to draft",
  "copy-link": "Link copied",
  settings: "Training settings",
  edit: "Edit training",
  start: "Start training",
  stop: "Stop training",
  delete: "Delete participants",
  "select-template": "Select form template",
  "update-completion-date": "Update completion date",
  "employees-sidepanel": "Employees in this training",
}

const TEMPLATE_OPTIONS = [
  { value: "satisfaction-default", label: "Satisfaction — Default" },
  { value: "pre-knowledge", label: "Pre-training knowledge test" },
  { value: "post-knowledge", label: "Post-training knowledge test" },
  { value: "long-feedback", label: "Long feedback (NPS + open)" },
]

const TYPE_OPTIONS = [
  { value: "internal", label: "Internal" },
  { value: "external", label: "External" },
]

const VISIBILITY_OPTIONS = [
  { value: "private", label: "Private — invitation only" },
  { value: "catalog", label: "Catalog — discoverable" },
  { value: "free", label: "Free course — public" },
]

export function AdminModals({ action, training, onClose }: Props) {
  const [name, setName] = useState(training.name)
  const [description, setDescription] = useState(training.description ?? "")
  const [date, setDate] = useState("")
  const [reason, setReason] = useState("")
  const [type, setType] = useState<string>(training.type)
  const [visibility, setVisibility] = useState<string>("private")
  const [template, setTemplate] = useState<string>("satisfaction-default")
  const [notify, setNotify] = useState(true)
  const [autoArchive, setAutoArchive] = useState(false)

  useEffect(() => {
    if (action) {
      setName(training.name)
      setDescription(training.description ?? "")
      setDate("")
      setReason("")
      setType(training.type)
      setVisibility("private")
      setTemplate("satisfaction-default")
      setNotify(true)
      setAutoArchive(false)
    }
  }, [action, training])

  if (!action) return null

  const isWide = action === "settings" || action === "edit"
  const isCritical =
    action === "revert-draft" || action === "delete" || action === "stop"

  const primaryLabelMap: Record<Exclude<AdminAction, null>, string> = {
    publish: "Publish",
    "revert-draft": "Revert to draft",
    "copy-link": "Close",
    settings: "Save settings",
    edit: "Save changes",
    start: "Start training",
    stop: "Stop training",
    delete: "Remove participants",
    "select-template": "Add template",
    "update-completion-date": "Update date",
    "employees-sidepanel": "Close",
  }

  return (
    <F0Dialog
      isOpen={action !== null}
      onClose={onClose}
      width={isWide ? "lg" : "md"}
      title={TITLES[action]}
      description={training.name}
      primaryAction={{
        label: primaryLabelMap[action],
        onClick: onClose,
        variant: isCritical ? "critical" : "default",
      }}
      secondaryAction={
        action === "copy-link" || action === "employees-sidepanel"
          ? undefined
          : {
              label: "Cancel",
              onClick: onClose,
            }
      }
    >
      <F0Box display="flex" flexDirection="column" gap="md">
        {action === "publish" && (
          <F0Text
            content="Publishing makes the training visible to its participants. They will receive an email and an in-app notification. You can still edit content, schedule classes and update participants after publishing."
            variant="body"
          />
        )}

        {action === "revert-draft" && (
          <>
            <F0Text
              content="Reverting hides the training from participants and stops all reminders. Existing progress is preserved."
              variant="body"
            />
            <Textarea
              label="Reason (optional)"
              value={reason}
              onChange={(v) => setReason(v ?? "")}
              rows={3}
            />
          </>
        )}

        {action === "copy-link" && (
          <F0Text
            content="The catalog link for this training has been copied to your clipboard. Anyone with the link and access to the catalog can view it."
            variant="body"
          />
        )}

        {(action === "settings" || action === "edit") && (
          <>
            <Input
              label="Name"
              value={name}
              onChange={(v) => setName(v ?? "")}
            />
            <Textarea
              label="Description"
              value={description}
              onChange={(v) => setDescription(v ?? "")}
              rows={4}
            />
            <F0Select
              label="Type"
              value={type}
              onChange={(v: string) => setType(v)}
              options={TYPE_OPTIONS}
            />
            <F0Select
              label="Visibility"
              value={visibility}
              onChange={(v: string) => setVisibility(v)}
              options={VISIBILITY_OPTIONS}
            />
            <F0Checkbox
              checked={notify}
              onCheckedChange={(c) => setNotify(c === true)}
              title="Notify participants when content is updated"
            />
            <F0Checkbox
              checked={autoArchive}
              onCheckedChange={(c) => setAutoArchive(c === true)}
              title="Auto-archive 30 days after completion"
            />
          </>
        )}

        {action === "start" && (
          <>
            <F0Text
              content={`Starting the training notifies all ${training.participantCount} participants and unlocks the content. You can pause it later.`}
              variant="body"
            />
            <Input
              label="Start date"
              type="date"
              value={date}
              onChange={(v) => setDate(v ?? "")}
            />
          </>
        )}

        {action === "stop" && (
          <>
            <F0Text
              content="Stopping freezes progress for all participants. Reminders are paused. You can resume the training at any time."
              variant="body"
            />
            <Textarea
              label="Reason"
              value={reason}
              onChange={(v) => setReason(v ?? "")}
              rows={3}
            />
          </>
        )}

        {action === "delete" && (
          <F0Text
            content="Removing participants will revoke their access immediately and delete their progress. This cannot be undone."
            variant="body"
          />
        )}

        {action === "select-template" && (
          <>
            <F0Select
              label="Template"
              value={template}
              onChange={(v: string) => setTemplate(v)}
              options={TEMPLATE_OPTIONS}
            />
            <F0Text
              content="Templates can be customised after they are added to the training."
              variant="small"
            />
          </>
        )}

        {action === "update-completion-date" && (
          <>
            <Input
              label="Completion date"
              type="date"
              value={date}
              onChange={(v) => setDate(v ?? "")}
            />
            <F0Text
              content="This overrides the date for selected participants. Certificates and reports will use the new date."
              variant="small"
            />
          </>
        )}

        {action === "employees-sidepanel" && (
          <F0Box display="flex" flexDirection="column" gap="sm">
            {training.participantAvatars.map((a) => (
              <div
                key={a.firstName + a.lastName}
                className="flex items-center gap-3 rounded-md border border-f1-border-secondary p-2"
              >
                <F0Avatar
                  type="person"
                  firstName={a.firstName}
                  lastName={a.lastName}
                  size="small"
                />
                <div className="flex-1">
                  <F0Text
                    content={`${a.firstName} ${a.lastName}`}
                    variant="body"
                  />
                </div>
                <F0Text content="Participant" variant="small" />
              </div>
            ))}
            {training.participantAvatars.length === 0 && (
              <F0Text content="No participants yet." variant="small" />
            )}
          </F0Box>
        )}
      </F0Box>
    </F0Dialog>
  )
}
