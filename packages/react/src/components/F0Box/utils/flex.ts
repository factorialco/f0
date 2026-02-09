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
    xs: "gap-0.5",
    sm: "gap-1",
    md: "gap-2",
    lg: "gap-3",
    xl: "gap-4",
    "2xl": "gap-6",
    "3xl": "gap-8",
    "4xl": "gap-10",
    "5xl": "gap-12",
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
