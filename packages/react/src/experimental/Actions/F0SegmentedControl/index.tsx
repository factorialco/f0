import { experimentalComponent } from "@/lib/experimental"

import { F0SegmentedControl as _F0SegmentedControl } from "./F0SegmentedControl"

export * from "./types"

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0SegmentedControl = experimentalComponent(
  "F0SegmentedControl",
  _F0SegmentedControl
)
