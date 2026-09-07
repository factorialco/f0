import { F0Icon } from "@/components/F0Icon"
import {
  ICON_ONLY_TOOLTIP_DELAY_MS,
  TooltipInternal,
} from "@/experimental/Overlays/Tooltip"
import { cn, focusRing } from "@/lib/utils"
import { ToggleGroupItem } from "@/ui/ToggleGroup"

import { F0SegmentedControlItem } from "../types"

/**
 * Hides the label only where the pointer can hover, because that is exactly
 * where the tooltip can recover it. A touch device reports `hover: none` and
 * opens no tooltip (both `TooltipInternal` and Radix ignore touch pointers),
 * so there the text stays on screen as the segment's only name.
 */
const HOVER_ONLY_HIDDEN_LABEL = "[@media(hover:hover)]:sr-only"

type SegmentProps = {
  item: F0SegmentedControlItem
  /** Whether this segment is the control's current value. */
  selected: boolean
  /** True when the segment itself or the whole control is disabled. */
  disabled: boolean
  fullWidth: boolean
  /** Render icon-only, per the control's `hideLabels`. */
  hideLabel: boolean
}

/**
 * One segment of `F0SegmentedControl`. Owns whether its label is visible and,
 * when it is not, the tooltip that names it.
 */
export const Segment = ({
  item,
  selected,
  disabled,
  fullWidth,
  hideLabel,
}: SegmentProps) => {
  // A segment with no icon has nothing else to show. A disabled one cannot be
  // hovered (`disabled:pointer-events-none`) or focused, so nothing could
  // recover a hidden label — both keep their text.
  const labelHidden = hideLabel && Boolean(item.icon) && !disabled

  const segment = (
    <ToggleGroupItem
      key={item.value}
      value={item.value}
      disabled={disabled}
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
      // Radix hands the tooltip trigger's own open/closed `data-state` down
      // through `asChild`, and its spread lands after the one `Toggle`
      // computes — which would leave every segment looking unselected.
      // Setting it here wins that spread back.
      data-state={selected ? "on" : "off"}
    >
      {item.icon && <F0Icon icon={item.icon} size="md" />}
      {labelHidden ? (
        <span className={HOVER_ONLY_HIDDEN_LABEL}>{item.label}</span>
      ) : (
        item.label
      )}
    </ToggleGroupItem>
  )

  if (!labelHidden) {
    return segment
  }

  // Where the label is hidden, hovering has to recover it.
  return (
    <TooltipInternal
      description={item.label}
      delay={ICON_ONLY_TOOLTIP_DELAY_MS}
    >
      {segment}
    </TooltipInternal>
  )
}

Segment.displayName = "Segment"
