import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0ButtonToggleGroup as F0ButtonToggleGroupComponent } from "./F0ButtonToggleGroup"
export * from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0ButtonToggleGroup = withDataTestId(
  experimentalComponent<typeof F0ButtonToggleGroupComponent>(
    "F0ButtonToggleGroup",
    F0ButtonToggleGroupComponent
  )
)
