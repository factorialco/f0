import { ControllerRenderProps } from "react-hook-form"
import type { InputFieldStatus } from "@/components/F0InputField/types"
import { F0NumberInput } from "@/components/F0NumberInput"
import { FORM_SIZE } from "../../constants"
import type { InlineEditing } from "../inline/useInlineField"
import type { ResolvedField } from "../types"
import type { F0NumberField } from "./types"

interface NumberFieldRendererProps {
  field: ResolvedField<F0NumberField>
  formField: ControllerRenderProps
  error?: boolean
  loading?: boolean
  status?: InputFieldStatus

  inline?: InlineEditing
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
  inline,
}: NumberFieldRendererProps) {
  const shared = {
    ...formField,
    label: field.label,
    placeholder: field.placeholder,
    disabled: field.disabled,
    step: field.step,
    min: field.min,
    max: field.max,
    maxDecimals: field.maxDecimals,
    units: field.units,
    locale: field.locale ?? "en-US",
    value: formField.value != null ? Number(formField.value) : undefined,
    onChange: (value: number | null) => formField.onChange(value),
    size: FORM_SIZE,
    hideLabel: true,
    hint: "",
    error,
    status,
    loading,
    clearable: field.clearable,
  }

  // Separate branches preserve the discriminated prop union.
  if (inline) {
    return (
      <F0NumberInput
        {...shared}
        variant="inline"
        editing={inline.editing}
        onDismiss={inline.onDismiss}
      />
    )
  }

  return <F0NumberInput {...shared} />
}
