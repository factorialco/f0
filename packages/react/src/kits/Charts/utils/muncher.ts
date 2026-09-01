import { ChartConfig, ChartItem } from "./types"

export function prepareData<K extends ChartConfig>(data: ChartItem<K>[]) {
  return data.map((item) => ({ x: item.label, ...item.values }))
}

// Array.prototype.findLastIndex needs ES2023; the build targets ES2020.
const findLastIndex = <T>(items: T[], matches: (item: T) => boolean) => {
  for (let index = items.length - 1; index >= 0; index--) {
    if (matches(items[index])) {
      return index
    }
  }
  return -1
}

/**
 * Connects a series marked with `continues` to the series it extends (e.g. a
 * forecast continuing the actuals): the continuing series receives the last
 * value of the continued one, so both lines share that point instead of
 * leaving a gap. Only applies when the continuing series starts after the
 * continued one ends.
 */
export function bridgeContinuedSeries<K extends ChartConfig>(
  data: ChartItem<K>[],
  dataConfig: K
): ChartItem<K>[] {
  const bridged = data.map((item) => ({ ...item, values: { ...item.values } }))

  const hasValue = (item: ChartItem<K>, key: keyof K) =>
    typeof item.values[key] === "number"

  for (const series of Object.keys(dataConfig) as (keyof K)[]) {
    const base = dataConfig[series].continues as keyof K | undefined
    if (!base) {
      continue
    }

    const seriesStart = bridged.findIndex((item) => hasValue(item, series))
    const baseEnd = findLastIndex(bridged, (item) => hasValue(item, base))

    if (baseEnd !== -1 && seriesStart > baseEnd) {
      bridged[baseEnd].values[series] = bridged[baseEnd].values[base]
    }
  }

  return bridged
}
