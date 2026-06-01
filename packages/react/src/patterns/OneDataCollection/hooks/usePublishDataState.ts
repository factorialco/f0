import { useEffect } from "react"

import {
  Data,
  PaginationInfo,
  RecordType,
  UseDataReturn,
} from "@/hooks/datasource"

import type { DataCollectionSource } from "./useDataCollectionSource/types"
import { OnDataStateChangeCallback } from "../types"

interface UsePublishDataStateProps<R extends RecordType> {
  source: Pick<DataCollectionSource<R>, "idProvider" | "itemUrl">
  data: Data<R>
  paginationInfo: PaginationInfo | null
  setPage: UseDataReturn<R>["setPage"]
  loadMore: UseDataReturn<R>["loadMore"]
  isLoading: boolean
  isLoadingMore: boolean
  onDataStateChange?: OnDataStateChangeCallback<R>
}

/**
 * Publishes data state to an item-navigation controller via onDataStateChange.
 * Used by each visualization (Card, List, Table) to keep the controller in sync.
 */
export function usePublishDataState<R extends RecordType>({
  source,
  data,
  paginationInfo,
  setPage,
  loadMore,
  isLoading,
  isLoadingMore,
  onDataStateChange,
}: UsePublishDataStateProps<R>): void {
  useEffect(() => {
    onDataStateChange?.({
      source: {
        idProvider: source.idProvider,
        itemUrl: source.itemUrl,
      },
      data,
      paginationInfo,
      setPage,
      loadMore,
      isLoading,
      isLoadingMore,
    })
  }, [
    data,
    paginationInfo,
    setPage,
    loadMore,
    isLoading,
    isLoadingMore,
    source.idProvider,
    source.itemUrl,
    onDataStateChange,
  ])
}
