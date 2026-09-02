import { useControllableState } from "@radix-ui/react-use-controllable-state"

import { F0Icon } from "@/components/F0Icon"
import { TooltipInternal } from "@/experimental/Overlays/Tooltip"
import { cn, focusRing } from "@/lib/utils"
import { ToggleGroup, ToggleGroupItem } from "@/ui/ToggleGroup"

import { F0SegmentedControlProps } from "./types"

/**
 * How long the pointer has to rest on an icon-only segment before its name
 * appears. Short enough to answer "which one is this?" without a wait, long
 * enough that sweeping the pointer across the control opens nothing.
 */
const HIDDEN_LABEL_TOOLTIP_DELAY_MS = 200

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
      {items.map((item) => {
        // A segment without an icon has nothing else to show, so it keeps its
        // label visible even under `hideLabels`.
        const labelHidden = hideLabels && Boolean(item.icon)

        const segment = (
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
              "h-8 px-3 text-base",
              fullWidth && "w-full"
            )}
            // Radix hands the tooltip trigger's own open/closed `data-state`
            // down through `asChild`, and its spread lands after the one
            // `Toggle` computes — which would leave every segment looking
            // unselected. Setting it here wins that spread back.
            data-state={item.value === localValue ? "on" : "off"}
          >
            {item.icon && <F0Icon icon={item.icon} size="md" />}
            {labelHidden ? (
              <span className="sr-only">{item.label}</span>
            ) : (
              item.label
            )}
          </ToggleGroupItem>
        )

        // The hidden label is the segment's only name, so hovering has to
        // recover it.
        return labelHidden ? (
          <TooltipInternal
            key={item.value}
            description={item.label}
            delay={HIDDEN_LABEL_TOOLTIP_DELAY_MS}
          >
            {segment}
          </TooltipInternal>
        ) : (
          segment
        )
      })}
    </ToggleGroup>
  )
}

F0SegmentedControl.displayName = "F0SegmentedControl"
