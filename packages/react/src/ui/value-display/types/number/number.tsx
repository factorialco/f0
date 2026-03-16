/**
 * Number cell type for displaying numeric values in data collections.
 * Supports both direct number values and objects with placeholder states.
 */
import { cn } from "@/lib/utils"

import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"
import { isShowingPlaceholder, resolveValue } from "../../utils"
import { WithPlaceholder } from "../types"
import { FormattedNumberContent } from "./formattedContent"
import { formatNumberParts } from "./format"
import type { UnitsPosition } from "./format"

interface NumberValue extends WithPlaceholder {
  number: number | undefined
  units?: string
  unitsPosition?: UnitsPosition
  decimalPlaces?: number | undefined
}

export type NumberCellValue = number | undefined | NumberValue

interface ResolvedNumberValue {
  number: number | string | undefined
  units: string
  unitsPosition: UnitsPosition
  decimalPlaces?: number
}

export const NumberCell = (
  args: NumberCellValue,
  meta: ValueDisplayRendererContext
) => {
  const value = resolveValue<number>(args, "number")
  const shouldShowPlaceholderStyling = isShowingPlaceholder(args, "number")

  const number: ResolvedNumberValue = {
    // defaults
    unitsPosition: "right",
    units: "",
    decimalPlaces: undefined,
    // if args is an object, use the amount from args, otherwise use the value
    ...(typeof args === "object" && "number" in args ? args : {}),
    number:
      typeof args === "object" && args !== null && "number" in args
        ? (args.number ?? value)
        : value,
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
      <FormattedNumberContent parts={formattedNumber} />
    </div>
  )
}
