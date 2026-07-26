import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0AudienceListItem as F0AudienceListItemComponent } from "./F0AudienceListItem"

export * from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0AudienceListItem = withDataTestId(
  experimentalComponent("F0AudienceListItem", F0AudienceListItemComponent)
)
