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
    // Date-only strings (YYYY-MM-DD) are parsed as UTC by default,
    // which can shift the date by a day depending on timezone.
    // Force local-time interpretation by using component parts.
    const dateOnlyMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
    if (dateOnlyMatch) {
      const [, y, m, d] = dateOnlyMatch
      return new Date(Number(y), Number(m) - 1, Number(d))
    }
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
 * If the form is virtual (available but not rendered) and no active form is set,
 * it automatically activates the form first. If a different form is already active,
 * an error is returned unless confirmOverwrite is true.
 */
export const useFormFillAction = () => {
  const registry = useF0AiFormRegistry()

  useFrontendTool({
    name: "forms.fillForm",
    description:
      "Fill one or more fields in a form. " +
      "If the form is an available (virtual) form and no activeForm is set, it will be activated automatically. " +
      "If a different form is already active, pass confirmOverwrite: true to switch to this one. " +
      "After setting values, validation runs automatically. " +
      "Check activeForm.fieldDescriptions or formsOnCurrentPage in the shared state to learn field names and types.",
    followUp: false,
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
            description:
              "The field name (from activeForm.fieldDescriptions in the shared state).",
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
      {
        name: "confirmOverwrite",
        type: "boolean",
        description:
          "Set to true to replace the currently active form with this one when a different form is already active.",
      },
      {
        name: "cardTitle",
        type: "string",
        description:
          "Custom title to display on the form card shown inline in the chat (used when activating a virtual form).",
      },
      {
        name: "cardDescription",
        type: "string",
        description:
          "Custom description to display on the form card shown inline in the chat (used when activating a virtual form).",
      },
    ],
    handler: async ({
      formName,
      values,
      confirmOverwrite,
      cardTitle,
      cardDescription,
    }: {
      formName: string
      values: { fieldName: string; value: string }[]
      confirmOverwrite?: boolean
      cardTitle?: string
      cardDescription?: string
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

      // For virtual forms, manage activeForm activation
      if (entry.virtual) {
        const currentActive = registry.activeForm
        if (currentActive && currentActive.formName !== formName) {
          if (!confirmOverwrite) {
            return {
              success: false,
              error: `Form "${currentActive.formName}" is already active. Pass confirmOverwrite: true to switch to "${formName}".`,
              activeFormName: currentActive.formName,
            }
          }
        }
        if (!currentActive || currentActive.formName !== formName) {
          registry.setActiveForm(formName, {
            cardTitle: cardTitle ?? "",
            cardDescription: cardDescription ?? "",
          })
        }
      }

      const ref = entry.ref.current
      if (!ref) {
        return {
          success: false,
          error: `Form "${formName}" is not mounted`,
        }
      }

      const executeFill = async () => {
        // Re-look up the ref in case it changed while queued (e.g. virtual → rendered)
        const currentEntry = registry.get(formName)
        const currentRef = currentEntry?.ref.current ?? ref

        const valuesToSet: Record<string, unknown> = {}
        const shape = getSchemaShape(currentEntry?.schema ?? entry.schema)
        for (const { fieldName, value } of values) {
          const fieldSchema = shape?.[fieldName]
          valuesToSet[fieldName] = fieldSchema
            ? coerceValue(value, fieldSchema)
            : value
        }

        currentRef.setValues(valuesToSet, {
          shouldValidate: false,
          shouldDirty: true,
        })
        await currentRef.trigger()

        // Refresh the registry snapshot so the co-agent picks up new values
        registry.rebuildDescriptions()
        registry.incrementFillVersion(formName)

        const errors = currentRef.getErrors()
        const hasErrors = Object.keys(errors).length > 0
        const result = {
          success: !hasErrors,
          ...(hasErrors ? { errors } : {}),
          currentValues: currentRef.getValues(),
        }
        return result
      }

      // If async default values haven't resolved yet, queue the fill
      // so it runs after resolution — preventing defaults from overwriting AI values.
      if (!registry.isDefaultValuesResolved(formName)) {
        return new Promise<Record<string, unknown>>((resolve, reject) => {
          registry.queueFillAction(formName, () => {
            void executeFill().then(resolve, reject)
          })
        })
      }

      return executeFill()
    },
  })
}
