import { cva, type VariantProps } from "cva"

import { cn } from "@/lib/utils"

const buttonGroupVariants = cva({
  base: "flex gap-2",
  variants: {
    align: {
      start: "justify-start",
      end: "justify-end",
      between: "justify-between",
    },
    // mobile = full-width vertical stack; desktop = horizontal row
    stackOnMobile: {
      true: "flex-col items-stretch sm:flex-row sm:items-center",
      false: "flex-row items-center",
    },
  },
  defaultVariants: {
    align: "end",
    stackOnMobile: false,
  },
})

export interface ButtonGroupProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

/**
 * Low-level layout primitive that arranges a group of action buttons.
 *
 * It only controls arrangement (alignment, order, gap, responsive stacking) —
 * not separators or padding, which belong to the surrounding footer. Children
 * are rendered left→right, so pass the secondary action(s) first and the
 * primary action last; with the default `align="end"` the primary ends up
 * rightmost.
 */
export function ButtonGroup({
  align,
  stackOnMobile,
  className,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      className={cn(buttonGroupVariants({ align, stackOnMobile }), className)}
      {...props}
    />
  )
}
