import type { FormattedNumberParts } from "./format"

export const FormattedNumberContent = ({
  parts,
}: {
  parts: FormattedNumberParts
}) => {
  return (
    <>
      {parts.unitsPosition === "left" && parts.units && (
        <span>{parts.units.toString()}</span>
      )}
      {parts.value}
      {parts.unitsPosition === "right" && parts.units && (
        <span>{parts.units.toString()}</span>
      )}
    </>
  )
}
