import { cva, type VariantProps } from "cva"
import { forwardRef } from "react"

import { cn } from "../../../lib/utils"

const boxVariants = cva({
  base: "flex",
  variants: {
    overflow: {
      hidden: "overflow-hidden",
      auto: "overflow-auto",
    },
    paddingX: {
      none: "px-0",
      "p-2": "px-2",
      "p-4": "px-4",
      "p-8": "px-8",
      "p-12": "px-12",
      "p-16": "px-16",
    },
    maxWidth: {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      xl: "max-w-xl",
      "screen-sm": "max-w-screen-sm",
      "screen-md": "max-w-screen-md",
      "screen-lg": "max-w-screen-lg",
      "screen-xl": "max-w-screen-xl",
      "screen-2xl": "max-w-screen-2xl",
    },
    height: {
      auto: "h-auto",
      full: "h-full",
    },
    width: {
      auto: "w-auto",
      full: "w-full",
    },
    paddingY: {
      none: "py-0",
      "p-2": "py-2",
      "p-4": "py-4",
      "p-8": "py-8",
      "p-12": "py-12",
      "p-16": "py-16",
    },
    basis: {
      "0": "basis-0",
    },
    inline: {
      true: "inline-flex",
      false: "flex",
    },
    justifyContent: {
      center: "justify-center",
      end: "justify-end",
      "space-between": "justify-between",
      start: "justify-start",
      stretch: "justify-stretch",
    },
    alignItems: {
      center: "items-center",
      end: "items-end",
      "space-between": "items-between",
      start: "items-start",
      stretch: "items-stretch",
    },
    grow: {
      true: "flex-grow",
      false: "flex-grow-0",
    },
    shrink: {
      true: "flex-shrink",
      false: "flex-shrink-0",
    },
  },
  defaultVariants: {
    paddingX: "none",
    paddingY: "none",
    inline: false,
  },
})

export type BoxRef = HTMLDivElement
export type BoxProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof boxVariants>

export const FlexBox = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof boxVariants>
>(function FlexBox(
  {
    className,
    grow,
    basis,
    shrink,
    paddingX,
    paddingY,
    inline,
    overflow,
    maxWidth,
    justifyContent,
    alignItems,
    height,
    width,
    ...props
  },
  ref
) {
  return (
    <div
      className={cn(
        boxVariants({
          paddingX,
          basis,
          paddingY,
          grow,
          shrink,
          inline,
          overflow,
          maxWidth,
          justifyContent,
          alignItems,
          height,
          width,
        }),
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
