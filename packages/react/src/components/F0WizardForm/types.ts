import { z, ZodRawShape, ZodEffects } from "zod"

import { DialogWidth } from "@/components/F0Dialog"
import type {
  F0FormErrorTriggerMode,
  F0FormSubmitConfig,
  F0FormSubmitResult,
  F0PerSectionSubmitConfig,
  F0SectionConfig,
  F0PerSectionSectionConfig,
} from "@/components/F0Form/types"

export type F0FormSchema<T extends ZodRawShape = ZodRawShape> =
  | z.ZodObject<T>
  | ZodEffects<z.ZodObject<T>>

export type F0PerSectionSchema = Record<string, F0FormSchema>

export type InferPerSectionValues<T extends F0PerSectionSchema> = {
  [K in keyof T]: z.infer<T[K]>
}

export interface F0WizardFormStep {
  title: string
  sectionIds: string[]
  nextLabel?: string
  previousLabel?: string
}

/**
 * Per-section submit argument: discriminated union where sectionId narrows data.
 * fullData always contains all sections' latest values.
 */
export type F0WizardFormPerSectionSubmitArg<T extends F0PerSectionSchema> = {
  [K in keyof T & string]: {
    sectionId: K
    data: z.infer<T[K]>
    fullData: InferPerSectionValues<T>
  }
}[keyof T & string]

/**
 * Single-schema submit argument: data is the full form.
 */
export interface F0WizardFormSingleSubmitArg<TSchema extends F0FormSchema> {
  data: z.infer<TSchema>
}

// =============================================================================
// F0FormDefinition — opaque object returned by useF0FormDefinition
// =============================================================================

export interface F0FormDefinitionSingleSchema<TSchema extends F0FormSchema> {
  /** @internal Brand to distinguish from per-section at the type level */
  readonly _brand: "single"
  name: string
  schema: TSchema
  sections?: Record<string, F0SectionConfig>
  defaultValues?: Partial<z.infer<TSchema>>
  onSubmit: (
    arg: F0WizardFormSingleSubmitArg<TSchema>
  ) => Promise<F0FormSubmitResult> | F0FormSubmitResult
  submitConfig?: F0FormSubmitConfig
  errorTriggerMode?: F0FormErrorTriggerMode
}

export interface F0FormDefinitionPerSection<T extends F0PerSectionSchema> {
  /** @internal Brand to distinguish from single-schema at the type level */
  readonly _brand: "per-section"
  name: string
  schema: T
  sections?: Record<string, F0PerSectionSectionConfig>
  defaultValues?: { [K in keyof T]?: Partial<z.infer<T[K]>> }
  onSubmit: (
    arg: F0WizardFormPerSectionSubmitArg<T>
  ) => Promise<F0FormSubmitResult> | F0FormSubmitResult
  submitConfig?: F0PerSectionSubmitConfig
  errorTriggerMode?: F0FormErrorTriggerMode
}

export type F0FormDefinition<
  T extends F0FormSchema | F0PerSectionSchema =
    | F0FormSchema
    | F0PerSectionSchema,
> = T extends F0FormSchema
  ? F0FormDefinitionSingleSchema<T>
  : T extends F0PerSectionSchema
    ? F0FormDefinitionPerSection<T>
    : never

// =============================================================================
// F0WizardForm props — wizard-only props + definition
// =============================================================================

interface F0WizardFormBaseProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  width?: DialogWidth
  defaultStepIndex?: number
  nextLabel?: string
  previousLabel?: string
  submitLabel?: string
  onStepChanged?: (stepIndex: number) => void
  steps?: F0WizardFormStep[]
}

export interface F0WizardFormSingleSchemaProps<
  TSchema extends F0FormSchema,
> extends F0WizardFormBaseProps {
  formDefinition: F0FormDefinitionSingleSchema<TSchema>
}

export interface F0WizardFormPerSectionProps<
  T extends F0PerSectionSchema,
> extends F0WizardFormBaseProps {
  formDefinition: F0FormDefinitionPerSection<T>
}
