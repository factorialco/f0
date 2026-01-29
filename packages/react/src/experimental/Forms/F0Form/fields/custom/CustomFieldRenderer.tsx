import { ControllerRenderProps, FieldValues } from "react-hook-form"

import type { CustomFieldDefinition, CustomFieldRenderProps } from "./types"

interface CustomFieldRendererProps {
  field: CustomFieldDefinition
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
  const renderProps: CustomFieldRenderProps = {
    id: field.id,
    label: field.label,
    placeholder: field.placeholder,
    value: formField.value,
    onChange: formField.onChange,
    onBlur: formField.onBlur,
    error,
    isValidating,
    disabled: field.disabled,
  }

  return <>{field.render(renderProps)}</>
}
