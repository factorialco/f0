import { experimentalComponent } from "@/lib/experimental"

import { F0CommandBar as _F0CommandBar } from "./F0CommandBar"

export {
  type CommandGroup,
  type CommandItem,
  type F0CommandBarProps,
} from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0CommandBar = experimentalComponent("F0CommandBar", _F0CommandBar)
