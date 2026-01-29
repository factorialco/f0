import { forwardRef } from "react"

import type { TestableProps } from "@/global.types"
import { Text, TextProps, type TextTags } from "@/ui/Text"

const _allowedVariants = [
  "body",
  "description",
  "small",
  "inverse",
  "code",
  "label",
] as const

export type F0TextProps = Omit<TextProps, "className" | "variant" | "as"> &
  TestableProps & {
    variant?: (typeof _allowedVariants)[number]
    as?: TextTags
    markdown?: boolean
  }

export const F0Text = forwardRef<HTMLElement, F0TextProps>(
  ({ testId, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        markdown={props.markdown ?? true}
        data-testid={testId}
        {...props}
      />
    )
  }
)

F0Text.displayName = "F0Text"
