import { useCallback } from "react"
import type { InlineDismissReason } from "@/components/F0InputField/types"
import { Pencil } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import type { FieldState } from "../renderFieldInput"
import { renderFieldInput } from "../renderFieldInput"
import type { F0Field } from "../types"
import { useInlineCopyValue } from "./copyValue"
import { InlineFieldRow } from "./InlineFieldRow"
import {
  isInlineSupported,
  isInlineToggle,
  warnUnsupportedInlineField,
} from "./support"
import type { RowAction } from "./types"
import { useInlineField } from "./useInlineField"

export interface InlineFieldRendererProps {
  /** Anchor id for section navigation and error scrolling. */
  anchorId?: string
  field: F0Field
  formField: import("react-hook-form").ControllerRenderProps<
    import("react-hook-form").FieldValues
  >
  fieldState: FieldState
  isSubmitting: boolean
  isRequired?: boolean
  values: Record<string, unknown>
  isFormLoading?: boolean

  restoreValue: (value: unknown) => void
}

/** Owns edit mode and builds the row value and actions. */
export function InlineFieldRenderer({
  anchorId,
  field,
  formField,
  fieldState,
  isSubmitting,
  isRequired,
  values,
  isFormLoading,
  restoreValue,
}: InlineFieldRendererProps) {
  const { t, forms } = useI18n()

  const supported = isInlineSupported(field)
  const toggle = isInlineToggle(field)
  const isSelect = supported && field.type === "select"

  const opensPopup = isSelect || (supported && field.type === "date")
  const editable = field.editable ?? true

  if (!supported) {
    warnUnsupportedInlineField(field)
  }

  const activatable = supported && !toggle && editable

  const readValue = useCallback(() => formField.value, [formField.value])

  const { editing, activate, dismiss, activatorRef } = useInlineField({
    editable: activatable,
    hasError: !!fieldState.error,
    readValue,
    restoreValue,
  })

  const onDismiss = useCallback(
    (reason: InlineDismissReason) => dismiss(reason),
    [dismiss]
  )

  const copyValue = useInlineCopyValue(field, formField.value)

  const input = renderFieldInput({
    field:
      // Disable read-only toggles and hide read-only select affordances.
      !editable && (toggle || isSelect) ? { ...field, disabled: true } : field,
    formField,
    fieldState,
    fieldStatus: field.status,
    isSubmitting,
    isRequired,
    values,
    isFormLoading,
    inline: supported ? { editing, onDismiss } : undefined,
  })

  // Resolve validation copy before passing it to the presentation-only row.
  const message = fieldState.error
    ? (fieldState.error.message ??
      (isRequired ? forms.validation.required : forms.validation.invalidType))
    : undefined

  // The select already provides a chevron.
  const actions: RowAction[] =
    activate && !isSelect
      ? [
          {
            key: "edit",
            icon: Pencil,
            label: t("forms.inline.edit", { label: field.label }),
            onClick: activate,
          },
        ]
      : []

  return (
    <InlineFieldRow
      ref={activatorRef}
      anchorId={anchorId}
      label={field.label}
      hint={field.helpText}
      value={input}
      actions={actions}
      copyValue={field.copyable ? copyValue : undefined}
      onActivate={activate}
      activatorCursor={opensPopup ? "pointer" : "caret"}
      editing={editing}
      message={message}
    />
  )
}
