/**
 * Format a minute count as Factorial's `Hh MMm` duration (e.g. 0 → "0h 00m",
 * 95 → "1h 35m"). Pure, JSX-free — safe to call from column renderers.
 */
export function formatDuration(minutes: number): string {
  const sign = minutes < 0 ? "-" : ""
  const abs = Math.abs(minutes)
  const hours = Math.floor(abs / 60)
  const mins = abs % 60
  return `${sign}${hours}h ${String(mins).padStart(2, "0")}m`
}

/** Signed balance: positive values get a leading `+`, zero stays "0h 00m". */
export function formatBalance(minutes: number): string {
  if (minutes > 0) return `+${formatDuration(minutes)}`
  return formatDuration(minutes)
}

/**
 * Compact hours, dropping the minutes when they're zero (e.g. -960 → "-16h",
 * 0 → "0h", 95 → "1h 35m"). Used for balances and summary headline numbers.
 */
export function formatHoursCompact(minutes: number): string {
  const sign = minutes < 0 ? "-" : ""
  const abs = Math.abs(minutes)
  const hours = Math.floor(abs / 60)
  const mins = abs % 60
  return mins === 0
    ? `${sign}${hours}h`
    : `${sign}${hours}h ${String(mins).padStart(2, "0")}m`
}
