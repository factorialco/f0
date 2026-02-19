import { Component } from "../../lib/component/component"
import { withDataTestId } from "../../lib/data-testid"
import { experimentalComponent } from "../../lib/experimental"
import { DialogInner } from "./Dialog"

export { Tooltip, type TooltipProps } from "./Tooltip"

export const Dialog = withDataTestId(
  Component(
    {
      name: "Dialog",
      type: "info",
    },
    experimentalComponent("Dialog", DialogInner)
  )
)
