import { useCallback, useMemo } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { Input } from "@/experimental/Forms/Fields/Input"
import { Clock } from "@/icons/app"

import type { F0TimeField } from "./types"
import { dateToTimeString, timeStringToDate } from "./utils"
import { FORM_SIZE } from "../../constants"

export interface TimeFieldRendererProps {
  field: F0TimeField
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
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
      icon={Clock}
    />
  )
}
