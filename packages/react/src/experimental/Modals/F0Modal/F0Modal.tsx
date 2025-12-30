import { FC } from "react"
import { F0ModalInternal } from "./F0ModalInternal"
import { F0ModalInternalProps } from "./internal-types"

export const F0Modal: FC<F0ModalInternalProps> = (props) => {
  return <F0ModalInternal {...props} />
}

F0Modal.displayName = "F0Modal"
