import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0Rating as F0RatingBase } from "./F0Rating"

export * from "./types"

export const F0Rating = withDataTestId(
  experimentalComponent("F0Rating", F0RatingBase)
)
