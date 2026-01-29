import { baseColors } from "@factorialco/f0-core"

import type { TestableProps } from "@/global.types"

type BaseColor = keyof typeof baseColors

export const tagDotColors = [
  "viridian",
  "malibu",
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
  "camel",
] as const satisfies BaseColor[]

export type NewColor = Extract<BaseColor, (typeof tagDotColors)[number]>

export type Props = TestableProps & {
  text: string
} & ({ color: NewColor } | { customColor: string })
