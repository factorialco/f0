import { Input } from "@/experimental/Forms/Fields/Input"
import { cn } from "@/lib/utils"

import type { EditableCellProps } from "."

export function TextCell({
  label,
  value,
  align,
  error,
  loading,
  onChange,
}: EditableCellProps) {
  return (
    <div
      className={cn(
        "flex w-full min-w-0",
        "cursor-text",
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
      />
    </div>
  )
}
