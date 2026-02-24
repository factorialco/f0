import { baseColors } from "@factorialco/f0-core"
import { ReactNode } from "react"

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

export type Props = {
  text: string
  right?: ReactNode
} & ({ color: NewColor } | { customColor: string })
