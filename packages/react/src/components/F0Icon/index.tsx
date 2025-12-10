import { Component } from "../../lib/component/component"
import {
  F0Icon as IconComponent,
  type F0IconProps,
  type IconType,
} from "./F0Icon"

export const F0Icon = Component(
  {
    name: "F0Icon",
    type: "info",
  },
  IconComponent
)

export type { F0IconProps, IconType }
