import { forwardRef } from "react"

import type { TestableProps } from "@/global.types"
import { Text, TextProps, type HeadingTags } from "@/ui/Text"

const _allowedVariants = ["heading", "heading-large"] as const

export type F0HeadingProps = Omit<TextProps, "className" | "variant" | "as"> &
  TestableProps & {
    variant?: (typeof _allowedVariants)[number]
    as?: HeadingTags
  }

export const F0Heading = forwardRef<HTMLElement, F0HeadingProps>(
  ({ testId, ...props }, ref) => {
    return <Text ref={ref} variant="heading" data-testid={testId} {...props} />
  }
)

F0Heading.displayName = "F0Heading"
