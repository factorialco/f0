import type {
  DataSourceItemId,
  RecordType,
  UseDataSourceItemNavigationReturn,
} from "@/hooks/datasource"

import type { DataCollectionItemNavigationDataState } from "../../types"

export interface UseDataCollectionItemNavigationProps<R extends RecordType> {
  /** Controlled active item ID. */
  activeItemId?: DataSourceItemId | null
  /** Default active item ID for uncontrolled usage. */
  defaultActiveItemId?: DataSourceItemId | null
  /** Callback fired whenever the active item changes. */
  onActiveItemChange?: (id: DataSourceItemId | null) => void
  /** Overrides the collection source idProvider. */
  idProvider?: (item: R, index?: number) => DataSourceItemId
  /** Overrides the collection source itemUrl. */
  itemUrl?: (item: R) => string | undefined
  /**
   * Freezes the loaded item order for a detail session. Change the key when the
   * user explicitly opens another item from the collection.
   */
  snapshotKey?: string | number | null
}

export interface DataCollectionItemNavigationController<
  R extends RecordType,
> extends UseDataSourceItemNavigationReturn<R> {
  /** True once a OneDataCollection visualization has registered its data state. */
  isReady: boolean
  /** Internal bridge used by OneDataCollection visualizations. */
  setDataState: (state: DataCollectionItemNavigationDataState<R> | null) => void
}
