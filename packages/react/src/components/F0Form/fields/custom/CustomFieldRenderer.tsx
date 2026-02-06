import { ControllerRenderProps, FieldValues } from "react-hook-form"

import type { F0CustomField, CustomFieldRenderPropsBase } from "./types"

interface CustomFieldRendererProps {
  field: F0CustomField
  formField: ControllerRenderProps<FieldValues>
  error?: string
  isValidating: boolean
}

/**
 * Renders a custom field by calling the user-provided render function
 * with the appropriate props for react-hook-form integration
 */
export function CustomFieldRenderer({
  field,
  formField,
  error,
  isValidating,
}: CustomFieldRendererProps) {
  const renderProps: CustomFieldRenderPropsBase & { config: unknown } = {
    id: field.id,
    label: field.label,
    placeholder: field.placeholder,
    value: formField.value,
    onChange: formField.onChange,
    onBlur: formField.onBlur,
    error,
    isValidating,
    disabled: field.disabled,
    config: field.fieldConfig,
  }

  return <>{field.render(renderProps)}</>
}
