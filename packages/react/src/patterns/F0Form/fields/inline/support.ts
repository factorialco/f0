import type { F0Field } from "../types"

/** Unsupported fields fall back to their standard presentation. */
const INLINE_SUPPORTED_TYPES = [
  "text",
  "number",
  "select",
  "date",
  "switch",
  "checkbox",
] as const

export type InlineSupportedType = (typeof INLINE_SUPPORTED_TYPES)[number]

export function isInlineToggle(field: F0Field): boolean {
  return field.type === "switch" || field.type === "checkbox"
}

export function isInlineSupported(field: F0Field): boolean {
  if (!(INLINE_SUPPORTED_TYPES as readonly string[]).includes(field.type)) {
    return false
  }

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

/** Reset process-wide warnings between tests. */
export function resetInlineWarnings(): void {
  warned.clear()
}
