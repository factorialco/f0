import type { DisplayToken } from "../types"

export const displayVariants = {
  display: {
    block: "block",
    flex: "flex",
    inline: "inline",
    "inline-flex": "inline-flex",
    grid: "grid",
    none: "hidden",
  } satisfies Record<DisplayToken, string>,
}
