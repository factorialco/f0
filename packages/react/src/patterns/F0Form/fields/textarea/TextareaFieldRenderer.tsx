import { ControllerRenderProps, FieldValues } from "react-hook-form"

import type { InputFieldStatus } from "@/ui/InputField/types"

import { F0TextAreaInput } from "@/components/F0TextAreaInput"

import type { ResolvedField } from "../types"
import type { F0TextareaField } from "./types"

import { FORM_SIZE } from "../../constants"

interface TextareaFieldRendererProps {
  field: ResolvedField<F0TextareaField>
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
  status?: InputFieldStatus
}

/**
 * Renders a textarea field
 */
export function TextareaFieldRenderer({
  field,
  formField,
  error,
  loading,
  status,
}: TextareaFieldRendererProps) {
  return (
    <F0TextAreaInput
      {...formField}
      label={field.label}
      placeholder={field.placeholder}
      disabled={field.disabled}
      rows={field.rows}
      maxLength={field.maxLength}
      maxHeight={field.maxHeight}
      value={formField.value != null ? String(formField.value) : ""}
      size={FORM_SIZE}
      hideLabel
      error={error}
      status={status}
      loading={loading}
    />
  )
}
