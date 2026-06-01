import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0Sidepanel as F0SidepanelBase } from "./F0Sidepanel"

export type {
  F0SidepanelProps,
  NavigationStep,
  SidepanelNavigation,
  SidepanelOption,
  SidepanelSide,
  SidepanelWidth,
} from "./types"
export { sidepanelSides, sidepanelWidths } from "./types"

/**
 * @experimental This is an experimental component use it at your own risk.
 */
export const F0Sidepanel = withDataTestId(
  experimentalComponent("F0Sidepanel", F0SidepanelBase)
)
