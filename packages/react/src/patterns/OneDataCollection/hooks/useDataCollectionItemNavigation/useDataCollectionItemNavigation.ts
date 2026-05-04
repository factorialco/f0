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

const isSameDataState = <R extends RecordType>(
  current: DataCollectionItemNavigationDataState<R> | null,
  next: DataCollectionItemNavigationDataState<R>
) =>
  current !== null &&
  current.data === next.data &&
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
  const [snapshotData, setSnapshotData] = useState<Data<R> | null>(null)
  const [snapshotResetAttempt, setSnapshotResetAttempt] = useState(0)
  const previousSnapshotKey = useRef(effectiveSnapshotKey)
  const handledResetSnapshotKey = useRef(resetSnapshotKey)
  const pendingSnapshotReset = useRef<PendingSnapshotReset | null>(null)
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
    setResetSnapshotKey((key) => key + 1)
  }, [])

  useEffect(() => clearSnapshotResetTimeout, [clearSnapshotResetTimeout])

  useEffect(() => {
    if (!dataState || effectiveSnapshotKey == null) {
      pendingSnapshotReset.current = null
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
      clearSnapshotResetTimeout()
      setSnapshotData(createSnapshotData(dataState.data))
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
        ? !isSameRecordOrder(dataState.data, snapshotData, effectiveIdProvider)
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
      setSnapshotData(createSnapshotData(dataState.data))
      return
    }

    setSnapshotData((currentSnapshot) => {
      if (!currentSnapshot) {
        return createSnapshotData(dataState.data)
      }
      if (dataState.data.records.length <= currentSnapshot.records.length) {
        return currentSnapshot
      }
      return createSnapshotData(dataState.data)
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

  const navigationData = snapshotData ?? stateData

  const navigation = useDataSourceItemNavigation<R>({
    dataSource: dataState?.source ?? {},
    data: navigationData,
    paginationInfo: dataState?.paginationInfo ?? null,
    setPage: dataState?.setPage ?? noop,
    loadMore: dataState?.loadMore ?? noop,
    isLoading: Boolean(dataState?.isLoading || dataState?.isLoadingMore),
    idProvider,
    itemUrl: itemUrl ?? dataState?.source.itemUrl,
    activeItemId,
    defaultActiveItemId,
    onActiveItemChange,
  })

  const openItem = useCallback(
    (id: DataSourceItemId) => {
      if (effectiveSnapshotMode === "session") {
        setSessionSnapshotKey((key) => key + 1)
      }
      navigation.setActiveItemId(id)
    },
    [effectiveSnapshotMode, navigation]
  )

  const closeItem = useCallback(() => {
    pendingSnapshotReset.current = null
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
      currentIndex: navigation.absoluteIndex ?? navigation.activeIndex,
      totalCount: navigation.totalItems ?? navigation.loadedItemsCount,
      previousItem: navigation.previousItem,
      nextItem: navigation.nextItem,
      canGoPrevious: navigation.hasPrevious && !navigation.isNavigating,
      canGoNext: navigation.hasNext && !navigation.isNavigating,
      goToPrevious: navigation.goToPrevious,
      goToNext: navigation.goToNext,
      isNavigating: navigation.isNavigating,
      previousItemUrl: navigation.previousItemUrl,
      nextItemUrl: navigation.nextItemUrl,
    }
  }, [navigation])

  return useMemo(
    () => ({
      ...navigation,
      isReady: dataState !== null,
      controls,
      openItem,
      closeItem,
      resetSnapshot,
      setDataState: handleDataStateChange,
    }),
    [
      navigation,
      dataState,
      controls,
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
