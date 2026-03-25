import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0TimelineRow as _F0TimelineRow } from "./F0TimelineRow"

export type {
  F0TimelineRowAction,
  F0TimelineRowMultitaskProps,
  F0TimelineRowOtherAction,
  F0TimelineRowProps,
  F0TimelineRowTaskProps,
  TimelineRowStatus,
} from "./types"
export { timelineRowStatuses } from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0TimelineRow = withDataTestId(
  experimentalComponent("F0TimelineRow", _F0TimelineRow)
)
