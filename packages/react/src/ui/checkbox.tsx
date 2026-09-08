import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { AnimatePresence } from "motion/react"
import * as React from "react"
import { useId } from "react"
import { F0Icon } from "../components/F0Icon"
import { Check, Minus } from "../icons/app"
import { cn, focusRing } from "../lib/utils"
import { Text } from "./Text"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    indeterminate?: boolean
    hideLabel?: boolean
    required?: boolean
    description?: string
  }
>(
  (
    {
      className,
      indeterminate,
      disabled,
      hideLabel,
      required,
      description,
      ...props
    },
    ref
  ) => {
    // Generate a unique ID if one isn't provided
    const uniqueId = useId()
    const checkboxId = props.id || uniqueId
    const descriptionId = `${checkboxId}-description`
    const showLabel = !hideLabel && !!(props.title || description)

    return (
      <div className={cn("flex", description ? "items-start" : "items-center")}>
        <CheckboxPrimitive.Root
          {...props}
          ref={ref}
          id={checkboxId}
          name={props.name || checkboxId}
          aria-label={props.title}
          aria-describedby={
            props["aria-describedby"] ??
            (showLabel && description ? descriptionId : undefined)
          }
          className={cn(
            "relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse",
            "after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color] after:content-[''] data-[state=checked]:after:bg-f1-background-selected-bold",
            disabled && "cursor-not-allowed opacity-50",
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
        {showLabel ? (
          <label
            htmlFor={checkboxId}
            className={cn(
              "flex flex-col pl-1 hover:cursor-pointer",
              // With a description the row aligns to the top rather than the
              // centre, so the title has to line up with the *visible* 20px
              // square, which `after:top-0.5` paints 2px below the top of the
              // 24px hit area. Keep this in sync with that inset.
              description && "pt-0.5",
              disabled &&
                "cursor-not-allowed opacity-50 hover:cursor-not-allowed"
            )}
          >
            {props.title ? (
              <Text
                as="span"
                variant="label"
                content={props.title}
                required={required}
                className="flex items-center gap-0.5"
              />
            ) : null}
            {description ? (
              <Text
                as="span"
                id={descriptionId}
                variant="description"
                content={description}
              />
            ) : null}
          </label>
        ) : null}
      </div>
    )
  }
)

Checkbox.displayName = CheckboxPrimitive.Root.displayName

const CheckboxRoot = CheckboxPrimitive.Root

export { Checkbox, CheckboxRoot }
