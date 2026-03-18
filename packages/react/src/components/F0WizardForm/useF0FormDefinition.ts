import { useEffect, useMemo, useRef, useState } from "react"
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
// Async-or-sync helper type
// =============================================================================

/**
 * Accepts either a synchronous value or an async function that resolves it.
 * The async function receives an `AbortSignal` for cancellation support.
 */
export type AsyncOrSync<T> = T | ((signal: AbortSignal) => Promise<T>)

// =============================================================================
// Input types for the hook
// =============================================================================

interface UseF0FormDefinitionSingleSchemaInput<TSchema extends F0FormSchema> {
  name: string
  schema: TSchema
  sections?: Record<string, F0SectionConfig>
  defaultValues?: AsyncOrSync<Partial<z.infer<TSchema>>>
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
  defaultValues?: AsyncOrSync<{ [K in keyof T]?: Partial<z.infer<T[K]>> }>
  onSubmit: (
    arg: F0WizardFormPerSectionSubmitArg<T>
  ) => Promise<F0FormSubmitResult> | F0FormSubmitResult
  submitConfig?: F0PerSectionSubmitConfig
  errorTriggerMode?: F0FormErrorTriggerMode
}

// =============================================================================
// Runtime checks
// =============================================================================

function isZodSchema(value: unknown): boolean {
  if (typeof value !== "object" || value === null) return false
  const obj = value as Record<string, unknown>
  const def = obj._def as Record<string, unknown> | undefined
  return def?.typeName === "ZodObject" || def?.typeName === "ZodEffects"
}

// =============================================================================
// Internal hook for resolving async defaultValues
// =============================================================================

function useAsyncDefaultValues<T>(defaultValues: AsyncOrSync<T> | undefined): {
  resolved: T | undefined
  isLoading: boolean
} {
  const isAsync = typeof defaultValues === "function"

  const [resolved, setResolved] = useState<T | undefined>(
    isAsync ? undefined : (defaultValues as T | undefined)
  )
  const [isLoading, setIsLoading] = useState(isAsync)

  // Keep a ref to the function to avoid re-running the effect on every render
  const asyncFnRef = useRef(defaultValues)
  asyncFnRef.current = defaultValues

  useEffect(() => {
    if (typeof asyncFnRef.current !== "function") return

    const controller = new AbortController()
    setIsLoading(true)

    const fn = asyncFnRef.current as (signal: AbortSignal) => Promise<T>
    fn(controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) {
          setResolved(data)
          setIsLoading(false)
        }
      })
      .catch((err) => {
        if (!controller.signal.aborted) {
          console.warn(
            "[useF0FormDefinition] Async defaultValues rejected:",
            err
          )
          setResolved(undefined)
          setIsLoading(false)
        }
      })

    return () => {
      controller.abort()
    }
    // Only run once on mount — the async function identity is captured via ref
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAsync])

  // For sync values, track external changes
  if (!isAsync) {
    return { resolved: defaultValues as T | undefined, isLoading: false }
  }

  return { resolved, isLoading }
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
  const {
    name,
    schema,
    sections,
    defaultValues,
    onSubmit,
    submitConfig,
    errorTriggerMode,
  } = input

  const { resolved: resolvedDefaults, isLoading } =
    useAsyncDefaultValues(defaultValues)

  return useMemo(() => {
    const brand = isZodSchema(schema) ? "single" : "per-section"
    return {
      name,
      schema,
      sections,
      defaultValues: resolvedDefaults,
      onSubmit,
      submitConfig,
      errorTriggerMode,
      isLoading,
      _brand: brand,
    } as
      | F0FormDefinitionSingleSchema<F0FormSchema>
      | F0FormDefinitionPerSection<F0PerSectionSchema>
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    name,
    schema,
    sections,
    resolvedDefaults,
    onSubmit,
    submitConfig,
    errorTriggerMode,
    isLoading,
  ])
}
