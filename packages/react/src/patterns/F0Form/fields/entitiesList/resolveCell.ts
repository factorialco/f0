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
export type SelectOption = { value: string; label: string }

export type EntitiesListCellResolution =
  | { kind: "text"; inputType: "text" | "email" | "url" }
  | { kind: "number"; units?: string }
  | { kind: "money"; units?: string }
  | { kind: "date" }
  | { kind: "select"; options: SelectOption[] }
  | { kind: "multiselect"; options: SelectOption[] }

/** Common currency codes shown as their symbol in the money cell. */
const CURRENCY_SYMBOLS: Record<string, string> = {
  EUR: "€",
  USD: "$",
  GBP: "£",
}

/** Maps a config `options` array to `{ value, label }`, if present. */
function optionsFromConfig(
  config: Record<string, unknown>
): SelectOption[] | null {
  const options = config.options
  if (!Array.isArray(options)) return null
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
  return mapped.length > 0 ? mapped : null
}

/** One option per enum value, or null if the schema isn't a `z.enum`. */
function optionsFromEnum(schema: ZodTypeAny): SelectOption[] | null {
  if (!isZodType(schema, "ZodEnum")) return null
  const values = schema._def.values as string[]
  return values.map((value) => ({ value, label: value }))
}

/**
 * Maps an item-schema field to the editable-table cell it renders as, or
 * `null` when the field type has no inline cell. It reads the F0 field config
 * when present (so `f0FormField.money(...)`, `.percentage(...)`, `.select(...)`
 * etc. are recognized) and otherwise infers from the raw Zod type, so both
 * `z.number()` and `f0FormField.number()` work.
 *
 * Supported as columns: text (with the url/email leading icon), number,
 * percentage (number with a "%" unit), money, date, select and multi-select.
 * Everything else (boolean, checkbox/switch, time, duration, date range/period,
 * rich text, file, card select, …) has no inline cell yet and returns `null` —
 * the value is kept on the row but no column is shown.
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
  const inner = unwrapZodSchema(schema)

  // Array-valued fields (multi-select) — from `f0FormField.multiSelect` or a
  // raw `z.array(z.enum([...]))`. Checked before the field-type switch because
  // `inferFieldType` reports "select" for anything with `options`, regardless
  // of arity.
  if (isZodType(inner, "ZodArray")) {
    const element = unwrapZodSchema(inner._def.type as ZodTypeAny)
    const options = optionsFromConfig(cfg) ?? optionsFromEnum(element)
    return options ? { kind: "multiselect", options } : null
  }

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
    // The editable-table date cell is day-granularity. `datetime` uses it too
    // (its time-of-day is preserved unless the date is edited); `time` has no
    // calendar representation and falls through to `null`.
    case "date":
    case "datetime":
      return { kind: "date" }
    case "select": {
      const options = optionsFromConfig(cfg) ?? optionsFromEnum(inner)
      return options ? { kind: "select", options } : null
    }
    default:
      return null
  }
}
