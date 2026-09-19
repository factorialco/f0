import { ControllerRenderProps } from "react-hook-form"
import type { InputFieldStatus } from "@/components/F0InputField/types"
import { F0TextAreaInput } from "@/components/F0TextAreaInput"
import { FORM_SIZE } from "../../constants"
import type { InlineEditing } from "../inline/useInlineField"
import type { ResolvedField } from "../types"
import type { F0TextareaField } from "./types"

interface TextareaFieldRendererProps {
  field: ResolvedField<F0TextareaField>
  formField: ControllerRenderProps
  error?: boolean
  loading?: boolean
  status?: InputFieldStatus

  inline?: InlineEditing
}

/**
 * Renders a textarea field
 */
export function TextareaFieldRenderer({
  field,
  formField,
  error,
  loading,
  status,
  inline,
}: TextareaFieldRendererProps) {
  const shared = {
    ...formField,
    label: field.label,
    placeholder: field.placeholder,
    disabled: field.disabled,
    rows: field.rows,
    maxLength: field.maxLength,
    maxHeight: field.maxHeight,
    value: formField.value != null ? String(formField.value) : "",
    size: FORM_SIZE,
    hideLabel: true,
    error,
    status,
    loading,
  }

  // Separate branches preserve the discriminated prop union.
  if (inline) {
    return (
      <F0TextAreaInput
        {...shared}
        variant="inline"
        editing={inline.editing}
        onDismiss={inline.onDismiss}
        autoFocus={inline.autoFocus}
      />
    )
  }

  return <F0TextAreaInput {...shared} />
}
