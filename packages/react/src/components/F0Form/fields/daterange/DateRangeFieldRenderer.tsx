import { useMemo } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { F0DatePicker, DatePickerValue } from "@/components/F0DatePicker"

import type { F0DateRangeField, DateRangeValue } from "./types"
import { FORM_SIZE } from "../../constants"

interface DateRangeFieldRendererProps {
  field: F0DateRangeField
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
}

/**
 * Converts a DateRangeValue to DatePickerValue format expected by F0DatePicker
 */
function dateRangeToPickerValue(
  dateRange: DateRangeValue | undefined
): DatePickerValue | undefined {
  if (!dateRange?.from || !dateRange?.to) return undefined
  return {
    value: { from: dateRange.from, to: dateRange.to },
    granularity: "range",
  }
}

/**
 * Extracts a DateRangeValue from DatePickerValue returned by F0DatePicker
 */
function pickerValueToDateRange(
  value: DatePickerValue | undefined
): DateRangeValue | undefined {
  if (!value?.value?.from || !value?.value?.to) return undefined
  return {
    from: value.value.from,
    to: value.value.to,
  }
}

/**
 * Renders a date range picker field.
 * Handles conversion between DateRangeValue (used by Zod schema) and DatePickerValue (used by F0DatePicker).
 */
export function DateRangeFieldRenderer({
  field,
  formField,
  error,
  loading,
}: DateRangeFieldRendererProps) {
  // Convert form DateRangeValue to DatePickerValue for the picker
  const pickerValue = useMemo(
    () => dateRangeToPickerValue(formField.value as DateRangeValue | undefined),
    [formField.value]
  )

  // Handle picker change by extracting DateRangeValue and updating form
  const handleChange = (value: DatePickerValue | undefined) => {
    formField.onChange(pickerValueToDateRange(value))
  }

  // Build label with from/to labels if provided
  const label =
    field.fromLabel && field.toLabel
      ? `${field.label} (${field.fromLabel} - ${field.toLabel})`
      : field.label

  return (
    <F0DatePicker
      label={label}
      placeholder={field.placeholder}
      disabled={field.disabled}
      granularities={field.granularities ?? ["range"]}
      minDate={field.minDate}
      maxDate={field.maxDate}
      presets={field.presets}
      clearable={field.clearable}
      value={pickerValue}
      onChange={handleChange}
      size={FORM_SIZE}
      hideLabel
      error={error}
      loading={loading}
    />
  )
}
