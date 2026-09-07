import { FC } from "react"
import { F0DialogInternal } from "./F0DialogInternal"
import { F0DialogInternalProps } from "./internal-types"

export const F0Dialog: FC<F0DialogInternalProps> = (props) => {
  return <F0DialogInternal {...props} />
}

F0Dialog.displayName = "F0Dialog"
