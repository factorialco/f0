import { granularityDefinitions } from "@/components/OneCalendar/granularities"
import { useI18n } from "@/lib/providers/i18n"
import type { F0Field } from "../types"

/**
 * What the row's copy action writes. Raw for text and number — no grouping, no
 * units, so a pasted number is still a number — and the rendered string for a
 * date, which has no useful raw form. A select copies the option's own label,
 * never its value, because the value is an id the reader never sees.
 *
 * Toggles have nothing worth copying, and neither has a field whose value is
 * absent, so both return `undefined` and the row shows no copy action.
 */
export function useInlineCopyValue(
  field: F0Field,
  value: unknown
): string | undefined {
  const i18n = useI18n()

  if (value === undefined || value === null || value === "") {
    return undefined
  }

  switch (field.type) {
    case "text":
    case "number":
      return String(value)

    case "select": {
      if (field.multiple) {
        return undefined
      }
      const options = field.options ?? []
      const selected = options.find(
        (option) => option.type !== "separator" && option.value === value
      )
      if (selected && selected.type !== "separator") {
        return selected.selectedLabel ?? selected.label
      }
      // A source-backed select resolves its options asynchronously inside
      // F0Select, so the label is not reachable from here.
      return undefined
    }

    case "date": {
      if (!(value instanceof Date)) {
        return undefined
      }
      const key = field.granularities?.[0] ?? "day"
      const granularity = granularityDefinitions[key]
      if (!granularity) {
        return undefined
      }
      // The same call DateInput makes, so the copy matches what the row reads.
      return granularity.toString({ from: value, to: value }, i18n, "long")
    }

    default:
      return undefined
  }
}
