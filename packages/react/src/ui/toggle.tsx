import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "cva"
import * as React from "react"

import { cn, focusRing } from "../lib/utils"

const toggleVariants = cva({
  base: cn(
    "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground",
    focusRing()
  ),
  variants: {
    variant: {
      default: "bg-transparent",
      outline:
        "border border-f1-border bg-transparent hover:bg-f1-background-secondary hover:text-f1-foreground",
    },
    size: {
      default: "h-10 px-3",
      sm: "h-9 px-2.5",
      lg: "h-11 px-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
