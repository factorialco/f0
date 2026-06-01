import { z, type ZodErrorMap, type ZodTypeAny } from "zod"

import type { F0FormSchema, F0FormSubmitResult } from "../types"

import { buildDynamicSchema } from "../conditionalResolver"
import {
  describeFormSchema,
  type FormFieldDescription,
} from "../describeFormSchema"
import { getF0Config, unwrapToZodObject } from "../f0Schema"
import { evaluateRenderIf } from "../fields/utils"

// =============================================================================
// Public types
// =============================================================================

export interface F0FormValidationResult {
  /** Whether all visible fields pass validation */
  valid: boolean
  /** Flat map of field name → error message for every failing field */
  errors: Record<string, string>
  /**
   * Root-level Zod error message (if any). Corresponds to issues with
   * `path.length === 0` — e.g. from `.refine()` calls at the object level.
   */
  rootError?: string
}

export interface F0FormTester<TSchema extends F0FormSchema> {
  /**
   * Run validation against the schema.
   *
   * Provided `values` are merged on top of the tester's `defaultValues` so
   * you can test incremental fills:
   *
   * ```ts
   * const { errors } = await tester.validate()                        // all required errors
   * const { errors } = await tester.validate({ name: "Alice" })       // remaining errors
   * const { valid }  = await tester.validate({ name: "Alice", email: "a@b.com" }) // valid
   * ```
   *
   * Fields with `renderIf` conditions that evaluate to `false` for the given
   * values are skipped — matching real F0Form behaviour.
   */
  validate(values?: Record<string, unknown>): Promise<F0FormValidationResult>

  /**
   * Validate a single field in isolation.
   * Returns `{ valid, errors }` where `errors` contains at most one entry.
   */
  validateField(
    fieldName: string,
    values?: Record<string, unknown>
  ): Promise<F0FormValidationResult>

  /**
   * Return field descriptions for all fields in the schema.
   * Delegates to `describeFormSchema()` — useful for asserting field metadata.
   */
  describeFields(): FormFieldDescription[]

  /**
   * Return the default values this tester was created with, if any.
   */
  getDefaultValues(): Partial<z.infer<TSchema>> | undefined

  /**
   * Return the names of fields that are currently visible (renderIf === true)
   * for the given values, merged with the tester's defaultValues.
   */
  getVisibleFields(values?: Record<string, unknown>): string[]

  /**
   * Run schema validation and, if it passes, call the `onSubmit` handler
   * provided in the options. Useful for testing server-side errors that an
   * `onSubmit` returns (e.g. duplicate email, insufficient permissions).
   *
   * If schema validation fails the handler is never called and the result
   * is `{ success: false, errors: <validation errors> }`.
   *
   * Requires `onSubmit` to be set in `createF0FormTesterOptions`.
   *
   * @example
   * ```ts
   * const tester = createF0FormDefinitionTester(result.current)
   *
   * const result = await tester.submit({ name: "Alice", email: "taken@example.com" })
   * expect(result.success).toBe(false)
   * expect((result as { errors: Record<string,string> }).errors.email)
   *   .toBe("Email already registered")
   * ```
   */
  submit(values?: Record<string, unknown>): Promise<F0FormSubmitResult>
}

export interface CreateF0FormTesterOptions<TSchema extends F0FormSchema> {
  schema: TSchema
  defaultValues?: Partial<z.infer<TSchema>>
  /**
   * Optional submit handler. When provided, `tester.submit(values)` will run
   * schema validation first and then call this handler if validation passes.
   * Mirrors the signature used inside F0Form — the tester supplies `data`.
   */
  onSubmit?: (
    data: z.infer<TSchema>
  ) => Promise<F0FormSubmitResult> | F0FormSubmitResult
  /**
   * Optional Zod errorMap. Defaults to Zod's built-in English messages.
   * Pass a custom errorMap to get localised messages in assertions.
   */
  errorMap?: ZodErrorMap
}

// =============================================================================
// Implementation
// =============================================================================

interface FlattenedZodErrors {
  errors: Record<string, string>
  rootError?: string
}

function flattenZodErrors(error: z.ZodError): FlattenedZodErrors {
  const errors: Record<string, string> = {}
  let rootError: string | undefined
  for (const issue of error.issues) {
    if (issue.path.length === 0) {
      // Root-level issue (e.g. from object-level .refine())
      if (rootError === undefined) rootError = issue.message
      continue
    }
    const path = issue.path.join(".")
    // Keep only the first error per path
    if (!(path in errors)) {
      errors[path] = issue.message
    }
  }
  return { errors, rootError }
}

/**
 * Create a headless form tester that validates a schema using the same
 * conditional resolver logic that real F0Form uses internally.
 *
 * No React, no DOM, no providers required.
 *
 * @example
 * ```ts
 * const schema = z.object({
 *   name: f0FormField(z.string().min(1), { label: "Name" }),
 *   email: f0FormField(z.string().email(), { label: "Email" }),
 * })
 *
 * const tester = createF0FormTester({ schema })
 *
 * const { errors } = await tester.validate()
 * expect(errors).toHaveProperty("name")
 * expect(errors).toHaveProperty("email")
 *
 * const { valid } = await tester.validate({ name: "Alice", email: "alice@example.com" })
 * expect(valid).toBe(true)
 * ```
 */
export function createF0FormTester<TSchema extends F0FormSchema>(
  options: CreateF0FormTesterOptions<TSchema>
): F0FormTester<TSchema> {
  const { schema, defaultValues, errorMap, onSubmit } = options

  const validate = async (
    values?: Record<string, unknown>
  ): Promise<F0FormValidationResult> => {
    const merged = { ...(defaultValues ?? {}), ...(values ?? {}) }

    // Build dynamic schema from raw merged values BEFORE null conversion,
    // matching the order used in createConditionalResolver.
    const dynamicSchema = buildDynamicSchema(schema, merged)

    // THEN convert null → undefined for Zod parsing
    const processed: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(merged)) {
      processed[key] = value === null ? undefined : value
    }

    const parseOptions = errorMap ? { errorMap } : undefined
    const result = await dynamicSchema.safeParseAsync(processed, parseOptions)

    if (result.success) {
      return { valid: true, errors: {} }
    }

    const { errors, rootError } = flattenZodErrors(result.error)
    return {
      valid: false,
      errors,
      ...(rootError !== undefined && { rootError }),
    }
  }

  const validateField = async (
    fieldName: string,
    values?: Record<string, unknown>
  ): Promise<F0FormValidationResult> => {
    const full = await validate(values)
    const fieldError = full.errors[fieldName]
    return {
      valid: fieldError === undefined,
      errors: fieldError !== undefined ? { [fieldName]: fieldError } : {},
    }
  }

  const describeFields = (): FormFieldDescription[] =>
    describeFormSchema(schema)

  const getDefaultValues = (): Partial<z.infer<TSchema>> | undefined =>
    defaultValues

  const getVisibleFields = (values?: Record<string, unknown>): string[] => {
    const merged = { ...(defaultValues ?? {}), ...(values ?? {}) }
    const objectSchema = unwrapToZodObject(schema)
    const visible: string[] = []

    for (const [fieldId, fieldSchema] of Object.entries(objectSchema.shape)) {
      const config = getF0Config(fieldSchema as ZodTypeAny)
      if (!config?.renderIf) {
        visible.push(fieldId)
        continue
      }
      if (evaluateRenderIf(config.renderIf, merged)) {
        visible.push(fieldId)
      }
    }

    return visible
  }

  const submit = async (
    values?: Record<string, unknown>
  ): Promise<F0FormSubmitResult> => {
    if (!onSubmit) {
      throw new Error(
        "createF0FormTester: cannot call submit() without an onSubmit handler. " +
          "Pass onSubmit in the options, or use createF0FormDefinitionTester which reads it from the definition."
      )
    }

    const validation = await validate(values)
    if (!validation.valid) {
      return { success: false, errors: validation.errors }
    }

    const merged = { ...(defaultValues ?? {}), ...(values ?? {}) }
    return onSubmit(merged as z.infer<TSchema>)
  }

  return {
    validate,
    validateField,
    describeFields,
    getDefaultValues,
    getVisibleFields,
    submit,
  }
}
