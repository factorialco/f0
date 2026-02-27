import { Component } from "../../lib/component/component"
import { F0TextV2Inner } from "./F0TextV2"

export const F0TextV2 = Component(
  {
    name: "F0TextV2",
    type: "info",
  },
  F0TextV2Inner
)

export type { F0TextV2Props } from "./F0TextV2"

export type {
  AlignToken as F0TextV2Align,
  ColorToken as F0TextV2Color,
  DecorationToken as F0TextV2Decoration,
  SizeToken as F0TextV2Size,
  TransformToken as F0TextV2Transform,
  VariantToken as F0TextV2Variant,
} from "./types"
