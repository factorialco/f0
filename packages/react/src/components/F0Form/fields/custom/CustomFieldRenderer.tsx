import { ControllerRenderProps, FieldValues } from "react-hook-form"

import type { ResolvedField } from "../types"
import type { F0CustomField, CustomFieldRenderPropsBase } from "./types"

import { useF0FormContext } from "../../context"

interface CustomFieldRendererProps {
  field: ResolvedField<F0CustomField>
  formField: ControllerRenderProps<FieldValues>
  error?: string
  isValidating: boolean
  required?: boolean
}

/**
 * Renders a custom field by calling the user-provided render function
 * with the appropriate props for react-hook-form integration.
 *
 * When `customFieldName` is set on the field, delegates to the form-level
 * `renderCustomField` callback instead of the inline `render` function.
 */
export function CustomFieldRenderer({
  field,
  formField,
  error,
  isValidating,
  required,
}: CustomFieldRendererProps) {
  const { renderCustomField } = useF0FormContext()

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
    required,
    config: field.fieldConfig,
  }

  if (field.customFieldName) {
    if (!renderCustomField) {
      throw new Error(
        `Custom field "${field.id}" has customFieldName "${field.customFieldName}" but no renderCustomField prop was provided to F0Form.`
      )
    }
    return (
      <>
        {renderCustomField({
          ...renderProps,
          customFieldName: field.customFieldName,
          fieldType: "custom",
        })}
      </>
    )
  }

  if (!field.render) {
    throw new Error(
      `Custom field "${field.id}" has neither a render function nor a customFieldName.`
    )
  }

  return <>{field.render(renderProps)}</>
}
