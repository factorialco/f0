import { ChartConfig, ChartItem } from "./types"

export function prepareData<K extends ChartConfig>(data: ChartItem<K>[]) {
  return data.map((item) => ({ x: item.label, ...item.values }))
}
