export const fixedGridVariants = ["1x1", "2x2", "4x2"] as const

export type FixedGridVariant = (typeof fixedGridVariants)[number]

export type GroupGridWidgetSize = { w: number; h: number }

export type GroupGridWidget<
  Meta extends Record<string, unknown> = Record<string, unknown>,
> = {
  id: string
  availableSizes?: GroupGridWidgetSize[]
  content:
    | React.ReactNode
    | ((deps: Record<string, unknown>) => React.ReactNode)
  x: number
  y: number
  locked?: boolean
  meta?: Meta
  /**
   * Dependencies array that, when changed, will trigger a content update.
   * The values are compared using shallow equality.
   */
  deps?: unknown[]
} & GroupGridWidgetSize
