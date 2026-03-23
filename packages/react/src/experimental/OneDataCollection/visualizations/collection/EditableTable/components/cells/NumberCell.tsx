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

  const parsed = value !== "" && value != null ? Number(value) : NaN
  const numericValue: number | null = isFinite(parsed) ? parsed : null

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
          config?.units && "[&_input]:pr-1"
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
          <span className="shrink-0 select-none pr-3 text-sm text-f1-foreground">
            {config.units}
          </span>
        )}
      </div>
    </BaseCell>
  )
}
