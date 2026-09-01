import { ChartConfig, ChartItem } from "./types"

export function prepareData<K extends ChartConfig>(data: ChartItem<K>[]) {
  return data.map((item) => ({ x: item.label, ...item.values }))
}

/**
 * Gives every series that `continues` another one the last value of the
 * continued series, so consecutive lines (e.g. a forecast extending the
 * actuals) connect instead of leaving a gap. Only bridges when the continuing
 * series starts after the continued one ends.
 */
export function bridgeContinuedSeries<K extends ChartConfig>(
  data: ChartItem<K>[],
  dataConfig: Record<string, { continues?: string }>
): ChartItem<K>[] {
  const links = Object.entries(dataConfig).flatMap(([key, config]) =>
    config.continues ? [[key, config.continues] as const] : []
  )

  if (links.length === 0) {
    return data
  }

  const bridged = data.map((item) => ({ ...item, values: { ...item.values } }))
  const hasValue = (item: ChartItem<K>, key: string) =>
    typeof item.values[key as keyof K] === "number"

  for (const [series, base] of links) {
    const firstOwn = bridged.findIndex((item) => hasValue(item, series))
    let lastBase = -1
    for (let index = bridged.length - 1; index >= 0; index--) {
      if (hasValue(bridged[index], base)) {
        lastBase = index
        break
      }
    }

    if (lastBase !== -1 && firstOwn > lastBase) {
      bridged[lastBase].values[series as keyof K] =
        bridged[lastBase].values[base as keyof K]
    }
  }

  return bridged
}
