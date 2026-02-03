import type { z, ZodRawShape } from "zod"

import type { F0Field, RenderIfCondition } from "./fields/types"

// Re-export F0 schema types
export type { F0FieldConfig, F0FieldType, F0ZodType } from "./f0Schema"
export {
  f0FormField,
  getF0Config,
  hasF0Config,
  inferFieldType,
} from "./f0Schema"

/**
 * Conditional rendering for sections - can be a condition object or a function
 */
export type SectionRenderIf =
  | RenderIfCondition
  | ((values: Record<string, unknown>) => boolean)

/**
 * Configuration for a form section.
 * Section order is determined by declaration order in the sections object.
 */
export interface F0SectionConfig {
  /** Section title */
  title: string
  /** Section description */
  description?: string
  /** Conditional rendering for the entire section */
  renderIf?: SectionRenderIf
}

// ============================================================================
// Internal types used by the form rendering system
// These are not part of the public API but are needed for internal structure
// ============================================================================

/**
 * @internal Field item wrapper for internal rendering
 */
export interface FieldItem {
  type: "field"
  field: F0Field
}

/**
 * @internal Row definition for rendering fields horizontally
 */
export interface RowDefinition {
  type: "row"
  /** Fields to render in the row */
  fields: F0Field[]
}

/**
 * @internal Section definition with title, description, and nested fields
 */
export interface SectionDefinition {
  /** Unique identifier for the section */
  id: string
  type: "section"
  section: {
    /** Section title */
    title: string
    /** Section description */
    description?: string
    /** Conditional rendering for the entire section */
    renderIf?: SectionRenderIf
    /** Fields and rows within this section */
    fields: (FieldItem | RowDefinition)[]
  }
}

/**
 * @internal Union of all definition item types used internally for rendering
 */
export type FormDefinitionItem = FieldItem | RowDefinition | SectionDefinition

// ============================================================================
// Public API types
// ============================================================================

/**
 * Type of submit UI to render
 * - "default": Standard submit button at the bottom of the form
 * - "action-bar": Floating action bar that appears when form has changes
 */
export type F0FormSubmitType = "default" | "action-bar"

/**
 * When to trigger and display validation errors
 * - "on-blur": Errors appear when the user leaves a field (default)
 * - "on-change": Errors appear as the user types (real-time validation)
 * - "on-submit": Errors only appear after attempting to submit the form
 */
export type F0FormErrorTriggerMode = "on-blur" | "on-change" | "on-submit"

/**
 * Base props shared by all submit types
 */
interface F0FormBaseProps<TSchema extends z.ZodObject<ZodRawShape>> {
  /** Unique name for the form, used for generating anchor links (e.g., #forms.[name].[sectionId].[fieldId]) */
  name: string
  /** Zod object schema with F0 field configurations */
  schema: TSchema
  /** Section configurations keyed by section ID */
  sections?: Record<string, F0SectionConfig>
  /** Default values for the form fields (partial of the schema type) */
  defaultValues?: Partial<z.infer<TSchema>>
  /** Callback when the form is submitted with valid data */
  onSubmit: (
    data: z.infer<TSchema>
  ) => Promise<F0FormSubmitResult> | F0FormSubmitResult
  /** Label for the submit button */
  submitLabel?: string
  /** Additional class name for the form */
  className?: string
  /**
   * When to trigger and display validation errors
   * @default "on-blur"
   */
  errorTriggerMode?: F0FormErrorTriggerMode
}

/**
 * Props when using the default submit button
 */
interface F0FormDefaultSubmitProps<
  TSchema extends z.ZodObject<ZodRawShape>,
> extends F0FormBaseProps<TSchema> {
  /** Type of submit UI (default button) */
  submitType?: "default"
  /** Whether to show the submit button */
  showSubmitButton?: boolean
}

/**
 * Props when using the action bar submit
 */
interface F0FormActionBarProps<
  TSchema extends z.ZodObject<ZodRawShape>,
> extends F0FormBaseProps<TSchema> {
  /** Type of submit UI (floating action bar) */
  submitType: "action-bar"
  /** Whether to show a Discard button to reset form changes */
  discardableChanges?: boolean
  /** Label for the discard button (defaults to i18n "forms.actionBar.discard") */
  discardLabel?: string
  /** Label shown in the action bar (defaults to i18n "forms.actionBar.unsavedChanges") */
  actionBarLabel?: string
}

/**
 * Props for the F0Form component
 *
 * @typeParam TSchema - The Zod object schema type. The form data type is inferred from this.
 *
 * @example
 * ```tsx
 * const schema = z.object({
 *   name: f0FormField(z.string(), { label: "Name" }),
 *   age: f0FormField(z.number(), { label: "Age" }),
 * })
 *
 * // Default submit button
 * <F0Form
 *   name="my-form"
 *   schema={schema}
 *   defaultValues={{ name: "" }}
 *   onSubmit={(data) => ({ success: true })}
 * />
 *
 * // Action bar with discard button
 * <F0Form
 *   name="my-form"
 *   schema={schema}
 *   submitType="action-bar"
 *   discardableChanges
 *   defaultValues={{ name: "" }}
 *   onSubmit={(data) => ({ success: true })}
 * />
 * ```
 */
export type F0FormProps<TSchema extends z.ZodObject<ZodRawShape>> =
  | F0FormDefaultSubmitProps<TSchema>
  | F0FormActionBarProps<TSchema>

/**
 * Result of form submission
 */
export type F0FormSubmitResult =
  | { success: true }
  | {
      success: false
      /** Root error message displayed at the top of the form */
      rootMessage?: string
      /** Field-specific error messages */
      errors?: Record<string, string>
    }
