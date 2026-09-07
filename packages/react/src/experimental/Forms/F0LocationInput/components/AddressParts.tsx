import { F0TextInput } from "@/components/F0TextInput"

import type { EditableLocationPart } from "../internal-types"
import type {
  F0LocationInputValue,
  LocationField,
  LocationInputSize,
} from "../types"

type Props = {
  fields: ReadonlySet<LocationField>
  value: F0LocationInputValue | undefined
  labels: Record<EditableLocationPart, string>
  onChangePart: (part: EditableLocationPart, text: string) => void
  size: LocationInputSize
  disabled?: boolean
  readonly?: boolean
  name?: string
}

/**
 * The plain text parts below the address field. City gets its own row; state
 * and postal code share one, the way every address form the user has seen
 * lays them out.
 */
export const AddressParts = ({
  fields,
  value,
  labels,
  onChangePart,
  size,
  disabled,
  readonly,
  name,
}: Props) => {
  const part = (key: Exclude<EditableLocationPart, "addressLine1">) => (
    <F0TextInput
      key={key}
      label={labels[key]}
      value={value?.[key] ?? ""}
      onChange={(text) => onChangePart(key, text)}
      size={size}
      disabled={disabled}
      readonly={readonly}
      name={name ? `${name}.${key}` : undefined}
    />
  )

  const rowParts = (["state", "postalCode"] as const).filter((key) =>
    fields.has(key)
  )

  return (
    <>
      {fields.has("addressLine2") && part("addressLine2")}
      {fields.has("city") && part("city")}
      {rowParts.length > 0 && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {rowParts.map((key) => (
            <div
              key={key}
              className={rowParts.length === 1 ? "sm:col-span-2" : undefined}
            >
              {part(key)}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
