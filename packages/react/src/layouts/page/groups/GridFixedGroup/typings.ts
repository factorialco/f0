export const fixedGridVariants = ["1x1", "2x2", "4x2"] as const

export type FixedGridVariant = (typeof fixedGridVariants)[number]
