import { useMemo } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { F0DatePicker, DatePickerValue } from "@/components/F0DatePicker"
import type { InputFieldStatus } from "@/components/F0InputField/types"

import type { ResolvedPeriodField } from "./types"
import { FORM_SIZE } from "../../constants"

interface PeriodFieldRendererProps {
  field: ResolvedPeriodField
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
  status?: InputFieldStatus
}

/**
 * Renders a period picker field.
 *
 * Unlike the `date` field — which collapses the picker value to a single `Date`
 * and re-displays it with the first granularity — this renderer reads and writes
 * the full `DatePickerValue` (`{ value: { from, to }, granularity }`). This keeps
 * the chosen granularity and range intact, so the field behaves as a real period
 * selector.
 */
export function PeriodFieldRenderer({
  field,
  formField,
  error,
  loading,
  status,
}: PeriodFieldRendererProps) {
  // Form value may be null (used instead of undefined to prevent
  // react-hook-form from falling back to defaultValues on clear).
  const value = useMemo(
    () => (formField.value ?? undefined) as DatePickerValue | undefined,
    [formField.value]
  )

  const handleChange = (next: DatePickerValue | undefined) => {
    formField.onChange(next ?? null)
  }

  // Trigger validation when the picker closes, not on every change
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      formField.onBlur()
    }
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
      displayFormat={field.displayFormat}
      // Granularity switch is view-only; commit happens on cell selection.
      selectOnCellOnly
      clearable={field.clearable}
      value={value}
      onChange={handleChange}
      onOpenChange={handleOpenChange}
      size={FORM_SIZE}
      hideLabel
      error={error}
      status={status}
      loading={loading}
    />
  )
}
