import * as SwitchPrimitive from "@radix-ui/react-switch"
import * as React from "react"
import { useId } from "react"

import { cn, focusRing } from "../lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & {
    hideLabel?: boolean
    title?: string
    required?: boolean
  }
>(({ className, disabled, hideLabel, required, ...props }, ref) => {
  // Generate a unique ID if one isn't provided
  const uniqueId = useId()
  const switchId = props.id || uniqueId

  return (
    <div className="flex items-center">
      <SwitchPrimitive.Root
        {...props}
        ref={ref}
        id={switchId}
        name={switchId}
        aria-label={props.title ?? "Switch"}
        className={cn(
          "relative h-5 w-[1.875rem] rounded-full bg-f1-border hover:bg-f1-border-hover data-[state=checked]:bg-f1-background-selected-bold",
          disabled && "cursor-not-allowed opacity-50",
          focusRing(),
          className
        )}
        disabled={disabled}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "block h-4 w-4 translate-x-[0.125rem] rounded-full bg-f1-background transition-transform duration-300 data-[state=checked]:translate-x-[0.75rem]"
          )}
        />
      </SwitchPrimitive.Root>
      {props.title && !hideLabel && (
        <label
          htmlFor={switchId}
          className={cn(
            "flex items-center justify-center pl-2.5 text-current",
            disabled && "cursor-not-allowed opacity-50 hover:cursor-not-allowed"
          )}
        >
          {props.title}
          {required && (
            <span className="ml-0.5 text-f1-foreground-critical">*</span>
          )}
        </label>
      )}
    </div>
  )
})

Switch.displayName = SwitchPrimitive.Root.displayName

const SwitchRoot = SwitchPrimitive.Root

export { Switch, SwitchRoot }
