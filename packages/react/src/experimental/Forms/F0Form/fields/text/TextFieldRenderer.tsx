import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { Input } from "../../../Fields/Input"
import type { TextFieldDefinition } from "./types"
import { FORM_SIZE } from "../../constants"

interface TextFieldRendererProps {
  field: TextFieldDefinition
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
}

/**
 * Renders a text input field
 */
export function TextFieldRenderer({
  field,
  formField,
  error,
  loading,
}: TextFieldRendererProps) {
  return (
    <Input
      label={field.label}
      type={field.inputType ?? "text"}
      placeholder={field.placeholder}
      disabled={field.disabled}
      {...formField}
      value={formField.value != null ? String(formField.value) : ""}
      size={FORM_SIZE}
      hideLabel
      error={error}
      loading={loading}
    />
  )
}
