import { useCallback } from "react"

import { useL10n } from "@/lib/providers/l10n"

import { NumericFormatterOptions, NumericValue } from "../types"
import { numericFormatter } from "../utils/numericFormatter"

export const useNumericFormatter = () => {
  const { locale } = useL10n()
  return useCallback(
    (value: NumericValue, options?: NumericFormatterOptions) => {
      return numericFormatter(value, {
        locale,
        ...options,
      })
    },
    [locale]
  )
}
