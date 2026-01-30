import type { ReactNode } from "react"

import type { F0BaseField, CommonRenderIfCondition } from "../types"

// ============================================================================
// Custom Field RenderIf Conditions
// Custom only supports common conditions (isEmpty)
// ============================================================================

/**
 * All valid renderIf conditions for custom fields
 */
export type CustomFieldRenderIf = CommonRenderIfCondition

// ============================================================================
// Custom Field Render Props
// ============================================================================

/**
 * Props passed to the custom field render function
 */
export interface CustomFieldRenderProps {
  /** Field id */
  id: string
  /** Field label */
  label: string
  /** Placeholder text */
  placeholder?: string
  /** Current field value */
  value: unknown
  /** Callback to update the value */
  onChange: (value: unknown) => void
  /** Callback for blur events */
  onBlur: () => void
  /** Error message if validation failed */
  error?: string
  /** Whether async validation is in progress */
  isValidating: boolean
  /** Whether the field is disabled */
  disabled?: boolean
}

// ============================================================================
// Custom Field Config and Type
// ============================================================================

/**
 * F0 config options specific to custom fields
 */
export interface F0CustomConfig {
  /** Render function for the custom component */
  render: (props: CustomFieldRenderProps) => ReactNode
}

/**
 * Custom field with all properties for rendering
 */
export type F0CustomField = F0BaseField &
  F0CustomConfig & {
    type: "custom"
    /** Conditional rendering based on another field's value */
    renderIf?: CustomFieldRenderIf
  }
