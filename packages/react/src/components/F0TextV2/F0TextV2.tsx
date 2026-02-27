import { forwardRef } from "react"

import { TextV2, type TextV2Props } from "@/ui/TextV2"

export type F0TextV2Props = TextV2Props

export const F0TextV2Inner = forwardRef<HTMLElement, F0TextV2Props>(
  (props, ref) => {
    return <TextV2 ref={ref} {...props} />
  }
)

F0TextV2Inner.displayName = "F0TextV2"
