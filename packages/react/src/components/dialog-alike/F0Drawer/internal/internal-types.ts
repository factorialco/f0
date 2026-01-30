import { DialogAlikeInternalProps } from "../../common/types"
import { F0DrawerPosition, DrawerSize } from "../types"

export type DrawerInternalProps = Omit<DialogAlikeInternalProps, "size"> & {
  size?: DrawerSize
  position?: F0DrawerPosition
}
