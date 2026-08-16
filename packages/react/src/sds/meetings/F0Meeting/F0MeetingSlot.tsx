"use client"

import { useEffect } from "react"

import { useMeasuredBox } from "./layout/useMeasuredBox"
import { useMeetingSurface } from "./providers/MeetingSurfaceProvider"

/**
 * Reserves space for the meeting on a dedicated page.
 *
 * It renders nothing: it is an empty box that publishes its viewport rect, and
 * the window — which stays in its portal — animates to that rect. Teleporting
 * by measurement instead of reparenting is what keeps the `<video>` elements
 * mounted across navigation, and it makes the fullscreen ↔ inline ↔ floating
 * transition a single animation of x/y/width/height.
 */
export const F0MeetingSlot = () => {
  const { setInlineRect, setMode } = useMeetingSurface()
  const [ref, box] = useMeasuredBox<HTMLDivElement>()

  useEffect(() => {
    setMode("inline")
    return () => setInlineRect(null)
  }, [setMode, setInlineRect])

  useEffect(() => {
    const element = ref.current
    if (!element || box.width <= 0 || box.height <= 0) return
    const bounds = element.getBoundingClientRect()
    setInlineRect({
      x: bounds.left,
      y: bounds.top,
      width: bounds.width,
      height: bounds.height,
    })
  }, [box, ref, setInlineRect])

  return <div ref={ref} className="h-full w-full" aria-hidden />
}
