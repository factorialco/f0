import { zodResolver } from "@hookform/resolvers/zod"
import type { Resolver, FieldValues, ResolverOptions } from "react-hook-form"
import { z, ZodTypeAny, ZodRawShape, ZodObject } from "zod"

import { getF0Config } from "./f0Schema"
import { evaluateRenderIf } from "./fields/utils"

/**
 * Creates a conditional Zod resolver that only validates visible fields.
 *
 * Fields with `renderIf` conditions that evaluate to `false` are automatically
 * skipped during validation, preventing validation errors for hidden fields.
 *
 * @param schema - The original Zod object schema
 * @param schemaOptions - Options passed to zodResolver (e.g., errorMap)
 * @returns A resolver function compatible with react-hook-form
 */
export function createConditionalResolver<
  TSchema extends ZodObject<ZodRawShape>,
>(
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

    // Use the standard zodResolver with the dynamic schema
    const resolver = zodResolver(dynamicSchema, schemaOptions)
    return resolver(values, context, options)
  }
}

/**
 * Builds a dynamic schema where hidden fields (based on renderIf) skip validation.
 *
 * For each field in the schema:
 * - If it has no renderIf, keep the original schema
 * - If renderIf evaluates to true (field is visible), keep the original schema
 * - If renderIf evaluates to false (field is hidden), use z.any() to skip all validation
 */
function buildDynamicSchema<TSchema extends ZodObject<ZodRawShape>>(
  schema: TSchema,
  values: Record<string, unknown>
): ZodObject<ZodRawShape> {
  const shape = schema.shape
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

  return z.object(newShape)
}
