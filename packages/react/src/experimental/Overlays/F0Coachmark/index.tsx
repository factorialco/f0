import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0Coachmark as _F0Coachmark } from "./F0Coachmark"

export type { CoachmarkAction, CoachmarkStep, F0CoachmarkProps } from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0Coachmark = withDataTestId(
  experimentalComponent("F0Coachmark", _F0Coachmark)
)
