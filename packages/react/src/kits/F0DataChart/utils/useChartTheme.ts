import { type RefObject, useCallback, useEffect, useState } from "react"

import { type ChartTheme, resolveChartTheme } from "./theme"

/**
 * Collect every ancestor element from `element` up to (and including)
 * `document.documentElement`. These are the elements that could have the
 * `.dark` class toggled on them, so we need to observe all of them.
 */
function getAncestors(element: Element): Element[] {
  const ancestors: Element[] = []
  let current: Element | null = element
  while (current) {
    ancestors.push(current)
    current = current.parentElement
  }
  return ancestors
}

/**
 * Resolves the complete chart theme from CSS custom properties and
 * re-resolves it when the dark mode context changes.
 *
 * Accepts a ref to the chart's container element so it can:
 * 1. Detect `.dark` on **any ancestor** via `element.closest(".dark")`
 * 2. Resolve CSS custom properties via `getComputedStyle(element)` so
 *    that localized dark islands (a parent `<div class="dark">`) are
 *    respected.
 * 3. Observe class attribute changes on every ancestor element so the
 *    theme re-resolves when `.dark` is added or removed at any level.
 *
 * Every chart-type hook (bar, line, pie, …) should call this once and
 * pass the returned `ChartTheme` through to `buildBaseChartOptions()`.
 */
export function useChartTheme(
  containerRef: RefObject<HTMLDivElement | null>
): ChartTheme {
  const [theme, setTheme] = useState<ChartTheme>(() =>
    resolveChartTheme(containerRef.current)
  )

  const refresh = useCallback(() => {
    setTheme(resolveChartTheme(containerRef.current))
  }, [containerRef])

  // Re-resolve on mount (when the ref becomes available) and whenever
  // any ancestor's class attribute changes (covers .dark toggles at
  // any level: <html>, <body>, or a wrapper <div>).
  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    // Initial resolution now that the element is mounted
    setTheme(resolveChartTheme(element))

    const observer = new MutationObserver(refresh)

    // Observe every ancestor for class changes
    for (const ancestor of getAncestors(element)) {
      observer.observe(ancestor, {
        attributes: true,
        attributeFilter: ["class"],
      })
    }

    return () => observer.disconnect()
  }, [containerRef, refresh])

  return theme
}
