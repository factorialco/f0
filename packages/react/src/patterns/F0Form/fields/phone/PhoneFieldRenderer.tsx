import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { F0PhoneInput } from "@/experimental/Forms/F0PhoneInput"
import type { InputFieldStatus } from "@/components/F0InputField/types"

import { FORM_SIZE } from "../../constants"
import type { ResolvedField } from "../types"
import type { F0PhoneField } from "./types"

interface PhoneFieldRendererProps {
  field: ResolvedField<F0PhoneField>
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
  status?: InputFieldStatus
}

/**
 * Renders a phone input field
 */
export function PhoneFieldRenderer({
  field,
  formField,
  error,
  loading,
  status,
}: PhoneFieldRendererProps) {
  return (
    <F0PhoneInput
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
      defaultCountry={field.defaultCountry}
      pinnedCountries={field.pinnedCountries}
      allowedCountries={field.allowedCountries}
    />
  )
}
