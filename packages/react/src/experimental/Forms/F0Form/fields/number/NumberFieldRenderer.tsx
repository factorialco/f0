import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { NumberInput } from "../../../Fields/NumberInput"
import type { NumberFieldDefinition } from "./types"
import { FORM_SIZE } from "../../constants"

interface NumberFieldRendererProps {
  field: NumberFieldDefinition
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
}

/**
 * Renders a number input field
 */
export function NumberFieldRenderer({
  field,
  formField,
  error,
  loading,
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
      size={FORM_SIZE}
      hideLabel
      error={error}
      loading={loading}
    />
  )
}
