import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { motion } from "motion/react"
import { useId } from "react"

import { F0Icon } from "@/components/F0Icon"
import { cn, focusRing } from "@/lib/utils"
import { ToggleGroup, ToggleGroupItem } from "@/ui/ToggleGroup"

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
  // Scopes the sliding-indicator layout animation to this instance so multiple
  // segmented controls on the same page don't share (and fight over) it.
  const indicatorLayoutId = useId()

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
      {items.map((item) => {
        const isActive = localValue === item.value
        return (
          <ToggleGroupItem
            key={item.value}
            value={item.value}
            disabled={disabled || item.disabled}
            className={cn(
              "relative flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded font-medium transition-colors",
              "text-f1-foreground-secondary",
              "hover:text-f1-foreground",
              "disabled:pointer-events-none disabled:text-f1-foreground-disabled",
              "data-[state=on]:text-f1-foreground",
              focusRing(),
              "h-8 px-3 text-base",
              fullWidth && "w-full"
            )}
          >
            {/* The selected pill is a single shared element that slides between
             *  segments via framer-motion's layout animation. */}
            {isActive && (
              <motion.span
                aria-hidden
                layoutId={indicatorLayoutId}
                className="absolute inset-0 rounded bg-f1-background shadow"
                transition={{ type: "spring", bounce: 0.15, duration: 0.3 }}
              />
            )}
            <span className="relative z-10 inline-flex items-center gap-1.5">
              {item.icon && <F0Icon icon={item.icon} size="md" />}
              {hideLabels && item.icon ? (
                <span className="sr-only">{item.label}</span>
              ) : (
                item.label
              )}
            </span>
          </ToggleGroupItem>
        )
      })}
    </ToggleGroup>
  )
}

F0SegmentedControl.displayName = "F0SegmentedControl"
