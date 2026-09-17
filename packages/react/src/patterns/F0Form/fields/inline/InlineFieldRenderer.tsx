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
  field: F0Field
  formField: import("react-hook-form").ControllerRenderProps<
    import("react-hook-form").FieldValues
  >
  fieldState: FieldState
  isSubmitting: boolean
  isRequired?: boolean
  values: Record<string, unknown>
  isFormLoading?: boolean
  /** Puts a field's value back to what it was when the edit started. */
  restoreValue: (value: unknown) => void
}

/**
 * Layer 2 of the inline mode: it owns the field's read/edit mode, decides which
 * component draws which field type, and hands `InlineFieldRow` a finished list
 * of actions. The row never learns what a field is; the components never learn
 * what a mode is.
 */
export function InlineFieldRenderer({
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
  // A select opens a list and a date opens a calendar; neither puts a caret
  // anywhere, so neither may promise one.
  const opensPopup = isSelect || (supported && field.type === "date")
  const editable = field.editable ?? true

  if (!supported) {
    warnUnsupportedInlineField(field)
  }

  // A toggle commits on click, so it is never in an edit mode; an unsupported
  // field has no inline presentation to enter. Both stay in reading forever.
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
      // The read-only tier of a toggle is the disabled control: there is no
      // read presentation to fall back to. A select reads as text either way,
      // but its chevron is an offer to open a list, so a row that cannot be
      // activated must not draw one.
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

  // The same text `FormMessage` would print for this error, resolved here
  // because the row takes a node and knows nothing about validation.
  const message = fieldState.error
    ? (fieldState.error.message ??
      (isRequired ? forms.validation.required : forms.validation.invalidType))
    : undefined

  // A select already carries its own affordance: the chevron the inline
  // variant reveals at the trailing edge of the value. A pencil beside it
  // would be a second icon for the same click.
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
