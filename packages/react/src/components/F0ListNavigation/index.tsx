import { experimentalComponent } from "@/lib/experimental"

import { F0ListNavigation as _F0ListNavigation } from "./F0ListNavigation"
export type { F0ListNavigationProps } from "./F0ListNavigation"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0ListNavigation = experimentalComponent<typeof _F0ListNavigation>(
  "F0ListNavigation",
  _F0ListNavigation
)
