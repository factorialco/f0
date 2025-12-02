/**
 * Public implementations of the ButtonInternal component.
 * Button component.
 */
import { forwardRef } from "react"
import { ButtonInternal } from "./internal"
import { ButtonInternalProps } from "./internal-types"

const privateProps = [
  "append",
  "className",
  "pressed",
  "compact",
  "noTitle",
  "noAutoTooltip",
  "style",
] as const

export type F0ButtonProps = Omit<
  ButtonInternalProps,
  (typeof privateProps)[number] | "variant"
> & {
  variant?: Exclude<ButtonInternalProps["variant"], "ai">
}

const F0Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  F0ButtonProps
>((props, ref) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as ButtonInternalProps)

  return <ButtonInternal {...publicProps} ref={ref} />
})

F0Button.displayName = "F0Button"

export { F0Button }
