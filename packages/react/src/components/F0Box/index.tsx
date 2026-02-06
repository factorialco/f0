import { Component } from "../../lib/component/component"
import { F0Box as BoxComponent, type F0BoxProps } from "./F0Box"

export const F0Box = Component(
  {
    name: "F0Box",
    type: "layout",
  },
  BoxComponent
)

export type { F0BoxProps }
export type {
  AlignItemsToken,
  BackgroundToken,
  BorderColorToken,
  BorderRadiusToken,
  BorderWidthToken,
  ColSpanToken,
  ColStartToken,
  ColumnsToken,
  DisplayToken,
  DividerToken,
  FlexDirectionToken,
  FlexWrapToken,
  FractionToken,
  GapToken,
  JustifyContentToken,
  MarginToken,
  NumericSizeToken,
  OverflowToken,
  RowSpanToken,
  RowsToken,
  SizeToken,
  SpacingToken,
} from "./types"
export type { Breakpoint, ResponsiveStyleProps } from "./utils/responsive"
