import { experimentalComponent } from "@/lib/experimental"

import { F0AudienceSelector as F0AudienceSelectorComponent } from "./F0AudienceSelector"

export * from "./types"

// Shared audience primitives, consumed by sibling audience components (e.g.
// F0AudienceListItem) through this public barrel rather than by reaching into
// the selector's private component/hook folders.
export { AudienceAvatar } from "./components/AudienceAvatar"
export { useAudienceEntitySubtitle } from "./hooks/useAudienceEntitySubtitle"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0AudienceSelector = experimentalComponent(
  "F0AudienceSelector",
  F0AudienceSelectorComponent
)
