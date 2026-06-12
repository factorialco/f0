import { experimentalComponent } from "@/lib/experimental"

import { F0RichTextEditor as F0RichTextEditorComponent } from "./F0RichTextEditor"

export * from "./types"

/**
 * @experimental This is an experimental component, use it at your own risk
 */
const F0RichTextEditor = experimentalComponent(
  "F0RichTextEditor",
  F0RichTextEditorComponent
)

export { F0RichTextEditor }

/** @deprecated Use F0RichTextEditor */
export const RichTextEditor = F0RichTextEditor
