import { ControllerRenderProps, FieldValues } from "react-hook-form"

import type { InputFieldStatus } from "@/components/F0InputField/types"

import { F0LocationInput } from "@/experimental/Forms/F0LocationInput"

import type { ResolvedField } from "../types"
import type { F0LocationField } from "./types"

import { FORM_SIZE } from "../../constants"

interface LocationFieldRendererProps {
  field: ResolvedField<F0LocationField>
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
  status?: InputFieldStatus
}

/**
 * Renders a location input field
 */
export function LocationFieldRenderer({
  field,
  formField,
  error,
  loading,
  status,
}: LocationFieldRendererProps) {
  return (
    <F0LocationInput
      {...formField}
      label={field.label}
      value={formField.value ?? undefined}
      onChange={(value) => formField.onChange(value)}
      placeholder={field.placeholder}
      disabled={field.disabled}
      size={FORM_SIZE}
      hideLabel
      error={error}
      status={status}
      loading={loading}
      clearable={field.clearable}
      fields={field.fields}
      partLabels={field.partLabels}
      countries={field.countries}
      defaultCountry={field.defaultCountry}
      searchPlaces={field.searchPlaces}
      resolvePlace={field.resolvePlace}
    />
  )
}
