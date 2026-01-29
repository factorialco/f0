import type { ReactNode } from "react"

import type { BaseFieldDefinition } from "../types"
import { ZodTypeAny } from "zod"

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

/**
 * Custom field definition that allows rendering external components
 * while maintaining react-hook-form integration
 */
export interface CustomFieldDefinition extends BaseFieldDefinition {
  type: "custom"
  validation: ZodTypeAny
  /** Render function for the custom component */
  render: (props: CustomFieldRenderProps) => ReactNode
}
