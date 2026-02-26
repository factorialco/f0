import { Input } from "@/experimental/Forms/Fields/Input"
import { cn } from "@/lib/utils"

import type { ValueDisplayEditorProps } from "../../types"

export function TextEditor({
  label,
  value,
  align,
  error,
  loading,
  onChange,
}: ValueDisplayEditorProps<string>) {
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
