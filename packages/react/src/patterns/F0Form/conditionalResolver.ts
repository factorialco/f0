import { zodResolver } from "@hookform/resolvers/zod"
import type { Resolver, FieldValues, ResolverOptions } from "react-hook-form"
import { z, ZodTypeAny, ZodRawShape, ZodObject, ZodEffects } from "zod"

import { getF0Config, isZodType, unwrapToZodObject } from "./f0Schema"
import { evaluateRenderIf } from "./fields/utils"
import type { F0FormSchema } from "./types"

/**
 * Creates a conditional Zod resolver that only validates visible fields.
 *
 * Fields with `renderIf` conditions that evaluate to `false` are automatically
 * skipped during validation, preventing validation errors for hidden fields.
 *
 * Supports both plain ZodObject schemas and refined schemas (ZodEffects).
 *
 * @param schema - The original Zod object schema (plain or refined)
 * @param schemaOptions - Options passed to zodResolver (e.g., errorMap)
 * @returns A resolver function compatible with react-hook-form
 */
export function createConditionalResolver<TSchema extends F0FormSchema>(
  schema: TSchema,
  schemaOptions?: Parameters<typeof zodResolver>[1]
): Resolver<z.infer<TSchema>> {
  return async (
    values: FieldValues,
    context: unknown,
    options: ResolverOptions<z.infer<TSchema>>
  ) => {
    // Build a dynamic schema that skips validation for hidden fields
    const dynamicSchema = buildDynamicSchema(schema, values)

    // Convert null values to undefined before Zod validation.
    // Clearable date fields use null instead of undefined to prevent
    // react-hook-form from falling back to defaultValues on clear.
    // Zod .optional() expects undefined, not null.
    const processedValues = { ...values }
    for (const key of Object.keys(processedValues)) {
      if (processedValues[key] === null) {
        processedValues[key] = undefined
      }
    }

    // Use the standard zodResolver with the dynamic schema
    const resolver = zodResolver(dynamicSchema, schemaOptions)
    return resolver(processedValues, context, options)
  }
}

/**
 * Builds a dynamic schema where hidden fields (based on renderIf) skip validation.
 *
 * For each field in the schema:
 * - If it has no renderIf, keep the original schema
 * - If renderIf evaluates to true (field is visible), keep the original schema
 * - If renderIf evaluates to false (field is hidden), use z.any() to skip all validation
 *
 * If the original schema has refinements (ZodEffects), they are preserved.
 */
function buildDynamicSchema<TSchema extends F0FormSchema>(
  schema: TSchema,
  values: Record<string, unknown>
): ZodObject<ZodRawShape> | ZodEffects<ZodObject<ZodRawShape>> {
  // Get the underlying ZodObject (unwrap if it's a ZodEffects)
  const objectSchema = unwrapToZodObject(schema)
  const shape = objectSchema.shape
  const newShape: ZodRawShape = {}

  for (const [fieldId, fieldSchema] of Object.entries(shape)) {
    const config = getF0Config(fieldSchema as ZodTypeAny)

    // If field has no config or no renderIf, keep original schema
    if (!config || !config.renderIf) {
      newShape[fieldId] = fieldSchema
      continue
    }

    // Evaluate the renderIf condition
    const isVisible = evaluateRenderIf(config.renderIf, values)

    if (isVisible) {
      // Field is visible, keep original validation
      newShape[fieldId] = fieldSchema
    } else {
      // Field is hidden - use z.any() to completely skip validation
      // This allows any value (including empty arrays, empty strings, etc.)
      // without triggering validation errors
      newShape[fieldId] = z.any()
    }
  }

  const dynamicObjectSchema = z.object(newShape)

  // If the original schema was a ZodEffects (has refinements), re-apply them
  if (isZodType(schema, "ZodEffects")) {
    const effects = schema as unknown as ZodEffects<ZodObject<ZodRawShape>>
    // Get the refinement function and re-apply it to the dynamic schema
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const effect = effects._def.effect as any
    if (effect.type === "refinement") {
      // Use superRefine instead of refine because Zod's refinement function
      // already has the message and path baked in (they're not stored on the effect object)
      return dynamicObjectSchema.superRefine(effect.refinement) as ZodEffects<
        ZodObject<ZodRawShape>
      >
    }
  }

  return dynamicObjectSchema
}
