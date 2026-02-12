import { useCallback, useMemo } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { Input } from "@/experimental/Forms/Fields/Input"

import type { F0TimeField } from "./types"
import { FORM_SIZE } from "../../constants"

export interface TimeFieldRendererProps {
  field: F0TimeField
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
}

/**
 * Extracts time string (HH:mm) from a Date
 */
function dateToTimeString(date: Date | undefined): string {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) return ""

  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")

  return `${hours}:${minutes}`
}

/**
 * Converts a time string (HH:mm) to a Date object.
 * Uses today's date as the base.
 */
function timeStringToDate(timeString: string): Date | undefined {
  if (!timeString) return undefined

  const [hours, minutes] = timeString.split(":").map(Number)
  if (isNaN(hours) || isNaN(minutes)) return undefined

  const date = new Date()
  date.setHours(hours, minutes, 0, 0)
  return date
}

/**
 * Renders a time input field using the native HTML time input.
 * Stores time as a Date object, displays as HH:mm format.
 */
export function TimeFieldRenderer({
  field,
  formField,
  error,
  loading,
}: TimeFieldRendererProps) {
  // Convert Date value to HH:mm string for the native time input
  const timeValue = useMemo(
    () => dateToTimeString(formField.value as Date | undefined),
    [formField.value]
  )

  // Handle native time input change
  const handleChange = useCallback(
    (value: string | undefined) => {
      if (!value) {
        formField.onChange(undefined)
        return
      }

      // Convert the time string to a Date object
      const date = timeStringToDate(value)
      formField.onChange(date)
    },
    [formField]
  )

  return (
    <Input
      type="time"
      label={field.label}
      disabled={field.disabled}
      value={timeValue}
      onChange={handleChange}
      size={FORM_SIZE}
      hideLabel
      error={error}
      loading={loading}
      clearable={field.clearable}
      name={formField.name}
      ref={formField.ref}
    />
  )
}
