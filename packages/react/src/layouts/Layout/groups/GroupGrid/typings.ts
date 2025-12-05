export const fixedGridVariants = ["1x1", "2x2", "4x2"] as const

export type FixedGridVariant = (typeof fixedGridVariants)[number]

export type GroupGridWidgetSize = { w: number; h: number }

export type GroupGridWidget<
  Meta extends Record<string, unknown> = Record<string, unknown>,
  Deps extends string[] = string[],
> = {
  id: string
  availableSizes?: GroupGridWidgetSize[]
  content:
    | React.ReactNode
    | ((deps: Partial<Record<Deps[number], unknown>>) => React.ReactNode)
  x: number
  y: number
  locked?: boolean
  meta?: Meta
  /**
   * Dependencies array that, when changed, will trigger a content update.
   * Each value in the array is compared using strict equality (`===`).
   */
  deps?: Deps
} & GroupGridWidgetSize
