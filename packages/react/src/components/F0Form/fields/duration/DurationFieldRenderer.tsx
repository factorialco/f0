import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { F0DurationInput } from "@/components/F0DurationInput"
import type { InputFieldStatus } from "@/ui/InputField/types"

import type { F0DurationField } from "./types"
import type { ResolvedField } from "../types"

interface DurationFieldRendererProps {
  field: ResolvedField<F0DurationField>
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  status?: InputFieldStatus
}

export function DurationFieldRenderer({
  field,
  formField,
  error,
  status,
}: DurationFieldRendererProps) {
  const value =
    typeof formField.value === "number" && Number.isFinite(formField.value)
      ? formField.value
      : 0

  const resolvedStatus =
    status ?? (error ? { type: "error" as const } : undefined)

  return (
    <F0DurationInput
      label={field.label}
      hideLabel
      value={value}
      onChange={(nextValue) => formField.onChange(nextValue)}
      onBlur={formField.onBlur}
      units={field.units}
      fields={field.fields}
      status={resolvedStatus}
      disabled={field.disabled}
      readonly={field.readonly}
      size={field.size}
    />
  )
}
