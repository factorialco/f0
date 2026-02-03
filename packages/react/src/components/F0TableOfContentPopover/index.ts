export * from "./F0TableOfContentPopover"

import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0TableOfContentPopover as F0TableOfContentPopoverComponent } from "./F0TableOfContentPopover"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const F0TableOfContentPopover = withDataTestId(
  experimentalComponent(
    "F0TableOfContentPopover",
    F0TableOfContentPopoverComponent
  )
)

export { F0TableOfContentPopover }
