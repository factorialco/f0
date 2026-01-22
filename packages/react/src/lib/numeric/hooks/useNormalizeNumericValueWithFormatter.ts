import { useCallback } from "react"

import { useL10n } from "@/lib/providers/l10n"

import {
  Numeric,
  NumericFormatterOptions,
  RelaxedNumericWithFormatter,
} from "../types"
import { normalizeNumericWithFormatter } from "../utils/normalizeValueWithFormatter"

export const useNormalizeNumericValueWithFormatter = () => {
  const { locale } = useL10n()
  return useCallback(
    (
      value: Numeric | RelaxedNumericWithFormatter,
      options?: { formatterOptions?: NumericFormatterOptions }
    ) => {
      return normalizeNumericWithFormatter(value, {
        ...options,
        formatterOptions: {
          locale,
          ...options?.formatterOptions,
        },
      })
    },
    [locale]
  )
}
