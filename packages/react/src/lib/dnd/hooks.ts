import { useEffect, useRef } from "react"
import { useDndContextOptional } from "./context"
import type { DragPayload } from "./types"

export function useDraggable<T = unknown>(args: {
  ref: React.RefObject<HTMLElement>
  payload: DragPayload<T>
  disabled?: boolean
  handleRef?: React.RefObject<HTMLElement | null>
}) {
  const ctx = useDndContextOptional()
  const { ref, payload, disabled, handleRef } = args

  // Use ref to store payload and track changes
  const payloadRef = useRef(payload)
  const lastPayloadKeyRef = useRef<string | null>(null)

  // Update payload ref when it changes
  payloadRef.current = payload

  // Create a key that includes both id and currentParentId to detect moves
  const payloadData = payload.data as { currentParentId?: string | null }
  const payloadKey = payload.id + "|" + (payloadData?.currentParentId ?? "null")

  const cleanupRef = useRef<(() => void) | undefined>(undefined)

  useEffect(() => {
    if (!ref.current) {
      if (cleanupRef.current) {
        cleanupRef.current()
        cleanupRef.current = undefined
      }
      return
    }
    if (!ctx || disabled) {
      if (cleanupRef.current) {
        cleanupRef.current()
        cleanupRef.current = undefined
      }
      return
    }

    // Check if payload key changed (id or currentParentId)
    const payloadKeyChanged = lastPayloadKeyRef.current !== payloadKey

    if (payloadKeyChanged || !cleanupRef.current) {
      lastPayloadKeyRef.current = payloadKey
      // Clean up previous registration
      if (cleanupRef.current) {
        cleanupRef.current()
      }
      // Register with new payload
      cleanupRef.current = ctx.driver.registerDraggable(ref.current, {
        payload: payloadRef.current,
        disabled,
        handle: handleRef?.current ?? null,
      })
    } else if (cleanupRef.current) {
      // Payload key didn't change, just update it in the driver if possible
      if ((cleanupRef.current as any).updatePayload) {
        ;(cleanupRef.current as any).updatePayload(payloadRef.current)
      }
    }

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current()
        cleanupRef.current = undefined
      }
    }
  }, [ctx, ref, payloadKey, disabled, handleRef])
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
