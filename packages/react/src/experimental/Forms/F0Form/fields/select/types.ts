import type { F0SelectItemProps } from "@/components/F0Select/types"

import type { F0BaseField, CommonRenderIfCondition } from "../types"

// ============================================================================
// Select Field RenderIf Conditions
// ============================================================================

/**
 * Base for select-specific conditions
 */
interface SelectRenderIfBase {
  fieldId: string
}

/**
 * RenderIf conditions specific to select fields
 */
export type SelectRenderIfCondition = SelectRenderIfBase &
  (
    | { equalsTo: string }
    | { notEqualsTo: string }
    | { includes: string }
    | { notIncludes: string }
    | { isEmpty: boolean }
  )

/**
 * All valid renderIf conditions for select fields
 */
export type SelectFieldRenderIf =
  | SelectRenderIfCondition
  | CommonRenderIfCondition

// ============================================================================
// Select Field Config and Type
// ============================================================================

/**
 * F0 config options specific to select fields
 *
 * Note: `clearable` is derived from the Zod schema:
 * - `z.string().optional()` or `z.string().nullable()` → clearable
 */
export interface F0SelectConfig {
  /** Options for the select dropdown */
  options: F0SelectItemProps<string, unknown>[]
  /** Whether multiple selection is allowed */
  multiple?: boolean
  /** Whether to show the search box */
  showSearchBox?: boolean
  /** Placeholder for the search box */
  searchBoxPlaceholder?: string
}

/**
 * Select field with all properties for rendering
 * Includes properties derived from Zod schema
 */
export type F0SelectField = F0BaseField &
  F0SelectConfig & {
    type: "select"
    /** Whether the select can be cleared (derived from optional/nullable) */
    clearable?: boolean
    /** Conditional rendering based on another field's value */
    renderIf?: SelectFieldRenderIf
  }
