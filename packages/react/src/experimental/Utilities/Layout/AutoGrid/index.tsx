import { cva, type VariantProps } from "cva"
import React from "react"
import { cn } from "../../../../lib/utils"
import { gaps } from "../shared"

const contentVariants = cva({
  base: "grid grid-cols-1",
  variants: {
    tileSize: {
      // The amount of columns and autoflow when paginating is an issue if we
      // want to prevent orphan elments. Say, we have 10 elements, we can't just
      // render 3 rows of 3 elements and then an orphan one in the end.
      //
      // This makes sure that everything will look nice when using pages of 48
      // elements, it will always result in even rows.
      sm: "@12xl:grid-cols-16 @md:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 @8xl:grid-cols-6 @10xl:grid-cols-8 @11xl:grid-cols-12",
      md: "@lg:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 @9xl:grid-cols-6 @10xl:grid-cols-8 @12xl:grid-cols-12",
      lg: "@3xl:grid-cols-2 @7xl:grid-cols-3 @9xl:grid-cols-4 @10xl:grid-cols-6 @12xl:grid-cols-8",
    },
    gap: {
      ...gaps,
    },
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4",
  },
})

export const AutoGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof contentVariants>
>(function AutoGrid({ className, gap, children, tileSize, ...props }, ref) {
  return (
    <div className={cn("@container", "grow")} ref={ref} {...props}>
      <div className={cn(contentVariants({ gap, tileSize }), className)} ref={ref} {...props}>
        {children}
      </div>
    </div>
  )
})
