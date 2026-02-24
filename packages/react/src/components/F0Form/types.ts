import type { z, ZodRawShape, ZodEffects } from "zod"

import type { IconType } from "@/components/F0Icon"

import type {
  F0Field,
  F0BaseFieldRenderIfFunction,
  RenderIfCondition,
} from "./fields/types"

// Re-export F0 schema types
export type { F0FieldConfig, F0FieldType, F0ZodType } from "./f0Schema"
export {
  f0FormField,
  getF0Config,
  hasF0Config,
  inferFieldType,
} from "./f0Schema"

// Re-export useF0Form hook and types
export { useF0Form } from "./useF0Form"
import type { F0FormRef } from "./useF0Form"
export type { F0FormRef, UseF0FormReturn } from "./useF0Form"

/**
 * Conditional rendering for sections - can be a condition object or a function
 */
export type SectionRenderIf = RenderIfCondition | F0BaseFieldRenderIfFunction

/**
 * Action button configuration for a section.
 * Provide either onClick for a button action or href for a link.
 */
export interface F0SectionAction {
  /** Button label */
  label: string
  /** Button icon */
  icon?: IconType
  /** Click handler (use this or href) */
  onClick?: () => void
  /** Link URL (use this or onClick) */
  href?: string
}

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
  /** Optional action button for the section */
  action?: F0SectionAction
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
    /** Optional action button for the section */
    action?: F0SectionAction
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
  /** Label shown in the action bar while submitting (defaults to i18n "forms.actionBar.saving") */
  savingMessage?: string
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
  /**
   * When true, hides the submit button.
   * Useful when using `useF0Form` hook to submit from outside the form.
   * @default false
   */
  hideSubmitButton?: boolean
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
 * Styling configuration for the form layout and appearance
 */
export interface F0FormStylingConfig {
  /**
   * Shows a sidebar with section navigation (Table of Contents)
   * @default false
   */
  showSectionsSidepanel?: boolean
}

/**
 * Type for F0Form schemas - can be a plain ZodObject or a refined ZodObject (ZodEffects)
 */
export type F0FormSchema<T extends ZodRawShape = ZodRawShape> =
  | z.ZodObject<T>
  | ZodEffects<z.ZodObject<T>>

/**
 * A record mapping section IDs to their individual schemas.
 * When used, each section gets independent validation and its own submit button.
 */
export type F0PerSectionSchema = Record<string, F0FormSchema>

/**
 * Helper type to infer the combined values from a per-section schema record.
 * Merges all section schemas into a single type.
 */
export type InferPerSectionValues<T extends F0PerSectionSchema> = {
  [K in keyof T]: z.infer<T[K]>
}

/**
 * Creates a union of `[sectionId, data]` pairs for each key in T.
 * Used to build a callback where TypeScript narrows `data` based on `sectionId`.
 *
 * @example
 * For T = { profile: ZodObject<{name: ZodString}>, settings: ZodObject<{theme: ZodEnum}> }
 * Produces: ["profile", { name: string }] | ["settings", { theme: "light" | "dark" }]
 */
type PerSectionSubmitArgs<T extends F0PerSectionSchema> = {
  [K in keyof T & string]: [sectionId: K, data: z.infer<T[K]>]
}[keyof T & string]

/**
 * Callback type for per-section submit. Uses a discriminated union of argument
 * tuples so that narrowing `sectionId` also narrows `data` to the correct type.
 */
type PerSectionSubmitHandler<T extends F0PerSectionSchema> = (
  ...args: PerSectionSubmitArgs<T>
) => Promise<F0FormSubmitResult> | F0FormSubmitResult

/**
 * Props for the F0Form component (single schema mode)
 */
export interface F0FormPropsWithSingleSchema<TSchema extends F0FormSchema> {
  /** Unique name for the form, used for generating anchor links */
  name: string
  /** Zod object schema with F0 field configurations */
  schema: TSchema
  /** Section configurations keyed by section ID */
  sections?: Record<string, F0SectionConfig>
  /** Default values for the form fields */
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
  /**
   * Styling configuration for form layout and appearance.
   * Controls section sidebar visibility and box wrapping.
   */
  styling?: F0FormStylingConfig
  /**
   * Ref to control the form programmatically from outside.
   * Use with the `useF0Form` hook to get a ref and submit/reset functions.
   */
  formRef?: React.MutableRefObject<F0FormRef | null>
}

/**
 * Per-section submit configuration, extending the base submit config
 * with an optional per-section label override.
 */
export interface F0PerSectionSubmitConfig {
  /** Custom label for the submit button (per section) */
  label?: string
  /**
   * Custom icon for the submit button
   * - undefined: uses default Save icon
   * - null: no icon shown
   * - IconType: custom icon
   */
  icon?: IconType | null
  /**
   * When true, the submit button is only visible once the section has unsaved changes.
   * @default false
   */
  showSubmitWhenDirty?: boolean
}

/**
 * Section configuration for per-section schema mode.
 * Extends F0SectionConfig with per-section submit and default values.
 */
export interface F0PerSectionSectionConfig extends F0SectionConfig {
  /** Override submit config for this specific section */
  submitConfig?: F0PerSectionSubmitConfig
}

/**
 * Props for the F0Form component (per-section schema mode).
 * Each section key in the schema maps to an independent form with its own
 * validation and submit button.
 */
export interface F0FormPropsWithPerSectionSchema<T extends F0PerSectionSchema> {
  /** Unique name for the form, used for generating anchor links */
  name: string
  /** Record mapping section IDs to their Zod schemas. Each section is independently validated and submitted. */
  schema: T
  /** Section configurations keyed by section ID */
  sections?: Record<string, F0PerSectionSectionConfig>
  /** Default values for each section, keyed by section ID */
  defaultValues?: {
    [K in keyof T]?: Partial<z.infer<T[K]>>
  }
  /** Callback when a section is submitted. Receives the section ID and its validated data, both correctly typed. */
  onSubmit: PerSectionSubmitHandler<T>
  /** Global submit config applied to all sections (can be overridden per section) */
  submitConfig?: F0PerSectionSubmitConfig
  /** Additional class name for the form container */
  className?: string
  /**
   * When to trigger and display validation errors
   * @default "on-blur"
   */
  errorTriggerMode?: F0FormErrorTriggerMode
  /**
   * Styling configuration for form layout and appearance.
   */
  styling?: F0FormStylingConfig
  /**
   * Ref to control the form programmatically from outside.
   */
  formRef?: React.MutableRefObject<F0FormRef | null>
}

/**
 * Union of both F0Form prop variants.
 * The component detects the mode based on whether `schema` is a single Zod schema
 * or a record of schemas keyed by section ID.
 */
export type F0FormProps<
  TSchema extends F0FormSchema | F0PerSectionSchema =
    | F0FormSchema
    | F0PerSectionSchema,
> = TSchema extends F0FormSchema
  ? F0FormPropsWithSingleSchema<TSchema>
  : TSchema extends F0PerSectionSchema
    ? F0FormPropsWithPerSectionSchema<TSchema>
    : never

/**
 * Result of form submission
 */
export type F0FormSubmitResult =
  | {
      success: true
      /** Optional message shown in the action bar after successful submission */
      message?: string
    }
  | {
      success: false
      /** Root error message displayed at the top of the form */
      rootMessage?: string
      /** Field-specific error messages */
      errors?: Record<string, string>
    }
