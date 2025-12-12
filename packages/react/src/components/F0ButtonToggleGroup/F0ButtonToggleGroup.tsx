import { cn } from "@/lib/utils"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import { useEffect, useMemo, useState } from "react"
import { F0ButtonToggleInternal } from "../F0ButtonToggle/internal/F0ButtonToggle.internal"
import { F0ButtonToggleGroupProps } from "./types"

export const F0ButtonToggleGroup = (props: F0ButtonToggleGroupProps) => {
  const {
    items,
    size,
    multiple,
    required,
    value,
    onChange,
    variant,
    disabled,
  } = props

  const [localValue, setLocalValue] = useState(value)

  useEffect(() => {
    if (localValue === value) {
      return
    }
    setLocalValue(value)
    onChange?.(multiple ? (value as string[]) : (value as string))
  }, [value, multiple, onChange, localValue])

  const handleChange = (value: string | string[]) => {
    // For requires and not multiple, we need to prevent the selection to be cleared
    if (required && ((multiple && value.length === 0) || !value)) {
      return
    }
    console.log("value", value)
    setLocalValue(value)
    onChange?.(value)
  }

  const localItems = useMemo(() => {
    return items.map((item) => ({
      ...item,
      disabled,
    }))
  }, [items, disabled])

  const selectedValues = multiple ? localValue : [localValue]
  return (
    <ToggleGroup
      type={multiple ? "multiple" : "single"}
      disabled={disabled}
      className={cn("flex items-center justify-center gap-1")}
      value={localValue}
      onValueChange={handleChange}
    >
      {localItems.map((item) => (
        <ToggleGroupItem
          key={item.value as string}
          value={item.value as string}
        >
          <F0ButtonToggleInternal
            {...item}
            size={size}
            withBorder
            variant={variant}
            selected={selectedValues.includes(item.value)}
          />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
