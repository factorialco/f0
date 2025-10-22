import { Text, TextProps, type TextTags } from "@/ui/Text"
import { forwardRef } from "react"

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
}

export const F0Text = forwardRef<HTMLElement, F0TextProps>((props, ref) => {
  return <Text ref={ref} {...props} />
})

F0Text.displayName = "F0Text"
