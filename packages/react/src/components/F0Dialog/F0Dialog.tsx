import { FC } from "react"
import { F0DialogInternal } from "./F0DialogInternal"
import { F0DialogInternalProps } from "./internal-types"

const privateProps = ["disableClose"] as const

export const F0Dialog: FC<F0DialogInternalProps> = (props) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as F0DialogInternalProps)
  return <F0DialogInternal {...publicProps} />
}

F0Dialog.displayName = "F0Dialog"
