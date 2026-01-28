import type { FieldDefinition, RenderIfCondition } from "./fields/types"

// Re-export field types for convenience
export type {
  FieldDefinition,
  FieldType,
  RenderIfCondition,
  BaseFieldDefinition,
  TextFieldDefinition,
  NumberFieldDefinition,
  TextareaFieldDefinition,
  SelectFieldDefinition,
  CheckboxFieldDefinition,
  SwitchFieldDefinition,
} from "./fields/types"

/**
 * Conditional rendering for sections - can be a condition object or a function
 */
export type SectionRenderIf =
  | RenderIfCondition
  | ((values: Record<string, unknown>) => boolean)

/**
 * Field item wrapper for the definition array
 */
export interface FieldItem {
  type: "field"
  field: FieldDefinition
}

/**
 * Group definition for rendering fields in a row or column
 */
export interface GroupDefinition {
  type: "group"
  group: {
    /** Layout direction for the group */
    direction: "row" | "column"
    /** Fields to render in the group */
    fields: FieldDefinition[]
    /** Gap between fields (tailwind spacing scale) */
    gap?: "2" | "4" | "6" | "8"
  }
}

/**
 * Section definition with title, description, and nested fields
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
    /** Fields and groups within this section */
    fields: (FieldItem | GroupDefinition)[]
  }
}

/**
 * Union of all definition item types that can appear in the form definition array
 */
export type FormDefinitionItem = FieldItem | GroupDefinition | SectionDefinition

/**
 * Props for the F0Form component
 */
export interface F0FormProps<TValues extends Record<string, unknown>> {
  /** Array of form definition items (fields, groups, sections) */
  definition: FormDefinitionItem[]
  /** Default values for the form fields */
  defaultValues?: Partial<TValues>
  /** Callback when the form is submitted with valid data */
  onSubmit: (data: TValues) => Promise<F0FormSubmitResult> | F0FormSubmitResult
  /** Label for the submit button */
  submitLabel?: string
  /** Whether to show the submit button */
  showSubmitButton?: boolean
  /** Additional class name for the form */
  className?: string
  /** Children to render after the form fields (e.g., custom actions) */
  children?: React.ReactNode
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

/**
 * Extract all field IDs from a form definition for type inference
 */
export type ExtractFieldIds<T extends FormDefinitionItem[]> =
  T[number] extends infer Item
    ? Item extends FieldItem
      ? Item["field"]["id"]
      : Item extends GroupDefinition
        ? Item["group"]["fields"][number]["id"]
        : Item extends SectionDefinition
          ? ExtractFieldIds<Item["section"]["fields"]>
          : never
    : never
