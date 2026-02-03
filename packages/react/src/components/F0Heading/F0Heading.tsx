import { forwardRef } from "react"

import { withDataTestId } from "@/lib/data-testid"
import { Text, TextProps, type HeadingTags } from "@/ui/Text"

const _allowedVariants = ["heading", "heading-large"] as const

export type F0HeadingProps = Omit<TextProps, "className" | "variant" | "as"> & {
  variant?: (typeof _allowedVariants)[number]
  as?: HeadingTags
}

const _F0Heading = forwardRef<HTMLElement, F0HeadingProps>((props, ref) => {
  return <Text ref={ref} variant="heading" {...props} />
})

_F0Heading.displayName = "F0Heading"

export const F0Heading = withDataTestId(_F0Heading)
