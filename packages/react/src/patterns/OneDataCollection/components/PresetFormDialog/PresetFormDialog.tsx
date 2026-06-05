import { z } from "zod"

import { F0Button } from "@/components/F0Button"
import { F0TextInput } from "@/components/F0TextInput"
import { Delete } from "@/icons/app"
import { Picker } from "@/kits/Social/Reactions/Picker"
import { useI18n } from "@/lib/providers/i18n"
import { F0Dialog } from "@/patterns/F0Dialog"
import { f0FormField, F0Form, useF0Form } from "@/patterns/F0Form"
import { useF0FormDefinition } from "@/patterns/F0WizardForm"

export type PresetFormValues = {
  title: string
  description?: string
  /** Optional emoji shown on the preset chip. */
  emoji?: string
}

interface PresetFormDialogProps {
  isOpen: boolean
  /** "create" → "Save as preset"; "update" → edit an existing custom preset. */
  mode: "create" | "update"
  /** Seed values when updating an existing preset. */
  initialValues?: PresetFormValues
  onClose: () => void
  /** Called with the validated form values when the user saves. */
  onSubmit: (values: PresetFormValues) => void
  /**
   * Called when the user removes the preset. Only shown in "update" mode, as a
   * critical action between Cancel and Save in the dialog footer.
   */
  onDelete?: () => void
}

/**
 * Dialog wrapping an F0Form (title + optional description), reused for both
 * creating a new custom preset and updating an existing one. The captured view
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
}: PresetFormDialogProps) {
  const i18n = useI18n()
  const presets = i18n.collections.presets
  const { formRef, submit, isSubmitting, hasErrors } = useF0Form()

  const schema = z.object({
    emojiAndTitle: f0FormField(
      z.object({
        emoji: z.string().optional(),
        title: z.string().min(1),
      }),
      {
        fieldType: "custom",
        render: (props) => (
          <div className="-mb-3 flex flex-row items-end gap-2">
            <div className="[&>button]:size-10">
              <Picker
                label={presets.emojiLabel}
                lastEmojiReaction={props.value?.emoji}
                size="md"
                onSelect={(emoji) => props.onChange({ ...props.value, emoji })}
              />
            </div>
            <div className="flex-1">
              <F0TextInput
                label=""
                placeholder={presets.namePlaceholder}
                value={props.value?.title}
                size="md"
                onChange={(value: string) =>
                  props.onChange({ ...props.value, title: value })
                }
              />
            </div>
          </div>
        ),
        label: presets.emojiLabel,
      }
    ),
    description: f0FormField.textarea({
      label: "",
      placeholder: presets.descriptionPlaceholder,
      optional: true,
      rows: 4,
    }),
  })

  const formDefinition = useF0FormDefinition({
    // Key the form by mode + title so defaults re-seed when switching presets.
    name: `preset-${mode}-${initialValues?.title ?? ""}`,
    schema,
    defaultValues: {
      emojiAndTitle: {
        emoji: initialValues?.emoji ?? "",
        title: initialValues?.title ?? "",
      },
      description: initialValues?.description ?? "",
    },
    onSubmit: async ({ data }) => {
      if (!data.emojiAndTitle?.title) {
        return { success: false }
      }

      onSubmit({
        title: data.emojiAndTitle?.title,
        description: data.description || undefined,
        emoji: data.emojiAndTitle?.emoji || undefined,
      })
      return { success: true }
    },
    submitConfig: { type: "default", hideSubmitButton: true },
  })

  const showRemove = mode === "update" && !!onDelete

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
      disableContentPadding
    >
      <div className="flex flex-col">
        <F0Form formDefinition={formDefinition} formRef={formRef} />
        {/*
          Custom footer (instead of the dialog's primary/secondary actions) so
          the "Remove" action can sit between Cancel and Save.
        */}
        <div className="flex flex-row items-center justify-end gap-2 border-x-0 border-b-0 border-t border-solid border-f1-border-secondary px-4 py-3">
          <F0Button
            variant="outline"
            label={presets.cancel}
            onClick={onClose}
          />
          {showRemove && (
            <F0Button
              variant="critical"
              label={presets.delete}
              icon={Delete}
              onClick={onDelete}
            />
          )}
          <F0Button
            variant="default"
            label={presets.save}
            onClick={submit}
            loading={isSubmitting}
            disabled={hasErrors}
          />
        </div>
      </div>
    </F0Dialog>
  )
}
