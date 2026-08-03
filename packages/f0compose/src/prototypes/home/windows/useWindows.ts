import { useCallback, useState } from "react"

import type { WindowId, WindowsState } from "./types"

const DEFAULT_COLUMN_WIDTH = 448
export const MIN_COLUMN_WIDTH = 336
export const MAX_COLUMN_WIDTH = 720
const MIN_WEIGHT = 0.15

/**
 * Claude-Code-style window stack state: windows open into a right-hand
 * column that pushes the canvas; new windows are prepended (appear on
 * top) and share the column height by adjustable weights.
 */
export function useWindows() {
  const [state, setState] = useState<WindowsState>({
    open: [],
    weights: [],
    columnWidth: DEFAULT_COLUMN_WIDTH,
    maximized: null,
  })

  const toggle = useCallback((id: WindowId) => {
    setState((s) => {
      const idx = s.open.indexOf(id)
      if (idx >= 0) {
        return {
          ...s,
          open: s.open.filter((w) => w !== id),
          weights: s.weights.filter((_, i) => i !== idx),
          maximized: s.maximized === id ? null : s.maximized,
        }
      }
      return { ...s, open: [id, ...s.open], weights: [1, ...s.weights] }
    })
  }, [])

  /** Open (or surface) a window without toggling it closed. */
  const open = useCallback((id: WindowId) => {
    setState((s) =>
      s.open.includes(id)
        ? s
        : { ...s, open: [id, ...s.open], weights: [1, ...s.weights] }
    )
  }, [])

  const close = useCallback((id: WindowId) => {
    setState((s) => {
      const idx = s.open.indexOf(id)
      if (idx < 0) return s
      return {
        ...s,
        open: s.open.filter((w) => w !== id),
        weights: s.weights.filter((_, i) => i !== idx),
        maximized: s.maximized === id ? null : s.maximized,
      }
    })
  }, [])

  const toggleMaximized = useCallback((id: WindowId) => {
    setState((s) => ({ ...s, maximized: s.maximized === id ? null : id }))
  }, [])

  const setColumnWidth = useCallback((width: number) => {
    setState((s) => ({
      ...s,
      columnWidth: Math.min(MAX_COLUMN_WIDTH, Math.max(MIN_COLUMN_WIDTH, width)),
    }))
  }, [])

  /** Shift height share between window `idx` and `idx + 1` by `deltaWeight`. */
  const resizeBetween = useCallback((idx: number, deltaWeight: number) => {
    setState((s) => {
      const weights = [...s.weights]
      const a = weights[idx]
      const b = weights[idx + 1]
      if (a === undefined || b === undefined) return s
      const clamped = Math.max(MIN_WEIGHT - a, Math.min(b - MIN_WEIGHT, deltaWeight))
      weights[idx] = a + clamped
      weights[idx + 1] = b - clamped
      return { ...s, weights }
    })
  }, [])

  return { state, toggle, open, close, toggleMaximized, setColumnWidth, resizeBetween }
}
