import { ControllerRenderProps, FieldValues } from "react-hook-form"

import type { InputFieldStatus } from "@/components/F0InputField/types"

import { F0NumberInput } from "@/components/F0NumberInput"

import type { ResolvedField } from "../types"
import type { F0NumberField } from "./types"

import { FORM_SIZE } from "../../constants"

interface NumberFieldRendererProps {
  field: ResolvedField<F0NumberField>
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
  status?: InputFieldStatus
}

/**
 * Renders a number input field
 */
export function NumberFieldRenderer({
  field,
  formField,
  error,
  loading,
  status,
}: NumberFieldRendererProps) {
  return (
    <F0NumberInput
      {...formField}
      label={field.label}
      placeholder={field.placeholder}
      disabled={field.disabled}
      step={field.step}
      min={field.min}
      max={field.max}
      maxDecimals={field.maxDecimals}
      units={field.units}
      locale={field.locale ?? "en-US"}
      value={formField.value != null ? Number(formField.value) : undefined}
      onChange={(value) => formField.onChange(value)}
      size={FORM_SIZE}
      hideLabel
      hint=""
      error={error}
      status={status}
      loading={loading}
      clearable={field.clearable}
    />
  )
}
