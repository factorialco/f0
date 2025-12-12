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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const handleChange = (newValue: string | string[]) => {
    // For required, prevent clearing all selections
    if (required && ((multiple && newValue.length === 0) || !newValue)) {
      return
    }
    setLocalValue(newValue)
    if (multiple) {
      onChange?.(newValue as string[])
    } else {
      onChange?.(newValue as string)
    }
  }
  const localItems = useMemo(() => {
    return items.map((item) => ({
      ...item,
      disabled: disabled || item.disabled,
    }))
  }, [items, disabled])

  const selectedValues = multiple ? localValue : [localValue]

  const groupProps = multiple
    ? ({
        type: "multiple" as const,
        value: localValue as string[],
      } as const)
    : ({
        type: "single" as const,
        value: localValue as string,
      } as const)

  return (
    <ToggleGroup
      {...groupProps}
      onValueChange={handleChange}
      disabled={disabled}
      className={cn("flex items-center justify-center gap-1")}
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
            selected={!!selectedValues?.includes(item.value)}
            onSelectedChange={() => {}}
          />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
