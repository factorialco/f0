import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form"

import type { InputFieldStatus } from "@/ui/InputField/types"

import { NumberInput } from "@/experimental/Forms/Fields/NumberInput"

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
  const form = useFormContext()

  const handleChange = (value: number | null) => {
    if (field.validateOnChange === false) {
      form.setValue(field.id, value, {
        shouldValidate: false,
        shouldDirty: true,
      })
    } else {
      formField.onChange(value)
    }

    if (!field.onValueChange) return

    field.onValueChange({
      value,
      values: form.getValues() as Record<string, unknown>,
      form: {
        getValues: () => form.getValues() as Record<string, unknown>,
        setValue: (fieldName, nextValue, options) =>
          form.setValue(fieldName, nextValue, {
            shouldValidate: options?.shouldValidate ?? true,
            shouldDirty: options?.shouldDirty ?? true,
          }),
        trigger: (fieldName) => form.trigger(fieldName),
      },
    })
  }

  return (
    <NumberInput
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
      onChange={handleChange}
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
