import { cva, type VariantProps } from "cva"
import { forwardRef } from "react"
import { cn } from "../../../../lib/utils"
import { BoxProps, BoxRef, FlexBox } from "../_FlexBox"
import { gaps } from "../shared"

const stackVariants = cva({
  base: "flex-col",
  variants: {
    gap: {
      ...gaps,
    },
  },
  defaultVariants: {},
})

export const Stack = forwardRef<BoxRef, BoxProps & VariantProps<typeof stackVariants>>(
  function Stack({ className, gap, children, ...props }, ref) {
    return (
      <FlexBox className={cn(stackVariants({ gap }), className)} ref={ref} {...props}>
        {children}
      </FlexBox>
    )
  }
)
