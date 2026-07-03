import { experimentalComponent } from "@/lib/experimental"

import { F0AudienceSelector as F0AudienceSelectorComponent } from "./F0AudienceSelector"

export * from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0AudienceSelector = experimentalComponent(
  "F0AudienceSelector",
  F0AudienceSelectorComponent
)
