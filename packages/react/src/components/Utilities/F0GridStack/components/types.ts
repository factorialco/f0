import type React from "react"

declare module "gridstack" {
  interface GridStackWidget {
    id?: string
    allowedSizes?: Array<{ w: number; h: number }>
    renderFn?: () => React.ReactElement | null
    meta?: Record<string, unknown>
  }

  interface GridStackNode {
    id?: string
    w?: number
    h?: number
    x?: number
    y?: number
    allowedSizes?: Array<{ w: number; h: number }>
    renderFn?: () => React.ReactElement | null
  }
}
