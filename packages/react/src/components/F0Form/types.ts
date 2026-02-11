import type { z, ZodRawShape } from "zod"

import type { IconType } from "@/components/F0Icon"

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
 * When to trigger and display validation errors
 * - "on-blur": Errors appear when the user leaves a field (default)
 * - "on-change": Errors appear as the user types (real-time validation)
 * - "on-submit": Errors only appear after attempting to submit the form
 */
export type F0FormErrorTriggerMode = "on-blur" | "on-change" | "on-submit"

/**
 * Base configuration shared by all submit types
 */
interface F0FormSubmitConfigBase {
  /** Custom label for the submit button */
  label?: string
  /**
   * Custom icon for the submit button
   * - undefined: uses default Save icon
   * - null: no icon shown
   * - IconType: custom icon
   */
  icon?: IconType | null
}

/**
 * Configuration for the discard button (action bar only)
 */
export interface F0FormDiscardConfig {
  /** Custom label for the discard button */
  label?: string
  /**
   * Custom icon for the discard button
   * - undefined: uses default Delete icon
   * - null: no icon shown
   * - IconType: custom icon
   */
  icon?: IconType | null
}

/**
 * Submit configuration for default button type
 */
interface F0FormDefaultSubmitConfig extends F0FormSubmitConfigBase {
  /**
   * Type of submit UI
   * @default "default"
   */
  type?: "default"
}

/**
 * Submit configuration for action bar type
 */
interface F0FormActionBarSubmitConfig extends F0FormSubmitConfigBase {
  /** Type of submit UI (floating action bar) */
  type: "action-bar"
  /** Whether to show a Discard button to reset form changes */
  discardable?: boolean
  /**
   * Configuration for the discard button (label and icon)
   * @default { label: "Discard", icon: Delete }
   */
  discardConfig?: F0FormDiscardConfig
  /** Label shown in the action bar (defaults to i18n "forms.actionBar.unsavedChanges") */
  actionBarLabel?: string
  /**
   * When true, centers the action bar relative to the ApplicationFrame content area
   * (accounting for the sidebar width) instead of the full viewport.
   * @default false
   */
  centerActionBarInFrameContent?: boolean
}

/**
 * Configuration for form submission behavior and appearance
 */
export type F0FormSubmitConfig =
  | F0FormDefaultSubmitConfig
  | F0FormActionBarSubmitConfig

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
 *   submitConfig={{
 *     type: "action-bar",
 *     discardable: true,
 *   }}
 *   defaultValues={{ name: "" }}
 *   onSubmit={(data) => ({ success: true })}
 * />
 * ```
 */
export interface F0FormProps<TSchema extends z.ZodObject<ZodRawShape>> {
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
  /**
   * Configuration for form submission behavior and appearance
   * @default { type: "default", label: "Submit", icon: Save }
   */
  submitConfig?: F0FormSubmitConfig
  /** Additional class name for the form */
  className?: string
  /**
   * When to trigger and display validation errors
   * @default "on-blur"
   */
  errorTriggerMode?: F0FormErrorTriggerMode
}

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
