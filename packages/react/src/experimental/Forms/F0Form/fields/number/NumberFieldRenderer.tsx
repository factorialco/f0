import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { NumberInput } from "../../../Fields/NumberInput"
import type { NumberFieldDefinition } from "./types"

interface NumberFieldRendererProps {
  field: NumberFieldDefinition
  formField: ControllerRenderProps<FieldValues>
}

/**
 * Renders a number input field
 */
export function NumberFieldRenderer({
  field,
  formField,
}: NumberFieldRendererProps) {
  return (
    <NumberInput
      label={field.label}
      placeholder={field.placeholder}
      disabled={field.disabled}
      step={field.step}
      min={field.min}
      max={field.max}
      locale={field.locale ?? "en-US"}
      {...formField}
      value={formField.value != null ? Number(formField.value) : undefined}
      onChange={(value) => formField.onChange(value)}
      hideLabel
    />
  )
}
