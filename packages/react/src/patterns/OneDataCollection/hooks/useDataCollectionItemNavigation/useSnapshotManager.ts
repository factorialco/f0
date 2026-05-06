import { useCallback, useEffect, useRef, useState } from "react"

import {
  Data,
  DataSourceItemId,
  GROUP_ID_SYMBOL,
  PaginationInfo,
  RecordType,
} from "@/hooks/datasource"

import { DataCollectionItemNavigationDataState } from "../../types"

// ─── Internal types ───────────────────────────────────────────────────────────

type SnapshotKey = string | number

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

// ─── Pure helpers (module-level, no side-effects) ────────────────────────────

const emptyData: Data<RecordType> = {
  records: [],
  type: "flat",
  groups: [],
}

const defaultIdProvider = (
  item: RecordType,
  index?: number
): DataSourceItemId =>
  "id" in item &&
  (typeof item.id === "string" ||
    typeof item.id === "number" ||
    typeof item.id === "symbol")
    ? item.id
    : (index ?? JSON.stringify(item))

const createSnapshotData = <R extends RecordType>(data: Data<R>): Data<R> => ({
  type: data.type,
  records: data.records.map((record) => ({
    ...record,
    [GROUP_ID_SYMBOL]: record[GROUP_ID_SYMBOL],
  })),
  groups: data.groups,
})

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

// ─── Hook interface ───────────────────────────────────────────────────────────

export interface UseSnapshotManagerProps<R extends RecordType> {
  dataState: DataCollectionItemNavigationDataState<R> | null
  dataStateVersion: number
  effectiveSnapshotKey: SnapshotKey | null | undefined
  resetSnapshotKey: number
  idProvider?: (item: R, index?: number) => DataSourceItemId
}

export interface UseSnapshotManagerReturn<R extends RecordType> {
  /** Data to pass to useDataSourceItemNavigation */
  navigationData: Data<R>
  /** PaginationInfo to pass to useDataSourceItemNavigation */
  navigationPaginationInfo: PaginationInfo | null
  /**
   * Call before goToNext/goToPrevious when navigating past the snapshot
   * boundary, so the snapshot expands when new page/loadMore data arrives.
   */
  startPendingNavigation: () => void
  /** Reset all snapshot state (call from closeItem). */
  clearSnapshot: () => void
  /** Clear only the pending navigation ref (call from resetSnapshot). */
  clearPendingNavigation: () => void
}

// ─── Hook implementation ──────────────────────────────────────────────────────

export function useSnapshotManager<R extends RecordType>({
  dataState,
  dataStateVersion,
  effectiveSnapshotKey,
  resetSnapshotKey,
  idProvider,
}: UseSnapshotManagerProps<R>): UseSnapshotManagerReturn<R> {
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

  // Clean up the timeout on unmount
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

  // ─── Derived navigation inputs ──────────────────────────────────────────────

  const hasPendingSnapshotNavigationData = Boolean(
    pendingSnapshotNavigation.current &&
    snapshotData &&
    dataState &&
    !dataState.isLoading &&
    !dataState.isLoadingMore &&
    (shouldReplaceSnapshotForPagination(snapshotData, dataState) ||
      dataState.data.records.length > snapshotData.data.records.length)
  )

  const stateData = dataState?.data ?? (emptyData as Data<R>)

  const navigationData = hasPendingSnapshotNavigationData
    ? (dataState?.data ?? stateData)
    : (snapshotData?.data ?? stateData)

  const navigationPaginationInfo = hasPendingSnapshotNavigationData
    ? (dataState?.paginationInfo ?? null)
    : (snapshotData?.paginationInfo ?? dataState?.paginationInfo ?? null)

  // ─── Actions exposed to the main hook ───────────────────────────────────────

  const startPendingNavigation = useCallback(() => {
    if (effectiveSnapshotKey == null || snapshotData == null) return
    pendingSnapshotNavigation.current = {
      requestedAtVersion: dataStateVersion,
      sawLoading: false,
    }
  }, [dataStateVersion, effectiveSnapshotKey, snapshotData])

  const clearSnapshot = useCallback(() => {
    pendingSnapshotReset.current = null
    pendingSnapshotNavigation.current = null
    clearSnapshotResetTimeout()
    setSnapshotData(null)
  }, [clearSnapshotResetTimeout])

  const clearPendingNavigation = useCallback(() => {
    pendingSnapshotNavigation.current = null
  }, [])

  return {
    navigationData,
    navigationPaginationInfo,
    startPendingNavigation,
    clearSnapshot,
    clearPendingNavigation,
  }
}
