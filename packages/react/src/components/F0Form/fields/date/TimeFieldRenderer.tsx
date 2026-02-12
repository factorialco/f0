import { useCallback, useEffect, useState } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { Input } from "@/experimental/Forms/Fields/Input"
import { Clock } from "@/icons/app"

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
  if (!date) return ""

  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")

  return `${hours}:${minutes}`
}

/**
 * Converts a time string (HH:mm) to a Date object.
 * Uses today's date as the base.
 */
function timeStringToDate(timeString: string): Date {
  const [hours, minutes] = timeString.split(":").map(Number)
  const date = new Date()
  date.setHours(hours ?? 0, minutes ?? 0, 0, 0)
  return date
}

/**
 * Auto-formats time input as user types.
 * Only allows digits, auto-inserts colon after first 2 digits.
 */
function formatTimeInput(value: string): string {
  // Remove any non-digit characters
  const digits = value.replace(/\D/g, "")

  if (!digits) return ""

  // Limit to 4 digits max
  const trimmed = digits.slice(0, 4)

  // Always show colon after first 2 digits
  if (trimmed.length <= 2) {
    return trimmed
  }

  return `${trimmed.slice(0, 2)}:${trimmed.slice(2)}`
}

/**
 * Validates and clamps time values to valid ranges.
 * Returns validated time string.
 */
function validateTimeValue(value: string): string {
  if (!value) return ""

  const parts = value.split(":")
  const hours = Math.min(23, Math.max(0, parseInt(parts[0] || "0", 10)))
  const minutes = Math.min(59, Math.max(0, parseInt(parts[1] || "0", 10)))

  const h = String(hours).padStart(2, "0")
  const m = String(minutes).padStart(2, "0")

  return `${h}:${m}`
}

/**
 * Renders a time input field with a clock icon.
 * Uses a text input to avoid browser native time picker.
 * Stores time as a Date object, displays as HH:mm format.
 * Only allows digit input, auto-inserts ":" after hours.
 */
export function TimeFieldRenderer({
  field,
  formField,
  error,
  loading,
}: TimeFieldRendererProps) {
  // Local state for the display value (allows showing partial input while typing)
  const [displayValue, setDisplayValue] = useState(() =>
    dateToTimeString(formField.value as Date | undefined)
  )

  // Sync display value when form value changes externally
  useEffect(() => {
    const formTimeString = dateToTimeString(formField.value as Date | undefined)
    setDisplayValue(formTimeString)
  }, [formField.value])

  // Handle input change with auto-formatting
  // Strips all non-digit characters and auto-inserts colon
  const handleChange = useCallback(
    (value: string | undefined) => {
      if (!value) {
        setDisplayValue("")
        formField.onChange(undefined)
        return
      }

      // Format input: strips ALL non-digit characters, then adds colon after 2 digits
      const formatted = formatTimeInput(value)

      // Always update display with formatted value (non-digits removed)
      setDisplayValue(formatted)

      // If we have a complete time (4 digits), validate and update form value
      const digits = formatted.replace(/\D/g, "")
      if (digits.length === 4) {
        const validatedTime = validateTimeValue(formatted)
        setDisplayValue(validatedTime)
        formField.onChange(timeStringToDate(validatedTime))
      }
    },
    [formField]
  )

  return (
    <Input
      type="time"
      label={field.label}
      disabled={field.disabled}
      value={displayValue}
      onChange={handleChange}
      size={FORM_SIZE}
      hideLabel
      error={error}
      loading={loading}
      clearable={field.clearable}
      icon={Clock}
      name={formField.name}
      ref={formField.ref}
      maxLength={5}
      hideMaxLength
    />
  )
}
