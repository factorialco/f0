import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { withSkeleton } from "@/lib/skeleton"

import { F0SliderBase } from "./F0Slider"
import { F0SliderSkeleton } from "./F0SliderSkeleton"

export type { F0SliderProps, F0SliderTooltipMode } from "./types"
export { sliderTooltipModes } from "./types"

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0Slider = experimentalComponent(
  "F0Slider",
  withSkeleton(withDataTestId(F0SliderBase), F0SliderSkeleton)
)
