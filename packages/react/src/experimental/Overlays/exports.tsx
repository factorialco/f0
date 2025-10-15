import { Component } from "../../lib/component/component"
import { Dialog as DialogComponent } from "./Dialog"
export { Tooltip, type TooltipProps } from "./Tooltip"

export const Dialog = Component(
  {
    name: "Dialog",
    type: "info",
  },
  DialogComponent
)
