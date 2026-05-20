import { useCallback, useMemo, useState } from "react"

import {
  DataSourceItemId,
  RecordType,
  useDataSourceItemNavigation,
} from "@/hooks/datasource"

import { DataCollectionItemNavigationDataState } from "../../types"
import {
  DataCollectionItemNavigationController,
  UseDataCollectionItemNavigationProps,
} from "./types"
import {
  DATA_COLLECTION_ITEM_NAVIGATION_CLOSE_SIGNAL,
  DATA_COLLECTION_ITEM_NAVIGATION_SET_DATA_STATE,
} from "./internal"
import { useSnapshotManager } from "./useSnapshotManager"

const noop = () => {}

type VersionedDataState<R extends RecordType> = {
  state: DataCollectionItemNavigationDataState<R> | null
  version: number
}

// ─── Pure helpers for data state equality ────────────────────────────────────

const getSourceRecordId = <R extends RecordType>(
  state: DataCollectionItemNavigationDataState<R>,
  record: R,
  index: number
): DataSourceItemId =>
  state.source.idProvider?.(record, index) ??
  ("id" in record &&
  (typeof record.id === "string" ||
    typeof record.id === "number" ||
    typeof record.id === "symbol")
    ? record.id
    : (index ?? JSON.stringify(record)))

const hasSameSourceMetadata = <R extends RecordType>(
  current: DataCollectionItemNavigationDataState<R>,
  next: DataCollectionItemNavigationDataState<R>
) => {
  const hasSameIds = current.data.records.every(
    (record, index) =>
      getSourceRecordId(current, record, index) ===
      getSourceRecordId(next, record, index)
  )
  const hasSameUrls = current.data.records.every(
    (record) =>
      current.source.itemUrl?.(record) === next.source.itemUrl?.(record)
  )

  return hasSameIds && hasSameUrls
}

const isSameDataState = <R extends RecordType>(
  current: DataCollectionItemNavigationDataState<R> | null,
  next: DataCollectionItemNavigationDataState<R>
) =>
  current !== null &&
  current.data === next.data &&
  hasSameSourceMetadata(current, next) &&
  current.paginationInfo === next.paginationInfo &&
  current.setPage === next.setPage &&
  current.loadMore === next.loadMore &&
  current.isLoading === next.isLoading &&
  current.isLoadingMore === next.isLoadingMore

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useDataCollectionItemNavigation<R extends RecordType>({
  activeItemId,
  defaultActiveItemId,
  onActiveItemChange,
  idProvider,
  itemUrl,
  snapshotMode,
  snapshotKey,
}: UseDataCollectionItemNavigationProps<R> = {}): DataCollectionItemNavigationController<R> {
  const effectiveSnapshotMode =
    snapshotMode ?? (snapshotKey != null ? "manual" : "live")
  const [sessionSnapshotKey, setSessionSnapshotKey] = useState(0)
  const [resetSnapshotKey, setResetSnapshotKey] = useState(0)
  const [closeSignal, setCloseSignal] = useState(0)

  const effectiveSnapshotKey =
    effectiveSnapshotMode === "manual"
      ? snapshotKey
      : effectiveSnapshotMode === "session"
        ? sessionSnapshotKey
        : null

  const [versionedDataState, setVersionedDataState] = useState<
    VersionedDataState<R>
  >({
    state: null,
    version: 0,
  })

  const dataState = versionedDataState.state
  const dataStateVersion = versionedDataState.version

  const handleDataStateChange = useCallback(
    (state: DataCollectionItemNavigationDataState<R> | null) => {
      setVersionedDataState((current) => {
        if (state === null) {
          return current.state === null
            ? current
            : { state: null, version: current.version + 1 }
        }

        return isSameDataState(current.state, state)
          ? current
          : { state, version: current.version + 1 }
      })
    },
    []
  )

  const {
    navigationData,
    navigationPaginationInfo,
    hasSnapshot,
    startPendingNavigation,
    clearSnapshot,
    clearPendingNavigation,
  } = useSnapshotManager<R>({
    dataState,
    dataStateVersion,
    effectiveSnapshotKey,
    resetSnapshotKey,
    idProvider,
  })

  const navigation = useDataSourceItemNavigation<R>({
    dataSource: dataState?.source ?? {},
    data: navigationData,
    paginationInfo: navigationPaginationInfo,
    setPage: dataState?.setPage ?? noop,
    loadMore: dataState?.loadMore ?? noop,
    isLoading: Boolean(dataState?.isLoading || dataState?.isLoadingMore),
    idProvider,
    itemUrl: itemUrl ?? dataState?.source.itemUrl,
    activeItemId,
    defaultActiveItemId,
    onActiveItemChange,
  })

  const goToNext = useCallback(() => {
    if (
      navigation.hasNext &&
      navigation.nextItem === null &&
      !navigation.isNavigating
    ) {
      startPendingNavigation()
    }
    navigation.goToNext()
  }, [navigation, startPendingNavigation])

  const goToPrevious = useCallback(() => {
    if (
      navigation.hasPrevious &&
      navigation.previousItem === null &&
      !navigation.isNavigating
    ) {
      startPendingNavigation()
    }
    navigation.goToPrevious()
  }, [navigation, startPendingNavigation])

  const openItem = useCallback(
    (id: DataSourceItemId) => {
      clearPendingNavigation()
      if (effectiveSnapshotMode === "session") {
        setSessionSnapshotKey((key) => key + 1)
      }
      navigation.setActiveItemId(id)
    },
    [clearPendingNavigation, effectiveSnapshotMode, navigation]
  )

  const closeItem = useCallback(() => {
    clearSnapshot()
    if (effectiveSnapshotMode === "session") {
      setSessionSnapshotKey((key) => key + 1)
    }
    setCloseSignal((signal) => signal + 1)
    navigation.setActiveItemId(null)
  }, [clearSnapshot, effectiveSnapshotMode, navigation])

  const resetSnapshot = useCallback(() => {
    clearPendingNavigation()
    setResetSnapshotKey((key) => key + 1)
  }, [clearPendingNavigation])

  const controls = useMemo(() => {
    if (!navigation.activeItem || navigation.activeIndex < 0) return null

    return {
      activeItemId: navigation.activeItemId,
      activeItem: navigation.activeItem,
      activeItemUrl: navigation.activeItemUrl,
      currentIndex: navigation.absoluteIndex ?? navigation.activeIndex,
      totalCount: navigation.totalItems ?? navigation.loadedItemsCount,
      previousItem: navigation.previousItem,
      nextItem: navigation.nextItem,
      canGoPrevious: navigation.hasPrevious && !navigation.isNavigating,
      canGoNext: navigation.hasNext && !navigation.isNavigating,
      goToPrevious,
      goToNext,
      isNavigating: navigation.isNavigating,
      previousItemUrl: navigation.previousItemUrl,
      nextItemUrl: navigation.nextItemUrl,
    }
  }, [goToNext, goToPrevious, navigation])

  return useMemo(
    () => ({
      ...navigation,
      goToNext,
      goToPrevious,
      isReady: dataState !== null || hasSnapshot,
      controls,
      openItem,
      closeItem,
      resetSnapshot,
      [DATA_COLLECTION_ITEM_NAVIGATION_SET_DATA_STATE]: handleDataStateChange,
      [DATA_COLLECTION_ITEM_NAVIGATION_CLOSE_SIGNAL]: closeSignal,
    }),
    [
      navigation,
      dataState,
      hasSnapshot,
      controls,
      goToNext,
      goToPrevious,
      openItem,
      closeItem,
      closeSignal,
      resetSnapshot,
      handleDataStateChange,
    ]
  )
}

export type {
  DataCollectionItemNavigationController,
  UseDataCollectionItemNavigationProps,
}
