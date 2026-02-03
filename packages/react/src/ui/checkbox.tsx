import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { AnimatePresence } from "motion/react"
import * as React from "react"
import { useId } from "react"

import { F0Icon } from "../components/F0Icon"
import { Check, Minus } from "../icons/app"
import { cn, focusRing } from "../lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    indeterminate?: boolean
    hideLabel?: boolean
    required?: boolean
  }
>(
  (
    { className, indeterminate, disabled, hideLabel, required, ...props },
    ref
  ) => {
    // Generate a unique ID if one isn't provided
    const uniqueId = useId()
    const checkboxId = props.id || uniqueId

    return (
      <div className="flex items-center">
        <CheckboxPrimitive.Root
          {...props}
          ref={ref}
          id={checkboxId}
          name={props.name || checkboxId}
          aria-label={props.title}
          className={cn(
            "relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse",
            "after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent",
            disabled && "cursor-not-allowed opacity-50 hover:border-f1-border",
            indeterminate && "data-[state=checked]:text-f1-foreground-inverse",
            props.checked &&
              disabled &&
              "data-[state=checked]:bg-f1-background-secondary data-[state=checked]:text-f1-foreground-secondary",
            focusRing("focus-visible:ring-offset-0"),
            className
          )}
          checked={props.checked}
          onCheckedChange={props.onCheckedChange}
          disabled={disabled}
        >
          <AnimatePresence>
            <CheckboxPrimitive.Indicator className="absolute inset-0 z-[2] flex items-center justify-center text-current transition-none">
              {indeterminate ? (
                <F0Icon icon={Minus} size="sm" />
              ) : (
                <F0Icon icon={Check} size="sm" />
              )}
            </CheckboxPrimitive.Indicator>
          </AnimatePresence>
        </CheckboxPrimitive.Root>
        {props.title && !hideLabel && (
          <label
            htmlFor={checkboxId}
            className={cn(
              "flex items-center justify-center pl-2.5 text-current hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
              disabled &&
                "cursor-not-allowed opacity-50 hover:cursor-not-allowed"
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
  }
)

Checkbox.displayName = CheckboxPrimitive.Root.displayName

const CheckboxRoot = CheckboxPrimitive.Root

export { Checkbox, CheckboxRoot }
