import { useMemo } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { F0DatePicker, DatePickerValue } from "@/components/F0DatePicker"

import type { F0DateField } from "./types"
import { FORM_SIZE } from "../../constants"

interface DateFieldRendererProps {
  field: F0DateField
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
}

/**
 * Converts a Date to DatePickerValue format expected by F0DatePicker
 */
function dateToPickerValue(
  date: Date | undefined,
  granularity: F0DateField["granularities"]
): DatePickerValue | undefined {
  if (!date) return undefined
  return {
    value: { from: date, to: date },
    granularity: granularity?.[0] ?? "day",
  }
}

/**
 * Extracts a Date from DatePickerValue returned by F0DatePicker
 */
function pickerValueToDate(
  value: DatePickerValue | undefined
): Date | undefined {
  return value?.value?.from
}

/**
 * Renders a date picker field.
 * Handles conversion between Date (used by Zod schema) and DatePickerValue (used by F0DatePicker).
 */
export function DateFieldRenderer({
  field,
  formField,
  error,
  loading,
}: DateFieldRendererProps) {
  // Convert form Date value to DatePickerValue for the picker
  const pickerValue = useMemo(
    () =>
      dateToPickerValue(
        formField.value as Date | undefined,
        field.granularities
      ),
    [formField.value, field.granularities]
  )

  // Handle picker change by extracting Date and updating form
  const handleChange = (value: DatePickerValue | undefined) => {
    formField.onChange(pickerValueToDate(value))
  }

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
      value={pickerValue}
      onChange={handleChange}
      size={FORM_SIZE}
      hideLabel
      error={error}
      loading={loading}
    />
  )
}
