import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { F0DatePicker, DatePickerValue } from "@/components/F0DatePicker"

import type { DateFieldDefinition } from "./types"
import { FORM_SIZE } from "../../constants"

interface DateFieldRendererProps {
  field: DateFieldDefinition
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
}

/**
 * Renders a date picker field
 */
export function DateFieldRenderer({
  field,
  formField,
  error,
  loading,
}: DateFieldRendererProps) {
  return (
    <F0DatePicker
      label={field.label}
      placeholder={field.placeholder}
      disabled={field.disabled}
      granularities={field.granularities}
      minDate={field.minDate}
      maxDate={field.maxDate}
      presets={field.presets}
      clearable={field.clearable}
      value={formField.value as DatePickerValue | undefined}
      onChange={(value) => formField.onChange(value)}
      size={FORM_SIZE}
      hideLabel
      error={error}
      loading={loading}
    />
  )
}
