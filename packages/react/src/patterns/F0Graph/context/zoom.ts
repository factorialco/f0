import { createContext, useContext } from "react"

import type { ZoomLevel } from "../types"

export interface F0GraphZoomContextValue {
  zoomLevel: ZoomLevel
  currentZoom: number
}

export const F0GraphZoomContext = createContext<F0GraphZoomContextValue | null>(
  null
)

F0GraphZoomContext.displayName = "F0GraphZoomContext"

export function useF0GraphZoom(): F0GraphZoomContextValue {
  const ctx = useContext(F0GraphZoomContext)
  if (ctx === null) {
    throw new Error("useF0GraphZoom must be used within an <F0Graph> component")
  }
  return ctx
}

/** Non-throwing variant for internal wrapper components */
export function useF0GraphZoomInternal(): F0GraphZoomContextValue | null {
  return useContext(F0GraphZoomContext)
}
