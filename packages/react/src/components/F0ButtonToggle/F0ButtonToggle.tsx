import { forwardRef } from "react"

import { F0ButtonToggleInternal } from "./internal/F0ButtonToggle.internal"
import { F0ButtonToggleInternalProps } from "./internal/types.internal"

const privateProps = ["withBorder"] as const

export type F0ButtonToggleProps = Omit<
  F0ButtonToggleInternalProps,
  (typeof privateProps)[number]
>

const F0ButtonToggle = forwardRef<HTMLButtonElement, F0ButtonToggleProps>(
  (props, ref) => {
    const publicProps = privateProps.reduce((acc, key) => {
      const { [key]: _, ...rest } = acc
      return rest
    }, props as F0ButtonToggleInternalProps)

    return <F0ButtonToggleInternal {...publicProps} ref={ref} />
  }
)

F0ButtonToggle.displayName = "F0ButtonToggle"

export { F0ButtonToggle }
