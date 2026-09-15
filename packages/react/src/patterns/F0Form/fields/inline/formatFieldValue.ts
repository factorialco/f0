import { formatValue } from "@/components/F0NumberInput/internal/formatValue"
import type {
  F0SelectItemObject,
  F0SelectItemProps,
} from "@/components/F0Select/types"
import { resolveGranularityDefinition } from "@/components/OneCalendar"
import type { I18nContextType } from "@/lib/providers/i18n"
import type { F0Field, F0NumberField, F0SelectField } from "../types"

/** The field types a detail row can read as text. */
export const INLINE_FIELD_TYPES = [
  "text",
  "number",
  "date",
  "select",
  "checkbox",
  "switch",
] as const

export type InlineFieldType = (typeof INLINE_FIELD_TYPES)[number]

export function isInlineFieldType(type: string): type is InlineFieldType {
  return (INLINE_FIELD_TYPES as readonly string[]).includes(type)
}

const isEmptyValue = (value: unknown): boolean =>
  value === undefined ||
  value === null ||
  value === "" ||
  (Array.isArray(value) && value.length === 0)

/**
 * Grouping is on and the format is the resting one, so the row reads the number
 * the way `F0NumberInput` reads it when nobody is typing in it.
 */
function formatNumber(field: F0NumberField, value: unknown, locale?: string) {
  const parsed = Number(value)
  if (Number.isNaN(parsed)) {
    return ""
  }
  const text = formatValue(
    parsed,
    field.locale ?? locale ?? "en-US",
    field.maxDecimals,
    true
  )
  return field.units ? `${text} ${field.units}` : text
}

/**
 * `"long"` is what `F0DatePicker` shows with no `displayFormat`, which is how
 * `DateFieldRenderer` mounts it — so the row reads the same string whether it
 * is being read or edited.
 */
function formatDate(
  field: Extract<F0Field, { type: "date" }>,
  value: unknown,
  i18n: I18nContextType,
  locale?: string
) {
  if (!(value instanceof Date) || Number.isNaN(value.getTime())) {
    return ""
  }
  const granularity = resolveGranularityDefinition(
    field.granularities?.[0] ?? "day"
  )
  return granularity.toString(value, i18n, "long", locale)
}

const isOption = <T>(
  option: F0SelectItemProps<T>
): option is F0SelectItemObject<T> => option.type !== "separator"

/**
 * The trigger's own rule: `selectedLabel` when the option carries one, because
 * a label that reads clearly under its group header can be ambiguous alone.
 */
function labelOfOption<T>(option: F0SelectItemObject<T>) {
  return option.selectedLabel ?? option.label
}

function formatSelect(field: F0SelectField, value: unknown) {
  if (!field.options) {
    throw new Error(
      `Field "${field.id}" is a source-backed select, which an inline row cannot read as text: the option labels live in the data source, not the field definition. Give the field static \`options\`, or render it without \`inline\`.`
    )
  }

  const options = field.options.filter(isOption)
  const labelOf = (item: unknown) => {
    const option = options.find((candidate) => candidate.value === item)
    return option ? labelOfOption(option) : String(item)
  }

  return Array.isArray(value) ? value.map(labelOf).join(", ") : labelOf(value)
}

/**
 * A field value as the text a read-only row would print. Empty is `""` — the
 * row decides what to show in its place, because that is the placeholder's job.
 *
 * Covers the types a record detail screen is built from and throws for the
 * rest: a row that guesses at a file, a phone or a rich-text value reads worse
 * than one that refuses to render.
 */
export function formatFieldValue(
  field: F0Field,
  value: unknown,
  i18n: I18nContextType,
  locale?: string
): string {
  if (isEmptyValue(value)) {
    return ""
  }

  switch (field.type) {
    case "text":
      return String(value)
    case "number":
      return formatNumber(field, value, locale)
    case "date":
      return formatDate(field, value, i18n, locale)
    case "select":
      return formatSelect(field, value)
    case "checkbox":
    case "switch":
      return value ? i18n.forms.inline.yes : i18n.forms.inline.no
    default:
      throw new Error(
        `Field "${field.id}" is of type "${field.type}", which has no inline text form. Supported: ${INLINE_FIELD_TYPES.join(", ")}.`
      )
  }
}
