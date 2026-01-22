import { useEffect } from "react"

import type { DragPayload } from "./types"

import { useDndContextOptional } from "./context"

export function useDraggable<T = unknown>(args: {
  ref: React.RefObject<HTMLElement>
  payload: DragPayload<T>
  disabled?: boolean
  handleRef?: React.RefObject<HTMLElement | null>
}) {
  const ctx = useDndContextOptional()
  const { ref, payload, disabled, handleRef } = args

  useEffect(() => {
    if (!ref.current) return
    if (!ctx || disabled) return
    return ctx.driver.registerDraggable(ref.current, {
      payload,
      disabled,
      handle: handleRef?.current ?? null,
    })
  }, [ctx, ref, payload, disabled, handleRef])
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
