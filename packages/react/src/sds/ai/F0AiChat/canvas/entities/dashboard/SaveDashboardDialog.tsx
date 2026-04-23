import { useCallback, useEffect, useState } from "react"

import { Input } from "@/experimental/Forms/Fields/Input"
import { useI18n } from "@/lib/providers/i18n"
import { F0Dialog } from "@/patterns/F0Dialog"
import { Textarea } from "@/ui/textarea"

type SaveDashboardDialogProps = {
  isOpen: boolean
  onClose: () => void
  onSave: (title: string, description: string) => Promise<void>
  defaultTitle: string
  defaultDescription?: string
}

export function SaveDashboardDialog({
  isOpen,
  onClose,
  onSave,
  defaultTitle,
  defaultDescription = "",
}: SaveDashboardDialogProps) {
  const { t } = useI18n()
  const [title, setTitle] = useState(defaultTitle)
  const [description, setDescription] = useState(defaultDescription)
  const [isSaving, setIsSaving] = useState(false)

  // Reset local state when the dialog opens so reopening with new defaults
  // doesn't keep stale values from the previous open.
  useEffect(() => {
    if (isOpen) {
      setTitle(defaultTitle)
      setDescription(defaultDescription)
    }
  }, [isOpen, defaultTitle, defaultDescription])

  const handleSave = useCallback(async () => {
    if (!title.trim() || isSaving) return
    setIsSaving(true)
    try {
      await onSave(title.trim(), description.trim())
      onClose()
    } finally {
      setIsSaving(false)
    }
  }, [title, description, isSaving, onSave, onClose])

  const isTitleEmpty = !title.trim()

  return (
    <F0Dialog
      position="center"
      isOpen={isOpen}
      onClose={onClose}
      width="sm"
      title={t("ai.dashboard.saveDialog.title")}
      container={null}
      primaryAction={{
        label: t("ai.dashboard.saveDialog.save"),
        onClick: handleSave,
        loading: isSaving,
        disabled: isSaving || isTitleEmpty,
      }}
      secondaryAction={{
        label: t("ai.dashboard.saveDialog.cancel"),
        onClick: onClose,
        disabled: isSaving,
      }}
    >
      <div className="flex flex-col gap-4">
        <Input
          autoFocus
          label={t("ai.dashboard.saveDialog.titleLabel")}
          value={title}
          onChange={(value) => setTitle(value)}
          size="md"
          type="text"
        />
        <Textarea
          label={t("ai.dashboard.saveDialog.descriptionLabel")}
          placeholder={t("ai.dashboard.saveDialog.descriptionPlaceholder")}
          value={description}
          onChange={(value) => setDescription(value)}
          size="md"
          rows={10}
        />
      </div>
    </F0Dialog>
  )
}
