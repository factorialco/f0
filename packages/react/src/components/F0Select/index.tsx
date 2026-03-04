import { experimentalComponent } from "@/lib/experimental"

import { F0Select as F0SelectComponent } from "./F0Select"

export * from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0Select = experimentalComponent("F0Select", F0SelectComponent)
