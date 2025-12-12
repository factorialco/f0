import { F0Icon } from "@/components/F0Icon"
import { cn, focusRing } from "@/lib/utils"
import { actionVariants, buttonSizeVariants } from "@/ui/Action/variants"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva } from "cva"
import { AnimatePresence, motion } from "motion/react"
import { forwardRef, useMemo, useState } from "react"
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
      class: "h-[56px] w-20 [&_.main]:h-4",
    },
    {
      variant: "expanded",
      size: "md",
      class: "h-18 w-24 [&_.main]:h-5",
    },
    {
      variant: "expanded",
      size: "lg",
      class: "h-20 w-28 [&_.main]:h-6",
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
      withBorder = false,
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
    const state = useMemo(() => {
      const isControlled = selected !== undefined
      return {
        selected: isControlled ? selected : localSelected,
        onSelectedChange: isControlled ? onSelectedChange : setLocalSelected,
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected, onSelectedChange, localSelected])

    const localLabel = state.selected ? labelOn : labelOff

    return (
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
          buttonSizeVariants({ size }),
          buttonToggleVariants({
            size,
            variant,
            withBorder,
            selected: state.selected,
          })
        )}
        {...props}
      >
        <AnimatePresence initial={false}>
          <div className="main relative flex flex-col items-center justify-center">
            {state.selected ? (
              <motion.div
                className="absolute flex items-center justify-center"
                key="icon-on"
                {...animationProps}
              >
                <F0Icon icon={iconOn} size={size} />
              </motion.div>
            ) : (
              <motion.div
                className="absolute flex items-center justify-center"
                key="icon-off"
                {...animationProps}
              >
                <F0Icon icon={iconOff} size={size} />
              </motion.div>
            )}
          </div>
        </AnimatePresence>

        {variant === "expanded" && (
          <AnimatePresence initial={false}>
            <span
              className={cn("max-w-full truncate", labelSizeVariants({ size }))}
            >
              {localLabel}
            </span>
          </AnimatePresence>
        )}
      </TogglePrimitive.Root>
    )
  }
)

F0ButtonToggleInternal.displayName = "F0ButtonToggleInternal"
