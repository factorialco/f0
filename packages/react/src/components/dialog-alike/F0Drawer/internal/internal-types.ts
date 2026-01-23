import { DialogAlikeInternalProps } from "../../common/types"
import { DrawerPosition, DrawerSize } from "../types"

export type DrawerInternalProps = Omit<DialogAlikeInternalProps, "size"> & {
  size?: DrawerSize
  position?: DrawerPosition
}
