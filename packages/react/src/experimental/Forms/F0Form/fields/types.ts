import { ZodTypeAny } from "zod"

/**
 * Conditional rendering operators for field-level conditions
 */
export type RenderIfCondition = {
  fieldId: string
} & (
  | { equalsTo: unknown }
  | { notEqualsTo: unknown }
  | { greaterThan: number }
  | { greaterThanOrEqual: number }
  | { lowerThan: number }
  | { lowerThanOrEqual: number }
  | { isEmpty: boolean }
  | { matches: RegExp }
)

/**
 * Base field definition shared across all field types
 */
export interface BaseFieldDefinition {
  /** Unique identifier for the field, used as the form field name */
  id: string
  /** Label displayed above the field */
  label: string
  /** Zod validation schema for the field */
  validation?: ZodTypeAny
  /** Helper text displayed below the field */
  helpText?: string
  /** Placeholder text for the input */
  placeholder?: string
  /** Whether the field is disabled */
  disabled?: boolean
  /** Conditional rendering based on another field's value */
  renderIf?: RenderIfCondition
}

// Re-export field type definitions
export type { TextFieldDefinition } from "./text/types"
export type { NumberFieldDefinition } from "./number/types"
export type { TextareaFieldDefinition } from "./textarea/types"
export type { SelectFieldDefinition } from "./select/types"
export type { CheckboxFieldDefinition } from "./checkbox/types"
export type { SwitchFieldDefinition } from "./switch/types"
export type { ToggleFieldDefinition, ToggleOption } from "./toggle/types"

// Import for union type
import type { TextFieldDefinition } from "./text/types"
import type { NumberFieldDefinition } from "./number/types"
import type { TextareaFieldDefinition } from "./textarea/types"
import type { SelectFieldDefinition } from "./select/types"
import type { CheckboxFieldDefinition } from "./checkbox/types"
import type { SwitchFieldDefinition } from "./switch/types"
import type { ToggleFieldDefinition } from "./toggle/types"

/**
 * Union of all field definition types
 */
export type FieldDefinition =
  | TextFieldDefinition
  | NumberFieldDefinition
  | TextareaFieldDefinition
  | SelectFieldDefinition
  | CheckboxFieldDefinition
  | SwitchFieldDefinition
  | ToggleFieldDefinition

/**
 * Field types mapping to existing components
 */
export type FieldType =
  | "text"
  | "number"
  | "textarea"
  | "select"
  | "checkbox"
  | "switch"
  | "toggle"
