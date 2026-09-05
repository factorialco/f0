import { useControllableState } from "@radix-ui/react-use-controllable-state"

import { cn } from "@/lib/utils"
import { ToggleGroup } from "@/ui/ToggleGroup"

import { Segment } from "./components/Segment"
import { F0SegmentedControlProps } from "./types"

export const F0SegmentedControl = ({
  items,
  value,
  onChange,
  disabled = false,
  fullWidth = false,
  hideLabels = false,
  ariaLabel,
  ariaLabelledBy,
}: F0SegmentedControlProps) => {
  const [localValue, setLocalValue] = useControllableState({
    prop: value,
    defaultProp: items[0]?.value ?? "",
    onChange,
  })

  const handleChange = (newValue: string) => {
    // Radix `ToggleGroup` (single mode) emits "" when the user re-clicks
    // the active segment, signalling deselection. A segmented control
    // always has one active segment, so we ignore that sentinel here.
    // Note: this means item values must be non-empty strings.
    if (newValue === "") return
    setLocalValue(newValue)
  }

  return (
    <ToggleGroup
      type="single"
      value={localValue}
      onValueChange={handleChange}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "inline-flex items-center rounded-md bg-f1-background-secondary p-0.5 gap-0.5",
        fullWidth && "w-full"
      )}
    >
      {items.map((item) => (
        <Segment
          key={item.value}
          item={item}
          selected={item.value === localValue}
          disabled={disabled || Boolean(item.disabled)}
          fullWidth={fullWidth}
          hideLabel={hideLabels}
        />
      ))}
    </ToggleGroup>
  )
}

F0SegmentedControl.displayName = "F0SegmentedControl"
