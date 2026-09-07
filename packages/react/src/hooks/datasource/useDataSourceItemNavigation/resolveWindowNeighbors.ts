import { RecordType } from "../types/records.typings"
import { DataSourceItemId } from "./types"

export type NeighborResolution<R extends RecordType> = {
  /** Index of the active item within the loaded records, or -1 when not found */
  activeIndex: number
  activeItem: R | null
  previousItem: R | null
  nextItem: R | null
  /**
   * How the neighbours were resolved. "window" means they were located in the
   * loaded records. Reserved extension point for id-relative adapter
   * resolution (e.g. a `fetchItemNeighbors` capability).
   */
  resolvedBy: "window"
}

/**
 * Locates the active item and its immediate neighbours within the currently
 * loaded records ("the window"). Pure — the single place neighbour resolution
 * happens, so alternative resolution strategies can be merged at this point.
 */
export function resolveWindowNeighbors<R extends RecordType>({
  records,
  activeItemId,
  idProvider,
}: {
  records: readonly R[]
  activeItemId: DataSourceItemId | null
  idProvider: (item: R, index?: number) => DataSourceItemId
}): NeighborResolution<R> {
  if (activeItemId == null) {
    return {
      activeIndex: -1,
      activeItem: null,
      previousItem: null,
      nextItem: null,
      resolvedBy: "window",
    }
  }
  const index = records.findIndex(
    (record, i) => idProvider(record, i) === activeItemId
  )
  return {
    activeIndex: index,
    activeItem: index >= 0 ? records[index] : null,
    previousItem: index > 0 ? records[index - 1] : null,
    nextItem:
      index >= 0 && index < records.length - 1 ? records[index + 1] : null,
    resolvedBy: "window",
  }
}
