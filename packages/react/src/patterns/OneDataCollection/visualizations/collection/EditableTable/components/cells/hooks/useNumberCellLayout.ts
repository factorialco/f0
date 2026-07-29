import { useMemo } from "react"

import {
  toEditableString,
  withGroupSeparators,
} from "@/components/F0NumberInput/internal/localeNumber"
import { RecordType } from "@/hooks/datasource/types/records.typings"
import { useL10n } from "@/lib/providers/l10n"

import { NumberCellConfig } from "../../../types"
import { useInputTextWidth } from "./useInputTextWidth"

/**
 * Resolve `units` from config, which can be a static string or a per-row function.
 */
export function resolveUnits<R extends RecordType>(
  config: NumberCellConfig<R> | undefined,
  item: R
): string | undefined {
  if (!config?.units) return undefined
  return typeof config.units === "function" ? config.units(item) : config.units
}

/**
 * Encapsulates formatting, units placement, and width measurement
 * for number/money cells so the component only deals with rendering.
 */
export function useNumberCellLayout<R extends RecordType>(
  config: NumberCellConfig<R> | undefined,
  numericValue: number | null,
  item: R
) {
  const { locale: contextLocale } = useL10n()
  const locale = config?.locale ?? contextLocale

  const units = resolveUnits(config, item)
  const unitsBefore = units ? config?.unitsPosition === "before" : false
  // Grouped by default; measured on the same string the input renders so the
  // separators aren't clipped.
  const grouping = config?.grouping ?? true
  const formatted = useMemo(() => {
    if (numericValue == null) return ""
    const editable = toEditableString(numericValue, locale, config?.maxDecimals)
    return grouping ? withGroupSeparators(editable, locale) : editable
  }, [numericValue, locale, config?.maxDecimals, grouping])

  const fullText = units
    ? unitsBefore
      ? `${units} ${formatted}`
      : `${formatted} ${units}`
    : formatted

  const { ref, width } = useInputTextWidth(fullText)

  return { ref, width, locale, units, unitsBefore, grouping }
}
