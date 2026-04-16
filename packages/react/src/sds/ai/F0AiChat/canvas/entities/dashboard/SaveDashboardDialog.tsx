import { useCallback, useState } from "react"

import { F0Dialog } from "@/patterns/F0Dialog"
import { Input } from "@/experimental/Forms/Fields/Input"
import { useI18n } from "@/lib/providers/i18n"

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

  const handleSave = useCallback(async () => {
    if (!title.trim()) return
    setIsSaving(true)
    try {
      await onSave(title.trim(), description.trim())
      onClose()
    } finally {
      setIsSaving(false)
    }
  }, [title, description, onSave, onClose])

  return (
    <F0Dialog
      position="center"
      isOpen={isOpen}
      onClose={onClose}
      width="md"
      title={t("ai.dashboard.saveDialog.title")}
      container={null}
      primaryAction={{
        label: isSaving
          ? t("ai.dashboard.saveDialog.save")
          : t("ai.dashboard.saveDialog.save"),
        onClick: handleSave,
      }}
      secondaryAction={{
        label: t("ai.dashboard.saveDialog.cancel"),
        onClick: onClose,
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
        <Input
          label={t("ai.dashboard.saveDialog.descriptionLabel")}
          placeholder={t("ai.dashboard.saveDialog.descriptionPlaceholder")}
          value={description}
          onChange={(value) => setDescription(value)}
          size="md"
          type="text"
        />
      </div>
    </F0Dialog>
  )
}
