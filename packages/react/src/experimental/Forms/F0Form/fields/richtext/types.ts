import type { MentionsConfig } from "@/experimental/RichText/CoreEditor"
import type { heightType } from "@/experimental/RichText/RichTextEditor"

import type { BaseFieldDefinition } from "../types"

/**
 * Rich text editor result value type
 */
export interface RichTextValue {
  /** HTML content of the editor */
  value: string | null
  /** IDs of mentioned users */
  mentionIds?: number[]
}

/**
 * Rich text field definition (renders RichTextEditor component)
 */
export interface RichTextFieldDefinition extends BaseFieldDefinition {
  type: "richtext"
  /** Maximum number of characters allowed */
  maxCharacters?: number
  /** Configuration for user mentions */
  mentionsConfig?: MentionsConfig
  /** Height configuration for the editor */
  height?: heightType
  /** Whether to use plain HTML mode (no special blocks) */
  plainHtmlMode?: boolean
}
