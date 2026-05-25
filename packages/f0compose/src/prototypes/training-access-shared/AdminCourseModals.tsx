import {
  F0Box,
  F0Checkbox,
  F0Dialog,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import { Input, Textarea } from "@factorialco/f0-react/dist/experimental"
import { useEffect, useState } from "react"

import type { Training } from "@/fixtures"

export type AdminAction = "publish" | "revert-draft" | "settings" | null

type Props = {
  action: AdminAction
  training: Training
  onClose: () => void
}

const TYPE_OPTIONS = [
  { value: "internal", label: "Internal" },
  { value: "external", label: "External" },
]

const VISIBILITY_OPTIONS = [
  { value: "private", label: "Private - invitation only" },
  { value: "catalog", label: "Catalog - discoverable" },
  { value: "free", label: "Free course - public" },
]

const TITLES: Record<Exclude<AdminAction, null>, string> = {
  publish: "Publish training",
  "revert-draft": "Revert to draft",
  settings: "Training settings",
}

const PRIMARY_LABELS: Record<Exclude<AdminAction, null>, string> = {
  publish: "Publish",
  "revert-draft": "Revert to draft",
  settings: "Save settings",
}

export function AdminCourseModals({ action, training, onClose }: Props) {
  const [name, setName] = useState(training.name)
  const [description, setDescription] = useState(training.description ?? "")
  const [type, setType] = useState<string>(training.type)
  const [visibility, setVisibility] = useState<string>("private")
  const [notify, setNotify] = useState(true)
  const [autoArchive, setAutoArchive] = useState(false)
  const [reason, setReason] = useState("")

  useEffect(() => {
    if (!action) return

    setName(training.name)
    setDescription(training.description ?? "")
    setType(training.type)
    setVisibility("private")
    setNotify(true)
    setAutoArchive(false)
    setReason("")
  }, [action, training])

  if (!action) return null

  const isCritical = action === "revert-draft"

  return (
    <F0Dialog
      isOpen={action !== null}
      onClose={onClose}
      width={action === "settings" ? "lg" : "md"}
      title={TITLES[action]}
      description={training.name}
      primaryAction={{
        label: PRIMARY_LABELS[action],
        onClick: onClose,
        variant: isCritical ? "critical" : "default",
      }}
      secondaryAction={{ label: "Cancel", onClick: onClose }}
    >
      <F0Box display="flex" flexDirection="column" gap="md">
        {action === "publish" && (
          <F0Text
            content="Publishing makes the training visible to its participants. They will receive an email and an in-app notification. You can still edit content, schedule groups and update participants after publishing."
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
              onChange={(value) => setReason(value ?? "")}
              rows={3}
            />
          </>
        )}

        {action === "settings" && (
          <>
            <Input
              label="Name"
              value={name}
              onChange={(value) => setName(value ?? "")}
            />
            <Textarea
              label="Description"
              value={description}
              onChange={(value) => setDescription(value ?? "")}
              rows={4}
            />
            <F0Select
              label="Type"
              value={type}
              onChange={(value: string) => setType(value)}
              options={TYPE_OPTIONS}
            />
            <F0Select
              label="Visibility"
              value={visibility}
              onChange={(value: string) => setVisibility(value)}
              options={VISIBILITY_OPTIONS}
            />
            <F0Checkbox
              checked={notify}
              onCheckedChange={(checked) => setNotify(checked === true)}
              title="Notify participants when content is updated"
            />
            <F0Checkbox
              checked={autoArchive}
              onCheckedChange={(checked) => setAutoArchive(checked === true)}
              title="Auto-archive 30 days after completion"
            />
          </>
        )}
      </F0Box>
    </F0Dialog>
  )
}
