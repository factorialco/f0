import type { RecordType } from "@/hooks/datasource"

import type { DataCollectionItemNavigationDataState } from "../../types"
import type { DataCollectionItemNavigationController } from "./types"

export const DATA_COLLECTION_ITEM_NAVIGATION_SET_DATA_STATE: unique symbol =
  Symbol("DataCollectionItemNavigation.setDataState")

export type DataCollectionItemNavigationInternalController<
  R extends RecordType,
> = DataCollectionItemNavigationController<R> & {
  [DATA_COLLECTION_ITEM_NAVIGATION_SET_DATA_STATE]: (
    state: DataCollectionItemNavigationDataState<R> | null
  ) => void
}

export const getDataCollectionItemNavigationDataStateSetter = <
  R extends RecordType,
>(
  controller: DataCollectionItemNavigationController<R> | undefined
) =>
  (
    controller as DataCollectionItemNavigationInternalController<R> | undefined
  )?.[DATA_COLLECTION_ITEM_NAVIGATION_SET_DATA_STATE]
