import { F0Icon } from "@/components/F0Icon"
import { cn, focusRing } from "@/lib/utils"
import { actionVariants, buttonSizeVariants } from "@/ui/Action/variants"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { AnimatePresence, motion } from "motion/react"
import { forwardRef, useEffect, useMemo, useState } from "react"
import { F0ButtonToggleProps } from "./types"

export const F0ButtonToggle = forwardRef<
  HTMLButtonElement,
  F0ButtonToggleProps
>(
  (
    {
      onSelectedChange = () => {},
      selected = false,
      label,
      disabled = false,
      icon,
      size = "md",
      ...props
    },
    ref
  ) => {
    const singleIcon = !Array.isArray(icon)
    const [iconOff, iconOn] = singleIcon ? [icon, icon] : icon

    const sizeClass = {
      sm: "h-6",
      md: "h-8",
      lg: "h-10",
    }

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

    useEffect(() => {
      setLocalSelected(selected)
    }, [selected])

    useEffect(() => {
      onSelectedChange?.(localSelected)
    }, [localSelected, onSelectedChange])

    return (
      <TogglePrimitive.Root
        ref={ref}
        pressed={localSelected}
        onPressedChange={setLocalSelected}
        disabled={disabled}
        aria-label={label}
        className={cn(
          "aspect-square px-0",
          "flex items-center justify-center",
          focusRing(),
          buttonSizeVariants({ size }),
          actionVariants({ variant: localSelected ? "selected" : "ghost" }),
          sizeClass[size]
        )}
        {...props}
      >
        <AnimatePresence initial={false}>
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
        </AnimatePresence>
      </TogglePrimitive.Root>
    )
  }
)

F0ButtonToggle.displayName = "F0ButtonToggle"
