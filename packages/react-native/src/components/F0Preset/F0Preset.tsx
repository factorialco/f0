import React from "react"

import { cn } from "../../lib/utils"
import { F0Counter } from "../F0Counter"
import { F0Text } from "../primitives/F0Text"
import { PressableFeedback } from "../primitives/PressableFeedback"

import { f0PresetContainerVariants } from "./F0Preset.styles"
import type { F0PresetProps } from "./F0Preset.types"

/**
 * F0Preset — Filter/toggle pill with an optional counter.
 *
 * Renders a pressable label pill that toggles between default and selected
 * states. When `number` is provided an `F0Counter` appears to the right.
 *
 * @example
 * <F0Preset label="Active" onPress={toggle} />
 * <F0Preset label="Pending" number={5} selected onPress={toggle} />
 */
const F0Preset = React.memo(function F0Preset({
  label,
  number,
  onPress,
  selected = false,
  className,
}: F0PresetProps) {
  const hasCounter = number != null

  return (
    <PressableFeedback
      variant="both"
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      accessibilityLabel={label}
      className={cn(
        f0PresetContainerVariants({ selected, hasCounter }),
        className
      )}
    >
      <F0Text
        variant="body-sm-medium"
        color={selected ? "selected" : "default"}
      >
        {label}
      </F0Text>
      {number != null && (
        <F0Counter value={number} type={selected ? "selected" : "default"} />
      )}
    </PressableFeedback>
  )
})

F0Preset.displayName = "F0Preset"

export { F0Preset }
