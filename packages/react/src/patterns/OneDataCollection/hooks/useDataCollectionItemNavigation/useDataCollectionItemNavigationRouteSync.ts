import { useEffect, useRef, useState } from "react"

import { DataSourceItemId, RecordType } from "@/hooks/datasource"

import {
  DataCollectionItemNavigationRouteSyncResult,
  UseDataCollectionItemNavigationRouteSyncProps,
} from "./types"

const defaultParseRouteId = (id: string): DataSourceItemId => id
const defaultFormatItemId = (id: DataSourceItemId): string => String(id)

const isSameId = (a: DataSourceItemId | null, b: DataSourceItemId | null) =>
  a === b

const getInitialActiveRouteId = ({
  routeId,
}: {
  routeId: string | null | undefined
}) => {
  if (routeId != null) return routeId

  return null
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
    getInitialActiveRouteId({ routeId })
  )
  const openedRouteId = useRef<string | null>(null)
  const previousRouteId = useRef<string | null | undefined>(undefined)
  const ignoredRouteId = useRef<string | null>(null)
  const pendingRouteItemId = useRef<DataSourceItemId | null>(null)
  const closedItemId = useRef<DataSourceItemId | null>(null)
  const previousNavigationId = useRef<DataSourceItemId | null>(
    itemNavigation?.activeItemId ?? null
  )
  const emittedRouteIds = useRef(new Set<string>())

  useEffect(() => {
    const routeIdChanged = previousRouteId.current !== (routeId ?? null)
    previousRouteId.current = routeId ?? null
    if (routeIdChanged && ignoredRouteId.current !== routeId) {
      ignoredRouteId.current = null
    }

    if (routeId == null) {
      openedRouteId.current = null
      pendingRouteItemId.current = null
      ignoredRouteId.current = null
      emittedRouteIds.current.clear()
      setActiveRouteId(null)

      const currentItemId = itemNavigation?.activeItemId ?? null
      if (currentItemId == null) {
        closedItemId.current = null
      } else if (!isSameId(closedItemId.current, currentItemId)) {
        closedItemId.current = currentItemId
        itemNavigation?.closeItem()
      }
      return
    }

    const routeItemId = parseRouteId(routeId)

    if (!itemNavigation) {
      if (routeIdChanged) setActiveRouteId(routeId)
      return
    }

    const isEmittedRouteId = emittedRouteIds.current.has(routeId)
    if (isEmittedRouteId) {
      if (!isSameId(itemNavigation.activeItemId ?? null, routeItemId)) {
        ignoredRouteId.current = routeId
        return
      }

      emittedRouteIds.current.clear()
      ignoredRouteId.current = null
      openedRouteId.current = routeId
      pendingRouteItemId.current = null
      setActiveRouteId(routeId)
      return
    }

    if (ignoredRouteId.current === routeId) return

    if (routeIdChanged) {
      setActiveRouteId(routeId)
    }

    if (
      openedRouteId.current === routeId &&
      itemNavigation.activeItemId != null
    ) {
      return
    }

    closedItemId.current = null
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
    if (routeId == null) return

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

    emittedRouteIds.current.add(nextRouteId)
    setActiveRouteId(nextRouteId)
    onRouteIdChange?.(nextRouteId, nextItemId)
  }, [
    activeRouteId,
    formatItemId,
    itemNavigation?.activeItemId,
    onRouteIdChange,
    routeId,
  ])

  const effectiveActiveRouteId = routeId == null ? null : activeRouteId

  return {
    activeRouteId: effectiveActiveRouteId,
    activeItemId:
      effectiveActiveRouteId == null
        ? null
        : (itemNavigation?.activeItemId ?? null),
    controls:
      effectiveActiveRouteId == null
        ? null
        : (itemNavigation?.controls ?? null),
  }
}
