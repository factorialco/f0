import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import { useEffect, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { cn, focusRing } from "@/lib/utils"

import { F0SegmentedControlProps } from "./types"

export const F0SegmentedControl = ({
  items,
  value,
  onChange,
  disabled = false,
  fullWidth = false,
}: F0SegmentedControlProps) => {
  const [localValue, setLocalValue] = useState(value ?? "")

  useEffect(() => {
    if (value !== undefined && value !== localValue) {
      setLocalValue(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const handleChange = (newValue: string) => {
    // Prevent deselection — a segmented control always has one active segment
    if (!newValue) return
    setLocalValue(newValue)
    onChange?.(newValue)
  }

  return (
    <ToggleGroup
      type="single"
      value={localValue}
      onValueChange={handleChange}
      disabled={disabled}
      className={cn(
        "inline-flex items-center rounded-md bg-f1-background-secondary p-0.5 gap-0.5",
        fullWidth && "w-full"
      )}
    >
      {items.map((item) => (
        <ToggleGroupItem
          key={item.value}
          value={item.value}
          disabled={disabled || item.disabled}
          className={cn(
            "relative flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded font-medium transition-all",
            "text-f1-foreground-secondary",
            "hover:text-f1-foreground hover:bg-f1-background-hover",
            "disabled:pointer-events-none disabled:text-f1-foreground-disabled",
            "data-[state=on]:bg-f1-background data-[state=on]:text-f1-foreground data-[state=on]:shadow",
            focusRing(),
            "h-8 px-3 text-sm",
            fullWidth && "w-full"
          )}
        >
          {item.icon && <F0Icon icon={item.icon} size="md" />}
          {item.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}

F0SegmentedControl.displayName = "F0SegmentedControl"
