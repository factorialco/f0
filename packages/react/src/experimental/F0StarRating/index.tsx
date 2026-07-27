import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0StarRating as F0StarRatingBase } from "./F0StarRating"

export * from "./types"

export const F0StarRating = withDataTestId(
  experimentalComponent("F0StarRating", F0StarRatingBase)
)
