import * as React from "react"
import { useMemo } from "react"

import { F0Icon } from "@/components/F0Icon"
import { CheckCircle } from "@/icons/app"
import { cn } from "@/lib/utils.ts"
import { Checkbox } from "@/ui/checkbox"

import { useSelectContext } from "../SelectContext.tsx"
import * as SelectPrimitive from "./radix-ui"

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    selected?: boolean
    multiple?: boolean
  }
>(({ className, children, ...props }, ref) => {
  const context = useSelectContext()
  const { multiple } = context

  const selected = useMemo(() => {
    if (Array.isArray(context.value)) {
      return context.value.includes(props.value as string)
    }
    return context.value === props.value
  }, [context.value, props.value])

  return (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        "relative grid w-full cursor-pointer select-none items-center gap-x-1.5 rounded px-3 py-2 outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.25rem)] first-of-type:pt-3 first-of-type:after:top-1 first-of-type:after:h-[calc(100%-0.25rem)] hover:after:opacity-100 focus:after:bg-f1-background-hover focus:after:text-f1-foreground focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_*]:z-10",
        "hover:data-[state=checked]:after:bg-f1-background-selected-bold/10 dark:data-[state=checked]:after:bg-f1-background-selected-bold/20 dark:hover:data-[state=checked]:after:bg-f1-background-selected-bold/20",
        "focus:outline-none focus:ring-0 focus:ring-transparent", // Temporal fix for Gamma issue
        "[&>*]:translate-y-0.5",
        !multiple &&
          "data-[state=checked]:after:bg-f1-background-selected-bold/10 data-[state=checked]:after:opacity-100",
        multiple || selected ? "grid-cols-[1fr_20px]" : undefined,
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      {multiple ? (
        <Checkbox
          title="Select item"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          checked={selected}
          hideLabel
        />
      ) : (
        selected && (
          <SelectPrimitive.ItemIndicator className="flex text-f1-icon-selected">
            <F0Icon icon={CheckCircle} size="md" />
          </SelectPrimitive.ItemIndicator>
        )
      )}
    </SelectPrimitive.Item>
  )
})
SelectItem.displayName = SelectPrimitive.Item.displayName

export { SelectItem }
