import { F0TextInput } from "@/components/F0TextInput"
import { useI18n } from "@/lib/providers/i18n"

import type { EditableLocationPart } from "../internal-types"
import type {
  F0LocationInputValue,
  LocationInputSize,
  LocationPart,
} from "../types"

type Props = {
  value: F0LocationInputValue | undefined
  labels: Record<LocationPart, string>
  onChangePart: (part: EditableLocationPart, text: string) => void
  size: LocationInputSize
  disabled?: boolean
  readonly?: boolean
  name?: string
}

/**
 * The parts below the address field. Address line 2 takes the full width;
 * city, region and postal code share one row.
 */
export const AddressParts = ({
  value,
  labels,
  onChangePart,
  size,
  disabled,
  readonly,
  name,
}: Props) => {
  const i18n = useI18n()
  const placeholders: Record<
    Exclude<EditableLocationPart, "addressLine1">,
    string
  > = {
    addressLine2: i18n.locationInput.addressLine2Placeholder,
    city: i18n.locationInput.cityPlaceholder,
    state: i18n.locationInput.statePlaceholder,
    postalCode: i18n.locationInput.postalCodePlaceholder,
  }

  const part = (key: Exclude<EditableLocationPart, "addressLine1">) => (
    <F0TextInput
      key={key}
      label={labels[key]}
      placeholder={placeholders[key]}
      value={value?.[key] ?? ""}
      onChange={(text) => onChangePart(key, text)}
      size={size}
      disabled={disabled}
      readonly={readonly}
      name={name ? `${name}.${key}` : undefined}
    />
  )

  return (
    <>
      {part("addressLine2")}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {part("city")}
        {part("state")}
        {part("postalCode")}
      </div>
    </>
  )
}
