import { useMemo } from "react"

import { RecordType } from "@/hooks/datasource/types/records.typings"
import { useL10n } from "@/lib/providers/l10n"

import type { EditableCellProps } from "."

import { resolveUnits } from "./hooks/useNumberCellLayout"
import { NumberCell } from "./NumberCell"

const resolveCurrencyInfo = (
  locale: string,
  currency: string = "USD"
): { symbol: string; before: boolean } | undefined => {
  try {
    const parts = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).formatToParts(1)
    const currencyPart = parts.find((p) => p.type === "currency")
    const currencyIndex = parts.findIndex((p) => p.type === "currency")
    const integerIndex = parts.findIndex((p) => p.type === "integer")

    return {
      symbol: currencyPart?.value ?? currency,
      before: currencyIndex < integerIndex,
    }
  } catch {
    return undefined
  }
}

export function MoneyCell<R extends RecordType>(props: EditableCellProps<R>) {
  const { locale: contextLocale } = useL10n()
  const config = props.editableColumn.numberConfig
  const locale = config?.locale ?? contextLocale

  const resolvedUnits = resolveUnits(config, props.item)

  const currencyInfo = useMemo(
    () =>
      resolvedUnits ? resolveCurrencyInfo(locale, resolvedUnits) : undefined,
    [locale, resolvedUnits]
  )

  const unitsBefore = useMemo(() => {
    if (!resolvedUnits) return false

    if (config?.unitsPosition) {
      return config.unitsPosition === "before"
    }

    return currencyInfo?.before ?? false
  }, [resolvedUnits, config?.unitsPosition, currencyInfo])

  return (
    <NumberCell
      {...props}
      editableColumn={{
        ...props.editableColumn,
        numberConfig: {
          ...config,
          units: currencyInfo?.symbol ?? resolvedUnits ?? "$",
          unitsPosition: unitsBefore ? "before" : "after",
        },
      }}
    />
  )
}
