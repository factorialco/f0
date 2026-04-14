import { useCallback, useMemo } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { Input } from "@/experimental/Forms/Fields/Input"
import { Clock } from "@/icons/app"
import type { InputFieldStatus } from "@/ui/InputField/types"

import type { ResolvedTimeField } from "./types"
import { dateToTimeString, timeStringToDate } from "./utils"
import { FORM_SIZE } from "../../constants"

export interface TimeFieldRendererProps {
  field: ResolvedTimeField
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
  status?: InputFieldStatus
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
  status,
}: TimeFieldRendererProps) {
  // Convert Date value to HH:mm string for the native time input.
  // Form value may be null (used to represent cleared state).
  const timeValue = useMemo(
    () => dateToTimeString((formField.value ?? undefined) as Date | undefined),
    [formField.value]
  )

  // Handle native time input change.
  // Uses null instead of undefined for cleared values because
  // react-hook-form treats undefined as "use defaultValue".
  const handleChange = useCallback(
    (value: string | undefined) => {
      if (!value) {
        formField.onChange(null)
        // Trigger validation after clearing
        formField.onBlur()
        return
      }

      // Convert the time string to a Date object
      const date = timeStringToDate(value)
      formField.onChange(date)
      // Trigger validation after selection
      formField.onBlur()
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
      status={status}
      loading={loading}
      clearable={field.clearable}
      name={formField.name}
      ref={formField.ref}
      icon={Clock}
    />
  )
}
