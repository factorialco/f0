import { F0Select } from "@/components/F0Select"
import { RecordType } from "@/hooks/datasource/types/records.typings"
import { cn } from "@/lib/utils"

import { EditableCellProps } from "."
import { BaseCell } from "./BaseCell"

export function SelectCell<R extends RecordType>({
  editableColumn,
  value,
  error,
  loading,
  onChange,
  item,
}: EditableCellProps<R>) {
  const config = editableColumn.selectConfig
  if (!config) return null

  const sharedProps = {
    label: editableColumn.label,
    hideLabel: true as const,
    value: value || undefined,
    onChange: (val: string) => {
      const newVal = val ?? ""
      if (newVal !== value) {
        onChange(newVal)
      }
    },
    error,
    loading,
    size: "sm" as const,
    placeholder: config.placeholder,
    showSearchBox: config.showSearchBox,
    defaultItem: config.defaultItem?.(item),
    multiple: false as const,
  }

  const clearableProps = config.clearable
    ? ({ clearable: true } as const)
    : ({} as const)

  return (
    <BaseCell>
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
          "[&>div]:h-full",
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
