import { Component } from "../../lib/component/component"
import { F0TextV2Inner, type F0TextV2Props } from "./F0TextV2"

export const F0TextV2 = Component(
  {
    name: "F0TextV2",
    type: "info",
  },
  F0TextV2Inner
)

export type { F0TextV2Props }
export type {
  AlignToken,
  ColorToken,
  DecorationToken,
  SizeToken,
  TransformToken,
  VariantToken,
} from "../../ui/TextV2"
