import { experimentalComponent } from "@/lib/experimental"

import { F0RichTextDisplay as F0RichTextDisplayComponent } from "./F0RichTextDisplay"

export * from "./types"

/**
 * @experimental This is an experimental component, use it at your own risk
 */
const F0RichTextDisplay = experimentalComponent(
  "F0RichTextDisplay",
  F0RichTextDisplayComponent
)

export { F0RichTextDisplay }

/** @deprecated Use F0RichTextDisplay */
export const RichTextDisplay = F0RichTextDisplay
