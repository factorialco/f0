import type { F0AudienceOption } from "./types"

/**
 * A dropdown option enriched with everything the listbox needs to render it:
 * composite identity, DOM id for aria-activedescendant and selection state.
 */
export type AudienceOptionItem = {
  option: F0AudienceOption
  key: string
  domId: string
  selected: boolean
  disabled: boolean
}
