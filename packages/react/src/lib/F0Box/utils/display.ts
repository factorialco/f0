import type { DisplayToken, PositionToken } from "../types"

export const displayVariants = {
  display: {
    block: "block",
    flex: "flex",
    inline: "inline",
    "inline-flex": "inline-flex",
    grid: "grid",
    none: "hidden",
  } satisfies Record<DisplayToken, string>,

  position: {
    static: "static",
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
    sticky: "sticky",
  } satisfies Record<PositionToken, string>,
}
