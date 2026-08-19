import * as SwitchPrimitive from "@radix-ui/react-switch"
import * as React from "react"
import { useId } from "react"

import { cn } from "../lib/utils"

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
          // The interactive box is 24px tall to meet the WCAG 2.2 SC 2.5.8
          // (Target Size, Minimum) 24x24 floor on its own. It used to be 20px
          // (`h-5`), which only conformed via the spec's spacing exception —
          // i.e. when a consumer happened to leave 24px of clear space around
          // it. Any neighbouring target closer than that (a form row, a
          // toolbar, a table cell) made it a genuine AA failure. The visible
          // 20px pill is painted by the decorative track below, so the switch
          // looks exactly the same as before.
          "group relative flex h-6 w-[1.875rem] items-center bg-transparent",
          // `!cursor-not-allowed` defends against consumer CSS resets (e.g. ress.css)
          // that target `[disabled]` / `[aria-disabled='true']` with the same
          // specificity as `.cursor-not-allowed` and would otherwise win when
          // loaded after F0 styles.
          disabled && "!cursor-not-allowed opacity-50",
          "focus-visible:outline-none",
          className
        )}
        disabled={disabled}
      >
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-0 top-1/2 h-5 -translate-y-1/2 rounded-full bg-f1-border transition-colors",
            "group-hover:bg-f1-border-hover group-data-[state=checked]:bg-f1-background-selected-bold",
            // Same ring as `focusRing()`, but driven by the parent's focus so
            // the indicator keeps hugging the 20px pill instead of growing to
            // the (now taller) hit area. Keep in sync with `focusRing()` in
            // src/lib/utils.ts.
            "group-focus-visible:ring-1 group-focus-visible:ring-f1-special-ring group-focus-visible:ring-offset-1"
          )}
        />
        <SwitchPrimitive.Thumb
          className={cn(
            "relative block h-4 w-4 translate-x-[0.125rem] rounded-full bg-f1-background transition-transform duration-300 data-[state=checked]:translate-x-[0.75rem]"
          )}
        />
      </SwitchPrimitive.Root>
      {props.title && !hideLabel && (
        <label
          htmlFor={switchId}
          className={cn(
            "flex items-center justify-center pl-2.5 text-current",
            disabled &&
              "!cursor-not-allowed opacity-50 hover:!cursor-not-allowed"
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
