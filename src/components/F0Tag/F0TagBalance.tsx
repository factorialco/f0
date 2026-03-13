import React from "react"

import { ArrowDown, ArrowUp } from "../../icons/app"
import { cn } from "../../lib/utils"
import { F0Icon, type IconType } from "../primitives/F0Icon"

import type {
  BalanceStatus,
  F0TagProps,
  F0TagBalanceProps,
  F0TagNumericInput,
  F0TagPercentageInput,
} from "./F0Tag.types"
import { F0TagRoot } from "./F0TagRoot"

const f0TagBalanceIconMap: Record<"-1" | "1", IconType> = {
  "-1": ArrowDown,
  "1": ArrowUp,
}

const f0TagBalanceTextColorMap: Record<BalanceStatus, F0TagProps["textColor"]> =
  {
    positive: "positive",
    neutral: "secondary",
    negative: "critical",
  }

const resolveNumericConfig = (
  value: F0TagNumericInput | F0TagPercentageInput | null | undefined
) => {
  if (value === null || value === undefined) return null
  if (typeof value === "number") {
    return {
      value,
      decimalPlaces: undefined,
      locale: undefined,
      units: undefined,
      unitsPosition: undefined,
    }
  }
  return {
    value: value.value,
    decimalPlaces: value.decimalPlaces,
    locale: value.locale,
    units: "units" in value ? value.units : undefined,
    unitsPosition: "unitsPosition" in value ? value.unitsPosition : undefined,
  }
}

const formatNumericValue = (
  numeric: ReturnType<typeof resolveNumericConfig>,
  fallbackDecimalPlaces: number
): string | null => {
  if (!numeric || Number.isNaN(numeric.value)) return null

  const decimalPlaces = numeric.decimalPlaces ?? fallbackDecimalPlaces
  const formatted = new Intl.NumberFormat(numeric.locale ?? "en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(numeric.value)

  if (!numeric.units) return formatted
  if (numeric.unitsPosition === "left") return `${numeric.units}${formatted}`
  return `${formatted}${numeric.units}`
}

/**
 * Balance semantic tag with amount and optional percentage trend.
 */
const F0TagBalance = React.memo(function F0TagBalance({
  percentage,
  amount,
  invertStatus,
  hint,
  info,
  nullText,
}: F0TagBalanceProps) {
  const amountConfig = resolveNumericConfig(amount)
  const percentageConfig = resolveNumericConfig(percentage)
  const formattedAmount = formatNumericValue(amountConfig, 2)

  if (!formattedAmount) {
    return (
      <F0TagRoot text={nullText ?? "N/A"} textColor="secondary" info={info} />
    )
  }

  const signedPercentage = percentageConfig?.value ?? 0
  const sign = Math.sign(signedPercentage).toString() as "-1" | "0" | "1"
  const statusBySign: Record<"-1" | "0" | "1", BalanceStatus> = {
    "-1": "negative",
    0: "neutral",
    1: "positive",
  }

  const statusSign = Math.sign(
    signedPercentage * (invertStatus ? -1 : 1)
  ).toString() as "-1" | "0" | "1"

  const status = statusBySign[statusSign]
  const percentageText =
    percentageConfig === null
      ? null
      : formatNumericValue(
          {
            ...percentageConfig,
            units: "%",
            unitsPosition: "right",
          },
          0
        )

  const text = [percentageText, formattedAmount].filter(Boolean).join(" · ")
  const additionalAccessibleText = `${status} balance`

  const icon =
    sign === "0" ? null : (
      <F0Icon
        icon={f0TagBalanceIconMap[sign]}
        size="sm"
        className={cn(
          {
            positive: "text-f0-icon-positive",
            neutral: "text-f0-icon-secondary",
            negative: "text-f0-icon-critical",
          }[status]
        )}
      />
    )

  return (
    <F0TagRoot
      className={cn(
        {
          positive: "bg-f0-background-positive text-f0-foreground-positive",
          neutral: "bg-f0-background-secondary text-f0-foreground-secondary",
          negative: "bg-f0-background-critical text-f0-foreground-critical",
        }[status]
      )}
      left={icon}
      text={text}
      textColor={f0TagBalanceTextColorMap[status]}
      hint={hint}
      additionalAccessibleText={additionalAccessibleText}
      info={info}
    />
  )
})

F0TagBalance.displayName = "F0Tag.Balance"

export { F0TagBalance }
