import { forwardRef } from "react"

import { NumberInput } from "@/experimental/Forms/Fields/NumberInput/NumberInput"
import { cn } from "@/lib/utils"

import type { F0AmountCalculatorProps } from "./types"

function formatNumber(
  value: number,
  locale: string,
  maxDecimals: number
): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: maxDecimals,
    maximumFractionDigits: maxDecimals,
    useGrouping: false,
  }).format(value)
}

const F0AmountCalculator = forwardRef<HTMLDivElement, F0AmountCalculatorProps>(
  (
    {
      baseAmount,
      currency,
      label = "Amount calculator",
      locale = "de-DE",
      maxDecimals = 2,
      units = "%",
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("inline-flex items-center gap-2")}>
        <NumberInput
          {...props}
          label={label}
          hideLabel
          locale={locale}
          maxDecimals={maxDecimals}
          units={units}
        />
        {baseAmount != null && (
          <span className="whitespace-nowrap text-sm text-f1-foreground-secondary">
            {/* TODO: i18n — use translation key when available */}
            of {formatNumber(baseAmount, locale, maxDecimals)}
            {currency ? ` ${currency}` : ""}
          </span>
        )}
      </div>
    )
  }
)

F0AmountCalculator.displayName = "F0AmountCalculator"

export { F0AmountCalculator }
