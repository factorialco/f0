import { NavigationProps } from "@/experimental/Navigation/Header/PageNavigation"
import { ResourceHeaderProps } from "@/patterns/ResourceHeader"

import { DrawerControls } from "../../common/Header"
import { DialogAlikeInternalProps } from "../../common/types"
import { DrawerSize, F0DrawerPosition } from "../types"

export type DrawerInternalProps = Omit<DialogAlikeInternalProps, "size"> & {
  size?: DrawerSize
  position?: F0DrawerPosition
  /** Side-panel navigation rendered in the title row, next to the close button. */
  navigation?: NavigationProps
  /** Resource identity band rendered below the controls row. */
  resourceHeader?: ResourceHeaderProps
  /** Controls the left slot of the controls row — back or resource (expand + prev/next). */
  controls?: DrawerControls
}
