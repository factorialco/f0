import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { F0TextInput } from "@/components/F0TextInput"
import { Link, Envelope } from "@/icons/app"
import { IconType } from "@/components/F0Icon"
import type { InputFieldStatus } from "@/components/F0InputField/types"
import type { F0TextConfig, F0TextField } from "./types"
import type { ResolvedField } from "../types"
import { FORM_SIZE } from "../../constants"

interface TextFieldRendererProps {
  field: ResolvedField<F0TextField>
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
  status?: InputFieldStatus
}

const DEFAULT_PLACEHOLDERS: Partial<
  Record<NonNullable<F0TextConfig["inputType"]>, string>
> = {
  email: "name@example.com",
}

const DEFAULT_ICONS: Partial<
  Record<NonNullable<F0TextConfig["inputType"]>, IconType>
> = {
  url: Link,
  email: Envelope,
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
}: TextFieldRendererProps) {
  const inputType = field.inputType ?? "text"
  const placeholder =
    field.placeholder ?? DEFAULT_PLACEHOLDERS[inputType] ?? undefined
  const icon = DEFAULT_ICONS[inputType]

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
    />
  )
}
