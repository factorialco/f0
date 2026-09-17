import { useMemo } from "react"
import { ControllerRenderProps } from "react-hook-form"
import { F0DatePicker, DatePickerValue } from "@/components/F0DatePicker"
import type { InputFieldStatus } from "@/components/F0InputField/types"
import { FORM_SIZE } from "../../constants"
import type { InlineEditing } from "../inline/useInlineField"
import type { F0DateField, ResolvedDateField } from "./types"

interface DateFieldRendererProps {
  field: ResolvedDateField
  formField: ControllerRenderProps
  error?: boolean
  loading?: boolean
  status?: InputFieldStatus
  /** Set by the inline (detail-row) path; absent everywhere else. */
  inline?: InlineEditing
}

/**
 * Converts a Date to DatePickerValue format expected by F0DatePicker
 */
function dateToPickerValue(
  date: Date | undefined,
  granularity: F0DateField["granularities"]
): DatePickerValue | undefined {
  if (!date) {
    return undefined
  }
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
  status,
  inline,
}: DateFieldRendererProps) {
  // Convert form Date value to DatePickerValue for the picker
  // Form value may be null (used instead of undefined to prevent
  // react-hook-form from falling back to defaultValues on clear)
  const pickerValue = useMemo(
    () =>
      dateToPickerValue(
        (formField.value ?? undefined) as Date | undefined,
        field.granularities
      ),
    [formField.value, field.granularities]
  )

  // Handle picker change by extracting Date and updating form.
  // Uses null instead of undefined for cleared values because
  // react-hook-form treats undefined as "use defaultValue".
  const handleChange = (value: DatePickerValue | undefined) => {
    formField.onChange(pickerValueToDate(value) ?? null)
  }

  // Trigger validation when the picker closes, not on every change.
  // Defer to the next tick: when the user types a date and clicks outside, the
  // popover's dismiss fires during the outside pointerdown — before the input's
  // blur commits the typed value. Validating synchronously here would read the
  // stale value and flag a valid date as invalid. Deferring lets the input's
  // blur (onChange) commit first, so validation runs against the final value.
  // (Enter and calendar selection already commit before closing, so they work.)
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setTimeout(() => formField.onBlur(), 0)
    }
  }

  // Inline the calendar never reports `onOpenChange` — `editing` is the open
  // state and the close arrives as a dismissal — so validation hangs off that
  // instead, with the same deferral.
  const handleInlineDismiss = (
    reason: Parameters<InlineEditing["onDismiss"]>[0]
  ) => {
    setTimeout(() => formField.onBlur(), 0)
    inline?.onDismiss(reason)
  }

  const shared = {
    label: field.label,
    placeholder: field.placeholder,
    disabled: field.disabled,
    granularities: field.granularities,
    minDate: field.minDate,
    maxDate: field.maxDate,
    presets: field.presets,
    clearable: field.clearable,
    value: pickerValue,
    onChange: handleChange,
    size: FORM_SIZE,
    hideLabel: true,
    error,
    status,
    loading,
  }

  // Two branches, not a spread: the props are a discriminated union, and a
  // conditional spread widens `variant` back to `"inline" | undefined`.
  if (inline) {
    return (
      <F0DatePicker
        {...shared}
        variant="inline"
        editing={inline.editing}
        onDismiss={handleInlineDismiss}
      />
    )
  }

  return <F0DatePicker {...shared} onOpenChange={handleOpenChange} />
}
