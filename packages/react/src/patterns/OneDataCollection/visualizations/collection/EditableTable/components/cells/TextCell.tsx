import type { IconType } from "@/components/F0Icon"

import { F0TextInput } from "@/components/F0TextInput"
import { RecordType } from "@/hooks/datasource/types/records.typings"
import { Envelope, Link } from "@/icons/app"
import { cn } from "@/lib/utils"

import type { TextCellInputType } from "../../types"

import { EditableCellProps } from "."
import { BaseCell } from "./BaseCell"

/** Default leading icon per input type — mirrors F0Form's text fields. */
const DEFAULT_TEXT_ICONS: Partial<Record<TextCellInputType, IconType>> = {
  url: Link,
  email: Envelope,
}

export function TextCell<R extends RecordType>({
  editableColumn,
  value,
  inputPlaceholder,
  error,
  loading,
  onChange,
  hint,
}: EditableCellProps<R>) {
  const config = editableColumn.textConfig
  const inputType = config?.inputType ?? "text"
  const icon = config?.icon ?? DEFAULT_TEXT_ICONS[inputType]

  return (
    <BaseCell error={error} hint={hint}>
      <div
        className={cn(
          "flex w-full min-w-0",
          "cursor-text items-center",
          editableColumn.align === "right" && "[&_input]:text-right"
        )}
      >
        <F0TextInput
          type={inputType}
          icon={icon}
          label={editableColumn.label}
          hideLabel
          value={value}
          placeholder={inputPlaceholder ?? editableColumn.inputPlaceholder}
          onChange={onChange}
          loading={loading}
          transparent
        />
      </div>
    </BaseCell>
  )
}
