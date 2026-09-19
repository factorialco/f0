import { LABEL_SEPARATOR } from "@/components/F0Select/utils"
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
    case "textarea":
    case "number":
      return String(value)

    case "select": {
      const options = field.options ?? []
      // Source-backed labels are resolved inside F0Select and are unavailable here.
      const labelOf = (optionValue: unknown): string | undefined => {
        const selected = options.find(
          (option) =>
            option.type !== "separator" && option.value === optionValue
        )
        return selected && selected.type !== "separator"
          ? (selected.selectedLabel ?? selected.label)
          : undefined
      }

      if (field.multiple) {
        if (!Array.isArray(value)) {
          return undefined
        }
        const labels = value
          .map(labelOf)
          .filter((label): label is string => label !== undefined)
        return labels.length > 0 ? labels.join(LABEL_SEPARATOR) : undefined
      }

      return labelOf(value)
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
