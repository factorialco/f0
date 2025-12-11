import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import { useEffect, useState } from "react"
import { F0ButtonToggleInternal } from "../F0ButtonToggle/internal/F0ButtonToggle.internal"
import { F0ButtonToggleGroupProps } from "./types"

export const F0ButtonToggleGroup = (props: F0ButtonToggleGroupProps) => {
  const { items, size, multiple, required, value, onChange } = props

  const [localValue, setLocalValue] = useState(value)

  useEffect(() => {
    if (localValue === value) {
      return
    }
    setLocalValue(value)
    onChange?.(multiple ? value : (value as string))
  }, [value, multiple, onChange, localValue])

  return (
    <ToggleGroup type={multiple ? "multiple" : "single"}>
      {items.map((item) => (
        <ToggleGroupItem
          key={item.label as string}
          value={item.label as string}
        >
          <F0ButtonToggleInternal {...item} size={size} variant="with-label" />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
