import { useCallback, useMemo } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

import type {
  ResolvedDateTimeField,
  ResolvedDateField,
  ResolvedTimeField,
} from "./types"
import { DateFieldRenderer } from "./DateFieldRenderer"
import { TimeFieldRenderer } from "./TimeFieldRenderer"
import { dateToTimeString, combineDateAndTime } from "./utils"

interface DateTimeFieldRendererProps {
  field: ResolvedDateTimeField
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
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

  // Extract the time portion from the current Date value (for combining with date changes)
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
  // TimeFieldRenderer now passes a Date object
  const handleTimeChange = useCallback(
    (newTimeDate: Date | undefined) => {
      if (!newTimeDate) {
        // Keep the date but clear the time
        if (currentDate) {
          const result = new Date(currentDate)
          result.setHours(0, 0, 0, 0)
          formField.onChange(result)
        }
        return
      }
      // Extract time from the new Date and combine with current date
      const timeString = dateToTimeString(newTimeDate)
      if (!currentDate) {
        // If no date is set, use today's date
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        formField.onChange(combineDateAndTime(today, timeString))
        return
      }
      formField.onChange(combineDateAndTime(currentDate, timeString))
    },
    [formField, currentDate]
  )

  // Create synthetic field and formField props for DateFieldRenderer
  const dateField: ResolvedDateField = useMemo(
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
  const timeField: ResolvedTimeField = useMemo(
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
      value: currentDate,
      onChange: handleTimeChange,
    }),
    [formField, currentDate, handleTimeChange]
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
