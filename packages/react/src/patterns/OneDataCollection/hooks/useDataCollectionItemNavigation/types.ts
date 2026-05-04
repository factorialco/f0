import type {
  DataSourceItemId,
  RecordType,
  UseDataSourceItemNavigationReturn,
} from "@/hooks/datasource"

import type { DataCollectionItemNavigationDataState } from "../../types"

export type DataCollectionItemNavigationSnapshotMode =
  | "live"
  | "session"
  | "manual"

export interface DataCollectionItemNavigationControls<R extends RecordType> {
  /** The currently active item ID. */
  activeItemId: DataSourceItemId | null
  /** The currently active item record. */
  activeItem: R
  /** Zero-based active index. Uses the absolute index when pagination exposes it. */
  currentIndex: number
  /** Total matching records when known, otherwise the loaded navigation records. */
  totalCount: number
  /** Previous loaded item record, or null when unavailable. */
  previousItem: R | null
  /** Next loaded item record, or null when unavailable. */
  nextItem: R | null
  /** True when previous navigation can run now. */
  canGoPrevious: boolean
  /** True when next navigation can run now. */
  canGoNext: boolean
  /** Navigate to the previous item. */
  goToPrevious: () => void
  /** Navigate to the next item. Loads more at the collection boundary. */
  goToNext: () => void
  /** True while a boundary navigation is waiting for more collection data. */
  isNavigating: boolean
  /** URL of the previous loaded item, or null when unavailable. */
  previousItemUrl: string | null
  /** URL of the next loaded item, or null when unavailable. */
  nextItemUrl: string | null
}

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
   * Controls how navigation reacts to collection refetches/mutations.
   * - live: always follows current collection data
   * - session: freezes order when openItem is called
   * - manual: uses snapshotKey directly
   * Defaults to manual when snapshotKey is provided, otherwise live.
   */
  snapshotMode?: DataCollectionItemNavigationSnapshotMode
  /**
   * Manual snapshot key. Change the key when the user explicitly opens another
   * item from the collection. Kept for advanced/manual control.
   */
  snapshotKey?: string | number | null
}

export interface DataCollectionItemNavigationController<
  R extends RecordType,
> extends UseDataSourceItemNavigationReturn<R> {
  /** True once a OneDataCollection visualization has registered its data state. */
  isReady: boolean
  /** Render-ready controls for external headers/toolbars, or null when no item is active. */
  controls: DataCollectionItemNavigationControls<R> | null
  /** Set an active item and start a new session snapshot when snapshotMode is "session". */
  openItem: (id: DataSourceItemId) => void
  /** Clear the active item and the session snapshot. */
  closeItem: () => void
  /** Replace the current snapshot with the latest live collection data. */
  resetSnapshot: () => void
  /** Internal bridge used by OneDataCollection visualizations. */
  setDataState: (state: DataCollectionItemNavigationDataState<R> | null) => void
}
