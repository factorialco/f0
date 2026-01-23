import { forwardRef } from "react"

import { F0Icon, IconType } from "@/components/F0Icon"
import { ArrowDown, ArrowUp } from "@/icons/app"
import { isEmptyNumeric } from "@/lib/numeric"
import {
  Numeric,
  numericFinalValue,
  NumericWithFormatter,
} from "@/lib/numeric/"
import { useNormalizeNumericValueWithFormatter } from "@/lib/numeric/hooks/useNormalizeNumericValueWithFormatter"
import { cn } from "@/lib/utils"

import type { BalanceStatus, F0TagBalanceProps } from "./types"

import { BaseTag } from "../internal/BaseTag"

const iconMap: Record<string, IconType> = {
  "-1": ArrowDown,
  "1": ArrowUp,
}

const statusMap: Record<"-1" | "0" | "1", BalanceStatus> = {
  "-1": "negative",
  0: "neutral",
  1: "positive",
}

export const F0TagBalance = forwardRef<HTMLDivElement, F0TagBalanceProps>(
  ({ percentage, amount, invertStatus, info, hint, nullText }, ref) => {
    const normalizeNumericWithFormatter =
      useNormalizeNumericValueWithFormatter()

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
