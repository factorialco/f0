import { type RefCallback, useCallback, useRef, useState } from "react"

/**
 * Holds a subtree unmounted until its element first intersects the viewport.
 *
 * Used by exactly one thing: the location map. Everything else in the
 * transcript now mounts with its row, because deferring it only ever bought a
 * placeholder. Maps are different for a reason that isn't a performance
 * hypothesis — each one takes a live WebGL context, and browsers cap how many
 * can exist at once (Chrome drops the oldest past ~16). A transcript with
 * twenty shared locations would start losing maps.
 *
 * One-shot: once visible, it stays mounted for the life of the element. No
 * queue, no idle scheduling, no settle delay — the map should be there by the
 * time the reader looks at it.
 */
export const useMountOnVisible = (): {
  ref: RefCallback<HTMLElement>
  shouldMount: boolean
} => {
  // No IntersectionObserver (jsdom, very old browsers): mount immediately
  // rather than render a permanent placeholder.
  const [shouldMount, setShouldMount] = useState(
    () => typeof IntersectionObserver === "undefined"
  )
  const observerRef = useRef<IntersectionObserver | null>(null)
  const mountedRef = useRef(shouldMount)

  const ref = useCallback<RefCallback<HTMLElement>>((element) => {
    observerRef.current?.disconnect()
    observerRef.current = null
    if (!element || mountedRef.current) return
    if (typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      mountedRef.current = true
      observer.disconnect()
      observerRef.current = null
      setShouldMount(true)
    })
    observer.observe(element)
    observerRef.current = observer
  }, [])

  return { ref, shouldMount }
}
