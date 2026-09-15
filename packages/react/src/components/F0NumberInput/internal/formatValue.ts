/**
 * Formats a number for display. `useGrouping` adds the locale's thousands
 * separators (e.g. `1,234,567`) — used for the resting display; while the
 * field is focused it's off so the user edits a plain, ungrouped number
 * (which keeps `extractNumber` and caret handling simple).
 */
export const formatValue = (
  value: number,
  locale: string,
  maxDecimals?: number,
  useGrouping = false
) =>
  new Intl.NumberFormat(locale, {
    maximumFractionDigits: maxDecimals,
    useGrouping,
  }).format(value)
