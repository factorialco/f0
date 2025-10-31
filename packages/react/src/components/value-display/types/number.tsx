/**
 * Number cell type for displaying numeric values in data collections.
 * Supports both direct number values and objects with placeholder states.
 */
import { cn } from "@/lib/utils"
import { tableDisplayClassNames } from "../const"
import { ValueDisplayRendererContext } from "../renderers"
import { isShowingPlaceholder, resolveValue } from "../utils"
import { WithPlaceholder } from "./types"

interface NumberValue extends WithPlaceholder {
  number: number | undefined
  units?: string
  unitsPosition?: "left" | "right"
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
    unitsPosition: "right",
    units: "",
    // if args is an object, use the amount from args, otherwise use the value
    ...(typeof args === "object" && "number" in args
      ? args
      : {
          decimalPlaces: undefined,
          number: value,
        }),
  }

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
      {number.unitsPosition === "left" && number.units && (
        <Units units={number.units} />
      )}
      {number.decimalPlaces !== undefined
        ? number.number?.toFixed(number.decimalPlaces)
        : (number.number?.toString() ?? "")}
      {number.unitsPosition !== "left" && number.units && (
        <Units units={number.units} />
      )}
    </div>
  )
}

const Units = ({ units }: { units: string }) => {
  return <span>{units.toString()}</span>
}
