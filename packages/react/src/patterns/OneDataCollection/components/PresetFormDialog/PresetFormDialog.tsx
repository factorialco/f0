import { z } from "zod"

import { Delete, Share } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { F0Dialog } from "@/components/dialog-alike/F0Dialog"
import { f0FormField, F0Form, useF0Form } from "@/patterns/F0Form"
import { useF0FormDefinition } from "@/patterns/F0WizardForm"

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
 * Dialog wrapping an F0Form (title + optional description), reused for both
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
  const { formRef, submit, isSubmitting, hasErrors } = useF0Form()

  // `submit()` rejects when validation fails (e.g. a duplicate name). The errors
  // are already surfaced inline on the fields, so swallow the rejection to avoid
  // an unhandled promise rejection.
  const handleSubmit = () => {
    void submit().catch(() => {})
  }

  const takenNames = new Set(
    existingNames.map((name) => name.trim().toLowerCase())
  )

  const schema = z
    .object({
      title: f0FormField.text({
        label: presets.nameLabel,
        placeholder: presets.namePlaceholder,
        minLength: 1,
      }),
      description: f0FormField.textarea({
        label: presets.descriptionLabel,
        placeholder: presets.descriptionPlaceholder,
        optional: true,
        rows: 4,
      }),
    })
    // Names must be unique across views (case-insensitive). Surfaces the error on
    // the title field; runs on submit, so it blocks saving a duplicate.
    .superRefine((data, ctx) => {
      const name = (data.title ?? "").trim().toLowerCase()
      if (name && takenNames.has(name)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["title"],
          message: presets.duplicateName,
        })
      }
    })

  const formDefinition = useF0FormDefinition({
    // Key the form by mode + title so defaults re-seed when switching views.
    name: `preset-${mode}-${initialValues?.title ?? ""}`,
    schema,
    defaultValues: {
      title: initialValues?.title ?? "",
      description: initialValues?.description ?? "",
    },
    onSubmit: async ({ data }) => {
      if (!data.title) {
        return { success: false }
      }

      onSubmit({
        title: data.title,
        description: data.description || undefined,
      })
      return { success: true }
    },
    submitConfig: { type: "default", hideSubmitButton: true },
  })

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
        loading: isSubmitting,
        disabled: hasErrors,
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
        <F0Form formDefinition={formDefinition} formRef={formRef} />
      </div>
    </F0Dialog>
  )
}
