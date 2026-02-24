import { forwardRef } from "react"

import { withDataTestId } from "@/lib/data-testid"
import { Text, TextProps, type TextTags } from "@/ui/Text"

const _allowedVariants = [
  "body",
  "description",
  "small",
  "inverse",
  "code",
  "label",
] as const

export type F0TextProps = Omit<TextProps, "className" | "variant" | "as"> & {
  variant?: (typeof _allowedVariants)[number]
  as?: TextTags
  markdown?: boolean
}

const _F0Text = forwardRef<HTMLElement, F0TextProps>((props, ref) => {
  return <Text ref={ref} markdown={props.markdown ?? true} {...props} />
})

_F0Text.displayName = "F0Text"

export const F0Text = withDataTestId(_F0Text)
