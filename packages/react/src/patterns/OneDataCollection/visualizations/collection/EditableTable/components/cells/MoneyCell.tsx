import { useMemo } from "react"

import { RecordType } from "@/hooks/datasource/types/records.typings"
import { useL10n } from "@/lib/providers/l10n"

import type { EditableCellProps } from "."

import { resolveUnits } from "./hooks/useNumberCellLayout"
import { NumberCell } from "./NumberCell"

const isUnitBeforeNumber = (
  locale: string,
  currency: string = "USD"
): boolean => {
  try {
    const parts = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).formatToParts(1)
    const currencyIndex = parts.findIndex((p) => p.type === "currency")
    const integerIndex = parts.findIndex((p) => p.type === "integer")
    return currencyIndex < integerIndex
  } catch {
    return false
  }
}

export function MoneyCell<R extends RecordType>(props: EditableCellProps<R>) {
  const { locale: contextLocale } = useL10n()
  const config = props.editableColumn.numberConfig
  const locale = config?.locale ?? contextLocale

  const resolvedUnits = resolveUnits(config, props.item)

  const unitsBefore = useMemo(
    () =>
      resolvedUnits
        ? config?.unitsPosition
          ? config.unitsPosition === "before"
          : isUnitBeforeNumber(locale, resolvedUnits)
        : false,
    [locale, resolvedUnits, config?.unitsPosition]
  )

  return (
    <NumberCell
      {...props}
      editableColumn={{
        ...props.editableColumn,
        numberConfig: {
          ...config,
          units: resolvedUnits ?? "$",
          unitsPosition: unitsBefore ? "before" : "after",
        },
      }}
    />
  )
}
