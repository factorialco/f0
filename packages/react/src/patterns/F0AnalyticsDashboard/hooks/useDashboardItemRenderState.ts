import { useEffect, useRef } from "react"

import type {
  DashboardItemRenderState,
  DashboardItemRenderStateChange,
} from "../types"

interface UseDashboardItemRenderStateOptions {
  itemId: string
  renderCycleKey?: string
  requestId?: number
  state: DashboardItemRenderState
  onItemRenderStateChange?: (event: DashboardItemRenderStateChange) => void
}

export function resolveDashboardItemRenderState({
  hasError,
  isLoading,
}: {
  hasError: boolean
  isLoading: boolean
}): DashboardItemRenderState {
  if (hasError) return "error"
  return isLoading ? "loading" : "ready"
}

export function useDashboardItemRenderState({
  itemId,
  renderCycleKey,
  requestId,
  state,
  onItemRenderStateChange,
}: UseDashboardItemRenderStateOptions): void {
  const onChangeRef = useRef(onItemRenderStateChange)
  onChangeRef.current = onItemRenderStateChange

  useEffect(
    function notifyCommittedItemRenderState() {
      if (renderCycleKey === undefined || requestId === undefined) return

      onChangeRef.current?.({
        itemId,
        renderCycleKey,
        requestId,
        state,
      })
    },
    [itemId, renderCycleKey, requestId, state]
  )
}
