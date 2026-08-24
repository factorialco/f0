const BAR_MAIN_SERIES_PREFIX = "f0-bar-main-"
const BAR_TARGET_SERIES_PREFIX = "f0-bar-target-"

export const barMainSeriesId = (seriesIndex: number) =>
  `${BAR_MAIN_SERIES_PREFIX}${seriesIndex}`

export const barTargetSeriesId = (seriesIndex: number) =>
  `${BAR_TARGET_SERIES_PREFIX}${seriesIndex}`

export const barStackTotalSeriesId = "f0-bar-stack-total"

export function barSourceSeriesIndex(id: unknown): number | null {
  if (typeof id !== "string" || !id.startsWith(BAR_MAIN_SERIES_PREFIX)) {
    return null
  }

  const index = Number(id.slice(BAR_MAIN_SERIES_PREFIX.length))
  return Number.isInteger(index) && index >= 0 ? index : null
}
