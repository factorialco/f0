import type { IconType } from "@/components/F0Icon"

import { Calendar, Clock, Envelope, Link } from "@/icons/app"

/**
 * Single source of truth for the leading icon of a field input type, shared by
 * F0Form's field renderers, the `F0DatePicker`, and the editable-table cell
 * inputs — so a url, email, date or time reads the same whether it's a
 * standalone form field or a table cell. `datetime` reuses the `date` icon.
 */
export const FIELD_INPUT_ICONS = {
  url: Link,
  email: Envelope,
  time: Clock,
  date: Calendar,
  datetime: Calendar,
} satisfies Record<string, IconType>

/** Returns the leading icon for a field input type, if one is defined. */
export function getFieldInputIcon(
  inputType: string | undefined
): IconType | undefined {
  if (!inputType) return undefined
  return (FIELD_INPUT_ICONS as Record<string, IconType | undefined>)[inputType]
}
