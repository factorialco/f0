import { useCallback } from "react"

import { NumberInput } from "@/experimental/Forms/Fields/NumberInput"
import { RecordType } from "@/hooks/datasource/types/records.typings"
import { cn } from "@/lib/utils"

import type { EditableCellProps } from "."
import { BaseCell } from "./BaseCell"
import { useNumberCellLayout } from "./hooks/useNumberCellLayout"

export function NumberCell<R extends RecordType>({
  editableColumn,
  value,
  error,
  loading,
  onChange,
  item,
}: EditableCellProps<R>) {
  const config = editableColumn.numberConfig

  const trimmed = typeof value === "string" ? value.trim() : value
  const parsed = trimmed !== "" && trimmed != null ? Number(trimmed) : NaN
  const numericValue: number | null = isFinite(parsed) ? parsed : null

  const { ref, width, locale, units, unitsBefore } = useNumberCellLayout(
    config,
    numericValue,
    item
  )

  const handleChange = (newValue: number | null) => {
    if (newValue == null) {
      if (value !== "") onChange(null)
      return
    }

    let clamped = newValue
    if (config?.min != null && clamped < config.min) clamped = config.min
    if (config?.max != null && clamped > config.max) clamped = config.max

    const stringValue = String(clamped)
    if (stringValue !== value) {
      onChange(stringValue)
    }
  }

  const unitsSpan = units && (
    <span className="flex shrink-0 select-none items-center self-center pt-[1px] text-sm text-f1-foreground">
      {units}
    </span>
  )

  // The input is shrink-wrapped to its content, so clicking on the
  // empty area of the cell won't naturally focus it. We delegate
  // focus manually to preserve the expected table editing UX.
  const handleCellClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const input = e.currentTarget.querySelector("input")
    if (input && e.target !== input) {
      input.focus()
    }
  }, [])

  return (
    <BaseCell error={error}>
      <div
        ref={ref}
        onClick={handleCellClick}
        className={cn(
          "flex h-full w-full cursor-text items-center",
          editableColumn.align === "right" && "justify-end"
        )}
      >
        <div
          className={cn(
            "flex h-full max-w-full items-center gap-1",
            unitsBefore && "pl-3 [&_input]:pl-1",
            !unitsBefore && units && "pr-3 [&_input]:pr-1"
          )}
          style={{ width }}
        >
          {unitsBefore && unitsSpan}
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
          {!unitsBefore && unitsSpan}
        </div>
      </div>
    </BaseCell>
  )
}
