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
/**
 * The HTML autofill tokens for a postal address, so the browser can offer the
 * address it already has instead of making the user type six fields. The
 * country is missing on purpose: it is a select, and `country-name` only
 * applies to a text field.
 */
const autofillTokens = {
  addressLine1: "address-line1",
  addressLine2: "address-line2",
  city: "address-level2",
  state: "address-level1",
  postalCode: "postal-code",
} as const satisfies Record<EditableLocationPart, string>

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
      autocomplete={autofillTokens[key]}
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
        {/* `@xs` is the 24rem step: f0's preset redefines the container
            breakpoints and its `@sm` is 40rem, wider than any form this row
            sits in, so `@sm` never matched and the fields stacked */}
        <div className="grid grid-cols-1 gap-3 @xs:grid-cols-3">
          {part("city")}
          {part("state")}
          {part("postalCode")}
        </div>
      </div>
    </>
  )
}
