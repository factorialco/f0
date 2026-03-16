import { ZodTypeAny } from "zod"

import type { F0FormSchema } from "./types"

import {
  F0FieldType,
  getF0Config,
  inferFieldType,
  unwrapToZodObject,
} from "./f0Schema"
import { isFieldRequired } from "./fields/schema"

/**
 * Serializable description of a single form field,
 * intended for AI tools to understand form structure.
 */
export interface FormFieldDescription {
  name: string
  type: F0FieldType
  label: string
  required: boolean
  placeholder?: string
  helpText?: string
  options?: { label: string; value: string | number }[]
  optionsSource?: "dynamic"
  section?: string
}

/**
 * Introspect an F0Form schema and return a serializable array of field descriptions.
 * Pure function — usable outside React components.
 *
 * @example
 * ```ts
 * const fields = describeFormSchema(mySchema)
 * // [{ name: "email", type: "text", label: "Email", required: true, ... }, ...]
 * ```
 */
export function describeFormSchema(
  schema: F0FormSchema
): FormFieldDescription[] {
  const objectSchema = unwrapToZodObject(schema)
  const shape = objectSchema.shape
  const result: FormFieldDescription[] = []

  for (const [fieldId, fieldSchema] of Object.entries(shape)) {
    const zodSchema = fieldSchema as ZodTypeAny
    const config = getF0Config(zodSchema)
    if (!config) continue

    const fieldType = inferFieldType(zodSchema, config)
    const required = isFieldRequired(zodSchema)

    const description: FormFieldDescription = {
      name: fieldId,
      type: fieldType,
      label: config.label,
      required,
    }

    if (config.placeholder) {
      description.placeholder = config.placeholder
    }

    if (config.helpText) {
      description.helpText = config.helpText
    }

    if (config.section) {
      description.section = config.section
    }

    // Extract options for select fields
    if (fieldType === "select") {
      if ("source" in config && config.source) {
        description.optionsSource = "dynamic"
      } else if ("options" in config && config.options) {
        const opts: { label: string; value: string | number }[] = []
        for (const opt of config.options) {
          if ("label" in opt && "value" in opt) {
            opts.push({ label: opt.label, value: opt.value })
          }
        }
        description.options = opts
      }
    }

    result.push(description)
  }

  return result
}
