import { granularityDefinitions } from "@/components/OneCalendar/granularities"
import { useI18n } from "@/lib/providers/i18n"
import type { F0Field } from "../types"

/** Copy raw text/numbers and displayed date/select labels. Omit empty values and toggles. */
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
      // Source-backed labels are resolved inside F0Select and are unavailable here.
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

      return granularity.toString({ from: value, to: value }, i18n, "long")
    }

    default:
      return undefined
  }
}
