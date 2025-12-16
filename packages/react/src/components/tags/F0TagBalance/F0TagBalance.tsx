import { F0Icon, IconType } from "@/components/F0Icon"
import { ArrowDown, ArrowUp } from "@/icons/app"
import {
  normalizeNumericWithFormatter,
  Numeric,
  numericFinalValue,
  NumericValue,
  NumericWithFormatter,
  toNumericValue,
} from "@/lib/numeric/"
import { isEmptyNumeric } from "@/lib/numeric/isEmptyNumeric"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { BaseTag } from "../internal/BaseTag"
import type { BalanceStatus, F0TagBalanceProps } from "./types"

const iconMap: Record<string, IconType> = {
  "-1": ArrowDown,
  "1": ArrowUp,
}

// const toNumericValue = (
//   value: number | NumericValue | null | undefined,
//   decimalPlaces: number,
//   units: string,
//   unitsPosition: "left" | "right",
//   locale: string = "en-US"
// ): Required<NumericValue> | undefined => {
//   if (value === null || value === undefined) {
//     return undefined
//   }
//   if (typeof value === "number") {
//     return { number: value, decimalPlaces, units, unitsPosition, locale }
//   }
//   // Default options if not provided
//   return { decimalPlaces, units, unitsPosition, locale, ...value }
// }

// const numericFormatter = (
//   value: Required<NumericValue>,
//   spaceBetweenUnits: boolean = false
// ) => {
//   const space = spaceBetweenUnits ? " " : ""
//   return [
//     value.unitsPosition === "left" && value.units ? value.units : "",
//     numberFormat(value.number, value.decimalPlaces, value.locale),
//     value.unitsPosition === "right" && value.units ? value.units : "",
//   ]
//     .filter(Boolean)
//     .join(space)
// }

const statusMap: Record<"-1" | "0" | "1", BalanceStatus> = {
  "-1": "negative",
  0: "neutral",
  1: "positive",
}

const toNumericValueFromNumeric = (
  value: Numeric | NumericWithFormatter
): NumericValue => {
  if (typeof value === "number") {
    return { value }
  }

  if (value && "numericValue" in value) {
    return toNumericValue(value.numericValue)
  }

  return toNumericValue(value)
}
export const F0TagBalance = forwardRef<HTMLDivElement, F0TagBalanceProps>(
  ({ percentage, amount, invertStatus, info, hint, nullText }, ref) => {
    const amountDef = normalizeNumericWithFormatter(amount, {
      formatterOptions: {
        decimalPlaces: 2,
      },
    })

    const percentageDef = normalizeNumericWithFormatter(
      percentage as Numeric | NumericWithFormatter,
      {
        formatterOptions: {
          decimalPlaces: 0,
          emptyPlaceholder: nullText ?? "N/A",
        },
      }
    )

    const percentageFinalValue = numericFinalValue(percentageDef.numericValue)
    const amountFinalValue = numericFinalValue(amountDef.numericValue)
    let text = ""
    let icon = null
    let additionalAccessibleText = ""
    let status: BalanceStatus | "null" = "null"
    let hintText: string | undefined = hint
    if (isEmptyNumeric(amountFinalValue)) {
      text = nullText ?? "N/A"
      hintText = undefined
    } else {
      const sign = Math.sign(percentageFinalValue ?? 0).toString()
      status =
        statusMap[
          Math.sign(
            (percentageFinalValue ?? 0) * (invertStatus ? -1 : 1)
          ).toString() as "-1" | "0" | "1"
        ]

      const percentageText = !isEmptyNumeric(percentageFinalValue)
        ? percentageDef.formatter(
            {
              ...percentageDef.numericValue,
              units: "%",
              unitsPosition: "append",
            },
            percentageDef.formatterOptions
          )
        : null

      const amountText = amountDef.formatter(
        amountDef.numericValue,
        amountDef.formatterOptions
      )

      text = [percentageText, amountText].filter(Boolean).join(" · ")
      additionalAccessibleText = `${status} balance`

      icon =
        status === "neutral" ? null : (
          <F0Icon
            icon={iconMap[sign]}
            size="sm"
            className={cn(
              {
                positive: "text-f1-icon-positive",
                neutral: "text-f1-icon-secondary",
                negative: "text-f1-icon-critical",
              }[status]
            )}
          />
        )
    }

    return (
      <BaseTag
        ref={ref}
        className={cn(
          {
            positive: "bg-f1-background-positive text-f1-foreground-positive",
            neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
            negative: "bg-f1-background-critical text-f1-foreground-critical",
            null: "text-f1-foreground-secondary",
          }[status]
        )}
        info={info}
        hint={hintText}
        left={icon}
        additionalAccessibleText={additionalAccessibleText}
        text={text}
      />
    )
  }
)

F0TagBalance.displayName = "F0TagBalance"
