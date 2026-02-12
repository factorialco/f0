import { useCallback, useMemo } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

import type { F0DateTimeField, F0DateField, F0TimeField } from "./types"
import { DateFieldRenderer } from "./DateFieldRenderer"
import { TimeFieldRenderer } from "./TimeFieldRenderer"

interface DateTimeFieldRendererProps {
  field: F0DateTimeField
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
}

/**
 * Extracts time string (HH:mm) from a Date
 */
function dateToTimeString(date: Date | undefined): string {
  if (!date) return ""

  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")

  return `${hours}:${minutes}`
}

/**
 * Combines a date and time string into a single Date object
 */
function combineDateAndTime(
  date: Date | undefined,
  timeString: string | undefined
): Date | undefined {
  if (!date) return undefined

  const result = new Date(date)

  if (timeString) {
    const [hours, minutes, seconds] = timeString.split(":").map(Number)
    result.setHours(hours ?? 0, minutes ?? 0, seconds ?? 0, 0)
  } else {
    result.setHours(0, 0, 0, 0)
  }

  return result
}

/**
 * Renders a datetime field as two inputs: a date picker and a time input.
 * Composes DateFieldRenderer and TimeFieldRenderer for maximum reuse.
 */
export function DateTimeFieldRenderer({
  field,
  formField,
  error,
  loading,
}: DateTimeFieldRendererProps) {
  const currentDate = formField.value as Date | undefined

  // Extract the time portion from the current Date value
  const timeValue = useMemo(() => dateToTimeString(currentDate), [currentDate])

  // Handle date changes - preserve the time portion
  const handleDateChange = useCallback(
    (newDate: Date | undefined) => {
      if (!newDate) {
        formField.onChange(undefined)
        return
      }
      // Combine new date with existing time
      formField.onChange(combineDateAndTime(newDate, timeValue))
    },
    [formField, timeValue]
  )

  // Handle time changes - preserve the date portion
  const handleTimeChange = useCallback(
    (newTime: string | undefined) => {
      if (!currentDate) {
        // If no date is set, use today's date
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        formField.onChange(combineDateAndTime(today, newTime))
        return
      }
      formField.onChange(combineDateAndTime(currentDate, newTime))
    },
    [formField, currentDate]
  )

  // Create synthetic field and formField props for DateFieldRenderer
  const dateField: F0DateField = useMemo(
    () => ({
      id: `${field.id}-date`,
      type: "date",
      label: field.label,
      placeholder: field.placeholder,
      disabled: field.disabled,
      granularities: field.granularities ?? ["day"],
      presets: field.presets,
      minDate: field.minDate,
      maxDate: field.maxDate,
      clearable: field.clearable,
    }),
    [field]
  )

  const dateFormField: ControllerRenderProps<FieldValues> = useMemo(
    () => ({
      ...formField,
      value: currentDate,
      onChange: handleDateChange,
    }),
    [formField, currentDate, handleDateChange]
  )

  // Create synthetic field and formField props for TimeFieldRenderer
  const timeField: F0TimeField = useMemo(
    () => ({
      id: `${field.id}-time`,
      type: "time",
      label: "Time",
      disabled: field.disabled,
      clearable: false, // Time clearing is handled via date clear
    }),
    [field.id, field.disabled]
  )

  const timeFormField: ControllerRenderProps<FieldValues> = useMemo(
    () => ({
      ...formField,
      value: timeValue,
      onChange: handleTimeChange,
    }),
    [formField, timeValue, handleTimeChange]
  )

  return (
    <div className="flex gap-2">
      <div className="flex-1">
        <DateFieldRenderer
          field={dateField}
          formField={dateFormField}
          error={error}
          loading={loading}
        />
      </div>
      <div className="w-32">
        <TimeFieldRenderer
          field={timeField}
          formField={timeFormField}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
