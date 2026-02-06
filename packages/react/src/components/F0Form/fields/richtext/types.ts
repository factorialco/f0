import type { MentionsConfig } from "@/experimental/RichText/CoreEditor"
import type { heightType } from "@/experimental/RichText/RichTextEditor"

import type { F0BaseField, CommonRenderIfCondition } from "../types"

// ============================================================================
// RichText Field RenderIf Conditions
// RichText only supports common conditions (isEmpty)
// ============================================================================

/**
 * All valid renderIf conditions for richtext fields
 */
export type RichTextFieldRenderIf = CommonRenderIfCondition

// ============================================================================
// RichText Value Type
// ============================================================================

/**
 * Rich text editor result value type
 */
export interface RichTextValue {
  /** HTML content of the editor */
  value: string | null
  /** IDs of mentioned users */
  mentionIds?: number[]
}

// ============================================================================
// RichText Field Config and Type
// ============================================================================

/**
 * F0 config options specific to rich text fields
 */
export interface F0RichTextConfig {
  /** Maximum number of characters allowed */
  maxCharacters?: number
  /** Configuration for user mentions */
  mentionsConfig?: MentionsConfig
  /** Height configuration for the editor */
  height?: heightType
  /** Whether to use plain HTML mode */
  plainHtmlMode?: boolean
}

/**
 * Rich text field with all properties for rendering
 */
export type F0RichTextField = F0BaseField &
  F0RichTextConfig & {
    type: "richtext"
    /** Conditional rendering based on another field's value */
    renderIf?: RichTextFieldRenderIf
  }
