import { F0TextInput } from "@/components/F0TextInput"
import { cn } from "@/lib/utils"

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
 * City, state / region and postal code share one row; only address line 2
 * takes the full width above them.
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

  const rowParts = (["city", "state", "postalCode"] as const).filter((key) =>
    fields.has(key)
  )
  // Tailwind needs the column count as a literal class
  const rowColumns = {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
  }[rowParts.length]

  return (
    <>
      {fields.has("addressLine2") && part("addressLine2")}
      {rowParts.length > 0 && (
        <div className={cn("grid grid-cols-1 gap-3", rowColumns)}>
          {rowParts.map(part)}
        </div>
      )}
    </>
  )
}
