import { useCallback, useEffect, useMemo, useState } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

import type { InputFieldStatus } from "@/components/F0InputField/types"

import { F0TextInput } from "@/components/F0TextInput"
import { getFieldInputIcon } from "@/lib/field-input-icons"
import { useHourCycle } from "@/lib/providers/user-platafform"
import type { HourCycle } from "@/lib/providers/user-platafform/types"

import type { ResolvedTimeField } from "./types"

import { FORM_SIZE } from "../../constants"
import {
  dateToDisplayTime,
  dateToTimeString,
  displayTimeToDate,
  timeStringToDate,
} from "./utils"

export interface TimeFieldRendererProps {
  field: ResolvedTimeField
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
  status?: InputFieldStatus
}

/**
 * Renders a time input field.
 *
 * When the app sets a global `hourCycle` (via `F0Provider`), the field is
 * rendered/parsed in that hour cycle (12h with AM/PM or 24h) so apps can honor
 * a user's preference instead of the browser locale. Otherwise it falls back to
 * the native HTML time input (unchanged default behavior).
 *
 * The value is stored as a Date object in both modes.
 */
export function TimeFieldRenderer(props: TimeFieldRendererProps) {
  const hourCycle = useHourCycle()

  if (hourCycle) {
    return <FormattedTimeFieldRenderer {...props} hourCycle={hourCycle} />
  }

  return <NativeTimeFieldRenderer {...props} />
}

/**
 * Native HTML time input. Displays as HH:mm (browser-controlled format).
 */
function NativeTimeFieldRenderer({
  field,
  formField,
  error,
  loading,
  status,
}: TimeFieldRendererProps) {
  const timeValue = useMemo(
    () => dateToTimeString((formField.value ?? undefined) as Date | undefined),
    [formField.value]
  )

  const handleChange = useCallback(
    (value: string | undefined) => {
      if (!value) {
        formField.onChange(null)
        return
      }
      formField.onChange(timeStringToDate(value))
    },
    [formField]
  )

  return (
    <F0TextInput
      type="time"
      label={field.label}
      disabled={field.disabled}
      value={timeValue}
      onChange={handleChange}
      onBlur={formField.onBlur}
      size={FORM_SIZE}
      hideLabel
      error={error}
      status={status}
      loading={loading}
      clearable={field.clearable}
      name={formField.name}
      ref={formField.ref}
      icon={getFieldInputIcon("time")}
    />
  )
}

/**
 * Text input rendered/parsed in the given hour cycle. The displayed text is kept
 * in local state and committed (parsed to a Date) on blur, so partial typing
 * doesn't clobber the value.
 */
function FormattedTimeFieldRenderer({
  field,
  formField,
  error,
  loading,
  status,
  hourCycle,
}: TimeFieldRendererProps & { hourCycle: HourCycle }) {
  const value = (formField.value ?? undefined) as Date | undefined

  const [text, setText] = useState(() => dateToDisplayTime(value, hourCycle))

  // Keep the displayed text in sync when the form value or hour cycle changes
  // externally (reset, default values, provider change).
  useEffect(() => {
    setText(dateToDisplayTime(value, hourCycle))
  }, [value, hourCycle])

  const commit = useCallback(() => {
    const trimmed = text.trim()
    formField.onChange(
      trimmed ? (displayTimeToDate(trimmed, hourCycle) ?? null) : null
    )
    formField.onBlur()
  }, [text, hourCycle, formField])

  return (
    <F0TextInput
      label={field.label}
      disabled={field.disabled}
      value={text}
      onChange={setText}
      onBlur={commit}
      placeholder={hourCycle === "12h" ? "hh:mm AM" : "HH:mm"}
      size={FORM_SIZE}
      hideLabel
      error={error}
      status={status}
      loading={loading}
      clearable={field.clearable}
      name={formField.name}
      ref={formField.ref}
      icon={getFieldInputIcon("time")}
    />
  )
}
