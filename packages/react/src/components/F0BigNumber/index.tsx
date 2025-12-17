import { experimentalComponent } from "@/lib/experimental"
export * from "./types"

import { F0BigNumber as F0BigNumberCmp } from "./F0BigNumber"

export const F0BigNumber = experimentalComponent<typeof F0BigNumberCmp>(
  "F0BigNumber",
  F0BigNumberCmp
)
