/**
 * Qualify series names with their value-axis label and keep every resulting
 * ECharts identity unique. ECharts keys legend selection by `series.name`, so
 * repeated names must be disambiguated even when they belong to the same axis.
 */
export function qualifySeriesNames(
  series: readonly { name: string }[],
  axisLabels: string | readonly string[]
): string[] {
  const baseNames = series.map(({ name }, index) => {
    const axisLabel =
      typeof axisLabels === "string" ? axisLabels : axisLabels[index]
    return `${name} · ${axisLabel}`
  })
  const totals = new Map<string, number>()
  const occurrences = new Map<string, number>()

  for (const name of baseNames) {
    totals.set(name, (totals.get(name) ?? 0) + 1)
  }

  return baseNames.map((name) => {
    if ((totals.get(name) ?? 0) === 1) return name

    const occurrence = (occurrences.get(name) ?? 0) + 1
    occurrences.set(name, occurrence)
    return `${name} (${occurrence})`
  })
}
