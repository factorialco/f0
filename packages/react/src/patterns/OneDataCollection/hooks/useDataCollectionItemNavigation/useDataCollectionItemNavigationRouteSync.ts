import { useEffect, useRef, useState } from "react"

import { DataSourceItemId, RecordType } from "@/hooks/datasource"

import {
  DataCollectionItemNavigationController,
  DataCollectionItemNavigationRouteSyncResult,
  UseDataCollectionItemNavigationRouteSyncProps,
} from "./types"

const defaultParseRouteId = (id: string): DataSourceItemId => id
const defaultFormatItemId = (id: DataSourceItemId): string => String(id)

const isSameId = (a: DataSourceItemId | null, b: DataSourceItemId | null) =>
  a === b

const getInitialActiveRouteId = <R extends RecordType>({
  itemNavigation,
  routeId,
  formatItemId,
}: {
  itemNavigation?: DataCollectionItemNavigationController<R> | null
  routeId: string | null | undefined
  formatItemId: (id: DataSourceItemId) => string
}) => {
  if (routeId != null) return routeId
  if (itemNavigation?.activeItemId == null) return null

  return formatItemId(itemNavigation.activeItemId)
}

/**
 * Syncs a route-level item ID with a DataCollection item-navigation controller.
 *
 * F0 does not own routing or history mutation. Consumers provide `routeId` as
 * the route/open-session source of truth and use `onRouteIdChange` to update
 * URLs, router state, analytics, or any other app-owned side effects.
 */
export const useDataCollectionItemNavigationRouteSync = <R extends RecordType>({
  itemNavigation,
  routeId,
  parseRouteId = defaultParseRouteId,
  formatItemId = defaultFormatItemId,
  onRouteIdChange,
}: UseDataCollectionItemNavigationRouteSyncProps<R>): DataCollectionItemNavigationRouteSyncResult<R> => {
  const [activeRouteId, setActiveRouteId] = useState<string | null>(() =>
    getInitialActiveRouteId({ itemNavigation, routeId, formatItemId })
  )
  const openedRouteId = useRef<string | null>(null)
  const previousRouteId = useRef<string | null | undefined>(undefined)
  const pendingRouteItemId = useRef<DataSourceItemId | null>(null)
  const previousNavigationId = useRef<DataSourceItemId | null>(
    itemNavigation?.activeItemId ?? null
  )
  const emittedRouteId = useRef<string | null>(null)

  useEffect(() => {
    const routeIdChanged = previousRouteId.current !== (routeId ?? null)
    previousRouteId.current = routeId ?? null

    if (routeId == null) {
      if (routeIdChanged) {
        openedRouteId.current = null
        pendingRouteItemId.current = null
        emittedRouteId.current = null
        setActiveRouteId(null)
      }
      return
    }

    if (routeIdChanged) {
      setActiveRouteId(routeId)
    }

    const routeItemId = parseRouteId(routeId)

    if (!itemNavigation) return

    if (
      emittedRouteId.current === routeId &&
      isSameId(itemNavigation.activeItemId ?? null, routeItemId)
    ) {
      emittedRouteId.current = null
      openedRouteId.current = routeId
      pendingRouteItemId.current = null
      return
    }

    if (openedRouteId.current === routeId) return

    openedRouteId.current = routeId
    pendingRouteItemId.current = isSameId(
      itemNavigation.activeItemId ?? null,
      routeItemId
    )
      ? null
      : routeItemId
    itemNavigation.openItem(routeItemId)
  }, [itemNavigation, parseRouteId, routeId])

  useEffect(() => {
    const nextItemId = itemNavigation?.activeItemId ?? null
    if (isSameId(nextItemId, previousNavigationId.current)) return

    previousNavigationId.current = nextItemId

    if (nextItemId == null) {
      pendingRouteItemId.current = null
      return
    }

    const pendingItemId = pendingRouteItemId.current
    if (pendingItemId != null) {
      if (isSameId(nextItemId, pendingItemId)) {
        pendingRouteItemId.current = null
      }
      return
    }

    const nextRouteId = formatItemId(nextItemId)
    if (nextRouteId === activeRouteId) return

    emittedRouteId.current = nextRouteId
    setActiveRouteId(nextRouteId)
    onRouteIdChange?.(nextRouteId, nextItemId)
  }, [
    activeRouteId,
    formatItemId,
    itemNavigation?.activeItemId,
    onRouteIdChange,
  ])

  return {
    activeRouteId,
    activeItemId: itemNavigation?.activeItemId ?? null,
    controls: itemNavigation?.controls ?? null,
  }
}
