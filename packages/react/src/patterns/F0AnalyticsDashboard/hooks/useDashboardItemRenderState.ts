import { useEffect, useRef } from "react"

import type {
  DashboardItemRenderState,
  DashboardItemRenderStateChange,
} from "../types"

interface UseDashboardItemRenderStateOptions {
  itemId: string
  renderCycleKey?: string
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
  state,
  onItemRenderStateChange,
}: UseDashboardItemRenderStateOptions): void {
  const onChangeRef = useRef(onItemRenderStateChange)
  onChangeRef.current = onItemRenderStateChange

  useEffect(
    function notifyCommittedItemRenderState() {
      if (renderCycleKey === undefined) return

      onChangeRef.current?.({
        itemId,
        renderCycleKey,
        state,
      })
    },
    [itemId, renderCycleKey, state]
  )
}
