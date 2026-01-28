import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { Textarea } from "../../../Fields/TextArea"
import type { TextareaFieldDefinition } from "./types"
import { FORM_SIZE } from "../../constants"

interface TextareaFieldRendererProps {
  field: TextareaFieldDefinition
  formField: ControllerRenderProps<FieldValues>
}

/**
 * Renders a textarea field
 */
export function TextareaFieldRenderer({
  field,
  formField,
}: TextareaFieldRendererProps) {
  return (
    <Textarea
      label={field.label}
      placeholder={field.placeholder}
      disabled={field.disabled}
      rows={field.rows}
      maxLength={field.maxLength}
      {...formField}
      value={formField.value != null ? String(formField.value) : ""}
      size={FORM_SIZE}
      hideLabel
    />
  )
}
