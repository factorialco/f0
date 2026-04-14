/** Format a conversion percentage (one decimal place, handles edge cases) */
export function formatPercent(value: number, total: number): string {
  if (total === 0) return "0%"
  const pct = (value / total) * 100
  if (pct === 100) return "100%"
  return `${pct.toFixed(1)}%`
}
