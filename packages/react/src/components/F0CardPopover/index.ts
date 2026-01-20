import { F0CardPopover as F0CardPopoverComponent } from "./F0CardPopover"
import { experimentalComponent } from "@/lib/experimental"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0CardPopover = experimentalComponent<
  typeof F0CardPopoverComponent
>("F0CardPopover", F0CardPopoverComponent)
