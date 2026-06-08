import type { BoxShadowToken } from "../types"

export const shadowVariants = {
  boxShadow: {
    none: "shadow-none",
    sm: "shadow",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  } satisfies Record<BoxShadowToken, string>,
}
