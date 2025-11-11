import { F0Icon, IconType } from "@/components/F0Icon"
import { ArrowDown, ArrowUp } from "@/icons/app"
import { numberFormat } from "@/lib/numberFormat"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { BaseTag } from "../internal/BaseTag"
import type { BalanceStatus, F0TagBalanceProps, NumericValue } from "./types"

const iconMap: Record<string, IconType> = {
  "-1": ArrowDown,
  "1": ArrowUp,
}

const toNumericValue = (
  value: number | NumericValue | null | undefined,
  decimalPlaces: number,
  units: string,
  unitsPosition: "left" | "right",
  locale: string = "en-US"
): Required<NumericValue> | undefined => {
  if (value === null || value === undefined) {
    return undefined
  }
  if (typeof value === "number") {
    return { number: value, decimalPlaces, units, unitsPosition, locale }
  }
  // Default options if not provided
  return { decimalPlaces, units, unitsPosition, locale, ...value }
}

const numericFormatter = (
  value: Required<NumericValue>,
  spaceBetweenUnits: boolean = false
) => {
  const space = spaceBetweenUnits ? " " : ""
  return [
    value.unitsPosition === "left" && value.units ? value.units : "",
    numberFormat(value.number, value.decimalPlaces, value.locale),
    value.unitsPosition === "right" && value.units ? value.units : "",
  ]
    .filter(Boolean)
    .join(space)
}

const statusMap: Record<"-1" | "0" | "1", BalanceStatus> = {
  "-1": "negative",
  0: "neutral",
  1: "positive",
}

export const F0TagBalance = forwardRef<HTMLDivElement, F0TagBalanceProps>(
  ({ percentage, amount, invertStatus, info, hint, nullText }, ref) => {
    let text = ""
    let icon = null
    let additionalAccessibleText = ""
    let status: BalanceStatus | "null" = "null"
    let hintText: string | undefined = hint
    if (percentage === null || percentage === undefined) {
      text = nullText ?? "N/A"
      hintText = undefined
    } else {
      const percentageDef = toNumericValue(percentage, 2, "%", "right")!
      const amountDef = toNumericValue(amount, 2, "", "right")!

      const sign = Math.sign(percentageDef.number).toString()
      status =
        statusMap[
          Math.sign(
            percentageDef.number * (invertStatus ? -1 : 1)
          ).toString() as "-1" | "0" | "1"
        ]

      const perventageText = numericFormatter(percentageDef, false)
      const amountText = numericFormatter(amountDef, true)

      text = [perventageText, amountText].filter(Boolean).join(" · ")
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
