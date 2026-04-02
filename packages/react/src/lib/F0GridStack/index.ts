import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0GridStack as F0GridStackComponent } from "./F0GridStack"
export * from "./F0GridStack"

export const F0GridStack = withDataTestId(
  experimentalComponent<typeof F0GridStackComponent>(
    "F0GridStack",
    F0GridStackComponent
  )
)
