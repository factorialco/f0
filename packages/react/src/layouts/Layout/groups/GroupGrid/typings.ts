export const fixedGridVariants = ["1x1", "2x2", "4x2"] as const

export type FixedGridVariant = (typeof fixedGridVariants)[number]

export type GroupGridWidgetSize = { w: number; h: number }

export type GroupGridWidget<
  Meta extends Record<string, unknown> = Record<string, unknown>,
> = {
  id: string
  availableSizes?: GroupGridWidgetSize[]
  content: React.ReactNode
  x: number
  y: number
  locked?: boolean
  meta?: Meta
} & GroupGridWidgetSize
