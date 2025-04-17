import { Shortcut } from "@/experimental/exports"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { Icon, IconType } from "@/factorial-one"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { ComponentProps, forwardRef } from "react"

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
  mode?: "light" | "dark"
  showLabel?: boolean
}

const ToolbarButton = forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  (
    {
      onClick = () => {},
      active = false,
      label,
      disabled,
      icon,
      tooltip,
      mode = "light",
      showLabel = false,
      ...props
    },
    ref
  ) => {
    const CustomButton = (
      <Button
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
          "flex items-center gap-1 border border-solid font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100 [&>button]:m-[-1px] [&>button]:aspect-square [&>button]:px-0",
          active
            ? "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
            : "border-f1-background bg-transparent hover:border-f1-background-secondary hover:bg-f1-background-secondary-hover",
          showLabel && "w-full items-center justify-start px-2"
        )}
        disabled={disabled}
        aria-label={label}
        {...props}
      >
        <Icon
          icon={icon}
          className={
            active
              ? "text-f1-icon-selected"
              : mode === "dark"
                ? "text-f1-foreground-inverse"
                : "text-f1-foreground"
          }
        />
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
      </Button>
    )

    return tooltip && mode === "light" ? (
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

export { ToolbarButton }
