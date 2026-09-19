import type { F0Field } from "../types"

/** Unsupported fields fall back to their standard presentation. */
const INLINE_SUPPORTED_TYPES = [
  "text",
  "textarea",
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
  return (INLINE_SUPPORTED_TYPES as readonly string[]).includes(field.type)
}

const warned = new Set<string>()

export function warnUnsupportedInlineField(field: F0Field): void {
  if (process.env.NODE_ENV === "production") {
    return
  }
  const key = field.type
  if (warned.has(key)) {
    return
  }
  warned.add(key)
  // eslint-disable-next-line no-console
  console.warn(
    `[F0Form] The "${key}" field type has no inline presentation. "${field.id}" renders as a standard field inside its detail row.`
  )
}

export function warnInlineSectionSubmitConfig(
  formName: string,
  sectionId: string
): void {
  if (process.env.NODE_ENV === "production") {
    return
  }
  const key = `section-submit:${formName}.${sectionId}`
  if (warned.has(key)) {
    return
  }
  warned.add(key)
  // eslint-disable-next-line no-console
  console.warn(
    `[F0Form] Inline detail rows save the whole record from one action bar, so the "submitConfig" on section "${sectionId}" of "${formName}" is ignored.`
  )
}

/** Reset process-wide warnings between tests. */
export function resetInlineWarnings(): void {
  warned.clear()
}
