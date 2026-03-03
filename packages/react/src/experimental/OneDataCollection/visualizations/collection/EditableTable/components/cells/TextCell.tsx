import { Input } from "@/experimental/Forms/Fields/Input"
import { cn } from "@/lib/utils"

import { EditableCellProps } from "."
import { BaseCell } from "./BaseCell"

export function TextCell({
  label,
  value,
  align,
  error,
  loading,
  onChange,
}: EditableCellProps) {
  return (
    <BaseCell>
      <div
        className={cn(
          "flex w-full min-w-0",
          "cursor-text items-center",
          align === "right" && "justify-end"
        )}
      >
        <Input
          type="text"
          label={label}
          hideLabel
          value={value}
          onChange={onChange}
          error={error}
          loading={loading}
          transparent
        />
      </div>
    </BaseCell>
  )
}
