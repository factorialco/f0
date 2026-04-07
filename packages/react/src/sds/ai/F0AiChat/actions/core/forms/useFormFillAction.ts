import { useFrontendTool } from "@copilotkit/react-core"
import { type ZodTypeAny } from "zod"

import type { F0FormSchema } from "@/patterns/F0Form/types"

import { useF0AiFormRegistry } from "@/patterns/F0Form/F0AiFormRegistry"

/**
 * Unwrap Zod wrappers (optional, nullable, default, effects, branded, etc.)
 * to reach the innermost "base" type.
 */
function unwrapZodType(schema: ZodTypeAny): ZodTypeAny {
  if ("unwrap" in schema && typeof schema.unwrap === "function") {
    return unwrapZodType(schema.unwrap())
  }
  if (
    "innerType" in schema &&
    typeof (schema as never as Record<string, unknown>).innerType === "function"
  ) {
    return unwrapZodType(
      (schema as never as { innerType: () => ZodTypeAny }).innerType()
    )
  }
  if (schema._def && "schema" in schema._def) {
    return unwrapZodType(schema._def.schema as ZodTypeAny)
  }
  return schema
}

/**
 * Recursively coerce a raw value into the native type expected by its Zod schema.
 * Handles dates, numbers, booleans, and nested objects (e.g. daterange {from, to}).
 */
function coerceValue(value: unknown, fieldSchema: ZodTypeAny): unknown {
  const base = unwrapZodType(fieldSchema)
  const typeName: string | undefined = base._def?.typeName

  if (typeName === "ZodDate" && typeof value === "string") {
    const d = new Date(value)
    return isNaN(d.getTime()) ? value : d
  }
  if (typeName === "ZodNumber" && typeof value === "string") {
    const n = Number(value)
    return isNaN(n) ? value : n
  }
  if (typeName === "ZodBoolean" && typeof value === "string") {
    return value === "true"
  }
  if (
    typeName === "ZodObject" &&
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  ) {
    const shape = base._def?.shape?.() as Record<string, ZodTypeAny> | undefined
    if (shape) {
      const coerced: Record<string, unknown> = {}
      for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
        coerced[k] = shape[k] ? coerceValue(v, shape[k]) : v
      }
      return coerced
    }
  }
  return value
}

/**
 * Extract the ZodObject shape from a schema that could be plain ZodObject or ZodEffects-wrapped.
 */
function getSchemaShape(
  schema: F0FormSchema
): Record<string, ZodTypeAny> | undefined {
  if ("shape" in schema) {
    return schema.shape as Record<string, ZodTypeAny>
  }
  if (schema._def && "schema" in schema._def) {
    const inner = schema._def.schema
    if (inner && "shape" in inner) {
      return inner.shape as Record<string, ZodTypeAny>
    }
  }
  return undefined
}

/**
 * AI tool that fills one or more fields in an active F0Form.
 * After setting values, it triggers validation and returns any errors.
 */
export const useFormFillAction = () => {
  const registry = useF0AiFormRegistry()

  useFrontendTool({
    name: "forms.formFill",
    description:
      "Fill one or more fields in an active form. After setting values, validation runs automatically. Returns success or any validation errors. Use formGetState first to learn field names and types.",
    parameters: [
      {
        name: "formName",
        type: "string",
        description: "Name of the form to fill.",
        required: true,
      },
      {
        name: "values",
        type: "object[]",
        description: "Array of field name/value pairs to set.",
        required: true,
        attributes: [
          {
            name: "fieldName",
            type: "string",
            description: "The field name (from formGetState).",
            required: true,
          },
          {
            name: "value",
            type: "string",
            description:
              "The value to set. For selects, use the option value. For dates, use ISO 8601 format. For booleans, use 'true' or 'false'. For numbers, use the numeric string.",
            required: true,
          },
        ],
      },
    ],
    handler: async ({
      formName,
      values,
    }: {
      formName: string
      values: { fieldName: string; value: string }[]
    }) => {
      if (!registry) {
        return { success: false, error: "Form registry is not available" }
      }

      const entry = registry.get(formName)
      if (!entry) {
        const available = registry.getFormNames()
        return {
          success: false,
          error: `Form "${formName}" not found`,
          availableForms: available,
        }
      }

      const ref = entry.ref.current
      if (!ref) {
        return {
          success: false,
          error: `Form "${formName}" is not mounted`,
        }
      }

      const valuesToSet: Record<string, unknown> = {}
      const shape = getSchemaShape(entry.schema)
      for (const { fieldName, value } of values) {
        const fieldSchema = shape?.[fieldName]
        valuesToSet[fieldName] = fieldSchema
          ? coerceValue(value, fieldSchema)
          : value
      }

      ref.setValues(valuesToSet, { shouldValidate: false, shouldDirty: true })
      await ref.trigger()

      // Refresh the registry snapshot so the co-agent picks up new values
      registry.rebuildDescriptions()

      const errors = ref.getErrors()
      const hasErrors = Object.keys(errors).length > 0

      return {
        success: !hasErrors,
        ...(hasErrors ? { errors } : {}),
        currentValues: ref.getValues(),
      }
    },
  })
}
