import { useCallback, useMemo } from "react"
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
 * Auto-formats time input as user types.
 * Inserts colon automatically after hours.
 */
function formatTimeInput(value: string): string {
  // Remove any non-digit characters
  const digits = value.replace(/\D/g, "")

  if (!digits) return ""

  const trimmed = digits.slice(0, 4)

  // Auto-insert colon
  if (trimmed.length <= 2) {
    return trimmed
  }

  return `${trimmed.slice(0, 2)}:${trimmed.slice(2)}`
}

/**
 * Validates and clamps time values to valid ranges
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
 * Handles time as a string value in HH:mm format.
 */
export function TimeFieldRenderer({
  field,
  formField,
  error,
  loading,
}: TimeFieldRendererProps) {
  // Time value is stored as string (HH:mm)
  const timeValue = useMemo(
    () => (formField.value as string | undefined) ?? "",
    [formField.value]
  )

  // Handle input change with auto-formatting
  const handleChange = useCallback(
    (value: string | undefined) => {
      if (!value) {
        formField.onChange(undefined)
        return
      }

      const formatted = formatTimeInput(value)

      // If we have a complete time (4 digits), validate it
      const digits = formatted.replace(/\D/g, "")

      if (digits.length === 4) {
        formField.onChange(validateTimeValue(formatted))
      } else {
        formField.onChange(formatted)
      }
    },
    [formField]
  )

  const placeholder = field.placeholder ?? "HH:mm"

  return (
    <Input
      type="text"
      label={field.label}
      placeholder={placeholder}
      disabled={field.disabled}
      value={timeValue}
      onChange={handleChange}
      size={FORM_SIZE}
      hideLabel
      error={error}
      loading={loading}
      clearable={field.clearable}
      icon={Clock}
      name={formField.name}
      ref={formField.ref}
    />
  )
}
