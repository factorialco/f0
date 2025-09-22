import { F0Icon, IconType } from "@/components/F0Icon"
import { cn, focusRing } from "@/lib/utils"
import { actionVariants, buttonSizeVariants } from "@/ui/Action/variants"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { forwardRef } from "react"

interface F0ButtonToggleProps {
  selected?: boolean
  onSelectedChange?: (selected: boolean) => void
  label: string
  disabled?: boolean
  icon: IconType
  size?: "sm" | "md" | "lg"
}

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
    return (
      <TogglePrimitive.Root
        ref={ref}
        pressed={selected}
        onPressedChange={onSelectedChange}
        disabled={disabled}
        aria-label={label}
        className={cn(
          "aspect-square px-0",
          focusRing(),
          buttonSizeVariants({ size }),
          actionVariants({ variant: selected ? "selected" : "ghost" }),
          {
            "h-6": size === "sm",
            "h-8": size === "md",
            "h-10": size === "lg",
          }
        )}
        {...props}
      >
        <F0Icon icon={icon} size={size} />
      </TogglePrimitive.Root>
    )
  }
)

F0ButtonToggle.displayName = "F0ButtonToggle"
