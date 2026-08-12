import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  useMemo,
} from "react"

import { F0Icon } from "@/components/F0Icon"
import { Check, CheckCircle } from "@/icons/app"
import { cn } from "@/lib/utils.ts"
import { Checkbox } from "@/ui/checkbox"

import { useSelectContext } from "../SelectContext.tsx"
import * as SelectPrimitive from "./radix-ui"

const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    selected?: boolean
    multiple?: boolean
    compact?: boolean
  }
>(({ className, children, compact = false, ...props }, ref) => {
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
        "relative grid w-full cursor-pointer select-none items-center outline-none transition-colors after:absolute after:z-0 after:h-full after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:after:opacity-100 focus:after:bg-f1-background-hover focus:after:text-f1-foreground focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_*]:z-10",
        "focus:outline-none focus:ring-0 focus:ring-transparent", // Temporal fix for Gamma issue
        compact
          ? "gap-x-3 rounded-md px-2 py-1.5 after:inset-0 after:rounded-md"
          : "gap-x-1.5 rounded px-3 py-2 after:inset-x-1 after:inset-y-0 after:rounded last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.25rem)] first-of-type:pt-3 first-of-type:after:top-1 first-of-type:after:h-[calc(100%-0.25rem)] [&>*]:translate-y-0.5",
        !compact &&
          "hover:data-[state=checked]:after:bg-f1-background-selected-bold/10 dark:data-[state=checked]:after:bg-f1-background-selected-bold/20 dark:hover:data-[state=checked]:after:bg-f1-background-selected-bold/20",
        !compact &&
          !multiple &&
          "data-[state=checked]:after:bg-f1-background-selected-bold/10 data-[state=checked]:after:opacity-100",
        multiple || selected
          ? compact
            ? "grid-cols-[1fr_16px]"
            : "grid-cols-[1fr_20px]"
          : undefined,
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
          <SelectPrimitive.ItemIndicator
            className={cn(
              "flex",
              compact ? "text-f1-icon-bold" : "text-f1-icon-selected"
            )}
          >
            <F0Icon
              icon={compact ? Check : CheckCircle}
              size={compact ? "sm" : "md"}
            />
          </SelectPrimitive.ItemIndicator>
        )
      )}
    </SelectPrimitive.Item>
  )
})
SelectItem.displayName = SelectPrimitive.Item.displayName

export { SelectItem }
