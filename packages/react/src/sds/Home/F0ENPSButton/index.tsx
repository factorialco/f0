import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0ENPSButton as F0ENPSButtonComponent } from "./F0ENPSButton"

export type { F0ENPSButtonProps } from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0ENPSButton = withDataTestId(
  experimentalComponent("F0ENPSButton", F0ENPSButtonComponent)
)
