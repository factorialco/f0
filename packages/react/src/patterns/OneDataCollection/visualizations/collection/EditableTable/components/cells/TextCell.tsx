import { Input } from "@/experimental/Forms/Fields/Input"
import { RecordType } from "@/hooks/datasource/types/records.typings"
import { cn } from "@/lib/utils"

import { EditableCellProps } from "."
import { BaseCell } from "./BaseCell"

export function TextCell<R extends RecordType>({
  editableColumn,
  value,
  error,
  loading,
  onChange,
}: EditableCellProps<R>) {
  return (
    <BaseCell error={error}>
      <div
        className={cn(
          "flex w-full min-w-0",
          "cursor-text items-center",
          editableColumn.align === "right" && "[&_input]:text-right"
        )}
      >
        <Input
          type="text"
          label={editableColumn.label}
          hideLabel
          value={value}
          onChange={onChange}
          loading={loading}
          transparent
        />
      </div>
    </BaseCell>
  )
}
