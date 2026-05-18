import { useEffect, useMemo } from "react"

import type { DragPayload, OnGenerateDragPreviewArgs } from "./types"

import { useDndContextOptional } from "./context"

export function useDraggable<T = unknown>(args: {
  ref: React.RefObject<HTMLElement>
  payload: DragPayload<T>
  disabled?: boolean
  handleRef?: React.RefObject<HTMLElement | null>
  selectedIds?: string[]
  onGenerateDragPreview?: (args: OnGenerateDragPreviewArgs) => void
}) {
  const ctx = useDndContextOptional()
  const {
    ref,
    payload,
    disabled,
    handleRef,
    selectedIds,
    onGenerateDragPreview,
  } = args

  // Create a key that includes both id and currentParentId to detect moves
  // This ensures we re-register when an item moves to a different parent
  const payloadData = payload.data as { currentParentId?: string | null }
  const payloadKey = payload.id + "|" + (payloadData?.currentParentId ?? "null")
  const selectedIdsKey = selectedIds?.join(",") ?? ""

  // Memoize enriched payload to avoid creating a new object every render,
  // which would cause unnecessary useEffect re-registrations.
  // Include payload.kind so changes to the drag type also refresh registration.
  const enrichedPayload = useMemo<DragPayload<T>>(
    () => (selectedIds?.length ? { ...payload, selectedIds } : payload),
    [payloadKey, payload.kind, selectedIdsKey]
  )

  useEffect(() => {
    if (!ref.current) return
    if (!ctx || disabled) return

    return ctx.driver.registerDraggable(ref.current, {
      payload: enrichedPayload,
      disabled,
      handle: handleRef?.current ?? null,
      onGenerateDragPreview,
    })
  }, [
    ctx,
    ref,
    payloadKey,
    disabled,
    handleRef,
    enrichedPayload,
    selectedIdsKey,
    onGenerateDragPreview,
  ])
}

export function useDroppableList(args?: {
  ref: React.RefObject<HTMLElement>
  id: string
  accepts: string[]
}) {
  const ctx = useDndContextOptional()
  const ref = args?.ref
  const id = args?.id
  const accepts = args?.accepts

  useEffect(() => {
    if (!ref?.current) return
    if (!ctx || !id || !accepts) return
    return ctx.driver.registerDroppable(ref.current, { id, accepts })
  }, [ctx, ref, id, accepts])
}

export function useDndEvents(
  handler: (e: {
    phase: "start" | "over" | "drop" | "cancel"
    source: DragPayload
  }) => void
) {
  const ctx = useDndContextOptional()
  useEffect(
    () => (ctx ? ctx.driver.subscribe(handler) : undefined),
    [ctx, handler]
  )
}
