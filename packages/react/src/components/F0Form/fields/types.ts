import { ZodTypeAny } from "zod"

// ============================================================================
// Base RenderIf Condition Types
// ============================================================================

/**
 * Base condition that all renderIf conditions must have
 */
interface RenderIfBase {
  /** ID of the field to check the condition against */
  fieldId: string
}

/**
 * Common condition available for all field types
 */
export type CommonRenderIfCondition = RenderIfBase & {
  /** Check if the field value is empty (null, undefined, empty string, empty array) */
  isEmpty: boolean
}

/**
 * Union of all possible RenderIf conditions (used internally for evaluation)
 */
export type RenderIfCondition =
  | CommonRenderIfCondition
  | TextRenderIfCondition
  | NumberRenderIfCondition
  | BooleanRenderIfCondition
  | SelectRenderIfCondition
  | DateRenderIfCondition
  | DateRangeRenderIfCondition

/**
 * Function type for dynamic renderIf evaluation based on form values
 */
export type F0BaseFieldRenderIfFunction = (context: {
  values: Record<string, unknown>
}) => boolean

/**
 * RenderIf property can be a condition object or a function that receives form values
 */
export type F0BaseFieldRenderIfProp =
  | RenderIfCondition
  | F0BaseFieldRenderIfFunction

// ============================================================================
// Field-Specific RenderIf Condition Types (imported from each field)
// ============================================================================

import type { TextRenderIfCondition } from "./text/types"
import type { NumberRenderIfCondition } from "./number/types"
import type { BooleanRenderIfCondition } from "./checkbox/types"
import type { SelectRenderIfCondition } from "./select/types"
import type { DateRenderIfCondition } from "./date/types"
import type { DateRangeRenderIfCondition } from "./daterange/types"

// Re-export for convenience
export type {
  TextRenderIfCondition,
  NumberRenderIfCondition,
  BooleanRenderIfCondition,
  SelectRenderIfCondition,
  DateRenderIfCondition,
  DateRangeRenderIfCondition,
}

// ============================================================================
// Base Field Type
// ============================================================================

/**
 * Function type for dynamic disabled evaluation based on form values
 */
export type F0BaseFieldDisabledFunction = (context: {
  values: Record<string, unknown>
}) => boolean

/**
 * Disabled property can be a boolean or a function that receives form values
 */
export type F0BaseFieldDisabledProp = boolean | F0BaseFieldDisabledFunction

/**
 * Base properties shared across all F0 field types
 */
export interface F0BaseField {
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
  /**
   * Whether the field is disabled.
   * Can be a boolean or a function that receives form values.
   * @example
   * // Static disabled
   * disabled: true
   *
   * // Dynamic disabled based on other field values
   * disabled: ({ values }) => values.status === 'readonly'
   */
  disabled?: F0BaseFieldDisabledProp
  /**
   * When true, resets the field to its default value when it becomes disabled.
   * Useful for clearing dependent fields when their controlling field changes.
   * @default false
   */
  resetOnDisable?: boolean
}

/**
 * Utility type that converts F0BaseFieldDisabledProp to boolean in a field type.
 * Used internally by field renderers after the disabled prop has been evaluated.
 */
export type ResolvedField<T extends F0BaseField> = Omit<T, "disabled"> & {
  disabled?: boolean
}

/**
 * Field types for rendering
 */
export type FieldType =
  | "text"
  | "number"
  | "textarea"
  | "select"
  | "checkbox"
  | "switch"
  | "date"
  | "time"
  | "datetime"
  | "daterange"
  | "richtext"
  | "custom"

// ============================================================================
// Re-export field types and configs
// ============================================================================

export type { F0TextConfig, F0TextField } from "./text/types"
export type { F0NumberConfig, F0NumberField } from "./number/types"
export type { F0TextareaConfig, F0TextareaField } from "./textarea/types"
export type { F0SelectConfig, F0SelectField } from "./select/types"
export type { F0CheckboxConfig, F0CheckboxField } from "./checkbox/types"
export type { F0SwitchConfig, F0SwitchField } from "./switch/types"
export type {
  F0DateConfig,
  F0DateField,
  DateGranularity,
  F0TimeConfig,
  F0TimeField,
  F0DateTimeConfig,
  F0DateTimeField,
} from "./date/types"
export type {
  F0DateRangeConfig,
  F0DateRangeField,
  DateRangeValue,
} from "./daterange/types"
export type {
  F0RichTextConfig,
  F0RichTextField,
  RichTextValue,
} from "./richtext/types"
export type {
  F0CustomConfig,
  F0CustomField,
  CustomFieldRenderProps,
  CustomFieldRenderPropsBase,
} from "./custom/types"

// Import for union type
import type { F0TextField } from "./text/types"
import type { F0NumberField } from "./number/types"
import type { F0TextareaField } from "./textarea/types"
import type { F0SelectField } from "./select/types"
import type { F0CheckboxField } from "./checkbox/types"
import type { F0SwitchField } from "./switch/types"
import type { F0DateField, F0TimeField, F0DateTimeField } from "./date/types"
import type { F0DateRangeField } from "./daterange/types"
import type { F0RichTextField } from "./richtext/types"
import type { F0CustomField } from "./custom/types"

/**
 * Union of all F0 field types used for rendering
 */
export type F0Field =
  | F0TextField
  | F0NumberField
  | F0TextareaField
  | F0SelectField
  | F0CheckboxField
  | F0SwitchField
  | F0DateField
  | F0TimeField
  | F0DateTimeField
  | F0DateRangeField
  | F0RichTextField
  | F0CustomField
