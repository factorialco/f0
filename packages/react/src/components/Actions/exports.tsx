import { Component } from "../../lib/component/component"
import { Link as LinkComponent } from "./Link"

export * from "./Button"

export type { LinkProps } from "./Link"
export const Link = Component(
  {
    name: "Link",
    type: "info",
  },
  LinkComponent
)
