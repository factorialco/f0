import { F0Icon } from "@/components/F0Icon"
import { cn, focusRing } from "@/lib/utils"
import { actionVariants, buttonSizeVariants } from "@/ui/Action/variants"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva } from "cva"
import { AnimatePresence, motion } from "motion/react"
import { forwardRef, useEffect, useMemo, useState } from "react"
import { OneEllipsis } from "../../OneEllipsis"
import { F0ButtonToggleInternalProps } from "./types.internal"

const buttonToggleSizeVariants = cva({
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
      onSelectedChange = () => {},
      selected = false,
      label,
      disabled = false,
      icon,
      size = "md",
      variant = "compact",
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

    const [localSelected, setLocalSelected] = useState(selected)

    const handleChange = (pressed: boolean) => {
      setLocalSelected(pressed)
      onSelectedChange?.(pressed)
    }

    useEffect(() => {
      if (localSelected === selected) {
        return
      }
      setLocalSelected(selected)
      // eslint-disable-next-line react-hooks/exhaustive-deps -- we only want to run this when the selected prop changes
    }, [selected])

    const localLabel = localSelected ? labelOn : labelOff

    return (
      <TogglePrimitive.Root
        ref={ref}
        pressed={localSelected}
        onPressedChange={handleChange}
        disabled={disabled}
        aria-label={localLabel}
        title={localLabel}
        className={cn(
          "aspect-square px-0",
          "flex flex-col items-center justify-center gap-2",
          focusRing(),
          actionVariants({ variant: localSelected ? "selected" : "ghost" }),
          buttonSizeVariants({ size }),
          buttonToggleSizeVariants({ size, variant })
        )}
        {...props}
      >
        <AnimatePresence initial={false}>
          <div className="main relative flex flex-col items-center justify-center">
            {localSelected ? (
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
            <OneEllipsis className={cn(labelSizeVariants({ size }))}>
              {localLabel}
            </OneEllipsis>
          </AnimatePresence>
        )}
      </TogglePrimitive.Root>
    )
  }
)

F0ButtonToggleInternal.displayName = "F0ButtonToggleInternal"
