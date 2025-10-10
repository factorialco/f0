import { cn } from "@/lib/utils.ts"
import * as React from "react"
import { useContext } from "react"
import { SelectContext } from "../SelectContext.tsx"
import * as SelectPrimitive from "./radix-ui"

/**
 * Select Trigger component
 */
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { asList } = useContext(SelectContext)

  return asList ? null : (
    <SelectPrimitive.Trigger ref={ref} className={cn(className)} {...props}>
      {children}
    </SelectPrimitive.Trigger>
  )
})
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

export { SelectTrigger }
