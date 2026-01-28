import { useMemo } from "react"
import { z, ZodTypeAny } from "zod"

import type { FieldDefinition } from "./fields/types"
import type { FormDefinitionItem } from "./types"

/**
 * Get default Zod schema based on field type when no validation is provided
 */
function getDefaultValidation(field: FieldDefinition): ZodTypeAny {
  switch (field.type) {
    case "text":
    case "textarea":
      return z.string()
    case "number":
      return z.number()
    case "checkbox":
    case "switch":
      return z.boolean()
    case "select":
      return field.multiple ? z.array(z.string()) : z.string()
    case "toggle":
      return z.string()
    default:
      return z.any()
  }
}

/**
 * Extract fields from a form definition item recursively
 */
function extractFieldsFromItem(
  item: FormDefinitionItem,
  schemaFields: Record<string, ZodTypeAny>
): void {
  if (item.type === "field") {
    const field = item.field
    schemaFields[field.id] = field.validation ?? getDefaultValidation(field)
  } else if (item.type === "group") {
    for (const field of item.group.fields) {
      schemaFields[field.id] = field.validation ?? getDefaultValidation(field)
    }
  } else if (item.type === "section") {
    for (const sectionItem of item.section.fields) {
      extractFieldsFromItem(sectionItem, schemaFields)
    }
  }
}

/**
 * Hook to generate a Zod schema from a form definition array.
 *
 * This extracts all field validations from fields, groups, and sections
 * and combines them into a single z.object() schema.
 *
 * @param definition - Array of form definition items
 * @returns A Zod object schema with all field validations
 *
 * @example
 * ```tsx
 * const definition = [
 *   {
 *     type: "field",
 *     field: { id: "name", type: "text", validation: z.string().min(2) }
 *   }
 * ]
 *
 * const schema = useFormDefinitionSchema(definition)
 * // Returns: z.object({ name: z.string().min(2) })
 * ```
 */
export function useFormDefinitionSchema(
  definition: FormDefinitionItem[]
): z.ZodObject<Record<string, ZodTypeAny>> {
  return useMemo(() => {
    const schemaFields: Record<string, ZodTypeAny> = {}

    for (const item of definition) {
      extractFieldsFromItem(item, schemaFields)
    }

    return z.object(schemaFields)
  }, [definition])
}

/**
 * Non-hook version for extracting schema outside of React components.
 * Useful for server-side validation or testing.
 *
 * @param definition - Array of form definition items
 * @returns A Zod object schema with all field validations
 */
export function getFormDefinitionSchema(
  definition: FormDefinitionItem[]
): z.ZodObject<Record<string, ZodTypeAny>> {
  const schemaFields: Record<string, ZodTypeAny> = {}

  for (const item of definition) {
    extractFieldsFromItem(item, schemaFields)
  }

  return z.object(schemaFields)
}

/**
 * Extract all field definitions from a form definition array.
 * Useful for iterating over fields for rendering or analysis.
 *
 * @param definition - Array of form definition items
 * @returns Flat array of all field definitions
 */
export function extractAllFields(
  definition: FormDefinitionItem[]
): FieldDefinition[] {
  const fields: FieldDefinition[] = []

  const extractFromItem = (item: FormDefinitionItem) => {
    if (item.type === "field") {
      fields.push(item.field)
    } else if (item.type === "group") {
      fields.push(...item.group.fields)
    } else if (item.type === "section") {
      for (const sectionItem of item.section.fields) {
        extractFromItem(sectionItem)
      }
    }
  }

  for (const item of definition) {
    extractFromItem(item)
  }

  return fields
}
