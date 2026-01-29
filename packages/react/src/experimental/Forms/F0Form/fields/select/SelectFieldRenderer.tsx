import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { F0Select } from "@/components/F0Select"

import type { SelectFieldDefinition } from "./types"
import { FORM_SIZE } from "../../constants"

interface SelectFieldRendererProps {
  field: SelectFieldDefinition
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
}

/**
 * Renders a select dropdown field
 */
export function SelectFieldRenderer({
  field,
  formField,
  error,
  loading,
}: SelectFieldRendererProps) {
  const selectBaseProps = {
    label: field.label,
    placeholder: field.placeholder,
    disabled: field.disabled,
    options: field.options,
    showSearchBox: field.showSearchBox,
    searchBoxPlaceholder: field.searchBoxPlaceholder,
    name: formField.name,
    onBlur: formField.onBlur,
    error,
    loading,
  }

  if (field.multiple) {
    return (
      <F0Select
        {...selectBaseProps}
        multiple={true}
        clearable={field.clearable}
        value={(formField.value as string[]) ?? []}
        onChange={(value: string[]) => formField.onChange(value)}
        size={FORM_SIZE}
        hideLabel
      />
    )
  }

  if (field.clearable) {
    return (
      <F0Select
        {...selectBaseProps}
        clearable={true}
        value={(formField.value as string) ?? undefined}
        onChange={(value: string) => formField.onChange(value)}
        size={FORM_SIZE}
        hideLabel
      />
    )
  }

  return (
    <F0Select
      {...selectBaseProps}
      value={(formField.value as string) ?? undefined}
      onChange={(value: string) => formField.onChange(value)}
      size={FORM_SIZE}
      hideLabel
    />
  )
}
