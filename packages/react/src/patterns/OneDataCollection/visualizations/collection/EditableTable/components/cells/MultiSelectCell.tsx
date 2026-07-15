import { useState } from "react"

import { F0Select } from "@/components/F0Select"
import { RecordType } from "@/hooks/datasource/types/records.typings"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"
import { renderProperty } from "@/patterns/OneDataCollection/property-render"

import { EditableCellProps } from "."
import { BaseCell } from "./BaseCell"

const warnedColumns = new Set<string>()

/** Reads the cell's array value from the row (the stringified `value` prop
 * can't represent an array). */
function getSelectedValues<R extends RecordType>(
  item: R,
  columnId: string | undefined
): string[] {
  if (columnId === undefined) return []
  const raw = item[columnId as keyof R]
  return Array.isArray(raw)
    ? raw.filter((v): v is string => typeof v === "string")
    : []
}

export function MultiSelectCell<R extends RecordType>({
  editableColumn,
  error,
  loading,
  onChange,
  item,
  hint,
}: EditableCellProps<R>) {
  const i18n = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const config = editableColumn.selectConfig
  if (!config) {
    if (!warnedColumns.has(editableColumn.label)) {
      warnedColumns.add(editableColumn.label)
      console.warn(
        `MultiSelectCell: column "${editableColumn.label}" has editType "multiselect" but no selectConfig`
      )
    }
    return (
      <BaseCell>
        {renderProperty(item, editableColumn, "editableTable", i18n)}
      </BaseCell>
    )
  }

  const value = getSelectedValues(item, editableColumn.id)

  const sharedProps = {
    label: editableColumn.label,
    hideLabel: true as const,
    value,
    onChange: (val: string[]) => onChange(val),
    loading,
    size: "sm" as const,
    placeholder: config.placeholder ?? i18n.t("common.selectPlaceholder"),
    showSearchBox: config.showSearchBox,
    multiple: true as const,
    onOpenChange: setIsOpen,
  }

  const clearableProps = config.clearable
    ? ({ clearable: true } as const)
    : ({} as const)

  return (
    <BaseCell error={error} isActive={isOpen} hint={hint} cursor="pointer">
      <div
        className={cn(
          "flex w-full min-w-0 h-full",
          "items-center",
          "[&_[data-testid=input-field-wrapper]]:border-0",
          "[&_[data-testid=input-field-wrapper]]:bg-transparent",
          "[&_[data-testid=input-field-wrapper]]:shadow-none",
          "[&_[data-testid=input-field-wrapper]]:ring-0",
          "[&_[data-testid=input-field-wrapper]]:focus-within:ring-0",
          "[&_[data-testid=input-field-wrapper]]:focus-within:ring-offset-0",
          "[&_[data-testid=input-field-wrapper]]:h-full",
          "[&_[data-testid=input-field-wrapper]_.absolute]:top-1/2",
          "[&_[data-testid=input-field-wrapper]_.absolute]:-translate-y-1/2",
          "[&_[data-testid=input-field-wrapper]_.absolute]:bottom-auto",
          "[&>div]:h-full",
          "[&>div]:w-full",
          "[&>div>button]:h-full",
          editableColumn.align === "right" && "justify-end"
        )}
      >
        {"source" in config && config.source ? (
          <F0Select
            {...sharedProps}
            {...clearableProps}
            source={config.source}
            mapOptions={config.mapOptions}
          />
        ) : (
          <F0Select
            {...sharedProps}
            {...clearableProps}
            options={
              typeof config.options === "function"
                ? config.options(item)
                : config.options
            }
          />
        )}
      </div>
    </BaseCell>
  )
}
