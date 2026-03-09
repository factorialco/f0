import { Component } from "../../lib/component/component"
import { withDataTestId } from "../../lib/data-testid"
import { F0TextV2Inner, type F0TextV2Props } from "./F0TextV2"

export const F0TextV2 = withDataTestId(
  Component(
    {
      name: "F0TextV2",
      type: "info",
    },
    F0TextV2Inner
  )
)

export type { F0TextV2Props }
export type {
  AlignToken,
  ColorToken,
  DecorationToken,
  TransformToken,
  VariantToken,
} from "../../ui/TextV2"
