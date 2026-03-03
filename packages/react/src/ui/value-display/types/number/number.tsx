/**
 * Number cell type for displaying numeric values in data collections.
 * Supports both direct number values and objects with placeholder states.
 */
import { cn } from "@/lib/utils"

import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"
import { isShowingPlaceholder, resolveValue } from "../../utils"
import { WithPlaceholder } from "../types"
import { formatNumberParts } from "./format"
import type { UnitsPosition } from "./format"

interface NumberValue extends WithPlaceholder {
  number: number | undefined
  units?: string
  unitsPosition?: UnitsPosition
  decimalPlaces?: number | undefined
}

export type NumberCellValue = number | undefined | NumberValue

export const NumberCell = (
  args: NumberCellValue,
  meta: ValueDisplayRendererContext
) => {
  const value = resolveValue<number>(args, "number")
  const shouldShowPlaceholderStyling = isShowingPlaceholder(args, "number")

  const number = {
    // defaults
    unitsPosition: "right" as UnitsPosition,
    units: "",
    // if args is an object, use the amount from args, otherwise use the value
    ...(typeof args === "object" && "number" in args
      ? args
      : {
          decimalPlaces: undefined,
          number: value,
        }),
  }

  const formattedNumber = formatNumberParts({
    number: number.number,
    decimalPlaces: number.decimalPlaces,
    units: number.units,
    unitsPosition: number.unitsPosition,
  })

  return (
    <div
      className={cn(
        "flex flex-1 items-center gap-1 text-f1-foreground",
        meta.visualization === "table" && [
          "justify-end",
          tableDisplayClassNames.text,
        ],
        shouldShowPlaceholderStyling && "text-f1-foreground-secondary"
      )}
    >
      {formattedNumber.unitsPosition === "left" && formattedNumber.units && (
        <Units units={formattedNumber.units} />
      )}
      {formattedNumber.value}
      {formattedNumber.unitsPosition === "right" && formattedNumber.units && (
        <Units units={formattedNumber.units} />
      )}
    </div>
  )
}

const Units = ({ units }: { units: string }) => {
  return <span>{units.toString()}</span>
}
