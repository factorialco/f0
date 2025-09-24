import { Component } from "../../lib/component/component"
export * from "./F0Icon"

import { F0Icon as IconComponent } from "./F0Icon"
export const F0Icon = Component(
  {
    name: "F0Icon",
    type: "info",
  },
  IconComponent
)
