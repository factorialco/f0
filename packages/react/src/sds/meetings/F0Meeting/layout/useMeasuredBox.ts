import { useEffect, useMemo, useRef, useState } from "react"

import { round4 } from "../utils/aspect"

export type MeasuredBox = { width: number; height: number }

/**
 * Measures an element with a ResizeObserver, coalesced to one frame and rounded
 * to 4px. Container measurement (not viewport media queries) is what lets the
 * same room render correctly in fullscreen and in a 300px floating window.
 */
export const useMeasuredBox = <T extends HTMLElement>(): [
  React.RefObject<T>,
  MeasuredBox,
] => {
  const ref = useRef<T>(null)
  const [raw, setRaw] = useState<MeasuredBox>({ width: 0, height: 0 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let frame = 0
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return
      const { width, height } = entry.contentRect
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setRaw((previous) =>
          previous.width === width && previous.height === height
            ? previous
            : { width, height }
        )
      })
    })

    observer.observe(element)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [])

  const box = useMemo(
    () => ({ width: round4(raw.width), height: round4(raw.height) }),
    [raw.width, raw.height]
  )

  return [ref, box]
}
