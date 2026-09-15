import { ControllerRenderProps } from "react-hook-form"
import type { InputFieldStatus } from "@/components/F0InputField/types"
import { F0TextInput } from "@/components/F0TextInput"
import { getFieldInputIcon } from "@/lib/field-input-icons"
import { FORM_SIZE } from "../../constants"
import type { ResolvedField } from "../types"
import type { F0TextConfig, F0TextField } from "./types"

interface TextFieldRendererProps {
  field: ResolvedField<F0TextField>
  formField: ControllerRenderProps
  error?: boolean
  loading?: boolean
  status?: InputFieldStatus
  /** Mounts the input focused — what an inline row needs when it swaps the editor in. */
  autoFocus?: boolean
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
  status,
  autoFocus,
}: TextFieldRendererProps) {
  const inputType = field.inputType ?? "text"
  const placeholder =
    field.placeholder ?? DEFAULT_PLACEHOLDERS[inputType] ?? undefined
  const icon = getFieldInputIcon(inputType)

  return (
    <F0TextInput
      {...formField}
      label={field.label}
      type={inputType}
      placeholder={placeholder}
      disabled={field.disabled}
      value={formField.value != null ? String(formField.value) : ""}
      size={FORM_SIZE}
      hideLabel
      error={error}
      status={status}
      loading={loading}
      icon={icon}
      clearable={field.clearable}
      autoFocus={autoFocus}
    />
  )
}
