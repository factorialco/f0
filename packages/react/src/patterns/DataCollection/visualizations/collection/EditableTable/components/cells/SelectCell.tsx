import { useState } from "react"

import { F0Select } from "@/components/F0Select"
import { renderProperty } from "@/patterns/DataCollection/property-render"
import { RecordType } from "@/hooks/datasource/types/records.typings"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"

import { EditableCellProps } from "."
import { BaseCell } from "./BaseCell"

const warnedColumns = new Set<string>()

export function SelectCell<R extends RecordType>({
  editableColumn,
  value,
  error,
  loading,
  onChange,
  item,
}: EditableCellProps<R>) {
  const i18n = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const config = editableColumn.selectConfig
  if (!config) {
    if (!warnedColumns.has(editableColumn.label)) {
      warnedColumns.add(editableColumn.label)
      console.warn(
        `SelectCell: column "${editableColumn.label}" has editType "select" but no selectConfig`
      )
    }
    return (
      <BaseCell>
        {renderProperty(item, editableColumn, "editableTable", i18n)}
      </BaseCell>
    )
  }

  const sharedProps = {
    label: editableColumn.label,
    hideLabel: true as const,
    value: value || undefined,
    onChange: (val: string | undefined) => {
      const newVal = val ?? ""
      if (newVal !== value) {
        onChange(newVal)
      }
    },
    loading,
    size: "sm" as const,
    placeholder: config.placeholder,
    showSearchBox: config.showSearchBox,
    defaultItem: config.defaultItem?.(item),
    multiple: false as const,
    onOpenChange: setIsOpen,
  }

  const clearableProps = config.clearable
    ? ({ clearable: true } as const)
    : ({} as const)

  return (
    <BaseCell error={error} isActive={isOpen}>
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
