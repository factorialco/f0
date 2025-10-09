import { forwardRef } from "react"
import { TextInternal, TextInternalProps } from "./TextInternal"

const privateProps = ["className"] as const
const _privateVariants = [
  "selected",
  "heading-large",
  "label-input",
  "warning",
  "critical",
  "positive",
  "info",
  "warning-strong",
  "critical-strong",
  "positive-strong",
  "info-strong",
] as const

export type F0TextProps = Omit<
  TextInternalProps,
  (typeof privateProps)[number]
> & {
  variant?: Exclude<
    TextInternalProps["variant"],
    (typeof _privateVariants)[number]
  >
}

export const F0Text = forwardRef<HTMLElement, F0TextProps>((props) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as TextInternalProps)

  return <TextInternal {...publicProps} />
})

F0Text.displayName = "F0Text"
