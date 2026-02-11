import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { F0Select } from "@/components/F0Select"

import type { F0SelectField } from "./types"
import { FORM_SIZE } from "../../constants"

interface SelectFieldRendererProps {
  field: F0SelectField
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
}

/**
 * Renders a select dropdown field with static options
 */
function SelectWithOptions({
  field,
  formField,
  error,
  loading,
}: SelectFieldRendererProps & {
  field: F0SelectField & { options: NonNullable<F0SelectField["options"]> }
}) {
  const baseProps = {
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
    size: FORM_SIZE,
    hideLabel: true as const,
  }

  if (field.multiple) {
    return (
      <F0Select
        {...baseProps}
        multiple={true}
        clearable={field.clearable}
        value={(formField.value as string[]) ?? []}
        onChange={(value: string[]) => formField.onChange(value)}
      />
    )
  }

  if (field.clearable) {
    return (
      <F0Select
        {...baseProps}
        clearable={true}
        value={(formField.value as string) ?? undefined}
        onChange={(value: string) => formField.onChange(value)}
      />
    )
  }

  return (
    <F0Select
      {...baseProps}
      value={(formField.value as string) ?? undefined}
      onChange={(value: string) => formField.onChange(value)}
    />
  )
}

/**
 * Renders a select dropdown field with a data source
 */
function SelectWithSource({
  field,
  formField,
  error,
  loading,
}: SelectFieldRendererProps & {
  field: F0SelectField & {
    source: NonNullable<F0SelectField["source"]>
    mapOptions: NonNullable<F0SelectField["mapOptions"]>
  }
}) {
  const baseProps = {
    label: field.label,
    placeholder: field.placeholder,
    disabled: field.disabled,
    source: field.source,
    mapOptions: field.mapOptions,
    showSearchBox: field.showSearchBox,
    searchBoxPlaceholder: field.searchBoxPlaceholder,
    name: formField.name,
    onBlur: formField.onBlur,
    error,
    loading,
    size: FORM_SIZE,
    hideLabel: true as const,
  }

  if (field.multiple) {
    return (
      <F0Select
        {...baseProps}
        multiple={true}
        clearable={field.clearable}
        value={(formField.value as string[]) ?? []}
        onChange={(value: string[]) => formField.onChange(value)}
      />
    )
  }

  if (field.clearable) {
    return (
      <F0Select
        {...baseProps}
        clearable={true}
        value={(formField.value as string) ?? undefined}
        onChange={(value: string) => formField.onChange(value)}
      />
    )
  }

  return (
    <F0Select
      {...baseProps}
      value={(formField.value as string) ?? undefined}
      onChange={(value: string) => formField.onChange(value)}
    />
  )
}

/**
 * Renders a select dropdown field
 * Supports both static options and dynamic data sources
 */
export function SelectFieldRenderer(props: SelectFieldRendererProps) {
  const { field } = props

  // Route to appropriate renderer based on field configuration
  if (
    "source" in field &&
    field.source !== undefined &&
    field.mapOptions !== undefined
  ) {
    return (
      <SelectWithSource
        {...props}
        field={field as Parameters<typeof SelectWithSource>[0]["field"]}
      />
    )
  }

  if ("options" in field && field.options !== undefined) {
    return (
      <SelectWithOptions
        {...props}
        field={field as Parameters<typeof SelectWithOptions>[0]["field"]}
      />
    )
  }

  // This shouldn't happen with proper typing, but provides a fallback
  return null
}
