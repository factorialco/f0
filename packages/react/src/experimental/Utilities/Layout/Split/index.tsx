import { cva, type VariantProps } from "cva"
import React from "react"
import { cn } from "../../../../lib/utils"
import { BoxProps, BoxRef, FlexBox } from "../_FlexBox"
import { gaps } from "../shared"

const splitVariants = cva({
  base: "flex-row",
  variants: {
    gap: {
      ...gaps,
    },
    wrap: {
      true: "flex-wrap",
    },
  },

  defaultVariants: {
    wrap: true,
  },
})

export const Split = React.forwardRef<BoxRef, BoxProps & VariantProps<typeof splitVariants>>(
  function Split({ className, gap, wrap, ...props }, ref) {
    return <FlexBox className={cn(splitVariants({ gap, wrap }), className)} ref={ref} {...props} />
  }
)
