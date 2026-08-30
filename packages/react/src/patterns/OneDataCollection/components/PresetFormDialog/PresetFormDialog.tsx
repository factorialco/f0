import { useEffect, useId, useRef, useState } from "react"

import { F0TextAreaInput } from "@/components/F0TextAreaInput"
import { F0TextInput } from "@/components/F0TextInput"
import { Delete, Share } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { F0Dialog } from "@/patterns/F0Dialog"

export type PresetFormValues = {
  title: string
  description?: string
}

interface PresetFormDialogProps {
  isOpen: boolean
  /** "create" → "Save view"; "update" → edit an existing custom view. */
  mode: "create" | "update"
  /** Seed values when updating an existing view. */
  initialValues?: PresetFormValues
  onClose: () => void
  /** Called with the validated form values when the user saves. */
  onSubmit: (values: PresetFormValues) => void
  /**
   * Called when the user removes the view. Only shown in "update" mode, as a
   * critical action in the dialog's overflow ("extra actions") menu.
   */
  onDelete?: () => void
  /**
   * Called when the user shares the view (copies a shareable link to the
   * clipboard). Only shown in "update" mode, in the overflow menu.
   */
  onShare?: () => void
  /**
   * Names of existing views to validate the title against (case-insensitive) —
   * saving a duplicate name raises an inline error. The view being edited should
   * be excluded by the caller so renaming it to itself is allowed.
   */
  existingNames?: string[]
}

/**
 * Dialog for editing a preset title and optional description, reused for both
 * creating a new custom view and renaming an existing one. The captured view
 * state (filters/sorting/view/grouping/columns) is owned by OneDataCollection;
 * this dialog only collects the title and description.
 */
export function PresetFormDialog({
  isOpen,
  mode,
  initialValues,
  onClose,
  onSubmit,
  onDelete,
  onShare,
  existingNames = [],
}: PresetFormDialogProps) {
  const i18n = useI18n()
  const presets = i18n.collections.presets
  const [title, setTitle] = useState(initialValues?.title ?? "")
  const [description, setDescription] = useState(
    initialValues?.description ?? ""
  )
  const [titleError, setTitleError] = useState<string>()
  const titleInputRef = useRef<HTMLInputElement>(null)
  const titleErrorId = useId()

  useEffect(() => {
    if (!isOpen) return

    setTitle(initialValues?.title ?? "")
    setDescription(initialValues?.description ?? "")
    setTitleError(undefined)
  }, [initialValues?.description, initialValues?.title, isOpen, mode])

  const handleSubmit = () => {
    const normalizedTitle = title.trim().toLowerCase()
    const duplicate = existingNames.some(
      (name) => name.trim().toLowerCase() === normalizedTitle
    )

    if (duplicate) {
      setTitleError(presets.duplicateName)
      titleInputRef.current?.focus()
      return
    }

    if (!normalizedTitle) return

    onSubmit({
      title,
      description: description || undefined,
    })
  }

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={mode === "create" ? presets.createTitle : presets.updateTitle}
      description={
        mode === "create"
          ? presets.createDescription
          : presets.updateDescription
      }
      primaryAction={{
        label: presets.save,
        onClick: handleSubmit,
        disabled: !title.trim(),
      }}
      secondaryAction={{
        label: presets.cancel,
        onClick: onClose,
      }}
      otherActions={
        mode === "update"
          ? [
              ...(onShare
                ? [{ label: presets.share, onClick: onShare, icon: Share }]
                : []),
              ...(onDelete
                ? [
                    {
                      label: presets.delete,
                      onClick: onDelete,
                      icon: Delete,
                      critical: true,
                    },
                  ]
                : []),
            ]
          : []
      }
      disableContentPadding
    >
      <div className="flex flex-col gap-4">
        <F0TextInput
          ref={titleInputRef}
          label={presets.nameLabel}
          placeholder={presets.namePlaceholder}
          value={title}
          onChange={(value) => {
            setTitle(value)
            setTitleError(undefined)
          }}
          error={titleError}
          required
          onPressEnter={handleSubmit}
          aria-invalid={titleError ? true : undefined}
          aria-describedby={titleError ? titleErrorId : undefined}
        />
        {titleError && (
          <span id={titleErrorId} className="sr-only" role="alert">
            {titleError}
          </span>
        )}
        <F0TextAreaInput
          label={presets.descriptionLabel}
          placeholder={presets.descriptionPlaceholder}
          value={description}
          onChange={setDescription}
          rows={4}
        />
      </div>
    </F0Dialog>
  )
}
