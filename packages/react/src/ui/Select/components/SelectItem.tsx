import * as SelectPrimitive from "@radix-ui/react-select"
import * as React from "react"
import { F0Icon } from "../../../components/F0Icon/index.tsx"
import { CheckCircle } from "../../../icons/app"
import { cn } from "../../../lib/utils.ts"

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    withIndicator?: boolean
  }
>(({ className, children, withIndicator = true, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative grid w-full cursor-default select-none gap-x-1.5 rounded px-3 py-2 outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] first:pt-3 first:after:top-1 first:after:h-[calc(100%-0.25rem)] last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.5rem)] hover:after:opacity-100 focus:after:bg-f1-background-hover focus:after:text-f1-foreground focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_*]:z-10",
      "data-[state=checked]:after:bg-f1-background-selected-bold/10 data-[state=checked]:after:opacity-100 hover:data-[state=checked]:after:bg-f1-background-selected-bold/10 dark:data-[state=checked]:after:bg-f1-background-selected-bold/20 dark:hover:data-[state=checked]:after:bg-f1-background-selected-bold/20",
      "focus:outline-none focus:ring-0 focus:ring-transparent", // Temporal fix for Gamma issue
      withIndicator ? "grid-cols-[1fr_20px]" : undefined,
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    {withIndicator && (
      <SelectPrimitive.ItemIndicator className="flex text-f1-icon-selected">
        <F0Icon icon={CheckCircle} size="md" />
      </SelectPrimitive.ItemIndicator>
    )}
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

export { SelectItem }
