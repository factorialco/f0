import { useCallback, useEffect, useRef, useState } from "react"

/**
 * f0 dark mode is a `.dark` class on any ancestor (html, body, or a dark-island
 * wrapper), so the map can't rely on `prefers-color-scheme`. Same detection
 * pattern as `useChartTheme` in F0DataChart and `LocationMap`: `closest(".dark")`
 * plus a MutationObserver on every ancestor's `class` attribute.
 *
 * Returns a callback ref (attach it to the container) plus the flag. A plain
 * `RefObject` effect would run before the element exists when the map mounts
 * behind the `loading` skeleton and never re-run, leaving the theme stuck.
 */
export const useIsDarkContext = (): {
  containerRef: (element: HTMLDivElement | null) => void
  isDark: boolean
} => {
  const [isDark, setIsDark] = useState(false)
  const observerRef = useRef<MutationObserver | null>(null)

  const containerRef = useCallback((element: HTMLDivElement | null) => {
    observerRef.current?.disconnect()
    observerRef.current = null
    if (!element) return

    const refresh = () => setIsDark(element.closest(".dark") !== null)
    refresh()

    const observer = new MutationObserver(refresh)
    for (
      let ancestor: Element | null = element;
      ancestor;
      ancestor = ancestor.parentElement
    ) {
      observer.observe(ancestor, {
        attributes: true,
        attributeFilter: ["class"],
      })
    }
    observerRef.current = observer
  }, [])

  // Callback refs don't get a final `null` call on unmount in React 18, so
  // disconnect on effect cleanup as well.
  useEffect(() => () => observerRef.current?.disconnect(), [])

  return { containerRef, isDark }
}
