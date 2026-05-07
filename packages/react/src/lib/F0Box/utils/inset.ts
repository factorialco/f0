import type { InsetToken } from "../types"

const insetMap: Record<InsetToken, string> = {
  none: "0",
  xs: "1",
  sm: "2",
  md: "3",
  lg: "4",
  xl: "6",
  "2xl": "8",
  "3xl": "10",
  "4xl": "12",
  "5xl": "16",
}

export const insetVariants = {
  top: Object.fromEntries(
    Object.entries(insetMap).map(([token, value]) => [token, `top-${value}`])
  ) as Record<InsetToken, string>,
  right: Object.fromEntries(
    Object.entries(insetMap).map(([token, value]) => [token, `right-${value}`])
  ) as Record<InsetToken, string>,
  bottom: Object.fromEntries(
    Object.entries(insetMap).map(([token, value]) => [token, `bottom-${value}`])
  ) as Record<InsetToken, string>,
  left: Object.fromEntries(
    Object.entries(insetMap).map(([token, value]) => [token, `left-${value}`])
  ) as Record<InsetToken, string>,
}
