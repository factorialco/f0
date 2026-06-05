import type { F0PdfScale } from "./types"

export type FixedScale = Exclude<F0PdfScale, "page-width" | "page-fit">

export const fixedScales: FixedScale[] = [
  "0.5",
  "0.75",
  "1",
  "1.25",
  "1.5",
  "2",
  "3",
  "4",
]

const fixedScaleValues = fixedScales.map(Number)

export const nextScaleUp = (current: number): number | undefined =>
  fixedScaleValues.find((value) => value > current)

export const nextScaleDown = (current: number): number | undefined =>
  [...fixedScaleValues].reverse().find((value) => value < current)
