import { Text, TextProps, type HeadingTags } from "@/ui/Text"
import { forwardRef } from "react"

const _allowedVariants = ["heading", "heading-large"] as const

export type F0HeadingProps = Omit<TextProps, "className" | "variant" | "as"> & {
  variant?: (typeof _allowedVariants)[number]
  as?: HeadingTags
}

export const F0Heading = forwardRef<HTMLElement, F0HeadingProps>(
  (props, ref) => {
    return <Text ref={ref} variant="heading" {...props} />
  }
)

F0Heading.displayName = "F0Heading"
