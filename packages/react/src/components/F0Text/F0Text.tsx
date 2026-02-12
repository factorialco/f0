import { forwardRef } from "react"

import { Text, TextProps, type TextTags } from "@/ui/Text"

const _allowedVariants = [
  "heading",
  "body",
  "description",
  "small",
  "inverse",
  "code",
  "label",
] as const

const _allowedSizes = ["sm", "md", "lg", "xl"] as const

const sizeClassMap: Record<(typeof _allowedSizes)[number], string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
}

export type F0TextProps = Omit<TextProps, "className" | "variant" | "as"> & {
  variant?: (typeof _allowedVariants)[number]
  size?: (typeof _allowedSizes)[number]
  as?: TextTags
  markdown?: boolean
}

export const F0Text = forwardRef<HTMLElement, F0TextProps>(
  ({ size, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        markdown={props.markdown ?? true}
        className={size ? sizeClassMap[size] : undefined}
        {...props}
      />
    )
  }
)

F0Text.displayName = "F0Text"
