import type { F0Field } from "../types"

/**
 * The field types that have an inline presentation. Everything else still
 * renders, as its standard field inside the row, because one unsupported field
 * must not take the whole form out of inline mode.
 */
const INLINE_SUPPORTED_TYPES = [
  "text",
  "number",
  "select",
  "date",
  "switch",
  "checkbox",
] as const

export type InlineSupportedType = (typeof INLINE_SUPPORTED_TYPES)[number]

/** Toggles are their own editor: one click commits and there is no edit mode. */
export function isInlineToggle(field: F0Field): boolean {
  return field.type === "switch" || field.type === "checkbox"
}

export function isInlineSupported(field: F0Field): boolean {
  if (!(INLINE_SUPPORTED_TYPES as readonly string[]).includes(field.type)) {
    return false
  }
  // The inline select is single-value only, so a multi-select falls back.
  return !(field.type === "select" && field.multiple === true)
}

const warned = new Set<string>()

export function warnUnsupportedInlineField(field: F0Field): void {
  if (process.env.NODE_ENV === "production") {
    return
  }
  const key = field.type === "select" ? "select:multiple" : field.type
  if (warned.has(key)) {
    return
  }
  warned.add(key)
  // eslint-disable-next-line no-console
  console.warn(
    `[F0Form] The "${key}" field type has no inline presentation. "${field.id}" renders as a standard field inside its detail row.`
  )
}

/** Test seam: the warning is once per process, which would leak between tests. */
export function resetInlineWarnings(): void {
  warned.clear()
}
