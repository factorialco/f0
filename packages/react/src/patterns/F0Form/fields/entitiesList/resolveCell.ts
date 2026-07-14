import type { ZodTypeAny } from "zod"

import {
  getF0Config,
  inferFieldType,
  isZodType,
  unwrapZodSchema,
} from "../../f0Schema"
import { inferInputType } from "../text/schema"

/**
 * The editable-table cell an item-schema field renders as. Fields whose F0
 * field type has no inline cell resolve to `null` (see
 * {@link resolveEntitiesListCell}).
 */
export type EntitiesListCellResolution =
  | { kind: "text"; inputType: "text" | "email" | "url" }
  | { kind: "number"; units?: string }
  | { kind: "money"; units?: string }
  | { kind: "select"; options: Array<{ value: string; label: string }> }

/** Common currency codes shown as their symbol in the money cell. */
const CURRENCY_SYMBOLS: Record<string, string> = {
  EUR: "€",
  USD: "$",
  GBP: "£",
}

/** Reads select options from the field config, falling back to enum values. */
function resolveSelectOptions(
  schema: ZodTypeAny,
  config: Record<string, unknown>
): Array<{ value: string; label: string }> | null {
  const options = config.options
  if (Array.isArray(options)) {
    const mapped = options
      .filter(
        (option): option is { value: string; label?: unknown } =>
          typeof option === "object" &&
          option !== null &&
          typeof (option as { value?: unknown }).value === "string"
      )
      .map((option) => ({
        value: option.value,
        label: typeof option.label === "string" ? option.label : option.value,
      }))
    if (mapped.length > 0) return mapped
  }

  const inner = unwrapZodSchema(schema)
  if (isZodType(inner, "ZodEnum")) {
    const values = inner._def.values as string[]
    return values.map((value) => ({ value, label: value }))
  }

  return null
}

/**
 * Maps an item-schema field to the editable-table cell it renders as, or
 * `null` when the field type has no inline cell. It reads the F0 field config
 * when present (so `f0FormField.money(...)`, `.percentage(...)`, `.select(...)`
 * etc. are recognized) and otherwise infers from the raw Zod type, so both
 * `z.number()` and `f0FormField.number()` work.
 *
 * Supported as columns: text (with the url/email leading icon), number,
 * percentage (number with a "%" unit), money, and select. Everything else
 * (boolean, checkbox/switch, date, datetime, time, duration, date range/period,
 * rich text, file, multi-select, card select, …) has no inline cell yet and
 * returns `null` — the value is kept on the row but no column is shown.
 */
export function resolveEntitiesListCell(
  schema: ZodTypeAny
): EntitiesListCellResolution | null {
  const config = getF0Config(schema)
  const fieldType = inferFieldType(
    schema,
    (config ?? {}) as Parameters<typeof inferFieldType>[1]
  )
  const cfg = (config ?? {}) as Record<string, unknown>

  switch (fieldType) {
    case "text":
    case "textarea": {
      const raw =
        typeof cfg.inputType === "string"
          ? cfg.inputType
          : inferInputType(schema)
      const inputType = raw === "email" || raw === "url" ? raw : "text"
      return { kind: "text", inputType }
    }
    case "number":
      return { kind: "number" }
    case "percentage":
      return { kind: "number", units: "%" }
    case "money": {
      const currency =
        typeof cfg.currency === "string" ? cfg.currency : undefined
      return {
        kind: "money",
        units: currency ? (CURRENCY_SYMBOLS[currency] ?? currency) : undefined,
      }
    }
    case "select": {
      const options = resolveSelectOptions(schema, cfg)
      return options ? { kind: "select", options } : null
    }
    default:
      return null
  }
}
