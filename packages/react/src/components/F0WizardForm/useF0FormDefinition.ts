import { useMemo } from "react"
import { z } from "zod"

import type {
  F0FormErrorTriggerMode,
  F0FormSubmitConfig,
  F0FormSubmitResult,
  F0PerSectionSubmitConfig,
  F0SectionConfig,
  F0PerSectionSectionConfig,
} from "@/components/F0Form/types"

import type {
  F0FormDefinitionPerSection,
  F0FormDefinitionSingleSchema,
  F0FormSchema,
  F0PerSectionSchema,
  F0WizardFormPerSectionSubmitArg,
  F0WizardFormSingleSubmitArg,
} from "./types"

// =============================================================================
// Input types for the hook
// =============================================================================

interface UseF0FormDefinitionSingleSchemaInput<TSchema extends F0FormSchema> {
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

interface UseF0FormDefinitionPerSectionInput<T extends F0PerSectionSchema> {
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

// =============================================================================
// Runtime check
// =============================================================================

function isZodSchema(value: unknown): boolean {
  if (typeof value !== "object" || value === null) return false
  const obj = value as Record<string, unknown>
  const def = obj._def as Record<string, unknown> | undefined
  return def?.typeName === "ZodObject" || def?.typeName === "ZodEffects"
}

// =============================================================================
// Hook overloads
// =============================================================================

export function useF0FormDefinition<TSchema extends F0FormSchema>(
  input: UseF0FormDefinitionSingleSchemaInput<TSchema>
): F0FormDefinitionSingleSchema<TSchema>

export function useF0FormDefinition<T extends F0PerSectionSchema>(
  input: UseF0FormDefinitionPerSectionInput<T>
): F0FormDefinitionPerSection<T>

export function useF0FormDefinition(
  input:
    | UseF0FormDefinitionSingleSchemaInput<F0FormSchema>
    | UseF0FormDefinitionPerSectionInput<F0PerSectionSchema>
):
  | F0FormDefinitionSingleSchema<F0FormSchema>
  | F0FormDefinitionPerSection<F0PerSectionSchema> {
  return useMemo(() => {
    const brand = isZodSchema(input.schema) ? "single" : "per-section"
    return { ...input, _brand: brand } as
      | F0FormDefinitionSingleSchema<F0FormSchema>
      | F0FormDefinitionPerSection<F0PerSectionSchema>
  }, [input])
}
