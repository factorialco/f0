import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { Input } from "../../../Fields/Input"
import type { TextFieldDefinition } from "./types"

interface TextFieldRendererProps {
  field: TextFieldDefinition
  formField: ControllerRenderProps<FieldValues>
}

/**
 * Renders a text input field
 */
export function TextFieldRenderer({
  field,
  formField,
}: TextFieldRendererProps) {
  return (
    <Input
      label={field.label}
      type={field.inputType ?? "text"}
      placeholder={field.placeholder}
      disabled={field.disabled}
      {...formField}
      value={formField.value != null ? String(formField.value) : ""}
    />
  )
}
