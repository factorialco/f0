import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva } from "cva"
import { AnimatePresence, motion } from "motion/react"
import { forwardRef, useMemo, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { TooltipInternal } from "@/experimental/Overlays/Tooltip"
import { cn, focusRing } from "@/lib/utils"
import { actionVariants, buttonSizeVariants } from "@/ui/Action/variants"

import { F0ButtonToggleInternalProps } from "./types.internal"

const buttonToggleVariants = cva({
  variants: {
    size: {
      sm: "h-6",
      md: "h-8",
      lg: "h-10",
    },
    variant: {
      expanded: "p-2",
      compact: "",
    },
    withBorder: {
      true: "border border-solid border-f1-border",
      false: "",
    },
    selected: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "expanded",
      size: "sm",
      class: "h-[52px] w-[63px] [&_.main]:h-4",
    },
    {
      variant: "expanded",
      size: "md",
      class: "h-[60px] w-[70px] [&_.main]:h-5",
    },
    // With border and selected
    {
      withBorder: true,
      selected: true,
      class: "border-f1-border-selected",
    },
  ],
  defaultVariants: { size: "md", variant: "compact" },
})

const labelSizeVariants = cva({
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm",
    },
  },
})

export const F0ButtonToggleInternal = forwardRef<
  HTMLButtonElement,
  F0ButtonToggleInternalProps
>(
  (
    {
      onSelectedChange,
      selected,
      label,
      disabled = false,
      icon,
      size = "md",
      variant = "compact",
      tooltip,
      withBorder = false,
      className: externalClassName,
      defaultSelected = false,
      ...props
    },
    ref
  ) => {
    const singleIcon = !Array.isArray(icon)
    const [iconOff, iconOn] = singleIcon ? [icon, icon] : icon

    const singleLabel = !Array.isArray(label)
    const [labelOff, labelOn] = singleLabel ? [label, label] : label

    const animationProps = useMemo(
      () =>
        singleIcon
          ? undefined
          : {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.6 },
              transition: { duration: 0.25, ease: "easeOut" },
            },
      [singleIcon]
    )

    const [localSelected, setLocalSelected] = useState(defaultSelected)

    // The state can be controlled or uncontrolled
    // If it is controlled, we use the selected prop and onSelectedChange prop
    // If it is uncontrolled, we use the localSelected state and setLocalSelected function
    const isControlled = selected !== undefined
    const state = {
      selected: isControlled ? selected : localSelected,
      onSelectedChange: isControlled ? onSelectedChange : setLocalSelected,
    }

    const localLabel = state.selected ? labelOn : labelOff

    const localSize = useMemo(() => {
      if (variant === "expanded" && size === "lg") {
        console.warn(
          "F0ButtonToggle: lg size is not supported for expanded variant"
        )
        return "md"
      }
      return size
    }, [size, variant])

    // Same shape `Action` accepts: a bare string is the description on its own.
    const tooltipProps =
      typeof tooltip === "object"
        ? tooltip
        : tooltip
          ? { description: tooltip }
          : undefined

    const root = (
      <TogglePrimitive.Root
        ref={ref}
        pressed={state.selected}
        onPressedChange={state.onSelectedChange}
        disabled={disabled}
        aria-label={localLabel}
        title={localLabel}
        className={cn(
          "aspect-square px-0",
          "flex flex-col items-center justify-center gap-2",
          focusRing(),
          actionVariants({ variant: state.selected ? "selected" : "ghost" }),
          buttonSizeVariants({ size: localSize }),
          buttonToggleVariants({
            size: localSize,
            variant,
            withBorder,
            selected: state.selected,
          }),
          externalClassName
        )}
        {...props}
        // Deliberately after the spread: when a tooltip wraps this button, Radix
        // hands the trigger's own open/closed `data-state` down through
        // `asChild`, which would otherwise overwrite the pressed state that
        // consumers and tests read off the button.
        data-state={state.selected ? "on" : "off"}
      >
        <AnimatePresence initial={false}>
          <div className="main relative flex flex-col items-center justify-center">
            {state.selected ? (
              <motion.div
                className="absolute flex items-center justify-center"
                key="icon-on"
                {...animationProps}
              >
                <F0Icon icon={iconOn} size={localSize} />
              </motion.div>
            ) : (
              <motion.div
                className="absolute flex items-center justify-center"
                key="icon-off"
                {...animationProps}
              >
                <F0Icon icon={iconOff} size={localSize} />
              </motion.div>
            )}
          </div>
        </AnimatePresence>

        {variant === "expanded" && (
          <AnimatePresence initial={false}>
            <span
              className={cn(
                "max-w-full truncate",
                labelSizeVariants({ size: localSize })
              )}
            >
              {localLabel}
            </span>
          </AnimatePresence>
        )}
      </TogglePrimitive.Root>
    )

    if (!tooltipProps) {
      return root
    }

    // `TooltipInternal` strips the native `title` off the button so the browser
    // doesn't draw its own bubble next to this one; `aria-label` keeps the name.
    return <TooltipInternal {...tooltipProps}>{root}</TooltipInternal>
  }
)

F0ButtonToggleInternal.displayName = "F0ButtonToggleInternal"
