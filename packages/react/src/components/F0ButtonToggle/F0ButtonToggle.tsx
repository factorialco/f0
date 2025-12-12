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
    const publicProps = { ...props }
    privateProps.forEach(key => { delete publicProps[key] })

    return <F0ButtonToggleInternal {...publicProps} ref={ref} />
  }
)

F0ButtonToggle.displayName = "F0ButtonToggle"

export { F0ButtonToggle }
