import { ControllerRenderProps } from "react-hook-form"
import type { InputFieldStatus } from "@/components/F0InputField/types"
import { F0LocationInput } from "@/experimental/Forms/F0LocationInput"
import { FORM_SIZE } from "../../constants"
import type { ResolvedField } from "../types"
import type { F0LocationField } from "./types"

interface LocationFieldRendererProps {
  field: ResolvedField<F0LocationField>
  formField: ControllerRenderProps
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
  const shared = {
    ...formField,
    label: field.label,
    value: formField.value ?? undefined,
    placeholder: field.placeholder,
    disabled: field.disabled,
    size: FORM_SIZE,
    hideLabel: true,
    error,
    status,
    loading,
    clearable: field.clearable,
    partLabels: field.partLabels,
    allowedCountries: field.allowedCountries,
    defaultCountry: field.defaultCountry,
  } as const

  // Manual entry rules out the provider callbacks, so the two shapes cannot
  // be handed over as one object
  return field.manualEntry ? (
    <F0LocationInput {...shared} manualEntry />
  ) : (
    <F0LocationInput
      {...shared}
      searchPlaces={field.searchPlaces}
      resolvePlace={field.resolvePlace}
      manualEntryFallback={field.manualEntryFallback}
    />
  )
}
