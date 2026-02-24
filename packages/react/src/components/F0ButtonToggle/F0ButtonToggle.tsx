import { forwardRef } from "react"

import { withDataTestId } from "@/lib/data-testid"

import { F0ButtonToggleInternal } from "./internal/F0ButtonToggle.internal"
import { F0ButtonToggleInternalProps } from "./internal/types.internal"

const privateProps = ["withBorder"] as const

export type F0ButtonToggleProps = Omit<
  F0ButtonToggleInternalProps,
  (typeof privateProps)[number]
>

const _F0ButtonToggle = forwardRef<HTMLButtonElement, F0ButtonToggleProps>(
  (props, ref) => {
    const publicProps = privateProps.reduce((acc, key) => {
      const { [key]: _, ...rest } = acc
      return rest
    }, props as F0ButtonToggleInternalProps)

    return <F0ButtonToggleInternal {...publicProps} ref={ref} />
  }
)

_F0ButtonToggle.displayName = "F0ButtonToggle"

export const F0ButtonToggle = withDataTestId(_F0ButtonToggle)
