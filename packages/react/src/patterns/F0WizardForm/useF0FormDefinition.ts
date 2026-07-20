import { useEffect, useMemo, useRef, useState } from "react"
import { z, type ZodType } from "zod"

import type { ModuleId } from "@/components/avatars/F0AvatarModule"
import type { InitialFile } from "@/patterns/F0Form/fields/file/types"
import type {
  F0FormErrorTriggerMode,
  F0FormSubmitConfig,
  F0FormSubmitResult,
  F0PerSectionSubmitConfig,
  F0SectionConfig,
  F0PerSectionSectionConfig,
} from "@/patterns/F0Form/types"

import type {
  F0FormDefinitionPerSection,
  F0FormDefinitionSingleSchema,
  F0FormSchema,
  F0PerSectionSchema,
  F0WizardFormPerSectionSubmitArg,
  F0WizardFormSingleSubmitArg,
  F0WizardFormStep,
} from "./types"

// =============================================================================
// Async-or-sync helper type
// =============================================================================

/**
 * Accepts either a synchronous value or an async function that resolves it.
 * The async function receives an `AbortSignal` for cancellation support.
 */
export type AsyncOrSync<T> = T | ((signal: AbortSignal) => Promise<T>)

/**
 * Async function that receives typed params (from AI presentForm).
 * Use this variant when `defaultValuesParamsSchema` is provided.
 */
export type AsyncWithParams<T, TParams> = (params: TParams) => Promise<T>

// =============================================================================
// Input types for the hook
// =============================================================================

/** Base fields shared by all single-schema input variants */
interface UseF0FormDefinitionSingleSchemaInputBase<
  TSchema extends F0FormSchema,
> {
  name: string
  /** Human-readable description of the form's purpose */
  description?: string
  /** Module associated with this form (for avatar display in canvas cards) */
  module?: ModuleId
  schema: TSchema
  sections?: Record<string, F0SectionConfig>
  onSubmit: (
    arg: F0WizardFormSingleSubmitArg<TSchema>
  ) => Promise<F0FormSubmitResult> | F0FormSubmitResult
  submitConfig?: F0FormSubmitConfig
  errorTriggerMode?: F0FormErrorTriggerMode
  /**
   * Pre-existing file metadata for file fields.
   * Accepts a static array or an async function `(signal: AbortSignal) => Promise<InitialFile[]>`
   * that resolves the list at mount time.
   */
  initialFiles?: AsyncOrSync<InitialFile[]>
  /** Wizard steps — when present, F0WizardForm uses these instead of auto-deriving from sections */
  steps?: F0WizardFormStep[]
}

/** Single-schema input WITHOUT `defaultValuesParamsSchema` → `defaultValues` is sync or `(signal) => Promise<T>` */
interface UseF0FormDefinitionSingleSchemaInputWithoutParams<
  TSchema extends F0FormSchema,
> extends UseF0FormDefinitionSingleSchemaInputBase<TSchema> {
  defaultValues?: AsyncOrSync<Partial<z.infer<TSchema>>>
  defaultValuesParamsSchema?: undefined
}

/** Single-schema input WITH `defaultValuesParamsSchema` → `defaultValues` is sync or `(params) => Promise<T>` */
interface UseF0FormDefinitionSingleSchemaInputWithParams<
  TSchema extends F0FormSchema,
  TParams extends Record<string, unknown>,
> extends UseF0FormDefinitionSingleSchemaInputBase<TSchema> {
  defaultValues?:
    | Partial<z.infer<TSchema>>
    | AsyncWithParams<Partial<z.infer<TSchema>>, TParams>
  defaultValuesParamsSchema: ZodType<TParams>
}

type UseF0FormDefinitionSingleSchemaInput<
  TSchema extends F0FormSchema,
  TParams extends Record<string, unknown> = Record<string, unknown>,
> =
  | UseF0FormDefinitionSingleSchemaInputWithoutParams<TSchema>
  | UseF0FormDefinitionSingleSchemaInputWithParams<TSchema, TParams>

/** Base fields shared by all per-section input variants */
interface UseF0FormDefinitionPerSectionInputBase<T extends F0PerSectionSchema> {
  name: string
  /** Human-readable description of the form's purpose */
  description?: string
  /** Module associated with this form (for avatar display in canvas cards) */
  module?: ModuleId
  schema: T
  sections?: Record<string, F0PerSectionSectionConfig>
  onSubmit: (
    arg: F0WizardFormPerSectionSubmitArg<T>
  ) => Promise<F0FormSubmitResult> | F0FormSubmitResult
  submitConfig?: F0PerSectionSubmitConfig
  errorTriggerMode?: F0FormErrorTriggerMode
  /**
   * Pre-existing file metadata for file fields.
   * Accepts a static array or an async function `(signal: AbortSignal) => Promise<InitialFile[]>`
   * that resolves the list at mount time.
   */
  initialFiles?: AsyncOrSync<InitialFile[]>
  /** Wizard steps — when present, F0WizardForm uses these instead of auto-deriving from sections */
  steps?: F0WizardFormStep[]
}

/** Per-section input WITHOUT `defaultValuesParamsSchema` */
interface UseF0FormDefinitionPerSectionInputWithoutParams<
  T extends F0PerSectionSchema,
> extends UseF0FormDefinitionPerSectionInputBase<T> {
  defaultValues?: AsyncOrSync<{ [K in keyof T]?: Partial<z.infer<T[K]>> }>
  defaultValuesParamsSchema?: undefined
}

/** Per-section input WITH `defaultValuesParamsSchema` */
interface UseF0FormDefinitionPerSectionInputWithParams<
  T extends F0PerSectionSchema,
  TParams extends Record<string, unknown>,
> extends UseF0FormDefinitionPerSectionInputBase<T> {
  defaultValues?:
    | { [K in keyof T]?: Partial<z.infer<T[K]>> }
    | AsyncWithParams<{ [K in keyof T]?: Partial<z.infer<T[K]>> }, TParams>
  defaultValuesParamsSchema: ZodType<TParams>
}

type UseF0FormDefinitionPerSectionInput<
  T extends F0PerSectionSchema,
  TParams extends Record<string, unknown> = Record<string, unknown>,
> =
  | UseF0FormDefinitionPerSectionInputWithoutParams<T>
  | UseF0FormDefinitionPerSectionInputWithParams<T, TParams>

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

export function useAsyncDefaultValues<T>(
  defaultValues:
    | T
    | ((signal: AbortSignal) => Promise<T>)
    | ((params: Record<string, unknown>) => Promise<T>)
    | undefined,
  defaultValuesParamsSchema?: ZodType
): {
  resolved: T | undefined
  isLoading: boolean
} {
  const isAsync = typeof defaultValues === "function"
  const hasParamsSchema = !!defaultValuesParamsSchema

  const [resolved, setResolved] = useState<T | undefined>(
    isAsync ? undefined : (defaultValues as T | undefined)
  )
  const [isLoading, setIsLoading] = useState(isAsync)

  // Keep a ref to the function to avoid re-running the effect on every render
  const asyncFnRef = useRef(defaultValues)
  asyncFnRef.current = defaultValues

  const paramsSchemaRef = useRef(defaultValuesParamsSchema)
  paramsSchemaRef.current = defaultValuesParamsSchema

  useEffect(() => {
    if (typeof asyncFnRef.current !== "function") return

    const controller = new AbortController()
    setIsLoading(true)

    const fn = asyncFnRef.current

    // With a params schema, the function expects typed params (from AI
    // presentForm). None exist at mount, so resolve with empty params ({});
    // the AI registry later calls the same function with actual params.
    // The empty object is intentionally NOT validated against the schema —
    // it typically has required fields the function must handle as absent.
    const promise = paramsSchemaRef.current
      ? (fn as (params: Record<string, unknown>) => Promise<T>)({})
      : (fn as (signal: AbortSignal) => Promise<T>)(controller.signal)

    promise
      .then((data) => {
        if (!controller.signal.aborted) {
          setResolved(data)
          setIsLoading(false)
        }
      })
      .catch((err) => {
        if (!controller.signal.aborted) {
          console.warn(
            "[useAsyncDefaultValues] Async defaultValues rejected:",
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
  }, [isAsync, hasParamsSchema])

  // For sync values, track external changes
  if (!isAsync) {
    return { resolved: defaultValues as T | undefined, isLoading: false }
  }

  return { resolved, isLoading }
}

// =============================================================================
// Hook overloads
// =============================================================================

/** Single schema, no params */
export function useF0FormDefinition<TSchema extends F0FormSchema>(
  input: UseF0FormDefinitionSingleSchemaInputWithoutParams<TSchema>
): F0FormDefinitionSingleSchema<TSchema>

/** Single schema, with params */
export function useF0FormDefinition<
  TSchema extends F0FormSchema,
  TParams extends Record<string, unknown>,
>(
  input: UseF0FormDefinitionSingleSchemaInputWithParams<TSchema, TParams>
): F0FormDefinitionSingleSchema<TSchema>

/** Per-section, no params */
export function useF0FormDefinition<T extends F0PerSectionSchema>(
  input: UseF0FormDefinitionPerSectionInputWithoutParams<T>
): F0FormDefinitionPerSection<T>

/** Per-section, with params */
export function useF0FormDefinition<
  T extends F0PerSectionSchema,
  TParams extends Record<string, unknown>,
>(
  input: UseF0FormDefinitionPerSectionInputWithParams<T, TParams>
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
    defaultValuesParamsSchema,
    description,
    module,
  } = input

  const initialFiles = "initialFiles" in input ? input.initialFiles : undefined
  const steps = "steps" in input ? input.steps : undefined

  // Store the raw function for the AI registry to call with actual params
  const defaultValuesFn =
    typeof defaultValues === "function" && defaultValuesParamsSchema
      ? (defaultValues as (
          params: Record<string, unknown>
        ) => Promise<Record<string, unknown>>)
      : undefined

  // When defaultValues is an async function (without params schema), store it
  // as asyncDefaultValues for F0Form to resolve at render time.
  const asyncDefaultValues =
    typeof defaultValues === "function" && !defaultValuesParamsSchema
      ? (defaultValues as (signal: AbortSignal) => Promise<unknown>)
      : undefined

  // Sync defaultValues: only when it's not a function
  const syncDefaultValues =
    typeof defaultValues !== "function" ? defaultValues : undefined

  const { resolved: resolvedInitialFiles, isLoading: isLoadingInitialFiles } =
    useAsyncDefaultValues<InitialFile[]>(initialFiles)

  return useMemo(() => {
    const brand = isZodSchema(schema) ? "single" : "per-section"
    return {
      name,
      description,
      module,
      schema,
      sections,
      defaultValues: syncDefaultValues,
      asyncDefaultValues,
      onSubmit,
      submitConfig,
      errorTriggerMode,
      isLoading: isLoadingInitialFiles,
      defaultValuesParamsSchema,
      defaultValuesFn,
      initialFiles: resolvedInitialFiles,
      isLoadingInitialFiles,
      steps,
      _brand: brand,
    } as
      | F0FormDefinitionSingleSchema<F0FormSchema>
      | F0FormDefinitionPerSection<F0PerSectionSchema>
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    name,
    description,
    module,
    schema,
    sections,
    syncDefaultValues,
    asyncDefaultValues,
    onSubmit,
    submitConfig,
    errorTriggerMode,
    defaultValuesParamsSchema,
    defaultValuesFn,
    resolvedInitialFiles,
    isLoadingInitialFiles,
    steps,
  ])
}
