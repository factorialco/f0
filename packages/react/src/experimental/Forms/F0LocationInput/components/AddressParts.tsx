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
 * Every part typed by hand. The two address lines take the full width; city,
 * region and postal code share one row.
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
  // City and region are self-evident from their labels; the postal code takes
  // an example, because its shape is what the user hesitates over
  const placeholders: Partial<Record<EditableLocationPart, string>> = {
    addressLine1: i18n.locationInput.addressLine1Placeholder,
    addressLine2: i18n.locationInput.addressLine2Placeholder,
    postalCode: i18n.locationInput.postalCodePlaceholder,
  }

  const part = (key: EditableLocationPart) => (
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
      {part("addressLine1")}
      {part("addressLine2")}
      {/* Container, not viewport: the block lives in side panels and dialogs */}
      <div className="@container">
        <div className="grid grid-cols-1 gap-3 @sm:grid-cols-3">
          {part("city")}
          {part("state")}
          {part("postalCode")}
        </div>
      </div>
    </>
  )
}
