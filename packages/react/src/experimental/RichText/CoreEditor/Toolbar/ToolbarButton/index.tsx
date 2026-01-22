import { ComponentProps, forwardRef } from "react"

import { F0Icon, IconType } from "@/components/F0Icon"
import { Shortcut } from "@/experimental/Information/Shortcut"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { cn } from "@/lib/utils"
import { Action } from "@/ui/Action"

interface ToolbarButtonProps {
  onClick?: () => void
  active?: boolean
  label: string
  disabled: boolean
  icon: IconType
  tooltip?: {
    description?: string
    label?: string
    shortcut?: ComponentProps<typeof Shortcut>["keys"]
  }
  showLabel?: boolean
}

export const ToolbarButton = forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  (
    {
      onClick = () => {},
      active = false,
      label,
      disabled,
      icon,
      tooltip,
      showLabel = false,
      ...props
    },
    ref
  ) => {
    const CustomButton = (
      <Action
        ref={ref}
        variant="ghost"
        size="md"
        onClick={(e) => {
          e.preventDefault()
          if (!disabled) {
            onClick()
          }
        }}
        className={cn(
          active ? "text-f1-icon-selected" : "text-f1-foreground",
          "flex items-center gap-1 border border-solid font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100 [&>button]:aspect-square [&>button]:px-0",
          active
            ? "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
            : "border-f1-background bg-transparent hover:border-f1-background-secondary hover:bg-f1-background-secondary-hover",
          showLabel && "w-full items-center justify-start"
        )}
        compact
        disabled={disabled}
        aria-label={label}
        {...props}
        prepend={<F0Icon icon={icon} />}
      >
        {showLabel && (
          <span
            className={cn(
              "text-sm",
              active && "text-f1-background-selected-bold"
            )}
          >
            {label}
          </span>
        )}
      </Action>
    )

    return tooltip ? (
      <Tooltip
        description={tooltip?.description || ""}
        label={tooltip?.label}
        shortcut={tooltip?.shortcut}
      >
        {CustomButton}
      </Tooltip>
    ) : (
      CustomButton
    )
  }
)

ToolbarButton.displayName = "ToolbarButton"
