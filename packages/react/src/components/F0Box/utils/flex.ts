import type {
  AlignItemsToken,
  FlexDirectionToken,
  FlexWrapToken,
  GapToken,
  JustifyContentToken,
} from "../types"

export const flexVariants = {
  gap: {
    none: "gap-0",
    sm: "gap-sm",
    md: "gap-md",
    lg: "gap-lg",
    xl: "gap-xl",
  } satisfies Record<GapToken, string>,

  alignItems: {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  } satisfies Record<AlignItemsToken, string>,

  justifyContent: {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
    stretch: "justify-stretch",
  } satisfies Record<JustifyContentToken, string>,

  flexDirection: {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse",
  } satisfies Record<FlexDirectionToken, string>,

  flexWrap: {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse",
  } satisfies Record<FlexWrapToken, string>,

  grow: {
    true: "grow",
    false: "grow-0",
  },

  shrink: {
    true: "shrink",
    false: "shrink-0",
  },
}

export const flexDefaults = {}
