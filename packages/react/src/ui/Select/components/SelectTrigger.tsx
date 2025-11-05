import { cn } from "@/lib/utils.ts"
import * as React from "react"
import * as SelectPrimitive from "./radix-ui"

/**
 * Select Trigger component
 */
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <SelectPrimitive.Trigger ref={ref} className={cn(className)} {...props}>
      {children}
    </SelectPrimitive.Trigger>
  )
})
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

export { SelectTrigger }
