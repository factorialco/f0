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

  const trimmed = typeof value === "string" ? value.trim() : value
  const parsed = trimmed !== "" && trimmed != null ? Number(trimmed) : NaN
  const numericValue: number | null = isFinite(parsed) ? parsed : 0

  const isZero = numericValue === 0

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
          config?.units && "[&_input]:pr-1",
          isZero && "[&_input]:text-f1-foreground-tertiary"
        )}
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
        {config?.units && (
          <span
            className={cn(
              "shrink-0 select-none pr-3 text-sm",
              isZero ? "text-f1-foreground-tertiary" : "text-f1-foreground"
            )}
          >
            {config.units}
          </span>
        )}
      </div>
    </BaseCell>
  )
}
