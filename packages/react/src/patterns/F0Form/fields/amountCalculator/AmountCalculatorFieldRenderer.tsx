import { ControllerRenderProps, FieldValues } from "react-hook-form"
import type { AriaAttributes } from "react"

import { F0AmountCalculator } from "@/experimental/Forms/Fields/F0AmountCalculator"
import type { InputFieldStatus } from "@/ui/InputField/types"

import type { F0AmountCalculatorField } from "./types"
import type { ResolvedField } from "../types"

import { FORM_SIZE } from "../../constants"

interface AmountCalculatorFieldRendererProps {
  field: ResolvedField<F0AmountCalculatorField>
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
  status?: InputFieldStatus
  id?: string
  "aria-describedby"?: string
  "aria-invalid"?: AriaAttributes["aria-invalid"]
}

export function AmountCalculatorFieldRenderer({
  field,
  formField,
  error,
  loading,
  status,
  id,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
}: AmountCalculatorFieldRendererProps) {
  const normalizedValue =
    formField.value != null ? Number(formField.value) : undefined
  const value =
    normalizedValue != null && Number.isFinite(normalizedValue)
      ? normalizedValue
      : null

  const resolvedStatus =
    status ?? (error ? { type: "error" as const } : undefined)

  return (
    <F0AmountCalculator
      id={id}
      aria-describedby={ariaDescribedBy}
      aria-invalid={ariaInvalid}
      label={field.label}
      // F0Form renders the outer label and messages itself — hide them inside
      // the component so they are not duplicated in the form layout.
      hideLabel
      hint=""
      error={undefined}
      value={value}
      onChange={(nextValue) => formField.onChange(nextValue)}
      onBlur={formField.onBlur}
      units={field.units}
      step={field.step}
      min={field.min}
      max={field.max}
      maxDecimals={field.maxDecimals}
      locale={field.locale ?? "en-US"}
      inputWidth={field.inputWidth}
      extraContent={field.extraContent}
      clearable={field.clearable}
      status={resolvedStatus}
      disabled={field.disabled}
      loading={loading}
      size={FORM_SIZE}
    />
  )
}
