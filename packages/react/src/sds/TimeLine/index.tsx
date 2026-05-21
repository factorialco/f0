import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0TimelineRow as _F0TimelineRow } from "./F0TimelineRow"
import { F0TimelineRowLogCardItem as _F0TimelineRowLogCardItem } from "./F0TimelineRowLogCardItem"

export type { F0TimelineRowLogCardItemProps } from "./F0TimelineRowLogCardItem"
export type {
  F0TimelineRowAction,
  F0TimelineRowMultitaskItemProps,
  F0TimelineRowMultitaskProps,
  F0TimelineRowNestedtaskProps,
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

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0TimelineRowLogCardItem = withDataTestId(
  experimentalComponent("F0TimelineRowLogCardItem", _F0TimelineRowLogCardItem)
)
