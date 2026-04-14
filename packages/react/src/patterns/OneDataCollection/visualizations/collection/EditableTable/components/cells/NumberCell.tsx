import { useMemo } from "react"

import { NumberInput } from "@/experimental/Forms/Fields/NumberInput"
import { RecordType } from "@/hooks/datasource/types/records.typings"
import { useL10n } from "@/lib/providers/l10n"
import { cn } from "@/lib/utils"

import type { EditableCellProps } from "."

import { BaseCell } from "./BaseCell"

export function NumberCell<R extends RecordType>({
  editableColumn,
  value,
  error,
  loading,
  onChange,
}: EditableCellProps<R>) {
  const { locale: contextLocale } = useL10n()
  const config = editableColumn.numberConfig
  const locale = config?.locale ?? contextLocale

  const unitsBefore = useMemo(
    () => (config?.units ? config.unitsPosition : false),
    [locale, config?.units]
  )

  const trimmed = typeof value === "string" ? value.trim() : value
  const parsed = trimmed !== "" && trimmed != null ? Number(trimmed) : NaN
  const numericValue: number | null = isFinite(parsed) ? parsed : 0

  const handleChange = (newValue: number | null) => {
    const stringValue = String(newValue ?? 0)
    if (stringValue !== value) {
      onChange(stringValue)
    }
  }

  return (
    <BaseCell error={error}>
      <div
        className={cn(
          "flex h-full w-full min-w-0 cursor-text items-center",
          editableColumn.align === "right" && "[&_input]:text-right",
          config?.units &&
            unitsBefore &&
            "[&_input]:pl-0 before:shrink-0 before:select-none before:pl-3 before:text-sm before:text-f1-foreground before:content-[attr(data-units)]",
          config?.units &&
            !unitsBefore &&
            "[&_input]:pr-1 after:shrink-0 after:select-none after:pr-3 after:text-sm after:text-f1-foreground after:content-[attr(data-units)]"
        )}
        data-units={config?.units}
      >
        <NumberInput
          label={editableColumn.label}
          hideLabel
          value={numericValue}
          onChange={handleChange}
          loading={loading}
          transparent
          hint=""
          locale={locale}
          min={config?.min}
          max={config?.max}
          step={config?.step}
          maxDecimals={config?.maxDecimals}
        />
      </div>
    </BaseCell>
  )
}
