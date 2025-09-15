import { baseColors } from "@factorialco/f0-core"

type BaseColor = keyof typeof baseColors

export type NewColor = Extract<
  BaseColor,
  | "viridian"
  | "malibu"
  | "yellow"
  | "purple"
  | "lilac"
  | "barbie"
  | "smoke"
  | "army"
  | "flubber"
  | "indigo"
  | "camel"
>

export type Props = {
  text: string
} & ({ color: NewColor } | { customColor: string })
