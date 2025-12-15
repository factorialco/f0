/**
 * Amount cell type for displaying monetary values in data collections.
 * Similar to number cell but specifically designed for currency amounts.
 */
import { ValueDisplayRendererContext } from "../../renderers"
import { NumberCell } from "../number"
import { WithPlaceholder } from "../types"

export interface CurrencyDef {
  symbol: string
  symbolPosition?: "left" | "right"
  decimalPlaces: number
}

export interface AmountValue extends WithPlaceholder {
  amount: number | undefined
  currency?: CurrencyDef
}

export type AmountCellValue = number | undefined | AmountValue

export const AmountCell = (args: AmountCellValue, meta: ValueDisplayRendererContext) => {
  const amount = {
    // defaults
    symbolPosition: "right" as const,
    symbol: "",
    // if args is an object, use the amount from args, otherwise use the value
    ...(typeof args === "object" && "amount" in args
      ? args
      : {
          amount: args,
        }),
  }

  return NumberCell(
    {
      ...(typeof args === "object" && "amount" in args ? args : {}),
      number: amount.amount,
      decimalPlaces: amount.currency?.decimalPlaces,
      units: amount.currency?.symbol,
      unitsPosition: amount.currency?.symbolPosition,
    },
    meta
  )
}
