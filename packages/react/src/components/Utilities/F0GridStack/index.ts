import { experimentalComponent } from "@/lib/experimental"

import { F0GridStack as F0GridStackComponent } from "./F0GridStack"
export * from "./F0GridStack"

export const F0GridStack = experimentalComponent<typeof F0GridStackComponent>(
  "F0GridStack",
  F0GridStackComponent
)
