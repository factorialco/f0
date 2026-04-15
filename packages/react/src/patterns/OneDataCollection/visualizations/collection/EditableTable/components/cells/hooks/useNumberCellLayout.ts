import { useMemo } from "react"

import { useL10n } from "@/lib/providers/l10n"

import { NumberCellConfig } from "../../../types"
import { useInputTextWidth } from "./useInputTextWidth"

/**
 * Encapsulates formatting, units placement, and width measurement
 * for number/money cells so the component only deals with rendering.
 */
export function useNumberCellLayout(
  config: NumberCellConfig | undefined,
  numericValue: number | null
) {
  const { locale: contextLocale } = useL10n()
  const locale = config?.locale ?? contextLocale

  const units = config?.units
  const unitsBefore = units ? config.unitsPosition === "before" : false
  const formatter = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        maximumFractionDigits: config?.maxDecimals,
        useGrouping: false,
      }),
    [locale, config?.maxDecimals]
  )

  const formatted = numericValue != null ? formatter.format(numericValue) : ""

  const fullText = units
    ? unitsBefore
      ? `${units} ${formatted}`
      : `${formatted} ${units}`
    : formatted

  const { ref, width } = useInputTextWidth(fullText)

  return { ref, width, locale, units, unitsBefore }
}
