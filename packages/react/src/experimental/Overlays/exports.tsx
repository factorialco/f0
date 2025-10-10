import { Component } from "../../lib/component/component"
import { Dialog as DialogComponent } from "./Dialog"

export const Dialog = Component(
  {
    name: "Dialog",
    type: "info",
  },
  DialogComponent
)
