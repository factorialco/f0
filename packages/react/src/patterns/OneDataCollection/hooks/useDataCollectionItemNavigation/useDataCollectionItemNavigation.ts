import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import {
  Data,
  DataSourceItemId,
  GROUP_ID_SYMBOL,
  RecordType,
  useDataSourceItemNavigation,
} from "@/hooks/datasource"

import { DataCollectionItemNavigationDataState } from "../../types"
import {
  DataCollectionItemNavigationController,
  UseDataCollectionItemNavigationProps,
} from "./types"
import { DATA_COLLECTION_ITEM_NAVIGATION_SET_DATA_STATE } from "./internal"

const emptyData: Data<RecordType> = {
  records: [],
  type: "flat",
  groups: [],
}

const noop = () => {}

type SnapshotKey = string | number

type VersionedDataState<R extends RecordType> = {
  state: DataCollectionItemNavigationDataState<R> | null
  version: number
}

type PendingSnapshotReset = {
  key: SnapshotKey
  requestedAtVersion: number
  canUseCurrentData: boolean
}

type PendingSnapshotNavigation = {
  requestedAtVersion: number
  sawLoading: boolean
}

type SnapshotData<R extends RecordType> = {
  data: Data<R>
  paginationInfo: DataCollectionItemNavigationDataState<R>["paginationInfo"]
}

const defaultIdProvider = (
  item: RecordType,
  index?: number
): DataSourceItemId =>
  "id" in item ? `${item.id}` : (index ?? JSON.stringify(item))

const createSnapshotData = <R extends RecordType>(data: Data<R>): Data<R> => ({
  type: data.type,
  records: data.records.map((record) => ({
    ...record,
    [GROUP_ID_SYMBOL]: record[GROUP_ID_SYMBOL],
  })),
  groups: data.groups,
})

const getSourceRecordId = <R extends RecordType>(
  state: DataCollectionItemNavigationDataState<R>,
  record: R,
  index: number
) =>
  state.source.idProvider?.(record, index) ?? defaultIdProvider(record, index)

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

const isSameRecordOrder = <R extends RecordType>(
  currentData: Data<R>,
  snapshotData: Data<R>,
  idProvider: (item: R, index?: number) => DataSourceItemId
) =>
  currentData.records.length === snapshotData.records.length &&
  currentData.records.every(
    (record, index) =>
      idProvider(record, index) ===
      idProvider(snapshotData.records[index], index)
  )

const refreshSnapshotData = <R extends RecordType>(
  snapshotData: Data<R>,
  liveData: Data<R>,
  idProvider: (item: R, index?: number) => DataSourceItemId
): Data<R> => {
  const liveRecords = new Map<DataSourceItemId, Data<R>["records"][number]>()
  let changed = false

  liveData.records.forEach((record, index) => {
    liveRecords.set(idProvider(record, index), record)
  })

  const records = snapshotData.records.map((snapshotRecord, index) => {
    const liveRecord = liveRecords.get(idProvider(snapshotRecord, index))
    if (!liveRecord || liveRecord === snapshotRecord) return snapshotRecord

    changed = true
    return liveRecord
  })

  if (!changed) return snapshotData

  return {
    ...snapshotData,
    records,
  }
}

const shouldReplaceSnapshotForPagination = <R extends RecordType>(
  currentSnapshot: SnapshotData<R>,
  nextState: DataCollectionItemNavigationDataState<R>
) => {
  const currentPagination = currentSnapshot.paginationInfo
  const nextPagination = nextState.paginationInfo

  if (currentPagination?.type === "pages" || nextPagination?.type === "pages") {
    return (
      currentPagination?.type !== "pages" ||
      nextPagination?.type !== "pages" ||
      currentPagination.currentPage !== nextPagination.currentPage
    )
  }

  return false
}

const createSnapshot = <R extends RecordType>(
  state: DataCollectionItemNavigationDataState<R>
): SnapshotData<R> => ({
  data: createSnapshotData(state.data),
  paginationInfo: state.paginationInfo,
})

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
  const [snapshotData, setSnapshotData] = useState<SnapshotData<R> | null>(null)
  const [snapshotResetAttempt, setSnapshotResetAttempt] = useState(0)
  const previousSnapshotKey = useRef(effectiveSnapshotKey)
  const handledResetSnapshotKey = useRef(resetSnapshotKey)
  const pendingSnapshotReset = useRef<PendingSnapshotReset | null>(null)
  const pendingSnapshotNavigation = useRef<PendingSnapshotNavigation | null>(
    null
  )
  const snapshotResetTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null
  )

  const dataState = versionedDataState.state
  const dataStateVersion = versionedDataState.version

  const clearSnapshotResetTimeout = useCallback(() => {
    if (snapshotResetTimeout.current === null) return
    clearTimeout(snapshotResetTimeout.current)
    snapshotResetTimeout.current = null
  }, [])

  const scheduleSnapshotResetAttempt = useCallback(
    (key: SnapshotKey) => {
      clearSnapshotResetTimeout()
      snapshotResetTimeout.current = setTimeout(() => {
        snapshotResetTimeout.current = null
        const pendingReset = pendingSnapshotReset.current
        if (!pendingReset || pendingReset.key !== key) return

        pendingReset.canUseCurrentData = true
        setSnapshotResetAttempt((attempt) => attempt + 1)
      }, 0)
    },
    [clearSnapshotResetTimeout]
  )

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

  const stateData = dataState?.data ?? (emptyData as Data<R>)

  const resetSnapshot = useCallback(() => {
    pendingSnapshotNavigation.current = null
    setResetSnapshotKey((key) => key + 1)
  }, [])

  const hasPendingSnapshotNavigationData = Boolean(
    pendingSnapshotNavigation.current &&
    snapshotData &&
    dataState &&
    !dataState.isLoading &&
    !dataState.isLoadingMore &&
    (shouldReplaceSnapshotForPagination(snapshotData, dataState) ||
      dataState.data.records.length > snapshotData.data.records.length)
  )

  useEffect(() => clearSnapshotResetTimeout, [clearSnapshotResetTimeout])

  useEffect(() => {
    if (!dataState || effectiveSnapshotKey == null) {
      pendingSnapshotReset.current = null
      pendingSnapshotNavigation.current = null
      clearSnapshotResetTimeout()
      setSnapshotData(null)
      previousSnapshotKey.current = effectiveSnapshotKey
      handledResetSnapshotKey.current = resetSnapshotKey
      return
    }

    if (handledResetSnapshotKey.current !== resetSnapshotKey) {
      if (dataState.isLoading || dataState.isLoadingMore) return

      handledResetSnapshotKey.current = resetSnapshotKey
      pendingSnapshotReset.current = null
      pendingSnapshotNavigation.current = null
      clearSnapshotResetTimeout()
      setSnapshotData(createSnapshot(dataState))
      return
    }

    const snapshotKeyChanged =
      previousSnapshotKey.current !== effectiveSnapshotKey
    previousSnapshotKey.current = effectiveSnapshotKey

    if (snapshotKeyChanged) {
      pendingSnapshotReset.current = {
        key: effectiveSnapshotKey,
        requestedAtVersion: dataStateVersion,
        canUseCurrentData: false,
      }
      scheduleSnapshotResetAttempt(effectiveSnapshotKey)
      return
    }

    const pendingNavigation = pendingSnapshotNavigation.current

    if (pendingNavigation) {
      if (dataState.isLoading || dataState.isLoadingMore) {
        pendingNavigation.sawLoading = true
        return
      }

      if (
        snapshotData &&
        (shouldReplaceSnapshotForPagination(snapshotData, dataState) ||
          dataState.data.records.length > snapshotData.data.records.length)
      ) {
        pendingSnapshotNavigation.current = null
        setSnapshotData(createSnapshot(dataState))
        return
      }

      if (
        pendingNavigation.sawLoading ||
        dataStateVersion > pendingNavigation.requestedAtVersion
      ) {
        pendingSnapshotNavigation.current = null
      }
    }

    if (dataState.isLoading || dataState.isLoadingMore) {
      return
    }

    const pendingReset =
      pendingSnapshotReset.current?.key === effectiveSnapshotKey
        ? pendingSnapshotReset.current
        : null

    if (pendingReset) {
      const effectiveIdProvider =
        idProvider ?? dataState.source.idProvider ?? defaultIdProvider
      const hasObservedNewDataState =
        dataStateVersion > pendingReset.requestedAtVersion
      const hasDifferentRecordOrder = snapshotData
        ? !isSameRecordOrder(
            dataState.data,
            snapshotData.data,
            effectiveIdProvider
          )
        : true

      if (
        !pendingReset.canUseCurrentData &&
        !hasObservedNewDataState &&
        !hasDifferentRecordOrder
      ) {
        return
      }

      if (
        !pendingReset.canUseCurrentData &&
        hasObservedNewDataState &&
        !hasDifferentRecordOrder
      ) {
        return
      }

      pendingSnapshotReset.current = null
      clearSnapshotResetTimeout()
      setSnapshotData(createSnapshot(dataState))
      return
    }

    setSnapshotData((currentSnapshot) => {
      if (!currentSnapshot) {
        if (dataState.data.records.length === 0) return currentSnapshot

        return createSnapshot(dataState)
      }
      const effectiveIdProvider =
        idProvider ?? dataState.source.idProvider ?? defaultIdProvider
      const refreshedSnapshotData = refreshSnapshotData(
        currentSnapshot.data,
        dataState.data,
        effectiveIdProvider
      )
      if (
        dataState.data.records.length <= currentSnapshot.data.records.length
      ) {
        if (refreshedSnapshotData === currentSnapshot.data) {
          return currentSnapshot
        }

        return {
          ...currentSnapshot,
          data: refreshedSnapshotData,
        }
      }

      if (refreshedSnapshotData === currentSnapshot.data) {
        return currentSnapshot
      }

      return {
        ...currentSnapshot,
        data: refreshedSnapshotData,
      }
    })
  }, [
    clearSnapshotResetTimeout,
    dataState,
    dataStateVersion,
    effectiveSnapshotKey,
    idProvider,
    resetSnapshotKey,
    scheduleSnapshotResetAttempt,
    snapshotData,
    snapshotResetAttempt,
  ])

  const navigationData = hasPendingSnapshotNavigationData
    ? (dataState?.data ?? stateData)
    : (snapshotData?.data ?? stateData)
  const navigationPaginationInfo = hasPendingSnapshotNavigationData
    ? (dataState?.paginationInfo ?? null)
    : (snapshotData?.paginationInfo ?? dataState?.paginationInfo ?? null)

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

  const startPendingSnapshotNavigation = useCallback(() => {
    if (effectiveSnapshotKey == null || snapshotData == null) return
    pendingSnapshotNavigation.current = {
      requestedAtVersion: dataStateVersion,
      sawLoading: false,
    }
  }, [dataStateVersion, effectiveSnapshotKey, snapshotData])

  const goToNext = useCallback(() => {
    if (
      navigation.hasNext &&
      navigation.nextItem === null &&
      !navigation.isNavigating
    ) {
      startPendingSnapshotNavigation()
    }
    navigation.goToNext()
  }, [navigation, startPendingSnapshotNavigation])

  const goToPrevious = useCallback(() => {
    if (
      navigation.hasPrevious &&
      navigation.previousItem === null &&
      !navigation.isNavigating
    ) {
      startPendingSnapshotNavigation()
    }
    navigation.goToPrevious()
  }, [navigation, startPendingSnapshotNavigation])

  const openItem = useCallback(
    (id: DataSourceItemId) => {
      pendingSnapshotNavigation.current = null
      if (effectiveSnapshotMode === "session") {
        setSessionSnapshotKey((key) => key + 1)
      }
      navigation.setActiveItemId(id)
    },
    [effectiveSnapshotMode, navigation]
  )

  const closeItem = useCallback(() => {
    pendingSnapshotReset.current = null
    pendingSnapshotNavigation.current = null
    clearSnapshotResetTimeout()
    setSnapshotData(null)
    if (effectiveSnapshotMode === "session") {
      setSessionSnapshotKey((key) => key + 1)
    }
    navigation.setActiveItemId(null)
  }, [clearSnapshotResetTimeout, effectiveSnapshotMode, navigation])

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
      isReady: dataState !== null,
      controls,
      openItem,
      closeItem,
      resetSnapshot,
      [DATA_COLLECTION_ITEM_NAVIGATION_SET_DATA_STATE]: handleDataStateChange,
    }),
    [
      navigation,
      dataState,
      controls,
      goToNext,
      goToPrevious,
      openItem,
      closeItem,
      resetSnapshot,
      handleDataStateChange,
    ]
  )
}

export type {
  DataCollectionItemNavigationController,
  UseDataCollectionItemNavigationProps,
}
