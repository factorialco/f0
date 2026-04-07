import { experimentalComponent } from "@/lib/experimental"

import { F0Chart as _F0Chart } from "./F0Chart"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0Chart = experimentalComponent<typeof _F0Chart>(
  "F0Chart",
  _F0Chart
)
