import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { NumberInput } from "@/experimental/Forms/Fields/NumberInput"
import type { InputFieldStatus } from "@/ui/InputField/types"
import type { F0NumberField } from "./types"
import type { ResolvedField } from "../types"
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
    <NumberInput
      {...formField}
      label={field.label}
      placeholder={field.placeholder}
      disabled={field.disabled}
      step={field.step}
      min={field.min}
      max={field.max}
      locale={field.locale ?? "en-US"}
      value={formField.value != null ? Number(formField.value) : undefined}
      onChange={(value) => formField.onChange(value)}
      size={FORM_SIZE}
      hideLabel
      error={error}
      status={status}
      loading={loading}
      clearable={field.clearable}
    />
  )
}
