import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { Input } from "@/experimental/Forms/Fields/Input"
import type { F0TextConfig, F0TextField } from "./types"
import { FORM_SIZE } from "../../constants"

interface TextFieldRendererProps {
  field: F0TextField
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
}

const DEFAULT_PLACEHOLDERS: Partial<
  Record<NonNullable<F0TextConfig["inputType"]>, string>
> = {
  email: "name@example.com",
}

/**
 * Renders a text input field
 */
export function TextFieldRenderer({
  field,
  formField,
  error,
  loading,
}: TextFieldRendererProps) {
  const inputType = field.inputType ?? "text"
  const placeholder =
    field.placeholder ?? DEFAULT_PLACEHOLDERS[inputType] ?? undefined

  return (
    <Input
      label={field.label}
      type={inputType}
      placeholder={placeholder}
      disabled={field.disabled}
      {...formField}
      value={formField.value != null ? String(formField.value) : ""}
      size={FORM_SIZE}
      hideLabel
      error={error}
      loading={loading}
    />
  )
}
